import type { Config, Context } from "@netlify/edge-functions";

const SECURITY_HEADERS = {
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
  "Content-Security-Policy": [
    "default-src 'self'",
    "base-uri 'none'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://*.fbcdn.net https://*.cdninstagram.com",
    "font-src 'self' data:",
    "connect-src 'self'",
    "upgrade-insecure-requests",
  ].join("; "),
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "no-referrer",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
};

function withSecurityHeaders(response: Response) {
  const headers = new Headers(response.headers);
  Object.entries(SECURITY_HEADERS).forEach(([name, value]) => headers.set(name, value));
  headers.set("Cache-Control", "no-store");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function unauthorized() {
  return withSecurityHeaders(
    new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Li Vela Transparency", charset="UTF-8"',
      },
    }),
  );
}

function authNotConfigured() {
  return withSecurityHeaders(new Response("Authentication is not configured.", { status: 503 }));
}

function decodeBasicAuth(header: string | null) {
  if (!header?.startsWith("Basic ")) return null;
  try {
    const decoded = atob(header.slice("Basic ".length).trim());
    const splitAt = decoded.indexOf(":");
    if (splitAt === -1) return null;
    return {
      username: decoded.slice(0, splitAt),
      password: decoded.slice(splitAt + 1),
    };
  } catch {
    return null;
  }
}

function constantTimeEqual(left: string, right: string) {
  const encoder = new TextEncoder();
  const leftBytes = encoder.encode(left);
  const rightBytes = encoder.encode(right);
  let diff = leftBytes.length ^ rightBytes.length;
  const length = Math.max(leftBytes.length, rightBytes.length);

  for (let index = 0; index < length; index += 1) {
    diff |= (leftBytes[index] ?? 0) ^ (rightBytes[index] ?? 0);
  }

  return diff === 0;
}

async function sha256Hex(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export default async (request: Request, context: Context) => {
  const expectedUsername = Netlify.env.get("TRANSPARENCY_BASIC_AUTH_USER");
  const expectedPasswordHash = Netlify.env.get("TRANSPARENCY_BASIC_AUTH_PASSWORD_SHA256");

  if (!expectedUsername || !expectedPasswordHash) {
    return authNotConfigured();
  }

  const credentials = decodeBasicAuth(request.headers.get("authorization"));
  if (!credentials) {
    return unauthorized();
  }

  const usernameMatches = constantTimeEqual(credentials.username, expectedUsername);
  const passwordMatches = constantTimeEqual(await sha256Hex(credentials.password), expectedPasswordHash.toLowerCase());

  if (!usernameMatches || !passwordMatches) {
    return unauthorized();
  }

  return withSecurityHeaders(await context.next());
};

export const config: Config = {
  path: ["/transparency", "/transparency/*"],
};
