# GEO Audit Report: FixAds

**URL**: https://www.fixads.xyz  
**Date**: 2026-08-25  
**Business Type**: Agency / Professional Services  
**Scoring Model**: v2  
**Audit mode**: Read-only live-site review  

---

## GEO Score: 50/100 (Grade C: Developing)

| Dimension | Raw | Agency-adjusted | Weight | Weighted |
|---|---:|---:|---:|---:|
| Technical Accessibility | 85/100 | 85/100 | 20% | 17.0 |
| Content Citability | 52/100 | 52/100 | 35% | 18.2 |
| Structured Data | 32/100 | 33/100 | 20% | 6.6 |
| Entity & Brand | 33/100 | 34/100 | 25% | 8.5 |
| **Composite** |  |  |  | **50.3 → 50/100** |

FixAds has a strong technical base: its public pages are fast, secure, indexable, compressed, localized, canonicalized, and open to major AI crawlers. Its main GEO constraints are not basic crawl blocking. They are the empty initial HTML on all three localized homepages, no `llms.txt`, little answer-oriented or evidence-backed editorial content, incomplete identity/service schema, and a small external brand footprint complicated by another current business using the same FixAds name.

Agency adjustments from the scoring model were applied only during aggregation: Citability Expertise remained 0 after its +15% adjustment; Schema Core Identity increased from 9 to 10 while the zero Person/content score remained zero; Brand Entity Recognition increased from 9 to 10. All issue impacts below use unadjusted raw dimension points unless a composite impact is shown.

### Scope and discovery

- Root request from Germany: `https://www.fixads.xyz` → `https://www.fixads.xyz/de/`
- Detected brand: `FixAds`, from Organization JSON-LD
- `robots.txt`: available and permissive
- `sitemap.xml`: valid, with 10 canonical URLs
- Pages analyzed: `/en/`, `/de/`, `/he/`, `/en/services/`, `/de/leistungen/`, `/he/services/`, `/impressum/`, `/privacy/`, `/terms/`, and `/accessibility/`
- The protected `/transparency` application was excluded from content scoring and was neither modified nor probed beyond the project boundary.
- Prompt-injection attempts detected in fetched public content: none

---

## Critical Issues

No single verified issue costs more than 15 weighted composite points. Two systemic gaps nevertheless deserve immediate attention because each spans several checks:

1. **FixAds lacks a public evidence and expertise layer.** The six marketing pages have no visible author/reviewer, expert quotation, publication/update date, sourced case study, or verified quantitative outcome. This costs 25 raw Citability points across Statistical Density and Expertise Signals, or up to 8.75 composite points.
2. **FixAds is not yet a strongly disambiguated web entity.** LinkedIn and two basic directory/scanner results exist, but no matching Wikipedia/Wikidata entity, review-platform presence, or verifiable community footprint was found. Search results also surface a separate Italian product at `fixads.it`, creating an entity-confusion risk.

## High Priority Issues

### 1. Homepage content depends on JavaScript and `llms.txt` is missing

- **Impact**: 13 raw Technical points; 2.6 composite points
- `/en/`, `/de/`, and `/he/` each deliver an empty `<div id="app"></div>` plus a JavaScript requirement in the initial HTML.
- The localized service and legal pages are server-rendered, showing the existing build can deliver crawler-visible HTML.
- Both `/llms.txt` and `/.well-known/llms.txt` return 404.
- **Fix**: prerender or server-render the three localized homepages while keeping current interactions as progressive enhancement. Add a concise, factual `/llms.txt` with the brand description, canonical locale URLs, localized service pages, core capabilities, and public contact route.

### 2. No verified case studies or dated supporting evidence

- **Impact**: 12 raw Citability points; up to 4.2 composite points
- Visible numbers on marketing pages are mostly decorative service indices, not verifiable business evidence.
- **Fix**: publish client-approved case studies containing the baseline, work performed, measurement period, verified result, data source, limitations, and client permission. If naming a client is not possible, use an approved anonymized business type.

### 3. No visible expertise attribution

- **Impact**: 13 raw Citability points; up to 4.55 composite points
- The six marketing pages contain no named reviewer, practitioner quotation, visible review date, or factual expertise profile.
- **Fix**: add a verified reviewer/author block and last-reviewed date to genuine editorial/service resources. Add only credentials and experience that can be substantiated.

### 4. No substantive localized FAQ or direct Q&A layer

- **Impact**: 9 raw Citability points; up to 3.15 composite points
- Current question headings are conversion prompts, not informational questions with extractable answers.
- **Fix**: add useful visible Q&A content in English, German, and Hebrew. Each answer should lead directly, remain self-contained, and avoid unsupported promises. Add FAQ schema only after the same Q&A is visible on the page.

