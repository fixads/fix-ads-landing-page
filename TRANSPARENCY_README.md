# FixAds Transparency — Recovery and Protection Specification

This file is the dedicated source of truth for the protected FixAds transparency application at `https://www.fixads.xyz/transparency` and every descendant route under `/transparency/**`.

## Authority and current scope

On 2026-07-16, after the project owner reported that the transparency page no longer loaded and received the diagnosis, the owner explicitly instructed: “can you fix so it would again”. This authorizes only the smallest operational repair required to make the existing transparency application load again.

This authorization does **not** permit changes to transparency content, layout, styling, application logic, authentication, data, APIs, application routes, or features. It permits only routing the two asset URLs requested by the existing protected HTML to the exact JavaScript and CSS bytes already present in the active production deployment.

## Immutable application baseline

The repair must preserve these exact SHA-1 values:

| Protected item | Existing production path | SHA-1 |
| --- | --- | --- |
| HTML shell | `/transparency/index.html` | `81689e69934c48149151198e98fc69d9256d92fe` |
| JavaScript bundle | `/assets/index-bhxjhgyp.js` | `f7f468c5953baa8c3526b396be6494e22001574c` |
| CSS bundle | `/assets/index-ceon-kfa.css` | `343d85e9cec30a307c45bd5a550c28b7b6633398` |

The existing HTML requests these URLs:

- `/transparency/assets/index-BhxJhGyP.js`
- `/transparency/assets/index-CEon-KfA.css`

Before the repair, the forced `/transparency/*` fallback intercepted both URLs and returned the transparency HTML shell as `text/html`, so the browser refused to load them as JavaScript and CSS and displayed a blank page.

## Authorized repair

The recovery may add only these two exact Netlify rewrite rules before the existing `/transparency/*` application fallback:

- `/transparency/assets/index-BhxJhGyP.js` → `/assets/index-bhxjhgyp.js`, status `200`, using the existing JavaScript SHA-1 `f7f468c5953baa8c3526b396be6494e22001574c`.
- `/transparency/assets/index-CEon-KfA.css` → `/assets/index-ceon-kfa.css`, status `200`, using the existing CSS SHA-1 `343d85e9cec30a307c45bd5a550c28b7b6633398`.

The existing wildcard transparency fallback must remain after these two exact rules so client-side descendant routes continue to load the same HTML shell. No bundle may be rebuilt, rewritten, reformatted, or otherwise changed.

All other production files, the root-only country router, legal redirects, forms, functions, and configuration must be copied from the active production deployment without modification.

## Required deployment sequence

1. Confirm the active production deploy ID before creating a draft.
2. Read the active Netlify file map and verify the three immutable hashes above.
3. Create a draft by cloning the complete active file map and changing only `netlify.toml` to add the two authorized exact asset rewrites.
4. Verify the draft before production:
   - `/transparency` and `/transparency/dashboard` render the application.
   - Both requested asset URLs return `200` with JavaScript/CSS MIME types.
   - Both alias response bodies match the immutable SHA-1 values above.
   - The protected HTML hash remains unchanged.
   - `/en/`, `/de/`, `/he/`, root country routing, legal redirects, and forms remain available.
   - The function set and edge-function presence remain unchanged.
5. Confirm production has not changed since the draft was created.
6. Publish the verified draft state and repeat the same checks on `https://www.fixads.xyz`.

## Change Log

### 2026-07-16 — Transparency asset routing recovered

- Recorded the project owner's explicit instruction to make the transparency page work again.
- Diagnosed a blank page caused by JavaScript and CSS asset URLs returning the HTML shell instead of their required MIME types.
- Tested draft `6a58b40542053026248e9453`; it proved that physical aliases alone remained intercepted by the forced `/transparency/*` fallback, and it was not published.
- Limited the final recovery to two exact asset rewrites placed before the existing application fallback, reusing the existing protected JavaScript and CSS hashes.
- Prohibited any change to transparency content, layout, styling, logic, authentication, data, APIs, or features.
- Verified corrected draft `6a58b47b1e5c0b2db1603c79` before production: HTML remained at SHA-1 `81689e69934c48149151198e98fc69d9256d92fe`, JavaScript returned `application/javascript` at SHA-1 `f7f468c5953baa8c3526b396be6494e22001574c`, and CSS returned `text/css` at SHA-1 `343d85e9cec30a307c45bd5a550c28b7b6633398`.
- Published production recovery deploy `6a58b49c1b6c6829944fdfb1` and repeated the same hash and MIME-type checks on `https://www.fixads.xyz`.
- Confirmed `/transparency`, `/transparency/dashboard`, `/en/`, `/de/`, `/he/`, root country routing, `robots.txt`, `sitemap.xml`, Impressum, Privacy, Terms, both Netlify forms, the empty function set, and the existing edge function all remained operational.
