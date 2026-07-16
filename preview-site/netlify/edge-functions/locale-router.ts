import type { Config, Context } from "@netlify/edge-functions";

type GeoContext = Context & {
  geo?: {
    country?: {
      code?: string;
    };
  };
};

export default async (request: Request, context: GeoContext) => {
  const countryCode = context.geo?.country?.code?.toUpperCase();
  const locale = countryCode === "IL" ? "he" : countryCode === "DE" ? "de" : "en";
  const destination = new URL(`/${locale}/`, request.url);

  return Response.redirect(destination, 302);
};

export const config: Config = {
  path: "/",
  method: "GET",
};