### 5. Organization identity schema is incomplete

- **Impact**: 16 raw Schema points across Organization completeness, `contactPoint`, and `sameAs`; up to 3.2 composite points
- The Organization graph has a valid name, URL, logo, image, email, and description, but no `contactPoint` or `sameAs`.
- **Fix**: add a truthful contact point using `info@fixads.xyz` and the localized contact URL. Add only verified official FixAds profiles. The active [FixAds LinkedIn page](https://www.linkedin.com/company/fixads) is the first verified candidate.

### 6. External authority and community signals are limited

- **Impact**: material Brand loss; exact improvement depends on profiles earned and their quality
- The [LinkedIn company page](https://www.linkedin.com/company/fixads) is active and links to `fixads.xyz`; [Prospeo](https://prospeo.io/c/fixads) has a basic directory record; [Akii](https://akii.com/brands/fixads.xyz) has a third-party AI-visibility scan.
- No exact-domain Reddit result, matching Wikipedia/Wikidata entity, verified YouTube presence, agency review profile, or active GitHub organization was found during this audit.
- **Fix**: first complete one authoritative agency directory/review profile, make LinkedIn and the site link to each other, align descriptions, then build a small cadence of original, expert-led content that third parties can cite.

## Medium Priority Issues

1. **Important terms are assumed rather than defined** — CRO, CRM, ROI, attribution, lifecycle marketing, HVAC, Klaviyo, and Odoo workflows need short inline definitions. Raw Citability opportunity: about 4 points.
2. **Conversational and long-tail query coverage is partial** — add answer blocks for HVAC lead quality, Shopify/Klaviyo lifecycle systems, Odoo integrations, attribution, channel selection, and reporting. Raw Citability opportunity: about 7 points.
3. **No agency-specific Service entities** — the eight visible offerings are ItemList entries but not `Service` entities. Raw Schema opportunity: 6 points.
4. **No localized BreadcrumbList schema** — add Home → Services/Leistungen/שירותים graphs matching visible navigation. Raw Schema opportunity: 5 points.
5. **No editorial content model** — Article, Person author, and publication-date schema are absent because no genuine article resource exists. Create the content first; do not mislabel service or legal pages as articles.
6. **No SpeakableSpecification** — consider it only for concise, visible answer blocks with tested selectors. Raw Schema opportunity: 5 points.
7. **WebSite has no SearchAction** — do not add one until real site search exists; a fabricated target would be misleading.
8. **The same-name Italian product creates ambiguity** — [fixads.it describes a different FixAds product and operator](https://fixads.it/about). FixAds Berlin should consistently pair its name with `fixads.xyz`, Berlin, Anton Goldberg, and its connected performance-marketing scope in public profiles.

## Low Priority Issues

1. Five of ten meta descriptions fall outside the audit rubric's 120–160-character target: Hebrew services and all four legal pages.
2. The four legal pages have no complete Open Graph trio.
3. Organization descriptions on German and Hebrew homepages remain in English. Localized descriptions could improve self-containment while retaining one stable Organization `@id`.
4. Service pages reference the shared Organization and WebSite identifiers without defining those nodes on the same page. Embedding or consistently resolving the graph would make each document more self-contained.

---

## Detailed Analysis

### 1. Technical Accessibility (85/100)

#### Sub-scores

- AI Crawler Access: **35/35**
- Rendering & Content Delivery: **9/22**
- Speed & Accessibility: **18/18**
- Meta & Header Signals: **11/13**
- Multimedia Accessibility: **12/12**

#### What works

- `robots.txt` returns 200, allows `User-agent: *`, and references the sitemap.
- GPTBot, Google-Extended, ClaudeBot, Bytespider, PerplexityBot, Applebot-Extended, CCBot, cohere-ai, Amazonbot, FacebookBot, and Meta-ExternalAgent all received HTTP 200 on a direct localized-page request.
- No restrictive `X-Robots-Tag` or noindex/nofollow meta directive was found on the audited pages.
- All 10 pages use HTTPS, a mobile viewport, correct `lang`, correct LTR/RTL direction, matching canonicals, and titles below 60 characters.
- Measured raw HTML response times ranged from 0.197 to 0.544 seconds, with a 0.329-second median.
- All 10 page responses used gzip when requested with compression support.
- The XML sitemap is valid and contains all 10 audited canonical URLs.
- Six marketing/service pages have complete Open Graph markup; key information remains available in text rather than being locked in images.
- No video or audio content creates a transcript gap.

#### Main limitation

| Page group | Initial HTML |
|---|---|
| English, German, Hebrew homepages | Client-rendered shell; empty `#app`; approximately 11 source-body words |
| Three localized service pages | Server-rendered; approximately 535–671 source-body words |
| Four legal pages | Server-rendered; approximately 56–901 source-body words |

This audit measured network response time, not field Core Web Vitals. It does not claim LCP, INP, or CLS results.

### 2. Content Citability (52/100)

#### Sub-scores

- Answer Block Quality: **11/20**
- Self-Containment: **14/18**
- Statistical Density: **5/17**
- Structural Clarity: **14/17**
- Expertise Signals: **0/13**
- AI Query Alignment: **8/15**

The marketing copy is direct, logically headed, well chunked, and often self-contained. The weakest areas are evidence, dates, author/reviewer signals, formal definitions, and conversational Q&A coverage.

#### Top Citable Passages

> “We build lead-generation systems for HVAC, home services, real estate, professional services, and local businesses.”

Source: [English homepage](https://www.fixads.xyz/en/). It is self-contained and audience-specific; a verified process or outcome would strengthen it.

> “Wir verbinden Websites, Shops, Werbeplattformen, CRM, Analytics, Kommunikationstools, Odoo und weitere Systeme.”

Source: [German homepage](https://www.fixads.xyz/de/). It gives a concrete integration scope; define the operational result and add a verified example.

> “אנחנו מחברים את מקורות הנתונים השונים ומציגים תמונה ברורה של ההוצאות, הלידים, המכירות, עלויות הרכישה והחזר ההשקעה.”

Source: [Hebrew homepage](https://www.fixads.xyz/he/). It is self-contained and uses measurable business concepts; name the actual reporting inputs where appropriate.

> “We create lifecycle email programs including campaigns, welcome flows, abandoned-cart recovery, post-purchase communication, win-back, segmentation, and repeat-purchase programs.”

Source: [English services page](https://www.fixads.xyz/en/services/). It is concrete and comprehensive; define “lifecycle email program” first.

> “The current FixAds marketing and legal pages do not set analytics or advertising cookies, do not use tracking pixels...”

Source: [Privacy Policy](https://www.fixads.xyz/privacy/). This is direct and verifiable; keep it synchronized with implementation.

#### Content metrics

- Approximate rendered words: 5,620 across 10 pages; about 4,244 on the six marketing pages
- Marketing paragraphs: 201
- Average marketing paragraph length: about 1.17 sentences, more fragmented than the 2–4 sentence extraction target
- Marketing headings: 108 with one H1 and logical hierarchy per page
- Lists: 54; tables: 0
- Informational FAQ headings: 0
- Visible author/byline elements: 0
- Visible `<time>` elements: 0
- Marketing claims with source citations: 0

#### Recommended answer block

> **How does FixAds approach HVAC lead quality?**  
> FixAds connects paid search and social campaigns with focused landing pages, lead qualification, appointment routing, CRM follow-up, and reporting. The channel mix depends on the service area, demand, sales process, and available verified data.

This is a proposed structure, not a claim that every listed component is already deployed for every client. It must be reconciled with verified service delivery before publication.

### 3. Structured Data (33/100 adjusted; 32/100 raw)

#### Raw sub-scores

- Core Identity Schema: **9/30**
- Content Schema: **0/25**
- AI-Boost Schema: **6/25**
- Schema Quality: **17/20**

#### What works

- Six valid JSON-LD blocks were found across the six marketing/service pages.
- Every block parses as JSON and uses `https://schema.org`.
- No Microdata, RDFa, conflicting duplicate entity, unknown property, deprecated property, or broken block was found.
- Homepages define Organization and WebSite.
- Service pages define CollectionPage and ItemList with eight visible entries.
- The logo and hero-image URLs return valid image responses.

#### Schema map

| Page group | Types | Main gaps |
|---|---|---|
| `/en/`, `/de/`, `/he/` | Organization, WebSite | No `sameAs`, ContactPoint, or SearchAction |
| Three service pages | CollectionPage, ItemList, ListItem | No Service or BreadcrumbList; shared identity nodes not embedded |
| Four legal pages | None | No error; schema is optional unless useful visible entities are modeled |

The zero Content Schema score is a capability gap, not permission to add Article markup to non-article pages. Article, Person, and publication dates belong on real editorial resources.

#### Ready-to-Use JSON-LD Templates

Use only verified values and maintain visible-content parity.

**Organization completion**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.fixads.xyz/#organization",
  "name": "FixAds",
  "url": "https://www.fixads.xyz/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.fixads.xyz/assets/fixads-logo.png"
  },
  "description": "[Verified language-matched description]",
  "email": "info@fixads.xyz",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "info@fixads.xyz",
    "url": "[Localized FixAds contact URL]",
    "availableLanguage": ["English", "German", "Hebrew"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/fixads"
  ]
}
```

Do not add three placeholder profiles to earn points. One verified profile is better than invented identity links.

**Localized service ItemList with Service entities**

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "[Canonical service-page URL]#services",
  "name": "[Exact visible localized heading]",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "@id": "[Canonical service-page URL]#service-1",
        "name": "[Exact visible localized service name]",
        "description": "[Matching visible description]",
        "url": "[Canonical service-page URL]#service-1",
        "provider": {
          "@id": "https://www.fixads.xyz/#organization"
        }
      }
    }
  ]
}
```

**Localized service breadcrumb**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "[Canonical service-page URL]#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "[Localized Home label]",
      "item": "[Localized homepage URL]"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[Localized Services label]",
      "item": "[Canonical service-page URL]"
    }
  ]
}
```

Add FAQPage only after real Q&A is visible. Add SearchAction only after real search exists. Add Article/Person/date markup only on genuine editorial pages.

### 4. Entity & Brand (34/100 adjusted; 33/100 raw)

#### Raw sub-scores

- Entity Recognition: **9/30**
- Third-Party Presence: **10/25**
- Community Signals: **0/25**
- Cross-Source Consistency: **14/20**

#### Platform Presence Map

| Platform | Status | Quality | Evidence |
|---|---|---|---|
| Website | Active | Complete multilingual marketing/legal property | [fixads.xyz](https://www.fixads.xyz) |
| LinkedIn | Active | Complete company page with recent activity and backlink | [FixAds on LinkedIn](https://www.linkedin.com/company/fixads) |
| LinkedIn owner profile | Active | Associates Anton Goldberg with FixAds | [Anton Goldberg](https://www.linkedin.com/in/anton-goldberg-200052193) |
| Wikipedia | Not found | No matching brand article in live search | [Wikipedia search](https://en.wikipedia.org/w/index.php?search=FixAds) |
| Wikidata | Not found | Live API search returned no matching entity | [Wikidata search](https://www.wikidata.org/w/index.php?search=FixAds) |
| Prospeo | Present | Basic company directory profile | [FixAds record](https://prospeo.io/c/fixads) |
| Akii | Present | Third-party AI visibility scan; not part of this audit score | [FixAds record](https://akii.com/brands/fixads.xyz) |
| Reddit | Not found | Exact-domain search returned no result | [Reddit search](https://www.reddit.com/search/?q=%22fixads.xyz%22&type=link) |
| YouTube | Not verified | No indexed exact-domain result found | — |
| Agency review platforms | Not verified | No Clutch, DesignRush, UpCity, or Trustpilot profile found | — |
| GitHub organization | Not verified | No public brand organization found in indexed search | — |
| Same-name entity | Active | Separate Italian Meta-ads diagnostic creates ambiguity | [fixads.it About](https://fixads.it/about) |

#### Interpretation

- LinkedIn is the strongest external entity signal and links back to `fixads.xyz`.
- The website does not link back to LinkedIn and does not expose it through Organization `sameAs`, so linking is one-directional.
- FixAds/Fixads capitalization varies slightly across sources, while descriptions remain generally aligned around performance marketing and data. The website is broader than the current LinkedIn description.
- Public location and domain details found on LinkedIn and Prospeo align with Berlin and `fixads.xyz`; no conflicting contact record was found.
- The same-name Italian product increases the importance of consistently pairing the FixAds name with the canonical domain, Berlin location, operator, and agency category.

---

## Platform-Specific Recommendations

The following priorities use the geo-audit package's platform heuristics; they are not measurements of actual FixAds mentions inside each model.

### ChatGPT

- Strengthen entity disambiguation with one canonical Organization graph, verified `sameAs`, a consistent Berlin agency description, and an operator/reviewer profile.
- Publish self-contained, source-backed case studies and answer blocks that can be quoted without surrounding page context.

### Perplexity

- Publish dated, regularly reviewed resources addressing specific questions such as HVAC lead quality, cross-channel attribution, and Odoo workflow design.
- Earn third-party mentions through agency directories, practitioner interviews, and useful community contributions rather than promotional link drops.

### Gemini

- Prerender the localized homepages and complete the Organization, Service, and Breadcrumb graphs.
- Keep descriptions and contact information consistent across `fixads.xyz`, LinkedIn, and future profiles.

### Google AI Overviews

- Preserve the strong technical SEO foundation while adding visible FAQs, definitions, internal service links, evidence, and matching FAQ/Service schema.
- Add original case studies with clear methodology, dates, authorship, and update history.

### Claude

- Prioritize primary-source material: transparent methods, factual service definitions, client-approved evidence, and clearly stated limitations.
- Turn fragmented service copy into 2–4-sentence self-contained answer blocks.

---

## Quick Wins

1. **Add `/llms.txt`** with only verified canonical information — up to 7 raw Technical points.
2. **Add the verified LinkedIn URL to Organization `sameAs` and link to LinkedIn from the shared footer** — up to 4 Schema points immediately, plus stronger bidirectional entity signaling.
3. **Add `contactPoint` to Organization JSON-LD** using the verified public email and localized contact routes — up to 2–6 raw Schema points depending on completeness interpretation.
4. **Add five localized, visible service FAQs** with direct answers, then mark them up accurately — up to 9 raw Citability points and up to 8 raw Schema points.
5. **Prerender the three localized homepages** using the already approved visible content — up to 6 raw Technical points and materially better crawler reliability.

Expected gains are scoring-model opportunities, not guarantees of rankings, traffic, model citations, or revenue.

---

## 30-Day Roadmap

### Week 1: Foundation

- Prerender `/en/`, `/de/`, and `/he/` while preserving locale routing, RTL behavior, forms, animations, and reduced-motion behavior.
- Add a factual `/llms.txt` and validate both human and crawler access.
- Complete Organization `contactPoint`; add the verified LinkedIn `sameAs` URL.
- Add Service entities and localized BreadcrumbList graphs to the service pages.
- Follow the living README rule and protected production draft process for every website change; do not touch `/transparency`.

### Week 2: Content

- Create five high-intent Q&A blocks per locale using the same approved service scope.
- Add short definitions for performance marketing, attribution, lifecycle email, CRM, ROI, HVAC, and Odoo workflow integration.
- Expand the strongest fragmented service passages into 2–4-sentence answer blocks.
- Add FAQ schema only after the visible localized Q&A passes review.

### Week 3: Authority

- Publish one client-approved, evidence-based case study with methodology, timeframe, source, limitation, and reviewer.
- Add a verified FixAds/Anton Goldberg expertise page or author/reviewer block without unsupported credentials.
- Complete one relevant agency directory or review profile and align its name, URL, Berlin location, and description with the website.
- Make the website and LinkedIn link to each other.

### Week 4: Optimization

- Publish a second focused resource answering one high-value query, such as HVAC lead quality or Shopify/Klaviyo lifecycle integration.
- Validate server HTML, JSON-LD syntax, hreflang, canonicals, sitemap, localized metadata, and mobile RTL/LTR behavior.
- Re-run `geo-audit`; then use `geo-monitor` against this report's machine-readable baseline.
- Measure real model mentions separately; this audit is diagnostic, not direct visibility measurement.

---

## Diagnostic vs. Measurement

This audit identifies **what to fix** (diagnostic). [AIvsRank.com](https://aivsrank.com?ref=geo-audit) measures **how visible you actually are** across AI platforms—tracking real mentions in ChatGPT, Claude, Perplexity, Gemini, and Google AI Overviews.

Together, they provide a diagnostic and measurement view. Get an AI visibility score at https://aivsrank.com.

---

## Audit Limitations

- The audit sampled the 10 URLs declared in the sitemap and did not evaluate authenticated content.
- Raw response time is not a Core Web Vitals field measurement.
- Brand-platform availability can change, and some platforms limit automated access. “Not found” means no verified public match was located during this audit, not proof that no account exists.
- This report does not measure actual citation frequency inside proprietary AI platforms.
- No website code, deployment, Netlify configuration, form, legal page, or Transparency file was changed.

---

## AI Visibility Measurement

### Track Your Progress with AIvsRank.com

This audit identifies what to fix. **AIvsRank.com** measures how visible a brand is across AI platforms, including mentions and historical changes.

**Get an AI visibility score**: [aivsrank.com](https://aivsrank.com?ref=geo-audit)

---

*Generated by [geo-audit](https://github.com/Cognitic-Labs/geoskills), an open-source GEO diagnostic skill.*  
*The report uses the package's v2 scoring methodology; scoring-model claims were not independently validated as performance guarantees.*

<!-- GEO-AUDIT-META
scoring_model: v2
url: https://www.fixads.xyz
date: 2026-08-25
business_type: Agency
geo_score: 50
grade: C
technical: 85
citability: 52
schema: 33
brand: 34
GEO-AUDIT-META -->
