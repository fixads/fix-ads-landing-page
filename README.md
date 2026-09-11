# FixAds Website — Living Specification

This README is the website's source of truth and learning file. It explains what the website is, how it behaves, why decisions were made, and how future changes must be completed.

## Mandatory rule for every change

**No website change may be made without a matching update to this README in the same change.**

Before changing the website, every contributor or AI agent must:

1. Read this README completely.
2. Inspect the current website files that relate to the request.
3. Understand the current design, content, language routing, country access rules, and relevant dependencies.
4. Make the smallest complete change that satisfies the request.
5. Update this README so it remains an accurate description of the website.
6. Add an entry to the Change Log below.
7. Verify the affected experience in all three languages and both text directions when relevant.

A website change and its README update are one indivisible unit of work. If the README was not updated, the website change is incomplete.

## Protected transparency area — do not modify

The live route [`https://www.fixads.xyz/transparency`](https://www.fixads.xyz/transparency) and **every route, page, file, component, asset, and feature contained beneath `/transparency` are protected and outside the authority of this README.** This includes `/transparency` itself and every descendant route matching `/transparency/**`, at any nesting depth.

Mandatory boundaries:

- Website creation, redesign, localization, routing, refactoring, deployment, or cleanup work governed by this README must never alter, replace, delete, move, redirect, restyle, or break the protected transparency area.
- Do not assume that a site-wide change should automatically be applied within `/transparency` or its descendant pages.
- Build output, catch-all routes, geographic redirects, language redirects, and country blocking must be configured so they do not accidentally overwrite or intercept the protected area.
- This README cannot authorize changes to transparency content or functionality. A change beyond the footer requires explicit instructions in a separate README dedicated to the transparency area.
- The **shared footer is the only exception**: a footer change governed by this README may also be reflected on protected transparency pages, but the change must remain strictly confined to the footer and must not affect any other transparency content, layout, styling, scripts, assets, routes, or behavior.
- The dedicated [`TRANSPARENCY_README.md`](TRANSPARENCY_README.md) exists and is the source of truth for that area. It takes precedence over this README for every route matching `/transparency` and `/transparency/**`.

Before any deployment, verify that the protected transparency route and representative descendant routes remain available and unchanged except for an explicitly authorized shared-footer update.

## Project status

The multilingual design was approved by the project owner and published to `https://www.fixads.xyz` on 2026-07-16 after protected Netlify drafts passed verification. Later CRM and recovery releases are recorded below. The current production deploy is locked release `6aa3ffe6d48b541dee4302a5`, published on 2026-09-11 at `13:21:33.929Z`. This Hebrew-language refinement was cloned from exact locked September 11 baseline `6aa3fc97f28be5009d1bb142`, retaining the earlier multilingual market-refinement release and the protected August 30 Transparency/BluYacht state. The latest change improves only Hebrew homepage/service wording and matching metadata; English and German copy are unchanged. It refines all three localized homepage offers, examples of work, customer-care explanation, FAQs, and metadata, and adds original conceptual imagery plus an interactive integration example. It retains the existing phone-first layout, localized service/legal pages, all ten Function digests and overrides, three schedules, both Forms, legacy files, and the verified 29-rule route set. Netlify automatic Git builds are paused (`build_settings.stop_builds = true`) because the connected `main` branch does not build this protected multilingual production package. Future planned production work must use the protected draft process and explicitly unlock the current deploy only for a verified cutover.

- The animated multilingual website source exists in `preview-site/` and remains available as a separate review build at `https://fixads-multilingual-preview.anton-goldberg.chatgpt.site`.
- The 2026-09-11 release was published to Netlify production only; the separately hosted Sites review URL was not republished and must not be used to judge the current production version.
- Direct review paths are `/en/`, `/de/`, and `/he/`; the review root uses available edge country information to send Israel to Hebrew, Germany to German, and other visitors to English.
- Hebrew website content has been supplied and is recorded verbatim in this README.
- The project owner authorized publication of the market-adapted English and German versions on 2026-07-16; a native German language review remains recommended.
- The preview uses the active FixAds brand and existing logo from `fixads.xyz`. The requested `myfixers.xyz` hostname did not resolve in DNS when checked on 2026-07-15, so it was not treated as the source site.
- The approved country blocklist remains pending. The production `fixads-contact` email notification was configured and live-delivery tested on 2026-08-19. The verified legal identity, German Impressum, bilingual Privacy Policy, Terms of Use, and Accessibility Statement were added to the source on 2026-07-22.
- An additional application source folder, `acdt-source/`, exists and must not be assumed to be the production source until its role is confirmed.

## Product summary

The website will provide localized content for three audiences:

| Visitor location | Experience | Language code | Text direction |
| --- | --- | --- | --- |
| Israel | Hebrew | `he` | Right-to-left (`rtl`) |
| Germany | German | `de` | Left-to-right (`ltr`) |
| All other allowed countries | English | `en` | Left-to-right (`ltr`) |

Current interpretation: “three pages” means three localized versions of the website—Hebrew, German, and English. If it instead means three content pages within each language, this specification must be revised before that structure is implemented.

## Language and country routing

The initial automatic routing rule is:

1. The website detects the visitor's country from their IP address before selecting an experience.
2. A visitor detected in Israel receives the Hebrew experience.
3. A visitor detected in Germany receives the German experience.
4. A visitor detected anywhere else in the world receives the English experience, provided that country is not blocked. This includes the United States and every other allowed country.
5. A visitor in a country on the approved blocklist is denied before localized content is served.

Implementation requirements:

- Country detection should happen at the hosting edge using Netlify-provided geographic context where possible.
- Do not call an unnecessary third-party geolocation API from the visitor's browser.
- Routes must have stable, shareable language URLs. The exact URL convention is still to be decided.
- Automatic routing must avoid redirect loops and must preserve the requested path when possible.
- Search engines must be able to discover the intended localized versions; localization metadata such as `lang`, `dir`, canonical URLs, and `hreflang` should be added when production routes exist.
- The footer is the only place in the website interface where location or language may be viewed or changed. Do not place a country or language selector in the header, navigation, page body, pop-up, or another interface area.
- The footer control must show the visitor's detected or currently selected country and corresponding language.
- The automatically detected country and language are the initial selection. If manual changes are supported, they must be made through this footer control only.
- Country detection is not identity verification. VPNs, proxies, and inaccurate IP data can affect the result.

## Global footer and Impressum rules

Every localized website—Hebrew, English, and German—and every legal page must use the same English footer component. The footer is an explicit left-to-right English content island even inside the Hebrew right-to-left document. Only the current country/language summary changes to reflect the active locale.

The shared footer contains:

- English `Company`, `Legal`, and `Country & language` headings.
- English links for Services, Clients, About, Contact, Client Login, LinkedIn, Privacy Policy, Terms of Use, Accessibility Statement, and Impressum.
- The same ordered locale choices: `International — English`, `Germany — German`, and `Israel — Hebrew`.
- The existing FixAds logo, English positioning sentence, public email address, copyright line, and English Back to top action.
- The only visible country/language control anywhere on the website.

An `Impressum` link must appear in the footer of **all three localized websites**. This rule applies even when the surrounding footer is Hebrew or English.

The Impressum destination has special language behavior:

- The link label must remain `Impressum` in Hebrew, English, and German footers.
- The Impressum page and its complete legal content must always be in German.
- Never translate the Impressum page into Hebrew or English.
- IP detection, automatic language routing, and a visitor's manual footer selection must not change the Impressum page language.
- The Impressum document must use German language metadata (`lang="de"`) and left-to-right direction.
- The canonical route is `/impressum/`; Netlify normalizes `/impressum` to that directory route without changing the document language.
- This rule concerns the shared footer and Impressum destination only; it does not grant permission to change any protected `/transparency` content.

### Verified legal identity and legal pages

The owner authorized a search of local business records on 2026-07-22. The publishable facts below were corroborated across official ELSTER material, FixAds invoices through 2026, the owner's CV, and a FixAds-billed communications record:

- Trading name: `FixAds`.
- Sole proprietor / operator: `Anton Goldberg`.
- Business address: `Schönhauser Allee 108, 10439 Berlin, Germany`.
- Public email: `info@fixads.xyz`.
- Wirtschafts-Identifikationsnummer: `DE419002120-00001`.
- No commercial-register entry, corporate legal form, professional supervisory authority, or VAT identification number is asserted because the records do not establish one.

Personal tax numbers, the personal tax identification number, direct personal telephone number, bank details, client information, invoice data, passwords, and other private records must never be published in the repository or browser code. The German Impressum includes the verified business identity, public email and contact-form route, and the Wirtschafts-Identifikationsnummer required for provider identification. The number must be labeled as a business Wirtschafts-Identifikationsnummer and must not be described as the owner's personal tax identification number.

The canonical legal pages are:

- `/impressum/`: German only, with `lang="de"` and left-to-right direction.
- `/privacy/`: English Privacy Policy followed by a complete German `Datenschutzerklärung`; it covers the current Netlify hosting, technical request logs, Netlify form processing, contact channels, retention principles, international transfers, rights, and Berlin supervisory authority.
- `/terms/`: English public-website Terms of Use. It does not replace or invent client service terms, prices, or performance promises.
- `/accessibility/`: English accessibility statement recording WCAG 2.1 AA as the design and testing target without claiming an independent certification.

The legal-page scope is the multilingual marketing site and its legal pages. The protected client portal remains outside this README. No obsolete EU Online Dispute Resolution platform link is added because that platform was discontinued in 2025. No consumer-dispute-resolution participation statement is invented without an explicit owner decision.

The current marketing and legal source has no analytics, advertising pixels, local storage, session storage, or cookies. The animated loader therefore runs without browser storage, respects reduced motion, and requires no consent solely for its presentation. If tracking or nonessential browser storage is added later, the Privacy Policy and consent mechanism must be updated in the same change before publication.

## Country access policy

Some countries will be blocked, including selected countries in South Asia. The project owner mentioned India and Bangladesh as examples. The entire region must **not** be blocked by assumption, and Latin America must **not** be broadly blocked.

The exact blocklist has not yet been approved. Until it is supplied:

- Do not implement a speculative country blocklist.
- Add or remove countries only when the project owner names them explicitly.
- Store the approved list as ISO 3166-1 alpha-2 country codes in one documented location.
- Return a clear, minimal access-denied response without exposing private infrastructure details.
- Document every blocklist change in this README and the Change Log.

## Content model

Hebrew source content and market-adapted English and German drafts are supplied below. New or revised content must be recorded here before or together with implementation.

### Hebrew (`he`)

- Status: source content supplied by the project owner on 2026-07-15.
- Direction: right-to-left.
- Typography and component layout must be tested in RTL, not merely text-aligned to the right.
- The following copy and sequence are the source of truth for the Hebrew website. Do not rewrite, shorten, expand, or reorder it without an explicit instruction from the project owner and a matching README update.
- The `שקיפות` navigation item may link to the protected `/transparency` area, but its presence here does not authorize any change to that area.

#### התפריט העליון

- ראשי
- השירותים שלנו
- לקוחות
- איך אנחנו עובדים
- שקיפות
- אודות
- בואו נדבר
- כניסת לקוחות

#### החלק הראשון באתר

##### שיווק, טכנולוגיה ותוצאות — במקום אחד

אנחנו סוכנות דיגיטל ו־Performance Marketing המספקת לעסקים בישראל ובעולם מעטפת מלאה לצמיחה.

אנחנו מנהלים קמפיינים ב־Meta, Google ו־Amazon, מפתחים אתרים וחנויות אונליין, בונים מערכי אימייל מרקטינג, בוטים ואוטומציות ומחברים את כל הפעילות למערכת אנליטיקה ברורה ומדידה.

המטרה שלנו היא לחבר בין השיווק, הטכנולוגיה והנתונים כדי לבנות מערכת אחת שמייצרת תוצאות עסקיות אמיתיות.

**כפתור:** בואו נדבר

#### השירותים שלנו

##### פרסום ממומן ו־Performance Marketing

אנחנו מתכננים, מקימים ומנהלים קמפיינים ממומנים ב־Meta, Google ו־Amazon. העבודה כוללת בניית אסטרטגיה, מחקר קהלים, הקמת קמפיינים, אופטימיזציה, ניהול תקציבים ומעקב אחר התוצאות.

##### E-commerce

אנחנו מלווים מותגים וחנויות אונליין לאורך כל מסע הלקוח — מהמודעה הראשונה ועד לרכישה ולשימור הלקוח.

אנחנו מחברים בין הקמפיינים, החנות, הקריאייטיב, האימייל מרקטינג, האוטומציות והנתונים כדי להגדיל מכירות ולשפר את הרווחיות.

##### יצירת לידים

אנחנו מנהלים מערכי לידים עבור נדל״ן, שירותים מקצועיים, עסקים מקומיים ותחומים נוספים.

המטרה היא לא רק לייצר כמה שיותר לידים, אלא להביא פניות איכותיות ולבנות תהליך מסודר שממשיך משלב המודעה ועד לשיחה או למכירה.

##### פיתוח אתרים

אנחנו מקימים ומשפרים אתרים, חנויות אונליין ודפי נחיתה באמצעות Shopify, WordPress ופתרונות נוספים.

כל אתר נבנה כחלק מהמערכת השיווקית ומתחבר לפרסום, לאנליטיקה, לאימייל מרקטינג, ללידים ולאוטומציות.

##### Klaviyo ואימייל מרקטינג

אנחנו בונים ומנהלים מערכי אימייל מרקטינג, עם התמחות ב־Klaviyo ובמותגי E-commerce.

השירות כולל קמפיינים, סדרות הצטרפות, שחזור עגלות נטושות, אימיילים לאחר רכישה, החזרת לקוחות ויצירת רכישות חוזרות.

##### בוטים ואוטומציות

אנחנו בונים בוטים ואוטומציות לטיפול בלידים, שירות לקוחות, איסוף מידע, סינון פניות, קביעת פגישות וחיבור בין מערכות.

המטרה היא לחסוך זמן, לשפר את חוויית הלקוח ולמנוע מפניות ומשימות חשובות ללכת לאיבוד.

##### אנליטיקה ומדידה

אנחנו מחברים את מקורות הנתונים השונים ומציגים תמונה ברורה של ההוצאות, הלידים, המכירות, עלויות הרכישה והחזר ההשקעה.

כך ניתן להבין מה עובד, מה דורש שיפור והיכן נמצאות ההזדמנויות הבאות לצמיחה.

##### קריאייטיב

אנחנו מפתחים כיוונים קריאייטיביים ומייצרים מודעות מבוססות תמונה וחומרים שיווקיים המותאמים לפלטפורמות הפרסום.

כאשר נדרשת הפקת וידאו מקצועית, אנחנו עובדים עם אנשי מקצוע חיצוניים המתאימים לפרויקט.

#### איך אנחנו עובדים

##### מהירות, למידה והסתגלות

עולם הדיגיטל משתנה במהירות, ולכן אנחנו נשארים בתנועה מתמדת. אנחנו לומדים כלים וטכנולוגיות חדשות, מגיבים לנתונים ומתאימים את הפעילות לשינויים בשוק.

##### מקצועיות ללא פשרות

כל תחום שבו אנחנו עוסקים מקבל את מלוא תשומת הלב המקצועית. אנחנו לא מסתפקים בכך שהמערכת עובדת — אנחנו רוצים שהיא תהיה בנויה נכון, מדידה וניתנת לשיפור.

##### אמינות ושקיפות

אנחנו מדברים בצורה ברורה, מציגים את הנתונים כפי שהם ולא מבטיחים הבטחות שאי אפשר לקיים.

כאשר משהו עובד, אנחנו מסבירים מדוע. כאשר קיימת בעיה, אנחנו מציגים אותה, לוקחים אחריות ומגדירים כיצד מטפלים בה.

#### שקיפות מלאה

כל לקוח מקבל גישה לממשק אישי שבו ניתן לעקוב אחר הפעילות והתוצאות.

בממשק ניתן לראות:

- תקציבי פרסום והוצאות
- לידים, רכישות והמרות
- עלויות רכישה ועלויות לליד
- ביצועים לפי ערוץ וקמפיין
- משימות ושינויים שבוצעו
- בעיות הדורשות טיפול
- הפעולות המתוכננות והשלבים הבאים

הלקוח אינו צריך להמתין לדוח החודשי כדי להבין מה קורה. המידע נגיש בצורה ברורה ומאפשר לעקוב אחר התקדמות הפעילות.

**הפעילות שלכם. הנתונים שלכם. תמיד פתוחים בפניכם.**

#### הלקוחות שלנו

עבדנו עם חברות ומותגים בישראל ובעולם, בתחומי המסחר האלקטרוני, האופנה, הבריאות, התיירות, היופי, המשפטים, המזון והקמעונאות.

- Natasha Pet Store
- Tool Eden
- Li Vela Beauty Spa
- Diamonds For All
- Mayer Jewelry
- BluYacht Israel
- The Justice Group
- Shira Custom Wigs
- GA Luxury Judaica
- Lampari
- CB Fashion USA
- HumanBeanz
- David Roytman Couture
- Flamingo Kosher
- RoofPax

בחלק הזה יוצגו הלוגואים של החברות. לחיצה על כל לוגו תוביל לאתר הרשמי של החברה.

#### אודות

אנחנו סוכנות דיגיטל שמחברת בין פרסום, טכנולוגיה ונתונים.

התחלנו בניהול קמפיינים ב־Meta, ובהמשך הרחבנו את הפעילות ל־Google, Amazon, פיתוח אתרים, Shopify, WordPress, Klaviyo, אימייל מרקטינג, בוטים, אוטומציות ואנליטיקה.

הבנו שכדי לייצר צמיחה אמיתית, לא מספיק לנהל קמפיין. הקמפיין צריך להתחבר לאתר, למערכת הלידים, לקריאייטיב, לאימיילים ולנתונים העסקיים.

לכן אנחנו לוקחים אחריות על כל המערכת הדיגיטלית — מא׳ ועד ת׳.

#### החלק האחרון באתר

##### מוכנים לבנות מערכת שמייצרת צמיחה?

ספרו לנו על העסק, המטרות והאתגרים שלכם. אנחנו נבחן את הפעילות הקיימת ונבין כיצד ניתן לחבר בין השיווק, הטכנולוגיה והנתונים כדי להתקדם.

**כפתור:** בואו נדבר

#### צור קשר

- שם מלא
- שם החברה
- טלפון
- אימייל
- אתר החברה
- במה נוכל לעזור?
- כפתור: שליחת פרטים

#### החלק התחתון

- השירותים שלנו
- לקוחות
- אודות
- צור קשר
- כניסת לקוחות
- מדיניות פרטיות
- תנאי שימוש
- הצהרת נגישות
- Impressum
- קישורים לרשתות החברתיות
- בחירת מדינה ושפה

### English (`en`)

- Status: professional U.S.-market draft created from the Hebrew source and the project owner's positioning instructions on 2026-07-15; awaiting final owner approval.
- Direction: left-to-right.
- This is the fallback experience for all allowed locations other than Israel and Germany.
- Audience and tone: U.S. and international decision-makers; direct, professional, customer-focused, commercially clear, and outcome-oriented.
- Evidence boundary: do not add numbers, rankings, certifications, platform-partner status, or guaranteed results unless the project owner supplies verifiable evidence.
- The `Transparency` navigation item may link to the protected `/transparency` area, but its presence here does not authorize any change to that area.
- Primary SEO phrase: `performance marketing agency`.
- Draft meta title: `Performance Marketing Agency for Connected Growth`.
- Draft meta description: `Connect paid media, e-commerce, lead generation, automation, and analytics with a performance marketing agency focused on practical growth.`

#### Top navigation

- Home
- Services
- Clients
- How We Work
- Transparency
- About
- Let's Talk
- Client Login

#### Hero section

##### Digital Marketing, Technology, and Measurable Growth—Connected

We are a performance marketing and digital growth agency helping businesses in the United States and around the world turn marketing into a connected, measurable system.

Our experience spans Yelp Ads, Google Ads, Meta Ads, and Amazon Ads, along with e-commerce, websites, lifecycle email, lead generation, bots, automation, and analytics. We connect every channel so your campaigns, website, customer data, and follow-up process work together.

We care deeply about the businesses we support. Our goal is to understand what matters to each client, communicate clearly, and build practical solutions that can generate more qualified leads, improve conversion, strengthen customer retention, and support profitable growth.

**Button:** Let's Talk

#### Our Services

##### Paid Media and Performance Marketing

We plan, build, and manage campaigns across Yelp Ads, Google Ads, Meta Ads, and Amazon Ads. Our work includes strategy, audience and keyword research, campaign setup, creative testing, budget management, ongoing optimization, and clear performance reporting.

We focus on the outcomes behind the metrics: reaching the right audience, generating qualified demand, improving acquisition efficiency, and creating a stronger path from click to customer.

##### E-commerce Growth

We support e-commerce brands across the full customer journey—from the first ad to the first purchase, repeat purchase, and long-term retention.

By connecting paid media, storefront experience, creative, Klaviyo, automation, and analytics, we help brands identify friction, improve conversion, build stronger customer relationships, and pursue more profitable revenue.

##### Lead Generation for HVAC and Service Businesses

We build and manage lead-generation systems for HVAC companies, home-service businesses, real estate, professional services, local businesses, and other lead-driven organizations.

The objective is not simply to produce a higher lead count. We work to improve lead quality, reduce wasted follow-up, connect marketing with the sales process, and create a clear journey from ad or search to inquiry, appointment, estimate, and customer.

##### Website and E-commerce Development

We build and improve business websites, landing pages, and online stores using Shopify, WordPress, and other suitable platforms.

Every website is treated as part of the growth system. It should connect cleanly with advertising, analytics, lead capture, email marketing, customer relationship management, payments, and automation—not operate as an isolated brochure.

##### Klaviyo and Email Marketing

We create and manage lifecycle email programs, with particular experience in Klaviyo and e-commerce.

Services can include campaigns, welcome flows, abandoned-cart recovery, browse abandonment, post-purchase communication, customer win-back, segmentation, and repeat-purchase programs. The aim is to make email a useful customer experience and a dependable part of the revenue system.

##### Bots, Automation, and Complex Integrations

We design bots and automations for lead response, customer support, information collection, lead qualification, appointment scheduling, internal workflows, and follow-up.

We can connect advertising platforms, websites, e-commerce systems, customer relationship management tools, analytics, communication tools, Odoo, and other business platforms. When a standard connection is not enough, we look for a practical custom workflow that reduces manual work and keeps important information moving.

##### Analytics and Measurement

We bring data from advertising, websites, stores, lead systems, and sales processes into a clearer view of spend, leads, purchases, acquisition costs, conversion, and return on investment.

This makes it easier to understand what is working, where performance is being lost, and which opportunities deserve the next investment.

##### Creative

We develop creative directions and produce image-based ads and marketing assets designed for the platforms where they will run.

When professional video production is required, we collaborate with external specialists suited to the project.

#### How We Work

##### Customer Care Comes First

We care about our clients and the trust they place in us. We take time to understand the business, respond thoughtfully, communicate in plain language, and treat the client's goals and budget with care.

We aim to be the kind of partner who pays attention, identifies issues early, and stays involved after the initial setup—not a vendor that disappears once a campaign goes live.

##### Fast Learning and Practical Innovation

Digital platforms and customer behavior change quickly. We continuously evaluate new tools, advertising capabilities, automation methods, and integration options, then apply what is useful to the business.

Innovation should solve a real problem. Whether the answer is a bot, an Odoo workflow, a connection between platforms, or a better reporting process, the technology must make the operation clearer, faster, or more effective.

##### Professional Execution Without Shortcuts

Every area we manage receives focused professional attention. It is not enough for a campaign, website, or automation to function; it should be structured correctly, measurable, maintainable, and ready to improve.

##### Honest Communication and Transparency

We communicate clearly, show the data as it is, and do not make promises that cannot be supported.

When something works, we explain why. When there is a problem, we surface it, take responsibility for our part, and define the next action.

#### Full Transparency

Every client receives access to a personal interface for following activity and results.

The interface can show:

- Advertising budgets and spend
- Leads, purchases, and conversions
- Cost per lead and customer acquisition costs
- Performance by channel and campaign
- Tasks and changes completed
- Issues requiring attention
- Planned actions and next steps

Clients should not have to wait for a monthly report to understand what is happening. Information should be accessible, clear, and useful for following progress.

**Your business. Your data. Always open to you.**

#### Our Clients

We have worked with companies and brands in the United States, Israel, Germany, and other markets across e-commerce, fashion, health and beauty, travel, legal services, food, retail, professional services, and lead generation.

- Natasha Pet Store
- Tool Eden
- Li Vela Beauty Spa
- Diamonds For All
- Mayer Jewelry
- BluYacht Israel
- The Justice Group
- Shira Custom Wigs
- GA Luxury Judaica
- Lampari
- CB Fashion USA
- HumanBeanz
- David Roytman Couture
- Flamingo Kosher
- RoofPax

This section will display company logos. Selecting a logo will take the visitor to the company's official website.

#### About

We are a digital agency that connects advertising, technology, and data into one growth system.

Our work began with Meta Ads and expanded into Google Ads, Yelp Ads, Amazon Ads, e-commerce, Shopify, WordPress, Klaviyo, lifecycle marketing, bots, automation, Odoo, platform integrations, and analytics.

We learned that sustainable growth rarely comes from managing one campaign in isolation. Advertising must connect with the website, lead process, customer experience, creative, email, sales workflow, payments, and business data.

That is why we take responsibility for the full digital system—from the first interaction to measurement, follow-up, and continuous improvement.

#### Closing section

##### Ready to Build a Growth System That Works Together?

Tell us about your business, goals, and current challenges. We will look at the existing customer journey and identify how marketing, technology, automation, and data can work together more effectively.

**Button:** Let's Talk

#### Contact

- Full name
- Company name
- Phone
- Email
- Company website
- How can we help?
- Button: Send Details

#### Footer

- Services
- Clients
- About
- Contact
- Client Login
- Privacy Policy
- Terms of Use
- Accessibility Statement
- Impressum
- Social media links
- Country and language selector

### German (`de`)

- Status: professional Germany-market draft adapted from the English and Hebrew versions and the project owner's positioning instructions on 2026-07-15; awaiting final owner approval and native-language review.
- Direction: left-to-right.
- Audience and tone: decision-makers in Germany; clear, reliable, structured, precise, customer-focused, and innovation-minded without exaggerated promises.
- Evidence boundary: do not add numbers, rankings, certifications, platform-partner status, or guaranteed results unless the project owner supplies verifiable evidence.
- The `Transparenz` navigation item may link to the protected `/transparency` area, but its presence here does not authorize any change to that area.
- Primary SEO phrase: `Performance-Marketing-Agentur`.
- Draft meta title: `Performance-Marketing-Agentur für messbares Wachstum`.
- Draft meta description: `Wir verbinden Performance Marketing, E-Commerce, Leadgenerierung, Automatisierung und Analytics zu einem klaren digitalen Wachstumssystem.`

#### Hauptnavigation

- Startseite
- Leistungen
- Kunden
- Unsere Arbeitsweise
- Transparenz
- Über uns
- Kontakt
- Kunden-Login

#### Hero-Bereich

##### Digitales Marketing, Technologie und messbares Wachstum aus einer Hand

Wir sind eine Digital- und Performance-Marketing-Agentur, die Unternehmen in Deutschland und internationalen Märkten dabei unterstützt, Marketing, Technologie und Daten zu einem funktionierenden Gesamtsystem zu verbinden.

Unsere Erfahrung umfasst Google Ads, Meta Ads, Amazon Ads und Yelp Ads ebenso wie E-Commerce, Websites, Leadgenerierung, E-Mail-Marketing, Bots, Automatisierungen und Analytics. Wir sorgen dafür, dass Kampagnen, Website, Kundendaten und Vertriebsprozesse sinnvoll zusammenspielen.

Unsere Kunden sind uns wichtig. Deshalb hören wir genau zu, kommunizieren klar und entwickeln Lösungen, die zum Unternehmen und zu seinen tatsächlichen Abläufen passen. Ziel ist es, qualifizierte Anfragen zu steigern, Conversions zu verbessern, Kundenbeziehungen zu stärken und profitables Wachstum zu unterstützen.

**Button:** Jetzt sprechen

#### Unsere Leistungen

##### Performance Marketing und bezahlte Werbung

Wir planen, erstellen und steuern Kampagnen auf Google Ads, Meta Ads, Amazon Ads und – wo es für den Zielmarkt sinnvoll ist – Yelp Ads. Dazu gehören Strategie, Zielgruppen- und Keyword-Recherche, Kampagnenaufbau, Creative-Tests, Budgetsteuerung, laufende Optimierung und verständliche Auswertungen.

Im Mittelpunkt stehen nicht nur Klicks oder Reichweite, sondern die geschäftlichen Ergebnisse dahinter: relevante Nachfrage, qualifizierte Kontakte, effizientere Kundengewinnung und ein klarer Weg vom ersten Kontakt bis zum Abschluss.

##### E-Commerce

Wir begleiten E-Commerce-Unternehmen entlang der gesamten Customer Journey – von der ersten Anzeige über den Kauf bis zur Wiederbestellung und langfristigen Kundenbindung.

Dafür verbinden wir Kampagnen, Onlineshop, Creative, Klaviyo, Automatisierungen und Daten. So lassen sich Reibungsverluste erkennen, Conversion-Potenziale besser nutzen, Kundenbeziehungen ausbauen und Umsätze wirtschaftlicher entwickeln.

##### Leadgenerierung für Dienstleister und Fachbetriebe

Wir entwickeln und betreuen Systeme zur Leadgenerierung für Dienstleistungsunternehmen, Immobilien, lokale Betriebe, professionelle Services sowie Unternehmen aus den Bereichen HVAC, Klima-, Heizungs- und Gebäudetechnik.

Dabei geht es nicht nur um eine möglichst hohe Anzahl an Leads. Entscheidend sind relevante Anfragen, ein effizienter Folgeprozess und eine nachvollziehbare Verbindung zwischen Anzeige, Suche, Kontaktaufnahme, Termin, Angebot und Auftrag.

##### Websites und Onlineshops

Wir entwickeln und optimieren Unternehmenswebsites, Landingpages und Onlineshops mit Shopify, WordPress und weiteren geeigneten Lösungen.

Eine Website ist für uns Teil des Marketing- und Vertriebssystems. Sie sollte sauber mit Werbung, Analytics, Formularen, E-Mail-Marketing, CRM, Zahlungsprozessen und Automatisierungen verbunden sein – und nicht isoliert als digitale Broschüre funktionieren.

##### Klaviyo und E-Mail-Marketing

Wir konzipieren und betreuen E-Mail-Marketing mit besonderer Erfahrung in Klaviyo und E-Commerce.

Das Leistungsspektrum kann Newsletter-Kampagnen, Welcome-Flows, Warenkorbabbruch, Browse-Abandonment, Post-Purchase-Kommunikation, Reaktivierung, Segmentierung und Maßnahmen für Wiederkäufe umfassen. E-Mail soll dabei sowohl die Kundenerfahrung verbessern als auch einen verlässlichen Beitrag zum Umsatz leisten.

##### Bots, Automatisierungen und komplexe Integrationen

Wir entwickeln Bots und Automatisierungen für Leadbearbeitung, Kundenservice, Datenerfassung, Qualifizierung, Terminvereinbarung, interne Abläufe und Follow-up-Prozesse.

Dabei verbinden wir Werbeplattformen, Websites, Shops, CRM-Systeme, Analytics, Kommunikationstools, Odoo und weitere Unternehmenslösungen. Wenn eine Standardintegration nicht ausreicht, entwickeln wir einen praktikablen individuellen Prozess, der manuelle Arbeit reduziert und Informationen zuverlässig zwischen den Systemen überträgt.

##### Analytics und Erfolgsmessung

Wir führen Daten aus Werbung, Websites, Onlineshops, Lead-Systemen und Vertriebsprozessen zu einem verständlichen Gesamtbild zusammen. So werden Ausgaben, Leads, Käufe, Akquisitionskosten, Conversions und Rentabilität besser nachvollziehbar.

Damit lässt sich erkennen, welche Maßnahmen funktionieren, wo Potenzial verloren geht und in welche Bereiche als Nächstes investiert werden sollte.

##### Creative

Wir entwickeln Creative-Konzepte sowie bildbasierte Anzeigen und Marketingmaterialien, die auf die jeweilige Werbeplattform und Zielgruppe abgestimmt sind.

Wenn eine professionelle Videoproduktion erforderlich ist, arbeiten wir mit passenden externen Spezialisten zusammen.

#### Unsere Arbeitsweise

##### Kundenorientierung und verlässliche Zusammenarbeit

Wir nehmen die Ziele, Budgets und Herausforderungen unserer Kunden ernst. Dazu gehören genaues Zuhören, erreichbare Ansprechpartner, klare Kommunikation und eine Zusammenarbeit, die auch nach dem Kampagnenstart aufmerksam bleibt.

Unser Anspruch ist eine langfristig verlässliche Partnerschaft. Wir erkennen Probleme frühzeitig, sprechen sie offen an und suchen gemeinsam nach einer sinnvollen Lösung.

##### Struktur, Qualität und Verantwortung

Jeder Bereich wird mit der notwendigen fachlichen Sorgfalt umgesetzt. Es genügt nicht, dass eine Kampagne, Website oder Automatisierung technisch läuft. Sie sollte korrekt strukturiert, messbar, wartbar und kontinuierlich verbesserbar sein.

Wir arbeiten mit klaren Zuständigkeiten, nachvollziehbaren Schritten und einem Blick auf das gesamte System.

##### Schnelles Lernen und sinnvolle Innovation

Digitale Plattformen, Technologien und Kundenbedürfnisse verändern sich laufend. Deshalb prüfen wir neue Tools, Werbemöglichkeiten, Automatisierungen und Integrationen und setzen sie dort ein, wo sie einen echten geschäftlichen Nutzen schaffen.

Innovation ist für uns kein Selbstzweck. Ob Bot, Odoo-Workflow, individuelle Plattformverbindung oder neues Reporting: Die Lösung muss Abläufe verständlicher, schneller oder wirksamer machen.

##### Ehrlichkeit und Transparenz

Wir kommunizieren verständlich, zeigen Daten so, wie sie sind, und geben keine Versprechen ab, die sich nicht seriös belegen lassen.

Wenn etwas funktioniert, erklären wir warum. Wenn ein Problem besteht, benennen wir es, übernehmen Verantwortung für unseren Anteil und definieren die nächsten Schritte.

#### Volle Transparenz

Jeder Kunde erhält Zugang zu einer persönlichen Oberfläche, über die Aktivitäten und Ergebnisse nachvollzogen werden können.

Dort können unter anderem folgende Informationen dargestellt werden:

- Werbebudgets und Ausgaben
- Leads, Käufe und Conversions
- Kosten pro Lead und Kundengewinnungskosten
- Ergebnisse nach Kanal und Kampagne
- Erledigte Aufgaben und Änderungen
- Themen mit Handlungsbedarf
- Geplante Maßnahmen und nächste Schritte

Kunden sollen nicht auf einen Monatsbericht warten müssen, um den aktuellen Stand zu verstehen. Die Informationen sollen zugänglich, klar und für die weitere Steuerung nutzbar sein.

**Ihr Geschäft. Ihre Daten. Für Sie jederzeit transparent.**

#### Unsere Kunden

Wir haben mit Unternehmen und Marken in Deutschland, den USA, Israel und weiteren Märkten zusammengearbeitet. Unsere Erfahrung umfasst E-Commerce, Mode, Gesundheit und Beauty, Tourismus, Rechtsdienstleistungen, Lebensmittel, Handel, professionelle Dienstleistungen und Leadgenerierung.

- Natasha Pet Store
- Tool Eden
- Li Vela Beauty Spa
- Diamonds For All
- Mayer Jewelry
- BluYacht Israel
- The Justice Group
- Shira Custom Wigs
- GA Luxury Judaica
- Lampari
- CB Fashion USA
- HumanBeanz
- David Roytman Couture
- Flamingo Kosher
- RoofPax

In diesem Bereich werden die Logos der Unternehmen angezeigt. Ein Klick auf ein Logo führt zur offiziellen Website des jeweiligen Unternehmens.

#### Über uns

Wir sind eine Digitalagentur, die Werbung, Technologie und Daten zu einem gemeinsamen Wachstumssystem verbindet.

Unsere Arbeit begann mit Meta Ads und wurde um Google Ads, Yelp Ads, Amazon Ads, E-Commerce, Shopify, WordPress, Klaviyo, E-Mail-Marketing, Bots, Automatisierungen, Odoo, Plattformintegrationen und Analytics erweitert.

Die Zusammenarbeit mit deutschen Unternehmen hat uns gezeigt, wie wichtig klare Prozesse, zuverlässige Umsetzung, nachvollziehbare Daten und direkte Kommunikation sind. Gleichzeitig bringen wir internationale Erfahrung und neue technologische Ansätze ein.

Nachhaltiges Wachstum entsteht selten durch eine isolierte Kampagne. Werbung muss mit Website, Lead-Prozess, Customer Experience, Creative, E-Mail, Vertrieb, Zahlungsabläufen und Unternehmensdaten verbunden sein.

Deshalb übernehmen wir Verantwortung für das digitale Gesamtsystem – vom ersten Kontakt über Follow-up und Messung bis zur kontinuierlichen Weiterentwicklung.

#### Abschlussbereich

##### Bereit für ein digitales System, das wirklich zusammenspielt?

Erzählen Sie uns von Ihrem Unternehmen, Ihren Zielen und den aktuellen Herausforderungen. Wir betrachten die bestehende Customer Journey und prüfen, wie Marketing, Technologie, Automatisierung und Daten wirksamer miteinander verbunden werden können.

**Button:** Jetzt sprechen

#### Kontakt

- Vor- und Nachname
- Unternehmen
- Telefon
- E-Mail
- Unternehmenswebsite
- Wie können wir Sie unterstützen?
- Button: Anfrage senden

#### Footer

- Leistungen
- Kunden
- Über uns
- Kontakt
- Kunden-Login
- Datenschutz
- Nutzungsbedingungen
- Erklärung zur Barrierefreiheit
- Impressum
- Links zu sozialen Netzwerken
- Länder- und Sprachauswahl

Localized versions must preserve the core service scope, claims, calls to action, legal meaning, and customer-care positioning while sounding natural in their market. English and German drafts remain subject to project-owner approval; German should also receive a native-language review before publication.


### Hebrew-only language refinement — 2026-09-11

The owner's follow-up requested research into larger Israeli agencies and better Hebrew. This revision takes precedence for Hebrew copy only; the September 11 current homepage model below is updated in place. Full research evidence and writing decisions: `preview-site/docs/israeli-agency-research-20260911.md`.

Use natural professional Hebrew: business goals before tool lists, concrete examples of work, customer care expressed as actions, and ordinary Hebrew for follow-up and lead handling. Retain familiar platform names, but explain professional concepts such as performance marketing and CRM in context. Do not import enterprise-agency budgets, staffing claims, clients, certifications, rankings or promises into FixAds. These are established-agency reference examples, not an audited ranking of Israel's largest agencies.

The homepage headline is now `שיווק דיגיטלי. עם חשיבה עסקית.`; its introduction identifies FixAds and its Israel/international audience. Refined goal panels and contact steps name the business need, the work and the next step. The service page removes unexplained Follow-up, HVAC and signal wording; the original eight service body paragraphs remain unchanged. Hebrew service titles/tags and the e-commerce form option are localized, without changing option order or field names. Neutral publisher/update wording replaces the old personal-review claim for the rewritten Hebrew service page, and its schema omits `reviewedBy` when `reviewedById` is explicitly null. English/German schema output remains unchanged. Only the Hebrew service sitemap date changes; homepage dates are already current.

Exact additional Hebrew overrides (relative to the historical sections below):

```json
{
  "servicePage": {
    "path": "/he/services/",
    "canonical": "https://www.fixads.xyz/he/services/",
    "seoTitle": "שירותי שיווק דיגיטלי, פרסום ממומן ואוטומציות | FixAds",
    "seoDescription": "שירותי FixAds לעסקים בישראל ובעולם: ניהול קמפיינים, חנויות אונליין, פניות איכותיות, אתרים, Klaviyo, אוטומציות ומדידה. גלו מה כל שירות כולל.",
    "eyebrow": "השירותים של FixAds",
    "title": "השירותים שמחברים בין שיווק לתוצאות עסקיות.",
    "intro": "מפרסום ממומן ובניית אתרים ועד שימור לקוחות, אוטומציות ומדידה. אפשר להתחיל משירות אחד או לבנות תהליך שמחבר בין הפרסום, הפנייה והמכירה.",
    "indexLabel": "מפת השירותים",
    "detailEyebrow": "יכולות",
    "detailTitle": "שמונה שירותים שנבנו לעבוד יחד.",
    "approachEyebrow": "איך העבודה מתחברת",
    "approachTitle": "תהליך עבודה ברור, מהתכנון ועד לשיפור השוטף.",
    "faqEyebrow": "שאלות נפוצות",
    "faqTitle": "שאלות על פרסום, לידים וחיבור בין מערכות.",
    "faqItems": [
      {
        "question": "מה זה פרפורמנס (Performance Marketing)?",
        "answer": "פרפורמנס הוא שיווק שנבחן לפי תוצאות מדידות, כמו פניות איכותיות, רכישות ועלות גיוס לקוח. ב־FixAds בודקים גם את מה שקורה אחרי הקליק — באתר, בטיפול בפנייה ובתהליך המכירה — כדי להבין איך הפרסום תורם לעסק."
      },
      {
        "question": "איך בוחרים איפה לפרסם?",
        "answer": "בוחרים לפי קהל היעד, המוצר או השירות, שוק הפעילות והתקציב. בוחנים היכן הלקוחות מחפשים או מגלים את ההצעה שלכם, ואיך העסק יטפל בפניות או בהזמנות. הניסיון שלנו כולל Google, Meta, Amazon ו־Yelp; לא כל פלטפורמה מתאימה לכל עסק או לכל שוק."
      },
      {
        "question": "איך בודקים אם הפניות באמת מתאימות לעסק?",
        "answer": "לא מסתפקים במספר הטפסים שנשלחו. מגדירים עם העסק מהי פנייה רלוונטית — למשל לפי השירות המבוקש ואזור הפעילות — ובודקים מה התקדם לשיחה, לפגישה, להצעת מחיר או למכירה. משלבים את המידע הזמין מהקמפיין וממערכת ניהול הלקוחות, בהתאם לתהליך ולנתונים שאפשר לאמת."
      },
      {
        "question": "איך Shopify, Klaviyo, פרסום ממומן ואנליטיקה עובדים יחד?",
        "answer": "Shopify משמשת לניהול החנות, ו־Klaviyo מאפשרת לבנות אימיילים ותהליכים לפי פעולות הלקוח, כמו הרשמה, נטישת עגלה ורכישה. הפרסום מביא קהל לחנות, והמדידה עוזרת להבין אילו ביקורים הפכו לרכישות והיכן כדאי לשפר את התהליך."
      },
      {
        "question": "מתי נכון לחבר את Odoo?",
        "answer": "כשיש צורך להעביר מידע בין האתר, פניות הלקוחות, המכירות או התפעול, אפשר לבחון חיבור ל־Odoo. קודם מגדירים איזה מידע צריך לעבור ומי ישתמש בו, ואז בודקים אם מתאים חיבור קיים או פיתוח ממוקד. היקף החיבור תלוי במערכת ובצרכים שלכם."
      }
    ],
    "reviewedBy": "תוכן השירותים של FixAds",
    "reviewedDate": "2026-09-11",
    "reviewedById": null,
    "reviewedDateLabel": "עודכן ב־11 בספטמבר 2026",
    "homeLabel": "ראשי",
    "ctaTitle": "צריכים שירות אחד או את כל המערכת?",
    "ctaBody": "ספרו לנו מה העסק צריך עכשיו. נבחן את הפעילות הקיימת ונגדיר יחד מטרה, היקף עבודה ונקודת התחלה.",
    "cta": "בואו נדבר",
    "back": "חזרה לאתר",
    "explore": "לשירותים"
  },
  "serviceTitles": [
    "פרסום ממומן ופרפורמנס",
    "מסחר אלקטרוני",
    "יצירת לידים",
    "פיתוח אתרים",
    "Klaviyo ואימייל מרקטינג",
    "בוטים ואוטומציות",
    "אנליטיקה ומדידה",
    "קריאייטיב"
  ],
  "serviceTags": [
    [
      "Meta",
      "Google",
      "Amazon"
    ],
    [
      "Shopify",
      "CRO",
      "שימור לקוחות"
    ],
    [
      "לידים",
      "שירותים",
      "איכות"
    ],
    [
      "Shopify",
      "WordPress",
      "דפי נחיתה"
    ],
    [
      "Klaviyo",
      "מסע לקוח",
      "שימור לקוחות"
    ],
    [
      "Odoo",
      "בוטים",
      "אינטגרציות"
    ],
    [
      "דאטה",
      "דשבורדים",
      "ROI"
    ],
    [
      "קונספט",
      "מודעות",
      "טסטים"
    ]
  ],
  "formOptions": [
    "בחירת שירות",
    "פרסום ממומן",
    "מסחר אלקטרוני",
    "יצירת לידים",
    "פיתוח אתרים",
    "אימייל מרקטינג",
    "בוטים ואוטומציות",
    "אנליטיקה",
    "קריאייטיב",
    "משהו אחר"
  ],
  "seo": {
    "title": "סוכנות שיווק דיגיטלי לעסקים | פרסום, לידים ומכירות | FixAds",
    "description": "FixAds לעסקים בישראל ובעולם: פרסום ב־Google וב־Meta, חנויות אונליין, Klaviyo, בוטים ואוטומציות. מחברים שיווק, אתרים וטיפול בפניות סביב המטרות שלכם.",
    "canonical": "https://www.fixads.xyz/he/",
    "ogLocale": "he_IL"
  }
}
```

### Market-specific homepage refinement — 2026-09-11

This section is the current source of truth for the homepage additions and overrides. It supersedes matching values in the September 10 revision below; the original eight service descriptions, client list, legal pages, shared English footer, country policy, and protected Transparency application are unchanged. The owner authorized research-led content refinement and new visual assets, not fabricated performance claims.

Research and original image prompts are recorded in `preview-site/docs/market-research-20260911.md`. Key decisions: clearer business outcomes for Hebrew; defined scope, accountability, and an initial discussion for German; e-commerce sales and qualified/bookable service inquiries for English. All locales retain customer care, platform integrations and Odoo. Three concrete goal panels each list two examples of work; six FAQs address practical buying questions; the process names the customer-care practices; a public owner introduction identifies Anton Goldberg, Berlin, without adding personal contact or registration numbers.

The old decorative system diagram is replaced by a four-step native HTML disclosure example: inquiry capture, CRM/Odoo handoff, agreed follow-up, and outcome review. It is illustrative, not a working CRM demo or a claim that a specific client used this exact system. It works without JavaScript, has keyboard-accessible summaries, and uses a single-column phone layout. The goal selector and service CTAs retain the existing form preselection. No form field contract, notification recipient, tracking, consent, country block rule, or protected route was changed.

Original AI-generated conceptual photographs (not client work or employee portraits) are `assets/market-commerce.png`, `assets/market-services.png`, and `assets/market-automation.png`. Both builds produce 640px and 1040px responsive WebP variants using the existing pinned Sharp dependency. The automation image is also the social/Organization representative image. Existing FixAds and client/platform logos remain untouched. Motion is lightweight hover/transform/opacity with reduced-motion overrides. The three homepage sitemap dates are updated to 2026-09-11; service and legal dates are unchanged.

Exact current localized homepage content model:

#### en

```json
{
  "headline": "Turn more clicks into customers.",
  "intro": "Paid ads, websites, and follow-up that work together—for e-commerce brands, HVAC companies, and service businesses.",
  "care": "Your business gets our attention, not just your campaigns. We connect the work, explain the decisions, and stay involved.",
  "cta": "Discuss your marketing",
  "note": "Start with a focused project or connect the full customer journey.",
  "choose": "Where do you want to grow?",
  "focusLabel": "Choose a business goal",
  "approach": "A connected approach",
  "selected": "Talk through this opportunity",
  "goals": [
    {
      "label": "Online sales",
      "title": "Make the whole buying journey work harder.",
      "body": "For stores getting traffic but losing sales—or customers who buy once and disappear.",
      "steps": [
        "Attract",
        "Convert",
        "Retain"
      ],
      "image": "/assets/market-commerce.png",
      "alt": "Conceptual product photography with retail packaging, a bottle, fabric, and a silver ring",
      "service": 2,
      "scope": [
        "Ads + product-page improvements",
        "Klaviyo flows + repeat-purchase journeys"
      ]
    },
    {
      "label": "Better leads",
      "title": "Build a clearer path from inquiry to booked work.",
      "body": "For HVAC and service businesses that need relevant inquiries, clearer qualification, and a reliable next step.",
      "steps": [
        "Reach",
        "Qualify",
        "Follow up"
      ],
      "image": "/assets/market-services.png",
      "alt": "Illustrative photograph of a technician working on an outdoor HVAC unit",
      "service": 3,
      "scope": [
        "Google, Meta, or Yelp + landing pages",
        "Lead qualification + CRM follow-up"
      ]
    },
    {
      "label": "Less manual work",
      "title": "Let your tools pass the work forward.",
      "body": "For businesses copying details between systems, chasing updates, or losing track of new inquiries.",
      "steps": [
        "Capture",
        "Connect",
        "Act"
      ],
      "image": "/assets/market-automation.png",
      "alt": "Conceptual photograph of a silver ribbon connecting three blue frames",
      "service": 6,
      "scope": [
        "Forms, bots, CRM + Odoo integrations",
        "Notifications, handoffs + reporting"
      ]
    }
  ],
  "trust": "Businesses we have worked with",
  "servicesTitle": "The expertise behind the next step.",
  "servicesBody": "Campaigns, conversion, customer retention, and operations. Choose one area to improve, or bring them together.",
  "readMore": "Explore this service",
  "discussService": "Discuss this service",
  "servicePrompt": "Select a service below to see how it works.",
  "nextTitle": "What happens after you get in touch?",
  "nextSteps": [
    [
      "We understand the business.",
      "We review your goals, current activity, and the problem you want to solve."
    ],
    [
      "We find a useful starting point.",
      "Together, we look at the journey from first visit to inquiry, sale, or repeat purchase."
    ],
    [
      "We agree on the next step.",
      "Scope, priorities, and the way we will measure progress are discussed before work begins."
    ]
  ],
  "formTitle": "What would make a difference to your business?",
  "formBody": "Tell us what you want to improve. We will discuss your current setup, priorities, and a useful place to start.",
  "optional": "Optional",
  "extra": "Add company, website, or phone (optional)",
  "messagePlaceholder": "For example: We need more qualified HVAC inquiries, or more repeat purchases from our store.",
  "formSubmit": "Send my inquiry",
  "formNote": "Your details are used to respond to your inquiry.",
  "faqTitle": "A few things you might be wondering.",
  "faqs": [
    [
      "Can we start with one service?",
      "Yes. We can focus on a specific need, such as Google Ads, a Shopify improvement, Klaviyo flows, or an automation, and connect other parts when they are useful."
    ],
    [
      "Can you work with our existing website and tools?",
      "We review your current setup first. The work can include improving what you already use or connecting it to advertising, CRM, Odoo, email, and reporting."
    ],
    [
      "Do you work with e-commerce and local service businesses?",
      "Yes. Our experience includes e-commerce brands, HVAC and home services, professional services, and other businesses that depend on qualified inquiries or online sales."
    ],
    [
      "How will we know what is happening?",
      "We communicate clearly and give clients access to an interface for following activity, results, completed work, and next steps."
    ],
    [
      "What budget do we need?",
      "It depends on your goals, market, existing setup, and the work involved. We discuss the service scope and fees separately from advertising spend before you decide how to proceed."
    ],
    [
      "What if we already work with an agency or an internal team?",
      "We can discuss a focused project or a specific gap in your setup. Responsibilities, access, and handoffs are agreed before work begins."
    ]
  ],
  "market": {
    "introPoints": [
      "Your goals first",
      "Clear scope",
      "Visible progress"
    ],
    "scopeLabel": "What we can work on",
    "processTitle": "Your business is more than an ad account.",
    "processIntro": "Good marketing depends on understanding what happens before and after the click. Here is how we keep the work grounded in your business.",
    "principles": [
      [
        "Define a useful result.",
        "Qualified inquiries, booked work, purchases, or repeat customers—we agree what matters and how to assess it."
      ],
      [
        "Connect the next step.",
        "The ad, website, form, and follow-up need to support the same goal. We look for the handoffs that need attention."
      ],
      [
        "Stay involved.",
        "You can see the work and the next priorities. We explain decisions, flag issues, and keep improving the setup."
      ]
    ],
    "ownerLabel": "Led by Anton Goldberg",
    "ownerBody": "Based in Berlin. Experience with businesses in the US, Israel, Germany, and other markets.",
    "ownerLink": "Meet the owner on LinkedIn",
    "workflowTitle": "A new inquiry should have somewhere to go.",
    "workflowIntro": "An example of the connected workflows we can build. The tools, data, and handoffs are agreed around your business.",
    "workflowLabel": "Example workflow",
    "workflowAlt": "Conceptual blue frames joined by a silver ribbon, representing connected business systems",
    "workflowSteps": [
      [
        "Capture the inquiry",
        "A website form or bot collects the details needed to understand the request."
      ],
      [
        "Put it in the right place",
        "The information moves into your CRM or Odoo, with the fields your team needs."
      ],
      [
        "Make the next action clear",
        "A notification, assigned task, or agreed reply helps the right person follow up."
      ],
      [
        "Learn from the outcome",
        "Bring inquiry status and campaign context together to see which sources lead to useful conversations."
      ]
    ],
    "workflowCta": "Discuss an automation",
    "imageNote": "Original conceptual imagery. No client results are depicted.",
    "aboutTitle": "One partner for marketing and the systems behind it."
  }
}
```

#### de

```json
{
  "headline": "Kunden gewinnen. Mit einem klaren System.",
  "intro": "Performance Marketing, Websites und Automatisierung für Onlineshops, Fachbetriebe und Dienstleister—von der ersten Anzeige bis zur nächsten Kundenanfrage.",
  "care": "Wir nehmen Ihr Unternehmen, Ihre Ziele und Ihr Budget ernst. Wir verbinden die Maßnahmen, erklären Entscheidungen und bleiben ansprechbar.",
  "cta": "Erstgespräch anfragen",
  "note": "Starten Sie mit einem klar abgegrenzten Projekt oder verbinden Sie den gesamten Kundenprozess.",
  "choose": "Wo möchten Sie vorankommen?",
  "focusLabel": "Geschäftliches Ziel wählen",
  "approach": "Ein vernetzter Ansatz",
  "selected": "Diesen Ansatz besprechen",
  "goals": [
    {
      "label": "Online-Umsatz",
      "title": "Vom Shopbesuch zum Kauf und Wiederkauf.",
      "body": "Für Onlineshops, die aus ihrer Reichweite mehr machen und bestehende Kunden gezielter wieder ansprechen möchten.",
      "steps": [
        "Erreichen",
        "Überzeugen",
        "Binden"
      ],
      "image": "/assets/market-commerce.png",
      "alt": "Konzeptionelle Produktaufnahme mit Verpackung, Flasche, Stoff und einem Silberring",
      "service": 2,
      "scope": [
        "Kampagnen + bessere Produktseiten",
        "Klaviyo-Flows + Kundenbindung"
      ]
    },
    {
      "label": "Passende Anfragen",
      "title": "Anfragen, die zu Ihrem Betrieb passen.",
      "body": "Für Dienstleister und Fachbetriebe: Zielgebiet, Leistungsangebot und Qualifizierung gehören genauso dazu wie die Kampagne.",
      "steps": [
        "Erreichen",
        "Qualifizieren",
        "Nachfassen"
      ],
      "image": "/assets/market-services.png",
      "alt": "Illustrative Aufnahme eines Technikers bei der Arbeit an einem Klimagerät",
      "service": 3,
      "scope": [
        "Google oder Meta + Landingpages",
        "Qualifizierung + CRM-Folgeprozesse"
      ]
    },
    {
      "label": "Weniger Handarbeit",
      "title": "Damit Informationen zuverlässig weiterkommen.",
      "body": "Für Unternehmen, die Daten mehrfach eingeben, Rückmeldungen nachverfolgen oder Anfragen zwischen Tools verlieren.",
      "steps": [
        "Erfassen",
        "Verbinden",
        "Handeln"
      ],
      "image": "/assets/market-automation.png",
      "alt": "Konzeptionelle Aufnahme eines silbernen Bandes, das drei blaue Rahmen verbindet",
      "service": 6,
      "scope": [
        "Formulare, Bots, CRM + Odoo",
        "Benachrichtigungen, Aufgaben + Reporting"
      ]
    }
  ],
  "trust": "Unternehmen, mit denen wir gearbeitet haben",
  "servicesTitle": "Die passende Leistung für Ihren nächsten Schritt.",
  "servicesBody": "Kampagnen, Conversion, Kundenbindung und betriebliche Abläufe. Wir verbessern einen gezielten Bereich oder verbinden das Gesamtsystem.",
  "readMore": "Leistung im Detail",
  "discussService": "Leistung besprechen",
  "servicePrompt": "Wählen Sie eine Leistung und erfahren Sie mehr.",
  "nextTitle": "Was passiert nach Ihrer Anfrage?",
  "nextSteps": [
    [
      "Wir verstehen Ihr Unternehmen.",
      "Wir betrachten Ihre Ziele, die laufenden Aktivitäten und die Herausforderung, die Sie lösen möchten."
    ],
    [
      "Wir finden einen sinnvollen Einstieg.",
      "Gemeinsam prüfen wir den Weg vom ersten Besuch zur Anfrage, zum Kauf oder zur Wiederbestellung."
    ],
    [
      "Wir stimmen den nächsten Schritt ab.",
      "Umfang, Prioritäten und Erfolgsmessung werden besprochen, bevor die Umsetzung beginnt."
    ]
  ],
  "formTitle": "Was möchten Sie konkret verbessern?",
  "formBody": "Beschreiben Sie kurz Ihr Vorhaben. Wir besprechen Ihre bestehende Umgebung, die Prioritäten und einen sinnvollen Einstieg.",
  "optional": "Optional",
  "extra": "Unternehmen, Website oder Telefon ergänzen (optional)",
  "messagePlaceholder": "Zum Beispiel: Wir benötigen qualifiziertere Anfragen oder mehr Wiederkäufe in unserem Shop.",
  "formSubmit": "Anfrage senden",
  "formNote": "Ihre Angaben werden zur Beantwortung Ihrer Anfrage verwendet.",
  "faqTitle": "Antworten auf Ihre ersten Fragen.",
  "faqs": [
    [
      "Können wir mit einer einzelnen Leistung starten?",
      "Ja. Wir können uns auf einen konkreten Bedarf konzentrieren, etwa Google Ads, Shopify-Optimierung, Klaviyo-Flows oder eine Automatisierung, und weitere Bereiche bei Bedarf verbinden."
    ],
    [
      "Arbeiten Sie mit unserer bestehenden Website und unseren Tools?",
      "Wir prüfen zuerst Ihre vorhandene Umgebung. Anschließend können wir bestehende Lösungen verbessern oder mit Werbung, CRM, Odoo, E-Mail und Reporting verbinden."
    ],
    [
      "Betreuen Sie E-Commerce und lokale Dienstleister?",
      "Ja. Unsere Erfahrung umfasst E-Commerce-Marken, Klima-, Heizungs- und Gebäudetechnik, professionelle Dienstleistungen und weitere Unternehmen, die qualifizierte Anfragen oder Onlineverkäufe benötigen."
    ],
    [
      "Wie behalten wir den Überblick?",
      "Wir kommunizieren verständlich und stellen Kunden eine Oberfläche bereit, über die Aktivitäten, Ergebnisse, erledigte Aufgaben und nächste Schritte nachvollzogen werden können."
    ],
    [
      "Welches Budget sollten wir einplanen?",
      "Das hängt von Ziel, Markt, bestehender Umgebung und Leistungsumfang ab. Wir besprechen den Umfang und das Honorar getrennt vom Werbebudget, bevor Sie über das weitere Vorgehen entscheiden."
    ],
    [
      "Können Sie unser internes Team oder eine bestehende Agentur ergänzen?",
      "Wir können ein klar abgegrenztes Projekt oder eine konkrete Lücke in Ihrer Umgebung besprechen. Zuständigkeiten, Zugänge und Übergaben werden vor dem Start abgestimmt."
    ]
  ],
  "market": {
    "introPoints": [
      "Ihre Ziele zuerst",
      "Klarer Umfang",
      "Nachvollziehbarer Fortschritt"
    ],
    "scopeLabel": "Mögliche Schwerpunkte",
    "processTitle": "Wir betrachten Ihr Unternehmen, nicht nur das Werbekonto.",
    "processIntro": "Gutes Marketing beginnt beim Geschäftsmodell und endet nicht mit dem Klick. So richten wir die Zusammenarbeit an Ihrem tatsächlichen Bedarf aus.",
    "principles": [
      [
        "Das Ziel gemeinsam festlegen.",
        "Qualifizierte Anfragen, Aufträge, Käufe oder Kundenbindung: Wir stimmen ab, welches Ergebnis relevant ist und wie es bewertet wird."
      ],
      [
        "Die Abläufe verbinden.",
        "Anzeige, Website, Formular und Folgeprozess müssen zum gleichen Ziel beitragen. Wir prüfen, wo Übergaben verbessert werden können."
      ],
      [
        "Verantwortung sichtbar machen.",
        "Sie erhalten Einblick in die Arbeit und die nächsten Prioritäten. Wir erläutern Entscheidungen, benennen Probleme und entwickeln die Lösung weiter."
      ]
    ],
    "ownerLabel": "Inhabergeführt von Anton Goldberg",
    "ownerBody": "Sitz in Berlin. Erfahrung mit Unternehmen in Deutschland, Israel, den USA und weiteren Märkten.",
    "ownerLink": "Zum LinkedIn-Profil des Inhabers",
    "workflowTitle": "Aus einer Anfrage wird ein klarer nächster Schritt.",
    "workflowIntro": "Ein Beispiel für einen vernetzten Ablauf. Tools, Daten und Zuständigkeiten stimmen wir auf Ihr Unternehmen ab.",
    "workflowLabel": "Beispielablauf",
    "workflowAlt": "Konzeptionelle blaue Rahmen mit einem silbernen Band als Sinnbild verbundener Unternehmenssysteme",
    "workflowSteps": [
      [
        "Anfrage erfassen",
        "Ein Websiteformular oder Bot erfasst die Angaben, die zur Einordnung des Anliegens erforderlich sind."
      ],
      [
        "Daten richtig zuordnen",
        "Die Informationen gelangen in Ihr CRM oder Odoo—mit den Feldern, die Ihr Team benötigt."
      ],
      [
        "Die nächste Aufgabe klären",
        "Eine Benachrichtigung, zugewiesene Aufgabe oder abgestimmte Antwort unterstützt die zuständige Person beim Nachfassen."
      ],
      [
        "Ergebnisse nachvollziehen",
        "Anfragestatus und Kampagnenkontext lassen sich zusammenführen, um relevante Quellen besser zu erkennen."
      ]
    ],
    "workflowCta": "Automatisierung besprechen",
    "imageNote": "Eigene konzeptionelle Bildwelt. Keine Darstellung von Kundenergebnissen.",
    "aboutTitle": "Ein Partner für Marketing und die Systeme dahinter."
  }
}
```

#### he

```json
{
  "headline": "שיווק דיגיטלי. עם חשיבה עסקית.",
  "intro": "FixAds היא סוכנות דיגיטל לעסקים בישראל ובעולם. אנחנו מחברים פרסום ממומן, אתרים, קריאייטיב ואוטומציות כדי לעזור לכם להגיע ללקוחות הנכונים, לייצר פניות איכותיות ולהגדיל מכירות.",
  "care": "העסק שלכם חשוב לנו. אנחנו לומדים את המטרות, מסבירים מה עושים ולמה, ונשארים מעורבים גם אחרי שהקמפיין עולה לאוויר.",
  "cta": "בואו נדבר על העסק שלכם",
  "note": "מתחילים בצורך של העסק: שירות ממוקד או ליווי של כל הפעילות הדיגיטלית.",
  "choose": "מה העסק שלכם צריך עכשיו?",
  "focusLabel": "בחירת מטרה עסקית",
  "approach": "מהפרסום ועד הטיפול בלקוח",
  "selected": "בואו נבדוק מה מתאים לעסק",
  "goals": [
    {
      "label": "מכירות אונליין",
      "title": "מהמודעה ועד הרכישה החוזרת.",
      "body": "לחנויות אונליין שרוצות לשפר את תהליך הרכישה ולעודד לקוחות לחזור. מחברים את הקמפיינים, עמודי המוצר והאימיילים לאותה מטרה.",
      "steps": [
        "חשיפה",
        "רכישה",
        "שימור"
      ],
      "image": "/assets/market-commerce.png",
      "alt": "צילום קונספט של אריזה, בקבוק, בד וטבעת כסף לחנות אונליין",
      "service": 2,
      "scope": [
        "קמפיינים ושיפור עמודי מוצר",
        "אימיילים ב־Klaviyo ושימור לקוחות"
      ]
    },
    {
      "label": "פניות איכותיות",
      "title": "לא רק יותר פניות. פניות שמתאימות לעסק.",
      "body": "לעסקי שירותים, נדל״ן ושירותים מקצועיים. מתאימים את הפרסום לקהל ולאזור הפעילות, ומחברים את הפנייה לתהליך מסודר של מענה ומעקב.",
      "steps": [
        "פרסום",
        "פנייה",
        "המשך טיפול"
      ],
      "image": "/assets/market-services.png",
      "alt": "צילום להמחשה של טכנאי בזמן עבודה על יחידת מיזוג אוויר",
      "service": 3,
      "scope": [
        "פרסום ב־Google וב־Meta ודפי נחיתה",
        "סינון פניות ומעקב במערכת ניהול לקוחות"
      ]
    },
    {
      "label": "פחות עבודה ידנית",
      "title": "פחות העתקות ועדכונים. יותר זמן לעסק.",
      "body": "מחברים בין הטפסים, מערכת ניהול הלקוחות והכלים שלכם, כדי לצמצם עבודה ידנית ולשמור על רצף הטיפול בפניות ובמשימות.",
      "steps": [
        "איסוף",
        "חיבור",
        "פעולה"
      ],
      "image": "/assets/market-automation.png",
      "alt": "צילום קונספט של רצועת מתכת המחברת שלוש מסגרות כחולות",
      "service": 6,
      "scope": [
        "חיבור טפסים ובוטים למערכות CRM ו־Odoo",
        "התראות, משימות ודוחות אוטומטיים"
      ]
    }
  ],
  "trust": "חברות ומותגים שעבדנו איתם",
  "servicesTitle": "מה צריך כדי שהשיווק יעבוד טוב יותר?",
  "servicesBody": "פרסום שמגיע לקהל הנכון, אתר שמקל על הפנייה או הרכישה, ותהליך מסודר להמשך הטיפול. בוחרים את השירותים לפי המטרות, התקציב והפעילות שכבר קיימת.",
  "readMore": "לפרטים על השירות",
  "discussService": "בואו נדבר על השירות",
  "servicePrompt": "בחרו שירות כדי לראות מה הוא כולל.",
  "nextTitle": "מה קורה אחרי שפונים אלינו?",
  "nextSteps": [
    [
      "מכירים את העסק.",
      "מדברים על הקהל, המטרות והפעילות הקיימת — ומה תרצו לשפר."
    ],
    [
      "מגדירים מה צריך לשפר.",
      "בודקים את הדרך מהמודעה לאתר, לפנייה או לרכישה, ומזהים במה כדאי להתמקד."
    ],
    [
      "מסכמים איך מתקדמים.",
      "מגדירים את היקף העבודה, תחומי האחריות, התקציב והמדדים לפני שמתחילים."
    ]
  ],
  "formTitle": "בואו נדבר על הצעד הבא של העסק.",
  "formBody": "ספרו לנו מה אתם עושים ומה תרצו להשיג. כמה פרטים יעזרו לנו להבין את הצורך ולהתחיל שיחה ממוקדת.",
  "optional": "רשות",
  "extra": "הוספת חברה, אתר או טלפון (רשות)",
  "messagePlaceholder": "למשל: אנחנו מקבלים פניות שלא מתאימות לשירות שלנו, או רוצים להגדיל מכירות בחנות.",
  "formSubmit": "שליחת פנייה",
  "formNote": "הפרטים שלכם ישמשו כדי להשיב לפנייה.",
  "faqTitle": "לפני שמתחילים לעבוד יחד.",
  "faqs": [
    [
      "אפשר להתחיל משירות אחד?",
      "כן. אפשר להתחיל מניהול קמפיינים, שיפור חנות Shopify, אימיילים ב־Klaviyo או אוטומציה ממוקדת. נבחן מה נדרש עכשיו ואיך הוא משתלב בפעילות הקיימת."
    ],
    [
      "צריך לבנות אתר חדש כדי לעבוד איתכם?",
      "לא בהכרח. קודם בודקים את האתר, הכלים והנתונים שכבר יש לכם. לפי הצורך, נציע שיפור ממוקד או חיבור לפרסום, למערכת ניהול לקוחות, לאימיילים ולדוחות."
    ],
    [
      "לאילו עסקים השירות מתאים?",
      "אנחנו עובדים עם חנויות אונליין, עסקים מקומיים, נדל״ן ושירותים מקצועיים בישראל ובעולם. הניסיון שלנו כולל גם חברות מיזוג אוויר ושירותים בשוק האמריקאי. את הפעילות מתאימים לקהל, לאזור השירות ולתהליך המכירה."
    ],
    [
      "איך נדע על מה עובדים ומה התוצאות?",
      "כל לקוח מקבל גישה לממשק אישי למעקב אחר הפעילות והתוצאות. מציגים את ההוצאות, הפניות או הרכישות, המשימות והצעדים הבאים — ומסבירים מה עובד ומה דורש שיפור."
    ],
    [
      "איך קובעים את תקציב העבודה והפרסום?",
      "מתחילים במטרות, בשוק ובהיקף העבודה הנדרש. מציגים בנפרד את שכר הטרחה ואת תקציב המדיה שמשולם לפלטפורמות הפרסום, ומסכמים את המסגרת לפני שמתחילים."
    ],
    [
      "אפשר לעבוד לצד צוות שיווק או סוכנות קיימת?",
      "כן. אפשר להשתלב בפרויקט מוגדר או לטפל בתחום מסוים. מתאמים מראש מי אחראי לכל חלק, אילו הרשאות נדרשות ואיך מעבירים מידע בין הצדדים."
    ]
  ],
  "market": {
    "introPoints": [
      "המטרות שלכם במרכז",
      "היקף עבודה מוסכם",
      "נתונים ותהליך עבודה גלויים"
    ],
    "scopeLabel": "במה אפשר להתמקד",
    "processTitle": "יש מי שמכיר את העסק ונשאר בתמונה.",
    "processIntro": "אנחנו מחברים בין התכנון לביצוע, עם סדרי עדיפויות ברורים ושיח פתוח לאורך העבודה.",
    "principles": [
      [
        "מתחילים במטרה העסקית.",
        "מגדירים יחד מה חשוב לכם: פניות מתאימות, מכירות, לקוחות חוזרים או חיסכון בעבודה ידנית — ואיך בודקים התקדמות."
      ],
      [
        "מחברים בין השיווק למכירה.",
        "בודקים שהמסר במודעה, החוויה באתר והטיפול בפנייה ממשיכים זה את זה. מזהים איפה לקוחות נתקעים ומה אפשר לשפר."
      ],
      [
        "עובדים בשקיפות ובשיתוף פעולה.",
        "מסבירים את ההחלטות, מעדכנים על העבודה ומשקפים גם בעיות. אתם יודעים מה נעשה, מי מטפל ומה מתוכנן בהמשך."
      ]
    ],
    "ownerLabel": "בהובלת אנטון גולדברג",
    "ownerBody": "ממוקמים בברלין, עם ניסיון בעבודה עם עסקים בישראל, בגרמניה, בארה״ב ובשווקים נוספים.",
    "ownerLink": "היכרות עם הבעלים ב־LinkedIn",
    "workflowTitle": "מה קורה אחרי שלקוח משאיר פרטים?",
    "workflowIntro": "כך יכול להיראות תהליך שמחבר בין הפרסום, מערכת ניהול הלקוחות והצוות שלכם. את השלבים והכלים מתאימים לעסק.",
    "workflowLabel": "תהליך לדוגמה",
    "workflowAlt": "מסגרות כחולות המחוברות ברצועת מתכת, להמחשת חיבור בין מערכות עסקיות",
    "workflowSteps": [
      [
        "הפנייה מתקבלת",
        "טופס באתר או בוט אוספים את הפרטים הדרושים להבנת הבקשה."
      ],
      [
        "המידע מגיע למערכת ניהול הלקוחות",
        "הפרטים עוברים ל־CRM או ל־Odoo, עם השדות ומקור הפנייה שהוגדרו מראש."
      ],
      [
        "מישהו אחראי להמשך הטיפול",
        "הגורם המתאים מקבל התראה או משימה, ואפשר לשלב תשובה אוטומטית בנוסח שסוכם מראש."
      ],
      [
        "בודקים מה התקדם לשיחה או למכירה",
        "מחברים את מצב הפנייה למקור הפרסום, כדי להבין אילו קמפיינים מביאים הזדמנויות רלוונטיות."
      ]
    ],
    "workflowCta": "בואו נדבר על אוטומציה",
    "imageNote": "תמונות קונספט מקוריות. אינן מציגות תוצאות של לקוחות.",
    "aboutTitle": "פרסום, אתרים ואוטומציות. עם אחריות על החיבור ביניהם."
  }
}
```


Exact homepage SEO overrides (canonical URLs and language alternatives remain unchanged):

```json
{
  "en": {
    "title": "Performance Marketing for E-commerce & Leads | FixAds",
    "description": "FixAds connects paid ads, websites, Klaviyo, CRM and automation for e-commerce, HVAC and service businesses. Discuss a focused project or your full customer journey.",
    "canonical": "https://www.fixads.xyz/en/",
    "ogLocale": "en_US"
  },
  "de": {
    "title": "Performance-Marketing-Agentur für Shops & Dienstleister | FixAds",
    "description": "FixAds aus Berlin verbindet Google Ads, Meta, Websites, Klaviyo und Odoo. Für Onlineshops, Fachbetriebe und Dienstleister. Jetzt Erstgespräch anfragen.",
    "canonical": "https://www.fixads.xyz/de/",
    "ogLocale": "de_DE"
  },
  "he": {
    "title": "סוכנות שיווק דיגיטלי ללידים ולמכירות אונליין | FixAds",
    "description": "FixAds מחברת פרסום ממומן, אתרים, Klaviyo, CRM ואוטומציות לחנויות אונליין ולעסקי שירותים. בואו נדבר על פניות איכותיות, מכירות והצעד הבא לעסק שלכם.",
    "canonical": "https://www.fixads.xyz/he/",
    "ogLocale": "he_IL"
  }
}
```

### Lead-focused homepage revision — 2026-09-10 (historical; September 11 overrides above take precedence)

The owner's optimization/publication request supersedes the earlier homepage hero wording, long card presentation, section order, and form-required-message rule. Existing eight service descriptions remain unchanged and appear in native disclosure rows plus the dedicated service pages. The current homepage order is: concise hero with interactive goal selector → original platform rail → original client-logo rail → eight expandable services → working principles → marketing transparency explanation → about → four common questions → contact and next steps → the unchanged shared English footer. This changes marketing pages only, never the protected Transparency application.

The original FixAds logo and verified platform/client marks remain unchanged. Existing illustrative agency photographs are reused; no stock image is presented as proof of actual staff or a named client's results. There are no fabricated metrics, reviews, guarantees, time-to-result claims, or partner credentials.

The hero selector offers three business goals and keeps each goal's image, short explanation, and three-stage journey together. Choosing its contact link preselects the corresponding existing service field. Service disclosure rows have detailed-page and preselected-contact links. Homepage FAQs use native disclosures. The hero's former decorative LIVE system panel is replaced by this useful interaction.

The contact form requires full name, email, service, and inquiry consent. Message is optional. Optional company, website, and phone remain available together in an expandable group; all existing Netlify field names and both registered Forms are preserved. A bare website domain is normalized to HTTPS on blur; an invalid optional field opens its group before validation. Success is announced and focused; network failure keeps entered details. No new analytics, cookies, browser storage, tracking pixels, third-party scripts, notification recipients, or CRM changes are introduced.

All localized homepages are now rendered to static HTML by `scripts/home-pages.mjs` and the shared `render-home.js`; `app.js` attaches behavior to the existing document. Both packaging pipelines use the same renderer. New homepage-only `growth.css` is minified separately and is not included by legal or service documents. The FixAds loader keeps its brand animation but begins leaving after 180ms at load, with a 450ms hard leave trigger. Motion is transform/opacity only and respects reduced motion.

Both builds generate 640px and 1040px WebP derivatives of the three existing agency photographs and a 320px lossless Amazon lockup using pinned `sharp` 0.35.4 in `scripts/responsive-images.mjs`. Original images and logo source files are retained unchanged; responsive `srcset` selects the smaller payload on phones. Shared footer headings/copyright receive a contrast correction without changing footer content. The contact service options include the existing eighth service, Creative / Creative / קריאייטיב, before the fallback option. The no-JavaScript honeypot is clipped to a bounded 1px box so it cannot cause RTL horizontal overflow.

Exact localized homepage copy follows. The property names map directly to `growthContent` in `preview-site/content.js`; the headline, intro, care, CTA, and form values replace the previous homepage values at render time. All copy in these models is website copy; URLs, image paths, and service indices are implementation mappings.

#### en

```json
{
  "headline": "Better leads. Stronger sales. Connected.",
  "intro": "Performance marketing, websites, and automation for e-commerce brands, HVAC companies, and ambitious service businesses.",
  "care": "Your goals matter to us. We connect the work, explain the numbers, and stay involved.",
  "cta": "Let's talk about your growth",
  "note": "Start with a conversation about your business.",
  "choose": "What would you like to improve?",
  "focusLabel": "Choose your focus",
  "approach": "A connected approach",
  "selected": "Discuss this goal",
  "goals": [
    {
      "label": "E-commerce sales",
      "title": "From first click to the next purchase.",
      "body": "Connect your ads, Shopify store, Klaviyo flows, and customer data around the whole buying journey.",
      "steps": [
        "Attract",
        "Convert",
        "Retain"
      ],
      "image": "/assets/ecommerce-growth.jpg",
      "alt": "E-commerce products and a storefront workflow",
      "service": 2
    },
    {
      "label": "Qualified leads",
      "title": "Turn interest into a real conversation.",
      "body": "Connect Google, Meta, or Yelp campaigns with a clear landing page, lead qualification, and reliable follow-up.",
      "steps": [
        "Reach",
        "Qualify",
        "Follow up"
      ],
      "image": "/assets/hvac-leads.jpg",
      "alt": "HVAC technician at work",
      "service": 3
    },
    {
      "label": "Smarter automation",
      "title": "Keep the work moving between your tools.",
      "body": "Connect forms, bots, CRM, Odoo, and reporting so valuable inquiries and everyday tasks keep moving.",
      "steps": [
        "Capture",
        "Connect",
        "Act"
      ],
      "image": "/assets/hero-team.jpg",
      "alt": "Digital workflows being planned in a studio",
      "service": 6
    }
  ],
  "trust": "Businesses we have worked with",
  "servicesTitle": "The right expertise. Right where you need it.",
  "servicesBody": "Start with one service or connect the entire customer journey. Explore what each capability brings to your business.",
  "readMore": "Explore this service",
  "discussService": "Discuss this service",
  "servicePrompt": "Select a service below to see how it works.",
  "nextTitle": "What happens after you get in touch?",
  "nextSteps": [
    [
      "We understand the business.",
      "We review your goals, current activity, and the problem you want to solve."
    ],
    [
      "We find a useful starting point.",
      "Together, we look at the journey from first visit to inquiry, sale, or repeat purchase."
    ],
    [
      "We agree on the next step.",
      "Scope, priorities, and the way we will measure progress are discussed before work begins."
    ]
  ],
  "formTitle": "Let's find your next growth move.",
  "formBody": "Tell us where you want to go. A few details are enough to start the conversation.",
  "optional": "Optional",
  "extra": "Add company, website, or phone (optional)",
  "messagePlaceholder": "For example: We need more qualified HVAC inquiries, or more repeat purchases from our store.",
  "formSubmit": "Start the conversation",
  "formNote": "Your details are used to respond to your inquiry.",
  "faqTitle": "A few things you might be wondering.",
  "faqs": [
    [
      "Can we start with one service?",
      "Yes. We can focus on a specific need, such as Google Ads, a Shopify improvement, Klaviyo flows, or an automation, and connect other parts when they are useful."
    ],
    [
      "Can you work with our existing website and tools?",
      "We review your current setup first. The work can include improving what you already use or connecting it to advertising, CRM, Odoo, email, and reporting."
    ],
    [
      "Do you work with e-commerce and local service businesses?",
      "Yes. Our experience includes e-commerce brands, HVAC and home services, professional services, and other businesses that depend on qualified inquiries or online sales."
    ],
    [
      "How will we know what is happening?",
      "We communicate clearly and give clients access to an interface for following activity, results, completed work, and next steps."
    ]
  ]
}
```

#### de

```json
{
  "headline": "Bessere Anfragen. Stärkere Umsätze. Verbunden.",
  "intro": "Performance Marketing, Websites und Automatisierung für E-Commerce, Fachbetriebe und ambitionierte Dienstleistungsunternehmen.",
  "care": "Ihre Ziele sind uns wichtig. Wir verbinden die Arbeit, erklären die Zahlen und bleiben an Ihrer Seite.",
  "cta": "Wachstum gemeinsam besprechen",
  "note": "Der erste Schritt ist ein Gespräch über Ihr Unternehmen.",
  "choose": "Was möchten Sie verbessern?",
  "focusLabel": "Schwerpunkt wählen",
  "approach": "Ein vernetzter Ansatz",
  "selected": "Dieses Ziel besprechen",
  "goals": [
    {
      "label": "E-Commerce",
      "title": "Vom ersten Klick bis zum nächsten Kauf.",
      "body": "Verbinden Sie Werbung, Shopify-Shop, Klaviyo-Flows und Kundendaten entlang der gesamten Customer Journey.",
      "steps": [
        "Erreichen",
        "Überzeugen",
        "Binden"
      ],
      "image": "/assets/ecommerce-growth.jpg",
      "alt": "Produkte und Arbeitsabläufe im E-Commerce",
      "service": 2
    },
    {
      "label": "Qualifizierte Anfragen",
      "title": "Aus Interesse wird ein echtes Gespräch.",
      "body": "Verbinden Sie Google- oder Meta-Kampagnen mit einer klaren Landingpage, Qualifizierung und einem zuverlässigen Folgeprozess.",
      "steps": [
        "Erreichen",
        "Qualifizieren",
        "Nachfassen"
      ],
      "image": "/assets/hvac-leads.jpg",
      "alt": "Techniker bei der Arbeit an einer Klimaanlage",
      "service": 3
    },
    {
      "label": "Automatisierung",
      "title": "Damit Ihre Systeme zusammenarbeiten.",
      "body": "Verbinden Sie Formulare, Bots, CRM, Odoo und Reporting, damit Anfragen und alltägliche Aufgaben verlässlich weiterlaufen.",
      "steps": [
        "Erfassen",
        "Verbinden",
        "Handeln"
      ],
      "image": "/assets/hero-team.jpg",
      "alt": "Planung digitaler Arbeitsabläufe in einem Studio",
      "service": 6
    }
  ],
  "trust": "Unternehmen, mit denen wir gearbeitet haben",
  "servicesTitle": "Die passende Expertise. Genau dort, wo sie hilft.",
  "servicesBody": "Beginnen Sie mit einer Leistung oder verbinden Sie die gesamte Customer Journey. Entdecken Sie den Beitrag jedes Bereichs für Ihr Unternehmen.",
  "readMore": "Leistung im Detail",
  "discussService": "Leistung besprechen",
  "servicePrompt": "Wählen Sie eine Leistung und erfahren Sie mehr.",
  "nextTitle": "Was passiert nach Ihrer Anfrage?",
  "nextSteps": [
    [
      "Wir verstehen Ihr Unternehmen.",
      "Wir betrachten Ihre Ziele, die laufenden Aktivitäten und die Herausforderung, die Sie lösen möchten."
    ],
    [
      "Wir finden einen sinnvollen Einstieg.",
      "Gemeinsam prüfen wir den Weg vom ersten Besuch zur Anfrage, zum Kauf oder zur Wiederbestellung."
    ],
    [
      "Wir stimmen den nächsten Schritt ab.",
      "Umfang, Prioritäten und Erfolgsmessung werden besprochen, bevor die Umsetzung beginnt."
    ]
  ],
  "formTitle": "Besprechen wir Ihren nächsten Wachstumsschritt.",
  "formBody": "Wohin möchten Sie Ihr Unternehmen entwickeln? Ein paar Angaben reichen für den ersten Kontakt.",
  "optional": "Optional",
  "extra": "Unternehmen, Website oder Telefon ergänzen (optional)",
  "messagePlaceholder": "Zum Beispiel: Wir benötigen qualifiziertere Anfragen oder mehr Wiederkäufe in unserem Shop.",
  "formSubmit": "Gespräch anstoßen",
  "formNote": "Ihre Angaben werden zur Beantwortung Ihrer Anfrage verwendet.",
  "faqTitle": "Antworten auf Ihre ersten Fragen.",
  "faqs": [
    [
      "Können wir mit einer einzelnen Leistung starten?",
      "Ja. Wir können uns auf einen konkreten Bedarf konzentrieren, etwa Google Ads, Shopify-Optimierung, Klaviyo-Flows oder eine Automatisierung, und weitere Bereiche bei Bedarf verbinden."
    ],
    [
      "Arbeiten Sie mit unserer bestehenden Website und unseren Tools?",
      "Wir prüfen zuerst Ihre vorhandene Umgebung. Anschließend können wir bestehende Lösungen verbessern oder mit Werbung, CRM, Odoo, E-Mail und Reporting verbinden."
    ],
    [
      "Betreuen Sie E-Commerce und lokale Dienstleister?",
      "Ja. Unsere Erfahrung umfasst E-Commerce-Marken, Klima-, Heizungs- und Gebäudetechnik, professionelle Dienstleistungen und weitere Unternehmen, die qualifizierte Anfragen oder Onlineverkäufe benötigen."
    ],
    [
      "Wie behalten wir den Überblick?",
      "Wir kommunizieren verständlich und stellen Kunden eine Oberfläche bereit, über die Aktivitäten, Ergebnisse, erledigte Aufgaben und nächste Schritte nachvollzogen werden können."
    ]
  ]
}
```

#### he

```json
{
  "headline": "לידים איכותיים. יותר מכירות. הכול מחובר.",
  "intro": "פרסום ממומן, אתרים ואוטומציות למותגי E-commerce, לעסקי שירותים ולחברות שרוצות לצמוח.",
  "care": "המטרות שלכם חשובות לנו. אנחנו מחברים את הפעילות, מסבירים את הנתונים ונשארים מעורבים.",
  "cta": "בואו נדבר על הצמיחה שלכם",
  "note": "מתחילים בשיחה על העסק שלכם.",
  "choose": "מה תרצו לשפר?",
  "focusLabel": "בחירת תחום",
  "approach": "גישה שמחברת הכול",
  "selected": "בואו נדבר על המטרה",
  "goals": [
    {
      "label": "מכירות אונליין",
      "title": "מהקליק הראשון ועד הרכישה הבאה.",
      "body": "מחברים בין הפרסום, חנות Shopify, תהליכי Klaviyo ונתוני הלקוחות לאורך כל מסע הרכישה.",
      "steps": [
        "חשיפה",
        "רכישה",
        "שימור"
      ],
      "image": "/assets/ecommerce-growth.jpg",
      "alt": "מוצרים ותהליכי עבודה בחנות אונליין",
      "service": 2
    },
    {
      "label": "לידים איכותיים",
      "title": "מהתעניינות לשיחה עם לקוח.",
      "body": "מחברים קמפיינים ב־Google או Meta לדף נחיתה ברור, סינון פניות ותהליך מסודר לחזרה ללקוחות.",
      "steps": [
        "חשיפה",
        "סינון",
        "מעקב"
      ],
      "image": "/assets/hvac-leads.jpg",
      "alt": "טכנאי מיזוג אוויר בזמן עבודה",
      "service": 3
    },
    {
      "label": "אוטומציות חכמות",
      "title": "כדי שהמערכות שלכם יעבדו יחד.",
      "body": "מחברים טפסים, בוטים, CRM, Odoo ודוחות כדי שפניות ומשימות חשובות ימשיכו להתקדם.",
      "steps": [
        "איסוף",
        "חיבור",
        "פעולה"
      ],
      "image": "/assets/hero-team.jpg",
      "alt": "תכנון תהליכי עבודה דיגיטליים בסטודיו",
      "service": 6
    }
  ],
  "trust": "חברות ומותגים שעבדנו איתם",
  "servicesTitle": "המומחיות הנכונה. בדיוק במקום שצריך.",
  "servicesBody": "אפשר להתחיל משירות אחד או לחבר את כל מסע הלקוח. גלו איך כל תחום יכול לתרום לעסק שלכם.",
  "readMore": "לפרטים על השירות",
  "discussService": "בואו נדבר על השירות",
  "servicePrompt": "בחרו שירות כדי לקרוא איך הוא עובד.",
  "nextTitle": "מה קורה אחרי שפונים אלינו?",
  "nextSteps": [
    [
      "מכירים את העסק.",
      "נבחן את המטרות, הפעילות הקיימת והאתגר שתרצו לפתור."
    ],
    [
      "מזהים נקודת התחלה מועילה.",
      "יחד נבחן את הדרך מהביקור הראשון לפנייה, לרכישה או לרכישה חוזרת."
    ],
    [
      "מסכמים את הצעד הבא.",
      "נדבר על היקף העבודה, סדרי העדיפויות ודרך המדידה לפני שמתחילים."
    ]
  ],
  "formTitle": "בואו נמצא את הצעד הבא לצמיחה.",
  "formBody": "ספרו לנו לאן תרצו להגיע. כמה פרטים מספיקים כדי להתחיל בשיחה.",
  "optional": "רשות",
  "extra": "הוספת חברה, אתר או טלפון (רשות)",
  "messagePlaceholder": "לדוגמה: אנחנו צריכים פניות איכותיות יותר, או רוצים להגדיל רכישות חוזרות בחנות.",
  "formSubmit": "בואו נתחיל בשיחה",
  "formNote": "הפרטים שלכם ישמשו כדי להשיב לפנייה.",
  "faqTitle": "כמה דברים שאולי רציתם לשאול.",
  "faqs": [
    [
      "אפשר להתחיל משירות אחד?",
      "כן. אפשר להתמקד בצורך מסוים, כמו Google Ads, שיפור חנות Shopify, תהליכי Klaviyo או אוטומציה, ולחבר תחומים נוספים לפי הצורך."
    ],
    [
      "אפשר לעבוד עם האתר והכלים שכבר יש לנו?",
      "נבחן קודם את המערכת הקיימת. אפשר לשפר את מה שכבר עובד או לחבר אותו לפרסום, CRM, Odoo, אימייל ודוחות."
    ],
    [
      "אתם עובדים עם חנויות אונליין ועסקי שירותים?",
      "כן. הניסיון שלנו כולל מותגי E-commerce, עסקי שירותים מקומיים, מיזוג אוויר, שירותים מקצועיים ועסקים נוספים שמתבססים על פניות איכותיות או מכירות אונליין."
    ],
    [
      "איך נדע מה קורה בפעילות?",
      "אנחנו מתקשרים בצורה ברורה ומעניקים ללקוחות גישה לממשק שבו אפשר לעקוב אחרי הפעילות, התוצאות, המשימות שבוצעו והשלבים הבאים."
    ]
  ]
}
```

## Information architecture

The localized page section sequence is defined by the Hebrew source and the English and German drafts above. The local preview implements one long-form marketing experience per language at `/en/`, `/de/`, and `/he/`, plus one focused service-detail page per language:

- English: `/en/services/`
- German: `/de/leistungen/`
- Hebrew: `/he/services/`

The service-detail pages reuse the approved eight service descriptions and four working-principle descriptions from each locale. Their only additional localized copy is:

**English**

- Eyebrow: `FixAds services`
- Title: `Specialists where it matters. One connected system.`
- Introduction: `Choose the capability you need today or connect the full journey—from demand and conversion to follow-up, retention, automation, and measurement.`
- Detail title: `Eight services designed to work together.`
- Approach title: `Clear ownership from first signal to next action.`
- Closing title: `Need one service—or the whole system?`
- Closing body: `Tell us where growth is getting stuck. We will look at the existing journey and identify the most useful place to begin.`

**German**

- Eyebrow: `FixAds Leistungen`
- Title: `Spezialisiert in jedem Bereich. Verbunden im Gesamtsystem.`
- Introduction: `Nutzen Sie eine einzelne Leistung oder verbinden Sie die gesamte Customer Journey – von Nachfrage und Conversion bis Follow-up, Kundenbindung, Automatisierung und Messung.`
- Detail title: `Acht Leistungen, die strukturiert zusammenspielen.`
- Approach title: `Klare Verantwortung vom ersten Signal bis zum nächsten Schritt.`
- Closing title: `Eine Leistung oder das gesamte System?`
- Closing body: `Beschreiben Sie uns, wo Wachstum aktuell ins Stocken gerät. Wir prüfen die bestehende Customer Journey und identifizieren einen sinnvollen Ausgangspunkt.`

**Hebrew**

- Eyebrow: `השירותים של FixAds`
- Title: `מומחיות בכל תחום. מערכת אחת שעובדת יחד.`
- Introduction: `אפשר להתחיל מהשירות שנדרש עכשיו או לחבר את כל מסע הלקוח — מחשיפה והמרה ועד Follow-up, שימור, אוטומציה ומדידה.`
- Detail title: `שמונה שירותים שנבנו לעבוד יחד.`
- Approach title: `אחריות ברורה מהסיגנל הראשון ועד לפעולה הבאה.`
- Closing title: `צריכים שירות אחד או את כל המערכת?`
- Closing body: `ספרו לנו איפה הצמיחה נעצרת. נבחן את המסע הקיים ונזהה את המקום הנכון להתחיל ממנו.`

### Localized service FAQ and review layer

The localized service pages include the following answer-first FAQ content. The visible questions and answers, JSON-LD `FAQPage` questions and answers, and this specification must remain verbatim matches. The FAQ is additive; it does not rewrite or replace the approved homepage or service descriptions.

**English**

- Eyebrow: `Common questions`
- Title: `Clear answers about how the services connect.`
- Reviewer: `Reviewed by Anton Goldberg, FixAds owner`
- Review date label: `Last reviewed August 25, 2026`
- Review date value: `2026-08-25`

**What is performance marketing?**

Performance marketing is a measurable approach to paid media in which campaigns are evaluated against business outcomes such as qualified inquiries, purchases, acquisition cost, and return on investment (ROI). FixAds connects those outcomes to the website, follow-up process, and reporting so channel metrics are not viewed in isolation.

**How does FixAds choose between Meta Ads, Google Ads, Amazon Ads, and Yelp Ads?**

FixAds chooses channels based on the target market, customer intent, offer, buying journey, available data, and the business's follow-up capacity. A platform is used when its audience and format match the action the business needs.

**How does FixAds evaluate lead quality for HVAC and service businesses?**

FixAds evaluates lead quality by connecting campaign targeting, landing-page context, qualification fields, customer relationship management (CRM), follow-up, appointment or estimate stage, and reporting. The exact workflow is based on the service area, sales process, and data the business can verify.

**How do Shopify, Klaviyo, paid media, and analytics work together?**

Shopify manages the storefront and transaction journey, while Klaviyo supports lifecycle email marketing—messages triggered by stages such as signup, cart abandonment, purchase, and win-back. Paid media creates demand, and analytics connects spend with customer actions and purchases.

**When does an Odoo integration make sense?**

An Odoo integration makes sense when information from websites, lead forms, sales, orders, inventory, or customer service must move through one operational workflow. FixAds maps the required data and actions first, then selects a standard connector or a focused custom integration.

**German**

- Eyebrow: `Häufige Fragen`
- Title: `Klare Antworten zum Zusammenspiel der Leistungen.`
- Reviewer: `Geprüft von Anton Goldberg, Inhaber von FixAds`
- Review date label: `Zuletzt geprüft am 25. August 2026`
- Review date value: `2026-08-25`

**Was ist Performance Marketing?**

Performance Marketing ist ein messbarer Ansatz für bezahlte Werbung, bei dem Kampagnen anhand geschäftlicher Ergebnisse wie qualifizierten Anfragen, Käufen, Akquisitionskosten und Return on Investment (ROI) bewertet werden. FixAds verbindet diese Ergebnisse mit Website, Follow-up und Reporting, damit Kanalmetriken nicht isoliert betrachtet werden.

**Wie wählt FixAds zwischen Meta Ads, Google Ads, Amazon Ads und Yelp Ads?**

FixAds wählt Kanäle anhand von Zielmarkt, Such- und Kaufintention, Angebot, Customer Journey, verfügbarer Datenbasis und Follow-up-Kapazität des Unternehmens. Eine Plattform wird eingesetzt, wenn Zielgruppe und Format zur gewünschten Kundenaktion passen.

**Wie bewertet FixAds die Leadqualität bei HVAC- und Dienstleistungsunternehmen?**

FixAds bewertet Leadqualität, indem Kampagnen-Targeting, Landingpage-Kontext, Qualifizierungsfelder, Customer Relationship Management (CRM), Follow-up, Termin- oder Angebotsphase und Reporting miteinander verbunden werden. Der genaue Ablauf richtet sich nach Einzugsgebiet, Vertriebsprozess und den verifizierbaren Daten des Unternehmens.

**Wie arbeiten Shopify, Klaviyo, Paid Media und Analytics zusammen?**

Shopify steuert Storefront und Kaufprozess, während Klaviyo das Lifecycle-E-Mail-Marketing unterstützt—also Nachrichten zu Phasen wie Anmeldung, Warenkorbabbruch, Kauf und Reaktivierung. Paid Media erzeugt Nachfrage; Analytics verbindet Werbeausgaben mit Kundenaktionen und Käufen.

**Wann ist eine Odoo-Integration sinnvoll?**

Eine Odoo-Integration ist sinnvoll, wenn Informationen aus Website, Leadformularen, Vertrieb, Aufträgen, Lager oder Kundenservice in einem operativen Ablauf zusammengeführt werden müssen. FixAds definiert zuerst Daten und Aktionen und wählt danach einen Standard-Connector oder eine gezielte individuelle Integration.

**Hebrew**

- Eyebrow: `שאלות נפוצות`
- Title: `תשובות ברורות על הדרך שבה השירותים מתחברים.`
- Reviewer: `נבדק על ידי אנטון גולדברג, הבעלים של FixAds`
- Review date label: `נבדק לאחרונה ב־25 באוגוסט 2026`
- Review date value: `2026-08-25`

**מהו Performance Marketing?**

Performance Marketing הוא גישה מדידה לפרסום ממומן, שבה קמפיינים נבחנים לפי תוצאות עסקיות כמו פניות איכותיות, רכישות, עלות רכישה והחזר על ההשקעה (ROI). FixAds מחברת את התוצאות לאתר, לתהליך ה־Follow-up ולדיווח, כך שמדדי הערוצים אינם נבחנים בנפרד.

**איך FixAds בוחרת בין Meta Ads, Google Ads, Amazon Ads ו־Yelp Ads?**

FixAds בוחרת ערוצים לפי שוק היעד, כוונת הלקוח, ההצעה, מסע הרכישה, הנתונים הזמינים ויכולת ה־Follow-up של העסק. פלטפורמה נבחרת כאשר הקהל והפורמט שלה מתאימים לפעולה שהעסק רוצה לייצר.

**איך FixAds בוחנת את איכות הלידים בעסקי HVAC ושירותים?**

FixAds בוחנת את איכות הלידים באמצעות חיבור בין מיקוד הקמפיין, ההקשר בדף הנחיתה, שדות סינון, מערכת ניהול קשרי לקוחות (CRM), Follow-up, שלב הפגישה או הצעת המחיר והדיווח. התהליך המדויק נקבע לפי אזור השירות, תהליך המכירה והנתונים שהעסק יכול לאמת.

**איך Shopify, Klaviyo, פרסום ממומן ואנליטיקה עובדים יחד?**

Shopify מנהלת את החנות ואת מסע הרכישה, ו־Klaviyo תומכת בשיווק אימייל לאורך מחזור חיי הלקוח—הודעות לפי שלבים כמו הרשמה, נטישת עגלה, רכישה והחזרת לקוחות. הפרסום הממומן מייצר ביקוש, והאנליטיקה מחברת בין ההוצאה לפעולות הלקוח ולרכישות.

**מתי נכון לחבר את Odoo?**

חיבור ל־Odoo מתאים כאשר מידע מהאתר, מטפסי לידים, מכירות, הזמנות, מלאי או שירות לקוחות צריך לעבור בתהליך תפעולי אחד. FixAds מגדירה תחילה את הנתונים והפעולות הנדרשים, ולאחר מכן בוחרת מחבר קיים או אינטגרציה מותאמת וממוקדת.

Production interpretation approved on 2026-07-16: “three pages” originally meant the three localized marketing experiences. The owner expanded the information architecture on 2026-07-23 by requesting a dedicated service explanation for SEO; this creates the three localized service-detail routes above without changing country routing or the footer-only language-control rule.

## Design and accessibility requirements

The first visual direction is implemented in `preview-site/` for review. It uses the unchanged FixAds logo, dark navy technical surfaces, electric blue and signal-red accents, editorial typography, human-centered business photography, animated data-system motifs, and restrained scroll motion.

Unless superseded by an approved design decision, implementation should:

- Be responsive across mobile, tablet, and desktop.
- Use semantic HTML and keyboard-accessible controls.
- Provide visible focus states, sufficient color contrast, useful alternative text, and reduced-motion behavior where relevant.
- Set the correct document `lang` and `dir` attributes for every localized view.
- Treat Hebrew RTL layout as a first-class design, including navigation order, icons, spacing, and mixed-direction content.
- Avoid embedding essential text inside images.
- Keep performance suitable for visitors on slower mobile connections.

The implemented preview includes:

- Animated headline word reveals, section reveals, a scroll progress line, platform and client marquees, photo parallax, moving data paths, and interactive cards.
- A full `prefers-reduced-motion` mode that removes nonessential animation.
- Responsive layouts for desktop and mobile, including a true Hebrew RTL document and mirrored navigation behavior.
- Three original website photographs in `preview-site/assets/`: `hero-team.jpg`, `ecommerce-growth.jpg`, and `hvac-leads.jpg`.
- The existing 72 × 72 FixAds logo saved unchanged as `preview-site/assets/fixads-logo.png`.
- A platform ticker that keeps the existing continuous marquee motion while showing compact, transparent, authentic Meta Ads, Google Ads, Yelp Ads, Amazon Ads, Klaviyo, Shopify, and Odoo marks beside or within their names. Shopify uses the complete full-color primary lockup at no less than its required 80px digital width; Klaviyo uses the current wordmark extracted from its official site header; Odoo uses its official two-color brand-asset SVG with only transparent empty canvas cropped from the viewbox. Generic capabilities such as Automation and Analytics remain localized text rather than being assigned invented logos. The visible brand marks link to their official product or company pages, pause the rail on hover or keyboard focus, and a phone touch pauses the motion briefly. With reduced motion, the repeated copy is removed and the single static rail becomes horizontally scrollable instead of being clipped. These third-party marks are used only for platform identification and remain the property of their respective owners.
- A continuously moving client rail using the authentic logo assets and official destination URLs recorded in the Client logo rail section below. Logos are transparently cropped and presented directly on the dark canvas without white cards; the repeated accessibility copy is hidden from assistive technology.
- A phone-first layout tested from 320px through 430px widths, with safe-area support for modern notched devices, compact mobile data visuals, shorter vertical spacing, and typography that accommodates long German words and Hebrew RTL text without horizontal overflow.
- Mobile controls with at least 44–48px practical touch targets, 16px form text to prevent unwanted iOS input zoom, a scroll-safe full-screen menu with contained keyboard focus, and a localized contact dock with one predictable state change: it appears after the hero actions have passed and stays visible until the contact section or footer begins.
- The phone navigation overlay is a direct body child rather than a descendant of the blurred fixed header. This prevents `backdrop-filter` from turning the header into the menu's containing block after scroll. The overlay stays viewport-sized at the top, middle, and bottom of the page, locks background overflow without moving the document, traps focus, closes with Escape, restores focus, and keeps the header logo and animated 48px menu toggle available above it.
- Mobile form fields use appropriate phone keyboards and next-action hints; email, URL, and telephone values remain left-to-right inside the Hebrew experience while names, companies, and messages automatically follow the entered script.
- Touch-device performance rules that remove desktop hover states and hero parallax while retaining purposeful lightweight motion and the existing reduced-motion mode.
- A Kimi K3-assisted mobile refinement that keeps the real hero call to action reachable earlier by using a smaller locale-aware title scale, tighter phone spacing, 16px primary hero copy, and a shorter version of the existing connected-system panel.
- A compact floating contact action that is hidden in the initial HTML/CSS state and becomes available only after the real hero actions have scrolled above the viewport. It no longer checks every piece of underlying text or the closing call to action, which caused it to flicker while scrolling. It remains visible consistently through the content and hides only while the mobile menu, contact section, or footer is present.
- Dedicated service-detail pages use the same brand system, semantic heading structure, localized direction, responsive service index, eight approved service explanations, working principles, static crawler-visible content, lightweight reveal motion, and full reduced-motion behavior.
- Each localized service-detail page adds a dark, responsive five-question FAQ grid with answer-first definitions and a visible owner-reviewer/date line. The grid collapses to one column below 880px, preserves Hebrew RTL, and its content remains static and readable without JavaScript.
- A denser one-column phone form that keeps every field visible and preserves validation, autofill, mixed-direction values, 16px control text, 44px minimum controls, and a vertically resizable message field while reducing unnecessary empty space.
- Purposeful mobile motion instead of one uniform long reveal: shorter section transitions, softer card/process entrances, a single final-word hero marker sweep, press and arrow feedback, and automatic pausing of both moving rails when offscreen or when the browser tab is hidden.
- Performance-sensitive decorative motion uses compositor-safe `transform` and `opacity` animation. The loader no longer transitions `visibility`, the live-status pulse uses a scaled/opacity pseudo-element instead of animated `box-shadow`, and the analytics chart line is static instead of animating SVG `stroke-dashoffset`; reduced-motion behavior remains unchanged.
- A screenshot-based Kimi K3 visual pass using the rendered English, German, Hebrew RTL, mobile-menu, services, and contact states. The accepted refinements keep the floating contact action from covering readable content, strengthen visual separation between phone form fields, present required markers as neutral instructions until a real validation error exists, and soften the platform rail at the viewport edges without changing its content or motion.
- A short FixAds preloader uses the existing logo and brand name with a blue-to-red progress sweep. It runs only once per browser session on a direct locale page, bypasses hash deep links and reduced-motion visitors, remains hidden without JavaScript, begins leaving after the page loads and never waits longer than 900ms to leave.
- The shared footer keeps the approved links, Client Login, legal destinations, German `Impressum`, and the only country/language control. On phones its company and legal links use compact two-column grids, all controls retain practical 44px targets, and a one-time connected signal line plus a low-opacity FixAds word backdrop add motion and depth without another ambient loop.

### Client logo rail

The project owner supplied the client names and explicitly authorized replacing the preview wordmarks with real linked logos on 2026-07-19. Each visible logo is an external link with an accessible company name. The logo itself remains a local, optimized, transparent asset so the rail does not depend on a client website being online at render time. The second visual copy exists only for the seamless animation and is hidden from assistive technology and keyboard navigation.

| Client | Official website |
| --- | --- |
| Natasha Pet Store | `https://www.black-natasha.co.il/` |
| Tool Eden | `https://tooleden.com/` |
| Li Vela Beauty Spa | `https://livelabeauty.com/` |
| Diamonds For All | `https://diamonds-4-all.com/` |
| Mayer Jewelry | `https://www.mayerjewellery.com/` |
| BluYacht Israel | `https://www.bluyacht.com/en/` |
| The Justice Group | `https://www.justicegroup.co.il/` |
| Shira Custom Wigs | `https://shiracustomwigsus.com/` |
| GA Luxury Judaica | `https://www.galuxuryjudaica.com/` |
| Lampari | `https://dynamic-lily-ad468e.netlify.app/` |
| CB Fashion USA | `https://cbfashionusa.com/` |
| HumanBeanz | `https://humanbeanz.com/` |
| David Roytman Couture | `https://davidroytmancouture.com/` |
| Flamingo Kosher | `https://flamingokosher.com/` |
| RoofPax | `https://buyroofpax.com/` |

The rail requirements are:

- Use the authentic marks exposed by the client websites or their domain favicon source; do not redraw, generate, or restyle the logos.
- Remove only empty canvas and solid white or black source backgrounds needed to make the original mark transparent.
- Keep logos within a consistent visual height while allowing each mark's natural width.
- Do not place a white card, pill, border, or invented brand color behind a client logo.
- Pause movement when the rail is offscreen, the browser tab is hidden, the visitor hovers or focuses within it, or reduced motion is requested.
- Keep every company name in accessible link text even when the displayed logo is decorative.

Lampari's public custom domain redirected to HTTPS with a certificate that did not cover the domain when verified on 2026-07-19. Its link therefore uses the same live official site at the verified Netlify deployment hostname instead of sending visitors into a browser certificate warning.

## Technical baseline

Known repository and hosting state on 2026-07-16:

- Hosting target: Netlify.
- Active Netlify project: `fix-ads`, serving `https://www.fixads.xyz` with Forms enabled.
- Netlify project ID: `f0cf4dc3-9784-4f38-a2e2-9b7cf1b9932a`.
- Canonical production host: `https://www.fixads.xyz`.
- `acdt-source/` contains a separate application scaffold; its relationship to the root deployment requires confirmation before production development starts.
- `preview-site/` is the living multilingual marketing source. Its Netlify marketing build is generated separately so protected production files can be merged without rebuilding or modifying the transparency application.
- `preview-site/llms.txt` is the factual AI-discovery summary. It lists only canonical public routes, approved service scope, public contact information, and the current locale policy; it excludes protected Transparency routes and makes no inferred country-blocking claims.
- `preview-site/llms.txt` uses a Markdown H1 and descriptive Markdown links so Chrome's experimental Lighthouse Agentic Browsing audit can identify its canonical routes.

### Preview architecture

- Rendering: dependency-light static HTML, CSS, and JavaScript.
- Localized content source: `preview-site/content.js`.
- Shared interface and interactions: `preview-site/app.js` and `preview-site/styles.css`.
- Shared footer source: `preview-site/footer.js`, rendered from the single English `sharedFooter` model in `preview-site/content.js` on all marketing and legal pages.
- Legal-page source: `preview-site/impressum/`, `preview-site/privacy/`, `preview-site/terms/`, `preview-site/accessibility/`, and `preview-site/legal.js`.
- Localized service-page generation: `preview-site/scripts/service-pages.mjs` creates the static `/en/services/`, `/de/leistungen/`, and `/he/services/` documents from approved content in `preview-site/content.js`; it renders the visible localized FAQ/reviewer layer and matching JSON-LD. `preview-site/service-page.js` supplies only progressive reveal, scroll-progress, and header-state behavior.
- `npm run serve` uses normal static-directory routing rather than a single-page fallback so local legal-page requests resolve to their own documents instead of the marketing homepage.
- Platform-mark assets: `preview-site/assets/platforms/`. Meta, Google Ads, Yelp, Klaviyo, Shopify, and Odoo are transparent SVGs sourced from the brands' official websites; Amazon Ads is the official transparent PNG lockup. The seven proper-brand entries appear as authentic marks in the English, German, and Hebrew ticker, while generic capability entries remain text. The second repeated rail is hidden from assistive technology and its duplicated links are removed from keyboard order.
- Client-mark assets: `preview-site/assets/clients/`. The 15 authentic SVG/PNG marks are local, transparently cropped, collectively about 264KB, and mapped to their verified destinations in `preview-site/content.js`. The visible links carry company-name accessibility labels; the repeated marquee copy is hidden and removed from keyboard order.
- Stable preview paths: `/en/`, `/de/`, `/he/`, `/en/services/`, `/de/leistungen/`, and `/he/services/`, with direct generated documents for every path.
- Geographic entry routing: `preview-site/netlify/edge-functions/locale-router.ts` handles only `GET /` and redirects `IL` to `/he/`, `DE` to `/de/`, and every other allowed country to `/en/`.
- The geographic edge function does not match `/transparency` or any descendant route, so it cannot intercept the protected area.
- No speculative country blocklist is implemented because the exact approved ISO country list is still pending.
- Footer language selection uses direct locale links and is not remembered between visits. The footer is the only location or language control.
- All transparency and client-login links point to the existing protected `https://www.fixads.xyz/transparency` application without changing it.
- All footers link to the canonical German `https://www.fixads.xyz/impressum/` destination using the unchanged label `Impressum`.

### Netlify production integration

- `preview-site/scripts/build-netlify.mjs` creates a marketing-and-legal package in `preview-site/netlify-dist/` with physical locale, localized service-detail, and legal HTML documents plus shared JavaScript, localized content, footer module, styles, logo, photographs, `robots.txt`, `sitemap.xml`, and `llms.txt`.
- Both Netlify and Sites packaging minify the six shared external JavaScript/CSS assets with the pinned `esbuild` development dependency while keeping the authored source readable. Generated HTML, copy, routes, forms, and protected Transparency files are not passed through this optimization.
- The current production root uses three ordered, root-only Netlify redirects with country conditions: `IL` redirects to `/he/`, `DE` redirects to `/de/`, and every other visitor redirects to `/en/`. Direct locale URLs remain stable. The source edge implementation in `preview-site/netlify/edge-functions/locale-router.ts` remains available, but the current function-bearing production baseline is intentionally deployed without an edge function.
- The edge function matches only `GET /`. It cannot run for `/transparency`, `/transparency/**`, legal pages, assets, form submissions, or locale pages.
- The deployment process begins from the exact currently published Netlify file map and adds only the marketing files, localized routes, SEO/GEO files, and root locale edge bundle.
- The production state changed concurrently during preparation. The safety check stopped before upload, re-read the new baseline deploy `6a588b70762e6e3374058da1`, and used that newer deployment as the source of truth.
- In that baseline, the current transparency application was deployed at the root with exact SHA-1 file hashes `81689e69934c48149151198e98fc69d9256d92fe` for its HTML, `f7f468c5953baa8c3526b396be6494e22001574c` for its JavaScript, and `343d85e9cec30a307c45bd5a550c28b7b6633398` for its CSS.
- Production integration reuses those exact immutable transparency file hashes and maps the same HTML to `/transparency/index.html`; `/transparency` and `/transparency/**` rewrite only to that identical file. No transparency HTML, CSS, JavaScript, text, layout, feature, or asset content is edited.
- The validated Netlify draft deploy is `6a588c6faebae3f21df391b1` at `https://6a588c6faebae3f21df391b1--fix-ads.netlify.app`.
- The resulting production deploy is `6a588dc10dbc293982fead10` at `https://6a588dc10dbc293982fead10--fix-ads.netlify.app`, serving the canonical production domain `https://www.fixads.xyz`.
- A later availability audit found that the forced `/transparency/*` fallback intercepted the protected HTML's JavaScript and CSS URLs and returned the HTML shell for both assets. The dedicated `TRANSPARENCY_README.md` authorized the smallest recovery: two exact asset rewrites to the existing immutable bundles, without changing transparency HTML, JavaScript, CSS, content, layout, logic, data, authentication, or features.
- The corrected recovery draft was `6a58b47b1e5c0b2db1603c79`; the resulting recovery production deploy was `6a58b49c1b6c6829944fdfb1` at `https://6a58b49c1b6c6829944fdfb1--fix-ads.netlify.app`.
- The draft returned byte-identical SHA-256 hashes for `/transparency`, a representative descendant `/transparency/dashboard`, and both transparency assets when compared with the then-current production deployment.
- That earlier production baseline contained no Netlify Functions, so the first integration preserved its empty function set. A later external production change published function-bearing baseline `6a53a7965efe486aecdb4b14` with nine live Functions, three schedules, 29 redirects, and a newer protected transparency bundle.
- The platform-mark release merged the multilingual marketing files into that exact newer baseline. Verified draft `6a58f5f69b3f3a8b822b78ea` and production deploy `6a58f689b735fb8e7bf59d17` preserved all nine Functions, all three schedules, their custom API routes, the existing non-marketing files, and the expanded set of 32 redirect rules.
- The protected transparency files in the current baseline remain byte-identical at SHA-1 `e2b26552c5fe4671ff5c7e12900d3a1ed63fc9a5` for `/transparency/index.html`, `571ed211e6fa4cfef8f9efc4c7caff95c29521c9` for `/transparency/assets/index-hCM2TRqE.js`, and `b5221647142c086c7607feac0a02ba0cfbfbdd9b` for `/transparency/assets/index-BsuIzkgE.css`.
- The mobile refinement used verified draft `6a5cb3c606d5211df159dfbf` before publishing deploy `6a5cb412187ccd596c3f298c`. The screenshot-based visual polish then used verified draft `6a5cbd3d714d142c4f0df5e3` before publishing deploy `6a5cbddd68d958737bc7bf3d`. The agency-motion and phone-menu release used protected draft `6a5cd6b1d91a56c69235b77a` before publishing then-current production deploy `6a5cd9013cdc62cf3224c7b5`. It retained the same nine Functions, three schedules, 32 redirects, non-marketing files, and protected transparency hashes while updating only the multilingual marketing presentation and interaction behavior.
- External deploy `6a5ce96568d9582068c7beec` later added a tenth Function for the Codex Meta MCP callback but replaced the approved locale documents. The protected recovery used that exact newer deployment as its baseline, rebuilt the callback with its existing custom route and runtime configuration, overlaid the previously approved marketing bytes, and retained the other nine Functions, three schedules, both Netlify form definitions, legacy files, and domain configuration. Corrected draft `6a5e0dec3cf3704ef174e93e` passed verification before production deploy `6a5e10227f04475923d79b23` was published to `https://www.fixads.xyz` with exactly 32 redirect rules and all ten Functions.
- `www.fixads.xyz` remains the primary custom domain. The bare apex `fixads.xyz` is registered on the same Netlify project as a domain alias so HTTP and HTTPS requests can terminate safely and redirect to the canonical `www` host. Netlify DNS manages both hostnames; do not remove the apex alias when changing domain configuration.
- The permanent legal-page source was added on 2026-07-22 using only business facts verified from the owner's records and the actual marketing-site data flow. Production integration must remove the three obsolete immutable-legacy redirects for `/impressum`, `/privacy`, and `/terms`, serve the four canonical local legal pages, and allow Netlify's directory routing to normalize non-trailing-slash requests without a competing explicit redirect rule or any interception of `/transparency`.
- The 2026-07-23 service/mobile/legal recovery used protected draft `6a61caff3f05b61691da9938`, verified it on the deploy URL, rechecked production against CRM baseline `6a60d74ac87da5183901b4c9`, and published the exact draft at `2026-07-23T08:06:31.543Z`. The live release remains pinned with Netlify's deploy lock. Unlock production only as the final deliberate step of a future protected release, then lock the newly verified published deploy after its live checks pass.
- The 2026-08-03 PW Perfection release used current production `6a706b6490023abb0dfa885c` as its exact baseline and overlaid only the new Transparency HTML, JavaScript, and CSS. Draft and production deploy `6a70839807b37e72c401d1b5` preserved every non-Transparency file, ten Function digests, three schedules, and 29 redirects. It was published at `2026-08-03T12:06:11.004Z` and locked after live verification.

### GitHub source backup

- Production repository: `https://github.com/fixads/fix-ads-landing-page`.
- The multilingual marketing source and this living specification are backed up in the dedicated branch `codex/fixads-multilingual-production`. The legal-page release record is commit `ee1da7bd90134891fab841aae7e55e5219f99bdd`; later recovery commits are recorded in the Change Log rather than treating that historical commit as the current branch head.
- Marketing source remains isolated in `preview-site/`. The repository-root application, guarded `netlify.toml`, and every file under `public/transparency/` are intentionally unchanged.
- This branch is a reviewed source backup and integration proposal; creating or updating it does not deploy the live website. Any later merge into the production branch must preserve the protected transparency area and use the verified production integration process documented above.
- GitHub CLI `gh` is installed locally but currently has no authenticated GitHub session, and this local root repository has no configured remote. The connected GitHub app has repository write access and is the approved backup path while local CLI authentication remains unavailable.
- Netlify automatic Git builds from the connected repository are paused as of 2026-08-19. The connected `main` build does not produce the protected multilingual production package; releases must be assembled from the exact current production file map, verified as a draft, and published through the protected integration process instead of an automatic branch build.

### Sites review deployment

- Public review URL: `https://fixads-multilingual-preview.anton-goldberg.chatgpt.site`.
- Direct review URLs: `https://fixads-multilingual-preview.anton-goldberg.chatgpt.site/en/`, `https://fixads-multilingual-preview.anton-goldberg.chatgpt.site/de/`, and `https://fixads-multilingual-preview.anton-goldberg.chatgpt.site/he/`.
- Current saved and published review release: Sites version 7, source commit `4a6943163813e29b35a1fdd5038508951c4a6179`, deployment `appgdep_6a60a99f412481918084553452e4e439`.
- The Sites review project is `appgprj_6a58733e0cbc81919c68610515ea07ca`; it is separate from the Netlify production project and does not deploy to or modify `fixads.xyz`.
- `preview-site/.openai/hosting.json` binds the review source to the Sites project. `preview-site/scripts/build-sites.mjs` packages the shared HTML, localized content, CSS, JavaScript, `llms.txt`, exact logo, review photographs, advertising-platform marks, and all current client assets into the Sites worker output under `preview-site/dist/`; asset discovery is recursive so an approved asset added under `preview-site/assets/` is not silently omitted from the review build.
- `npm run build` and `npm run build:sites` create the same Sites review package. Generated `preview-site/dist/` output is not source content and may be removed or regenerated.
- The Sites review root mirrors the intended country fallback using hosting-edge country data when available. Stable locale paths remain the authoritative way to inspect a specific language.
- The Sites review worker accepts test submissions on `/en/`, `/de/`, and `/he/` and returns a review-only success response; it does not deliver leads. Production lead delivery remains the responsibility of the Netlify Forms workflow on `fixads.xyz`.
- No country blocklist is active in the review deployment because the approved ISO country list is still pending.
- The review deployment serves only the marketing preview and its assets. Transparency and client-login links leave the review site and open the existing protected `https://www.fixads.xyz/transparency` application; no `/transparency` route or content was copied, changed, intercepted, or deployed.
- Contact form validation and localized success states can be tested in Sites, but review submissions are acknowledged without delivery or storage. Real delivery remains reserved for the later approved Netlify production deployment and notification setup.

### Contact form implementation

- Shared Netlify form name: `fixads-contact`.
- Localized form labels, options, validation messages, consent text, success state, and failure state exist for English, Hebrew, and German.
- Captured fields: full name, company, phone, email, company website, requested service, message, locale, consent, and honeypot.
- Required fields: full name, email, service, and contact consent. Message is optional as of the owner's 2026-09-10 lead-flow optimization; optional company, phone, and website are grouped in a disclosure.
- Every localized consent sentence links directly to `/privacy/` and explains that submitted details are used to answer the request.
- The static HTML contains Netlify's form-detection schema and a honeypot; the visible form submits URL-encoded data without navigating away.
- The visible form posts to its active physical locale route (`/en/`, `/de/`, or `/he/`) so the root country redirects cannot intercept the POST before Netlify Forms processes it.
- The live project currently has a separate existing `fixads-lead` form. The preview intentionally uses a different form name so current chat leads are not disrupted.
- Netlify recognized the new `fixads-contact` form from the protected draft on 2026-07-16 with all ten expected fields and honeypot protection. A synthetic draft submission returned the localized success state.
- The existing `fixads-lead` form remains separately registered with its historical submissions.
- The active production email notification is scoped only to `fixads-contact` and delivers to the verified primary FixAds Google Workspace mailbox `anton@fixads.xyz`. The Netlify hook ID is `6a85c3a47cc1001b25959bde`; `fixads-lead` remains separate and unchanged.
- `admin@fioxads.xyz` is invalid because `fioxads.xyz` has no DNS or MX records. The corrected alias `admin@fixads.xyz` did not receive either Netlify's form notification or a separate external delivery test on 2026-08-19, while the same form notification reached `anton@fixads.xyz` immediately. Do not change the notification back to the admin alias until its Google Workspace routing is repaired and externally retested.

### SEO and GEO baseline

- Every locale has a market-specific title and meta description drawn only from approved visible claims; no rankings, guarantees, ratings, certifications, or unsupported performance numbers were added.
- English targets `performance marketing agency`; German targets `Performance-Marketing-Agentur`; Hebrew describes the same connected digital marketing and growth scope in natural Hebrew.
- `/en/`, `/de/`, and `/he/` have static self-referencing canonicals, reciprocal absolute `hreflang` links, and an English `x-default` URL.
- `/en/services/`, `/de/leistungen/`, and `/he/services/` are static, crawlable service-detail pages with localized titles, descriptions, canonicals, reciprocal `hreflang`, an English `x-default`, a visible eight-service index, and internal links from each localized homepage.
- Open Graph and Twitter metadata use the canonical locale URL, localized title and description, the existing hero photograph, and the FixAds site name.
- Crawler-visible homepage JSON-LD identifies `FixAds` as an `Organization`, the multilingual property as a `WebSite`, and verified operator Anton Goldberg as a `Person`. The Organization includes the public `info@fixads.xyz` contact point, available English/German/Hebrew languages, and the verified FixAds LinkedIn company `sameAs`; the Person uses the verified public owner LinkedIn profile. No private phone, rating, review, certification, guarantee, or platform-partner claim is included.
- Each localized service page embeds its Organization, Person, and WebSite nodes and represents the same visible document as both `CollectionPage` and `FAQPage`. Its graph includes exactly eight visible-matching `Service` entries inside an `ItemList`, a localized `BreadcrumbList`, five exact visible-matching questions and accepted answers, the visible review date and reviewer, and `SpeakableSpecification` selectors for the concise introduction and FAQ answers.
- `robots.txt` allows normal crawling and declares `https://www.fixads.xyz/sitemap.xml`. No AI-crawler-specific allow or block policy is added because the owner has not selected a training/retrieval stance.
- `/llms.txt` provides a concise factual AI-discovery summary with canonical locale/service/legal routes, the approved eight-service scope, public contact route, company LinkedIn, and the current Israel/Germany/allowed-world language policy. It excludes `/transparency` and does not implement or infer a country blocklist.
- `sitemap.xml` lists the three canonical marketing locales, the three localized service-detail pages with reciprocal `hreflang` alternates, and the four canonical legal pages, using the real 2026-07-23 modification date. Protected transparency routes are intentionally excluded and retain `noindex, nofollow`.
- GEO improvements are limited to accurate entity markup, clear headings, direct service explanations, structured lists, visible answer-first FAQs, contextual definitions, reviewer/date signals, and extractable market-specific descriptions. FAQ schema exists only because the exact same Q&A is visible. No sourced statistic, customer result, rating, certification, or guarantee was invented.
- Connection checks measured after publication confirmed: plain HTTP redirects to HTTPS, the HTTPS apex redirects to `https://www.fixads.xyz`, the `www` root redirects by country, and both apex and `www` are covered by the same valid Let's Encrypt certificate for `fixads.xyz` and `*.fixads.xyz` (valid through 2026-09-30).

## Verification checklist

Every implementation change must be checked against the relevant items below:

- [ ] The requested behavior works at the intended routes and screen sizes.
- [ ] Hebrew uses correct RTL document direction and layout.
- [ ] Hebrew copy, section order, labels, client names, and calls to action match the source content in this README.
- [ ] German and English use correct LTR layout.
- [ ] English copy preserves its U.S.-market, customer-care, e-commerce, HVAC, lead-generation, paid-media, automation, Odoo, and measurable-growth positioning.
- [ ] German copy preserves its Germany-market, German-company experience, reliability, customer-care, structured execution, innovation, automation, Odoo, and measurable-growth positioning.
- [ ] Unsupported numbers, guarantees, certifications, or platform-partner claims have not been introduced.
- [ ] Each localized service page contains five visible FAQ questions and answers that match its `FAQPage` JSON-LD verbatim.
- [ ] Each localized service page contains eight `Service` entities matching its eight visible service entries, plus localized breadcrumbs and the visible reviewer/date.
- [ ] `/llms.txt` contains only approved public information and does not list or describe protected Transparency routes.
- [ ] Israel, Germany, fallback, and blocked-country routing behaviors are covered when routing is affected.
- [ ] Language routing does not loop or discard the requested path.
- [ ] The footer is the only visible place where country or language can be viewed or changed.
- [ ] Hebrew, English, German, and legal-page footers use the same English labels, order, legal links, and locale choices; the active locale summary may differ.
- [ ] The Hebrew footer is a left-to-right English island while the rest of the Hebrew page remains correctly mirrored RTL.
- [ ] Every footer contains an `Impressum` link.
- [ ] The Impressum destination always remains German with `lang="de"`, regardless of detected country or selected website language.
- [ ] The Privacy Policy accurately describes the current hosting, form fields, browser storage, cookies, analytics, and recipient flow; no unimplemented tracking is described.
- [ ] The repository contains no personal tax number, personal tax identification number, banking data, client records, invoice transactions, passwords, or other source-record contents.
- [ ] `/transparency` and all `/transparency/**` routes remain operational; changes are limited to the exact scope authorized by `TRANSPARENCY_README.md`.
- [ ] Accessibility and keyboard behavior remain usable.
- [ ] No secrets, private tokens, or personal data were added to browser code or the repository.
- [ ] This README accurately documents the resulting website.
- [ ] The Change Log contains an entry for the change.

## Change Log

### 2026-09-11 — Israeli agency research and Hebrew language refinement

- The owner requested further research into larger Israeli agencies to improve the Hebrew experience, continuing the approved research-and-publication workflow. Reviewed McCann Digital, Angora Media and Twisted as established agency benchmarks, not a verified size or revenue ranking.
- Limited implementation to Hebrew wording on the homepage and service page. English/German content, layout, imagery, brand/client marks, shared English footer, forms, country rules and protected Transparency remain unchanged. Archived the prior source at `output/backups/fixads-before-hebrew-refinement-20260911.tar.gz`.
- Replaced translation-like wording with natural Hebrew, clarified performance marketing and lead quality, explained follow-up as ongoing handling of inquiries, and kept platform names where they are useful. No competitor claims, results, slogans, prices, partner badges or response-time promises were adopted.
- The refreshed Hebrew service page uses a neutral FixAds content byline and the real update date, without claiming Anton personally reviewed today's AI-assisted rewrite. Its visible FAQs and Service schema are still generated from the same content source. Exact wording, research evidence and final checks are recorded below as this release is completed.
- Both builds passed. Exact before/after comparisons show only four changed deployment files: `/content.js`, `/he/index.html`, `/he/services/index.html` and `/sitemap.xml`. Every English/German and legal document, all assets, CSS and interaction scripts remain byte-identical. English/German content objects are also identical.
- Hebrew home and services pages passed 320/390/768/1440px RTL checks with zero overflow and no JavaScript page errors. Goal preselection and the full-height phone menu after deep scrolling passed. The five service FAQs match their visible copy and schema; all eight services and ten form options remain in the original order. Current homepage copy matches the README exactly.
- Local Hebrew mobile Lighthouse scored 100 Performance, 100 Accessibility, 100 Best Practices and 100 SEO; LCP about 1.6 seconds and CLS 0. Report: `output/lighthouse-israeli-local-20260911.json`.
- Ready draft `6aa3ffe6d48b541dee4302a5` was cloned from locked production `6aa3fc97f28be5009d1bb142`, preserving its 85-file map. All five Transparency hashes and sampled protected responses, ten Function digests/overrides, three schedules, both form registrations and all 29 routing rules match the baseline. The three homepages, three service pages, four legal pages and protected root/descendant routes returned 200 on the draft. Production remained unchanged pending verified cutover.

- Backed up the five source/specification/research changes in GitHub commit `d718551b87e47c9eb007d2cf03fb728483e57c7c` before publication. Draft Hebrew form behavior passed with a mocked response and the localized e-commerce value; this is not a real email-delivery test. Both Hebrew pages also passed 320px no-JavaScript/reduced-motion checks.
- Reconfirmed the locked baseline, published the exact verified draft `6aa3ffe6d48b541dee4302a5` at `2026-09-11T13:21:33.929Z`, and re-locked production. Automatic Git builds remain paused. All ten Functions/overrides, three schedules, both Forms and 29 redirect rules were retained.
- After publication, all three homepages, three service pages, four legal pages, robots/sitemap/llms files, `/transparency` and `/transparency/dashboard` returned 200. HTTP/HTTPS and www/non-www variants resolve to canonical HTTPS on `www.fixads.xyz`. The five protected file hashes still match the baseline exactly, and the protected application renders normally.
- Live Hebrew phone checks passed for the new headings, right-to-left layout, service preselection, the full-height menu after deep scrolling, and zero overflow/JavaScript page errors. Live Hebrew mobile Lighthouse scored 100 Performance / 100 Accessibility / 100 Best Practices / 100 SEO, with LCP about 1.4 seconds, CLS 0 and zero non-composited animation elements. Report: `output/lighthouse-israeli-live-20260911.json`. This is a lab page-quality measurement, not evidence of increased leads.

### 2026-09-11 — Market-specific lead messaging and original visuals

- The owner authorized competitor research in Israel, Germany, and other markets, localized lead-generation improvements, new imagery, and production publication. The protected Transparency application remains outside scope.
- Read this specification and the protected-area specification before making changes. Archived the prior source at `output/backups/fixads-before-market-refinement-20260911.tar.gz`.
- This release builds on the September 10 mobile layout: refined all three hero/CTA/goal-panel content models, added six practical FAQs, three working principles, an owner-led introduction, and a four-step CRM/Odoo workflow example. Exact copy and SEO overrides are recorded in the September 11 content section; source research and image prompts are in `preview-site/docs/market-research-20260911.md`.
- Added three original conceptual images and responsive 640/1040 WebP variants. Original logos, footer, all legal documents, contact fields/transport and notification settings, country access/routing, tracking, and protected application source remain unchanged. Both Netlify and Sites builds pass; Sites was not republished.
- Tested English, German and Hebrew at 320, 390, 768 and 1440px: zero overflow, correct LTR/RTL, no broken loaded images or JavaScript page errors. The goal selector, two-item service scopes, native workflow disclosures, service preselection and bottom-scroll full-height phone menu all passed. Mocked form success and failure behavior passed in each language, retaining entries on error; no real email-delivery test is claimed.
- Local mobile Lighthouse scored 100 Performance, 100 Accessibility, 100 Best Practices and 100 SEO, with LCP about 1.6 seconds and CLS 0. Report: `output/lighthouse-market-local-20260911.json`. Scores are lab measurements, not promises of lead growth.
- Created ready draft `6aa3fc97f28be5009d1bb142` from exact locked baseline `6aa2e27f837681e698369aee`, retaining its 76-file map and adding the 64-file marketing overlay. All five protected hashes and sampled route responses, ten Function digests/region/memory overrides, three schedules, both Forms and 29 redirect rules were preserved. Production remained unchanged while draft verification was in progress.

- Backed up all 11 changed/new source, imagery, research and specification files to GitHub `fixads/fix-ads-landing-page`, branch `codex/fixads-multilingual-production`, in commit `8056b66958f75aea418073dfcf4d309b5ce7b8b0` before cutover. This branch does not deploy automatically. The local pre-edit archive remains available.
- Draft verification passed for all three home/service routes, four legal pages, robots/sitemap/llms files, the new responsive assets, the German/LTR Impressum and the protected application's rendered sign-in screen. All three homepages also worked at 320px without JavaScript; native workflow disclosures and form markup remained usable. Draft Lighthouse scored 100 Performance / 100 Accessibility / 100 Best Practices; 69 SEO is expected because Netlify draft URLs have a noindex header.
- Reconfirmed the production baseline had not changed, then published that exact verified draft `6aa3fc97f28be5009d1bb142` at `2026-09-11T13:08:39.428Z` and re-locked it. Automatic Git builds remain paused. Country policy, country routing, form notifications and CRM features were not changed.
- Live verification returned 200 for the three homepages, three service pages, four legal pages, robots/sitemap/llms files, `/transparency` and `/transparency/dashboard`. HTTP/HTTPS and www/non-www variants resolve to HTTPS on `www.fixads.xyz`. Both existing form field registrations are intact. Live English/German/Hebrew phone checks confirmed service preselection, full-height menu after deep scrolling, six FAQs, no overflow, correct text direction and exactly one footer-only locale control, with no marketing JavaScript page errors.
- Live mobile Lighthouse scored 100 Performance, 100 Accessibility, 100 Best Practices and 100 SEO; LCP approximately 1.4 seconds, CLS 0, zero non-composited animation elements, and CSS/JS minification audits passed. Report: `output/lighthouse-market-live-20260911.json`. This measures lab page quality; actual inquiry volume and quality have not yet been measured.
- The final live protected file map still exactly matches the five SHA-1 hashes recorded in the September 10 entry below, and both protected HTML route responses retain SHA-1 `cc45ef3e7bc1dbabf78803b02e288e1465b57f1c`. No Transparency source, asset, route, Function, schedule or footer was edited. `npm audit` found zero vulnerabilities. Automated comparison confirmed all three current README content models exactly match `content.js`.

### 2026-09-10 — Lead-focused agency presentation and simpler inquiries

- The owner authorized a more engaging agency website, lead-conversion improvements, and production publication while keeping every protected Transparency page untouched.
- Backed up the complete marketing source and specifications before edits at `output/backups/fixads-before-growth-20260910.tar.gz`.
- Added a shared, static homepage renderer so each localized page contains its actual content before JavaScript loads; browser scripts enhance the same markup without replacing it on startup. Both Netlify and Sites builds pass.
- Replaced the decorative LIVE panel with a three-goal selector, moved genuine client logos closer to the hero, introduced eight compact service disclosures and four FAQs, and simplified the phone-first inquiry form. All new localized copy and behavior are recorded in the Lead-focused homepage revision section above; no invented results or guarantees were added.
- Optimized existing photographs into responsive WebP assets, retained original logos, corrected text/footer contrast and no-JavaScript RTL overflow, and retained transform/opacity motion with reduced-motion support. `npm audit` reports zero vulnerabilities with pinned `sharp` 0.35.4.
- Tested all three homepages at 320, 390, 768, and 1440px: no horizontal overflow, correct text direction, one footer-only locale control, eight services, and the German Impressum link. Verified goal/service selection, bottom-scroll mobile menu, optional field disclosure, localized form success/error behavior with mocked responses, preserved entries on failure, and no-JavaScript content. No real lead or email-delivery test is implied by these mocked form checks.
- Local mobile Lighthouse measured Performance 99, Accessibility 100, Best Practices 100, and SEO 100; LCP approximately 1.61 seconds, CLS 0, and zero non-composited animation elements. These are laboratory measurements, not guarantees of traffic or lead growth.
- Discovered and preserved the newer locked production baseline `6a9494ff3f9488ae3a1c127a` (2026-08-30), including its BluYacht secret-refresh release, rather than restoring the older release previously recorded here. Created ready draft `6aa2e27f837681e698369aee` by cloning its exact 67-file map and overlaying only the 55 marketing files. All five protected Transparency file hashes, all ten Function digests and per-function region/memory overrides, three schedules, both Forms, and 29 routing rules match that live baseline. At the draft stage, production stayed locked and automatic Git builds stayed paused pending verified cutover.
- Backed up the 14 changed/new source and specification files to GitHub `fixads/fix-ads-landing-page`, branch `codex/fixads-multilingual-production`, in pre-release commit `ccdd09bea65c4c1068d914fb15af393dba4aa960`. This branch does not deploy automatically.
- Verified the draft in all three locales, localized service pages, all four legal pages, `/transparency`, and `/transparency/dashboard`. Draft mobile Lighthouse scored 98 Performance / 100 Accessibility / 100 Best Practices; its SEO score of 69 was solely the expected Netlify draft noindex header. Published that exact verified draft at `2026-09-10T17:07:48.056Z` and re-locked it; automatic Git builds stayed paused.
- Live mobile Lighthouse: Performance 98, Accessibility 100, Best Practices 100, SEO 100; LCP approximately 1.32 seconds, CLS 0, no non-composited animation elements, and CSS/JavaScript minification audits both passed. Live homepages are indexable. Report: `output/lighthouse-growth-live-20260910.json`.
- After publication, all three homepages, three service routes, four legal routes, robots/sitemap/llms files, `/transparency`, and `/transparency/dashboard` returned HTTP 200. All four HTTP/HTTPS and www/non-www root variants resolved to HTTPS on `www.fixads.xyz`. Both existing form registrations retain their fields. Country routing, country-access settings, notification recipients, and CRM behavior were not changed.
- The final live 390×844 browser test passed in English, German, and Hebrew: goal links preselect the right lead-generation service, the bottom-scroll menu opens at y=0 and exactly 844px tall, the fixed header stays legible, and there is no horizontal overflow or JavaScript page error. The live Impressum remains German/LTR and the Transparency landing screen renders normally.
- Verified the exact current protected file map after publication: `/transparency.html` and `/transparency/index.html` SHA-1 `cc45ef3e7bc1dbabf78803b02e288e1465b57f1c`; `/transparency/assets/index-dcqgnlrb.js` `7887a2851e43fd4411fd0bdbec03786b7618083f`; `/transparency/assets/index-ex9ftyzm.css` `0df759a1c5c46a21bd4d68a3795a9796580257b9`; `/transparency/logos/my_logo/fixads_logo.png` `84e765aff19a5f9f95ce26dc53f8fb23c82fd703`. Both protected route response bodies match the existing protected HTML hash. No protected asset, route, application feature, or Function was edited.

### 2026-08-26 — Agentic Browsing and front-end payload optimization

- Re-read the complete living specification and Google's official Lighthouse Agentic Browsing, WebMCP, minification, and non-composited-animation guidance before changing the marketing source.
- Measured the live English homepage with Lighthouse in Chrome 151. The baseline reported 2,475 bytes of estimated CSS minification savings, 2,534 bytes of estimated JavaScript savings, and three non-composited elements: loader `visibility`, status-pulse `box-shadow`, and chart-line `stroke-dashoffset`.
- Measured the experimental Agentic Browsing baseline at one of three weighted checks: CLS passed at `0`, while an invalid `listitem` role on client-logo links failed accessibility-tree integrity and bare URLs caused `llms.txt` link discovery to fail. WebMCP checks were not applicable because the origin trial is not registered; no unverified origin-trial token or imperative tool was added.
- Added one shared build helper using pinned `esbuild` `0.28.2` and made both Netlify and Sites packages minify the authored external CSS and JavaScript without bundling modules or changing readable source files.
- Removed only the invalid client-link ARIA role overrides, converted the factual `llms.txt` route list to descriptive Markdown links, and replaced the three flagged paint/non-compositor effects with compositor-safe or static presentation while preserving the approved visual system and reduced-motion mode.
- Rebuilt both packages and ran Lighthouse against the generated Netlify output in Chrome 151. CSS and JavaScript minification both scored `1` with empty opportunity lists, the non-composited-animation audit returned no applicable elements, CLS remained `0`, and the experimental Agentic Browsing category improved from one of three to all three weighted checks (`1.0`). The accessibility tree and `llms.txt` both passed; WebMCP remained correctly not applicable without origin-trial registration.
- Checked the generated English, German, Hebrew, Hebrew service, and German Impressum documents in a real 390 × 844 browser. All had zero horizontal overflow and zero console warnings/errors; Hebrew remained RTL with an English/LTR footer and LTR email/URL inputs; the bottom-scroll menu remained exactly viewport-height; each homepage retained all contact fields and one footer-only three-link locale control; the service page retained eight services and five FAQs; and the Impressum remained German/LTR.
- Backed up the source, build dependency and scripts, `llms.txt`, accessibility correction, motion correction, and this specification to non-deploying GitHub branch `codex/fixads-multilingual-production` in pre-release commit `a0ccd3e5461b1c96498c53074e52b4d12147c654`. Automatic Netlify Git builds remained paused.
- Rebuilt the Netlify package and created protected draft `6a8f044a194cc32418d072b1` from exact locked production baseline `6a8da624fb23b72f05d73fa1`. The draft retained all 67 baseline files, overlaid only the 46 marketing-package files, and preserved all ten Function digests, three schedules, both registered Forms, 29 redirect rules, and the exact five protected Transparency hashes.
- Repeated Lighthouse on the real draft: minify CSS and JavaScript each scored `1` with zero listed opportunities; the non-composited-animation audit had zero elements and was not applicable; CLS was `0`; Agentic Browsing was all three weighted checks (`1.0`); and measured mobile lab LCP was `2,567 ms`. The accessibility tree and `llms.txt` passed while WebMCP remained correctly not applicable without origin-trial registration.
- Verified every localized homepage and service page, every legal page, `robots.txt`, `sitemap.xml`, `llms.txt`, `/transparency`, and `/transparency/dashboard` at the draft URL. All returned `200`; Germany routed from `/` to `/de/`; the phone menu opened at the page bottom with an exact 390 × 844 viewport overlay; Hebrew and German legal direction remained correct; the complete contact schema and footer-only locale control remained present; and marketing pages had zero console errors or warnings.
- Compared the draft protected application with then-current production byte-for-byte. `/transparency` and its dashboard descendant both retained HTML SHA-1 `4865d5f3f14ec8562fd88e2b6055f7170bb84969`; JavaScript remained `e962f77c533b876be74ec7e505d5b458d35d0313`; CSS remained `0df759a1c5c46a21bd4d68a3795a9796580257b9`; and both assets retained their correct MIME types. The existing unprotected `/favicon.ico` request remained the only protected-app console error.
- Reconfirmed production was still locked at the expected baseline, temporarily unlocked it only for the verified cutover, published the exact draft at `2026-08-26T15:24:36.367Z`, and immediately locked production deploy `6a8f044a194cc32418d072b1`; automatic Git builds remain paused.
- Repeated the complete custom-domain verification. CSS/JavaScript minification still scored `1`, the non-composited list remained empty, CLS remained `0`, Agentic Browsing remained `1.0`, and measured mobile lab LCP was `2,534 ms`. HTTP upgrades to HTTPS, the apex redirects to `www`, Germany routes to German, all localized/service/legal/discovery/protected routes return `200`, the deep-scroll phone menu works without overflow, Hebrew remains RTL, the Impressum remains German/LTR, and the marketing console remains clear.
- Re-downloaded the live marketing CSS and content module and matched each byte-for-byte to the generated package. Re-downloaded the live protected HTML, dashboard, JavaScript, and CSS and reconfirmed the exact protected hashes above. No protected Transparency route, HTML, JavaScript, CSS, asset, content, authentication, data, layout, or behavior changed.
- Kept locale routing unchanged: Israel remains Hebrew, Germany remains German, and every other allowed country remains English. No country limitation was removed and no speculative country was added.
- Kept `/transparency`, every descendant route, its HTML, JavaScript, CSS, assets, routing, authentication, data, and behavior outside the source change and generated marketing package.

### 2026-08-25 — Publish GEO content, entity schema, and AI-discovery improvements

- Re-read this complete living specification before changing the marketing source and used the requested `geo-fix-content` and `geo-fix-schema` workflows with their required reference material.
- Added five localized, visible, answer-first FAQs to each of `/en/services/`, `/de/leistungen/`, and `/he/services/`. The questions explain performance marketing, paid-channel selection, HVAC/service-business lead quality, Shopify/Klaviyo/paid-media/analytics coordination, and Odoo integrations without adding guarantees, rankings, ratings, certifications, platform-partner claims, invented statistics, or unverifiable outcomes.
- Added a visible localized reviewer and `2026-08-25` review date to each service page using only the verified public identity of FixAds owner Anton Goldberg.
- Expanded service-page JSON-LD with self-contained `Organization`, `Person`, and `WebSite` nodes; a dual `CollectionPage`/`FAQPage`; eight visible-matching `Service` entities inside the existing `ItemList`; localized `BreadcrumbList`; exact visible-matching questions and answers; reviewer/date properties; and `SpeakableSpecification` selectors that point only to concise visible text.
- Completed the homepage Organization graph with the public `info@fixads.xyz` contact point, available languages, verified FixAds LinkedIn `sameAs`, and the verified public owner Person/LinkedIn node. No search action was added because the website has no real site search.
- Added `preview-site/llms.txt` with the canonical localized and legal routes, approved eight-service scope, public contact channel, and current locale policy. Added it to both Netlify and Sites packaging while deliberately excluding all protected Transparency routes.
- Added the verified FixAds company LinkedIn link to the single shared English footer used by English, German, Hebrew, and legal marketing pages. This source change does not propagate into or authorize a protected Transparency footer deployment.
- Created the requested workflow artifacts `content-fix-fixads.xyz-2026-08-25.md` and `schema-fixads.xyz.json`; the schema artifact contains copy-ready script blocks extracted from the successfully generated documents.
- Rebuilt both `preview-site/netlify-dist/` and `preview-site/dist/`. JSON validation confirmed the homepage Organization/Person/WebSite graph and, in all three service documents, eight Services, five exact visible-matching FAQs, localized breadcrumbs, contact point, `sameAs`, reviewer/date, and valid parseable JSON-LD.
- Checked English, German, and Hebrew service pages in a real 390 × 844 browser. English and German remained LTR, Hebrew remained RTL, every page exposed five FAQ items, horizontal overflow remained zero, and browser console errors and warnings remained zero.
- Preserved the geographic logic exactly: Israel continues to route to Hebrew, Germany to German, and every other allowed country to English. No approved blocklist entry was removed, no speculative country was added, the pending country limitation was not cancelled, and the edge-router SHA-256 remained `af5560800742e1f2c081b55b078d5116668f9d077ad54f414739b25fe8256cb0`.
- Kept `/transparency`, every `/transparency/**` descendant, protected files, bundles, content, routing, authentication, data, and behavior outside the source and generated marketing packages. No Sites publication was performed.
- Created a pre-release local source archive at `output/backups/fixads-source-before-geo-release-20260825-162414.tar.gz` with SHA-256 `eea4856d3314108d877d51e40720733f15339c68b4d7d68086638b2580ae82fa`, then backed up the approved source/specification state to GitHub branch `codex/fixads-multilingual-production` in commit `71007a389d48c56035c33aa665f09c631f160c45`. The backup branch remains non-deploying because automatic Netlify Git builds are paused.
- Rebuilt `preview-site/netlify-dist/` immediately before release and created protected Netlify draft `6a8da624fb23b72f05d73fa1` from the complete locked production file map of baseline `6a85c66c880b733039531073`. Only the 46 marketing-package files were overlaid; Netlify reused every other live file. The ready draft retained all 10 Function digests, all three schedules, both registered Forms, and all 29 redirect rules.
- Verified the draft over HTTP and in a real 390 × 844 browser. `/`, all three localized home and service routes, all four legal routes, `robots.txt`, `sitemap.xml`, `llms.txt`, `/transparency`, and `/transparency/dashboard` returned `200`. Germany routed from `/` to `/de/`; English and German remained LTR; Hebrew remained RTL; phone horizontal overflow was zero; all three processed `fixads-contact` forms retained the complete ten-field schema; the menu opened after scrolling to the bottom; and the marketing pages produced zero console errors or warnings.
- Parsed the generated draft and confirmed five exact visible FAQs, eight Service entities, Organization, Person, ContactPoint, `sameAs`, Breadcrumb, Speakable, reviewer, and `2026-08-25` date markup on every localized service page. Confirmed the Impressum remained German/LTR and `llms.txt` contained public marketing information only.
- Confirmed production was still the expected locked baseline, temporarily unlocked it only for the verified cutover, published that exact draft at `2026-08-25T14:32:08.122Z`, and immediately locked production deploy `6a8da624fb23b72f05d73fa1`. Automatic Git builds remain paused.
- Repeated the route, structured-data, form-registry, and real-phone checks on `https://www.fixads.xyz`. HTTP, HTTPS, apex, and `www` all resolve to the secure canonical German route from Germany; all localized, service, legal, discovery, and protected routes return `200`; the mobile menu works after bottom scroll; English, German, and Hebrew have zero horizontal overflow; and the live marketing pages have zero console errors or warnings.
- Re-read the complete published Netlify file manifest and reconfirmed the exact protected Transparency SHA-1 values: `/transparency.html` `560de3bbccebfd7d0ff7f87b5229521203dec8b4`, `/transparency/index.html` `4865d5f3f14ec8562fd88e2b6055f7170bb84969`, `/transparency/assets/index-c3mqxovf.js` `e962f77c533b876be74ec7e505d5b458d35d0313`, `/transparency/assets/index-ex9ftyzm.css` `0df759a1c5c46a21bd4d68a3795a9796580257b9`, and `/transparency/logos/my_logo/fixads_logo.png` `84e765aff19a5f9f95ce26dc53f8fb23c82fd703`. The protected application renders at 390 × 844 with zero horizontal overflow. Its existing unprotected `/favicon.ico` request still returns `404`; this release did not touch the protected application or add a Transparency favicon.

### 2026-08-19 — Add authentic Shopify, Klaviyo, and Odoo marks to the moving platform rail

- Re-read this complete living specification and `TRANSPARENCY_README.md` before changing the marketing source.
- Audited all entries in the English, German, and Hebrew platform ticker. Confirmed that Meta Ads, Google Ads, Yelp Ads, and Amazon Ads already used authentic marks while Klaviyo, Shopify, and Odoo were still text-only; generic Automation and Analytics entries intentionally remain localized text because they are capabilities rather than brands.
- Added the complete full-color primary Shopify SVG from Shopify's official brand-assets page without redrawing, recoloring, or squeezing it and rendered it at 84px wide, above Shopify's stated 80px digital minimum.
- Added the current Klaviyo wordmark directly from the official Klaviyo website header and the official Odoo two-color SVG from Odoo's brand-assets CDN. Odoo's unused transparent canvas was removed only by tightening the SVG viewbox; its paths and colors remain unchanged.
- Made every proper-brand item link to its official product or company page, hid the repeated marquee copy from assistive technology and keyboard order, and added hover, focus, and short phone-touch pause behavior without changing the approved continuous motion or localized text sequence. Reduced-motion visitors receive one static horizontally scrollable copy so every logo remains reachable instead of being clipped.
- Rebuilt the Netlify and Sites packages. Local 390 × 844 checks passed for English, German, and Hebrew RTL: every mark loaded at its intended natural ratio, the page width remained exactly 390px, focus and phone touch paused the rail, duplicate links stayed outside the keyboard order, and reduced motion produced one static horizontally scrollable copy.
- Built protected Netlify draft `6a85c66c880b733039531073` from exact locked production baseline `6a85b9671986ca901f3b9b8f`. The draft retained ten Functions, three schedules, both registered Forms, and all 29 redirect rules; every localized home/service/legal/SEO route and all three new assets returned `200`, while the guarded BluYacht endpoint retained its expected `401`.
- Verified the draft in a real 390 × 844 browser with zero marketing console errors and no horizontal overflow. Re-downloaded the draft Transparency HTML, JavaScript, and CSS and confirmed the exact protected SHA-1 values `4865d5f3f14ec8562fd88e2b6055f7170bb84969`, `e962f77c533b876be74ec7e505d5b458d35d0313`, and `0df759a1c5c46a21bd4d68a3795a9796580257b9`; the protected interface rendered normally.
- Rechecked that production was still locked baseline `6a85b9671986ca901f3b9b8f`, temporarily unlocked it only for the controlled cutover, published that exact verified draft at `2026-08-19T15:08:56.986Z`, and immediately locked production deploy `6a85c66c880b733039531073`; automatic Git builds remain paused.
- Repeated live checks on `https://www.fixads.xyz`: all seven proper-brand marks load, Shopify renders at 84px wide, the 390px page has no horizontal overflow or console errors, every localized and legal route remains available, both Forms remain registered, and the `fixads-contact` email hook still targets the verified `anton@fixads.xyz` mailbox.
- Re-downloaded the live Transparency HTML, JavaScript, and CSS after publication and reconfirmed the exact protected hashes above. `/transparency` and `/transparency/dashboard` return and render normally. No `/transparency` route, HTML, JavaScript, CSS, asset, redirect, Function, authentication, data, content, layout, or feature was modified.
- Backed up the six source/specification files to GitHub branch `codex/fixads-multilingual-production` in commit `487d9c19509d28a91d7fe406f89a285e3c2ffa69`. This branch remains a source backup only and cannot trigger the paused Netlify production build.

### 2026-08-19 — Verify and repair production contact-form email delivery

- Re-read this complete living specification, the dedicated `TRANSPARENCY_README.md`, and the Netlify Forms workflow before changing the production notification configuration.
- Confirmed that the live `fixads-contact` form was accepting and storing submissions but had no `submission_created` email notification. The separate historical `fixads-lead` form was left unchanged.
- Checked the requested `admin@fioxads.xyz` destination and confirmed that the misspelled `fioxads.xyz` domain has no DNS or MX service. Confirmed that the canonical `fixads.xyz` domain uses Google mail.
- Tested the corrected `admin@fixads.xyz` alias with a form-scoped Netlify notification and a separate external message. Neither reached the connected FixAds inbox, so the failed notification hook was removed instead of leaving a silent or duplicate route.
- Added a form-scoped production email hook for `fixads-contact` to the verified primary FixAds Google Workspace mailbox `anton@fixads.xyz`.
- Submitted clearly labeled synthetic production leads, confirmed Netlify stored them under `fixads-contact`, and confirmed the primary-mailbox test notification arrived from `formresponses@netlify.com` immediately with the submitted fields. Removed only the two synthetic Netlify submission records after verification; the form count returned to 13.
- Re-listed the live configuration after cleanup: exactly one active `submission_created` email hook remains for `fixads-contact`, its recipient is `anton@fixads.xyz`, and both `fixads-contact` and `fixads-lead` remain registered with their prior real-submission counts.
- This was a Netlify notification configuration change only. No website HTML, CSS, JavaScript, locale route, deployment, Function, schedule, legal page, form schema, or protected Transparency file was changed; production remains locked at deploy `6a85b9671986ca901f3b9b8f`.

### 2026-08-19 — Republish and lock the approved multilingual website as the main site

- Re-read this complete living specification and `TRANSPARENCY_README.md` before inspecting production, building the replacement, changing Netlify settings, or publishing.
- Reproduced the owner's report on current production deploy `6a85b805f1d52abce2690e12`, published at `2026-08-19T14:05:06.031Z` from the CLI with title `FixAds no-chat professional homepage`: the root served a separate one-page homepage and `/en/`, `/de/`, and `/he/` each returned `404`.
- Confirmed that this overwrite was a manual CLI production deploy, not a Git commit build. Locked it as the immutable recovery baseline before preparation, then preserved its ten Function digests, three schedules, both forms, current legacy files, domains, and protected Transparency application.
- Froze and compared the exact current protected hashes: legacy shell `560de3bbccebfd7d0ff7f87b5229521203dec8b4`, Transparency HTML `4865d5f3f14ec8562fd88e2b6055f7170bb84969`, JavaScript `e962f77c533b876be74ec7e505d5b458d35d0313`, CSS `0df759a1c5c46a21bd4d68a3795a9796580257b9`, and protected logo `84e765aff19a5f9f95ce26dc53f8fb23c82fd703`.
- Rebuilt the already approved source in `preview-site/` without changing its copy or design. Protected draft `6a85b9671986ca901f3b9b8f` overlaid only the multilingual marketing, service, legal, SEO, and shared assets onto the exact production baseline and used the verified clean deploy configuration with 29 route rules.
- Verified the draft before cutover: Germany routed to `/de/`; all three localized homepages, all three service pages, all four legal pages, SEO files, Transparency root, representative descendant, protected bundles, and the guarded BluYacht endpoint returned correctly; all ten Functions, three schedules, and both Forms remained present.
- Repeated real-browser checks at 390 × 844. The English mobile menu remained exactly viewport-sized after scrolling to the bottom with no horizontal overflow or console errors; Hebrew remained `lang="he"`/RTL with an English/LTR footer and LTR email/URL controls; the Impressum remained `lang="de"`/LTR without a personal telephone number; and a clearly labeled synthetic draft form submission returned `200`.
- Compared the draft Transparency HTML, JavaScript, and CSS byte-for-byte against the pre-change production captures; all comparisons matched. The draft and live protected application both rendered the same FixAds sign-in interface. The only browser-console request failure was the pre-existing missing unprotected root favicon, not a Transparency bundle or feature.
- Paused Netlify automatic Git builds by setting `build_settings.stop_builds = true`. This prevents the connected repository's outdated `main` build from becoming production automatically; it does not replace the deploy lock, which remains the protection against manual CLI or API releases.
- Rechecked that production was still the expected locked baseline, temporarily unlocked it only for the controlled cutover, published the exact verified draft as production at `2026-08-19T14:27:37.726Z`, and locked deploy `6a85b9671986ca901f3b9b8f` immediately.
- Repeated live checks on `https://www.fixads.xyz`: HTTP upgrades to HTTPS, the apex redirects to `www`, Germany routes to `/de/`, every localized home/service/legal route and both SEO files return `200`, the protected endpoint retains its expected unauthenticated `401`, and the live phone menu remains 390 × 844 after deep scrolling with zero overflow or marketing console errors.
- Re-downloaded the live protected HTML, JavaScript, and CSS after publication. Their hashes remain exactly `4865d5f3f14ec8562fd88e2b6055f7170bb84969`, `e962f77c533b876be74ec7e505d5b458d35d0313`, and `0df759a1c5c46a21bd4d68a3795a9796580257b9`; `/transparency` and `/transparency/dashboard` return and render normally. No Transparency source, content, style, script, asset, authentication, data, route, Function, or feature was modified.

### 2026-08-07 — Restore the multilingual website after the old AI assistant overwrite

- Re-read this complete living specification and `TRANSPARENCY_README.md` before inspecting or changing production.
- Reproduced the owner's report in a real phone browser: production deploy `6a70ade1957ee024eae2d24c`, published on 2026-08-03 at `15:04:22.567Z` with title `Restore merged BluYacht notice and all leads after automatic overwrite`, served the old `FixAds - AI Solution Assistant` homepage while `/en/`, `/de/`, and `/he/` returned `404`.
- Used that exact locked deployment as the recovery baseline rather than rolling back the newer application state. Preserved its ten Function digests, three schedules, both registered forms, current legacy files, and every protected Transparency file.
- Confirmed that the protected files in the 15:04 UTC baseline are newer than the earlier 12:59 UTC Transparency release documented below. Froze the exact current production hashes before recovery: HTML `4865d5f3f14ec8562fd88e2b6055f7170bb84969`, JavaScript `e962f77c533b876be74ec7e505d5b458d35d0313`, CSS `0df759a1c5c46a21bd4d68a3795a9796580257b9`, legacy shell `560de3bbccebfd7d0ff7f87b5229521203dec8b4`, and protected logo `84e765aff19a5f9f95ce26dc53f8fb23c82fd703`.
- Rebuilt the already approved marketing package from `preview-site/` without changing its source copy or design. Overlaid only those marketing files while retaining the production baseline's non-marketing file map and Function bundles.
- Rejected ready draft `6a7615c587fb24488033bb73` because retaining the overwritten deploy's obsolete root rewrite produced 32 processed redirects and prevented country routing. It was never published.
- Built corrected protected draft `6a7616783bceee5b93c19a09` with the previously verified clean deploy config and complete 29-rule route table. Germany routed to `/de/`; `/en/`, `/de/`, `/he/`, all three localized service pages, all four legal pages, SEO files, legacy routes, the Transparency root and descendant, and the protected JavaScript/CSS assets returned correctly.
- Verified the corrected draft at 390 × 844: German had zero horizontal overflow; the menu remained exactly 844px high after scrolling to the bottom; Hebrew remained `lang="he"`/RTL with an English/LTR footer and `Impressum`; the Impressum remained `lang="de"`/LTR; and the marketing console had zero errors or warnings. A clearly labeled synthetic draft contact-form submission returned `200`.
- Compared the draft Transparency HTML, JavaScript, and CSS byte-for-byte with the production baseline using `cmp` and SHA-1; all three comparisons matched. A real browser rendered the same protected sign-in interface.
- Rechecked that production was still locked baseline `6a70ade1957ee024eae2d24c`, temporarily unlocked it only for the controlled cutover, published exact verified draft `6a7616783bceee5b93c19a09` at `2026-08-07T17:35:37.789Z`, and locked the new release immediately.
- Repeated live checks after publication: HTTP redirects to HTTPS, the apex redirects to `www`, Germany routes to `/de/`, every localized home/service/legal route returns `200`, the protected BluYacht endpoint retains its expected unauthenticated `401`, both forms remain registered, all ten Functions and three schedules remain present, and the phone menu passes the bottom-scroll regression check with zero overflow or console errors.
- Re-downloaded the live protected HTML, JavaScript, and CSS after publication. Their hashes remained exactly `4865d5f3f14ec8562fd88e2b6055f7170bb84969`, `e962f77c533b876be74ec7e505d5b458d35d0313`, and `0df759a1c5c46a21bd4d68a3795a9796580257b9`; byte comparisons against the pre-change captures all returned equal, and `/transparency` plus `/transparency/dashboard` rendered normally. No Transparency source, content, styling, script, asset, authentication, data, or feature was modified.

### 2026-08-03 — Correct PW Perfection to Meta Ads and verify a live lead

- Used the owner's correction that PW Perfection runs Meta Ads, not Google Ads, and limited the change to the PW-only presentation, API route, isolated ingest service, and landing-form attribution.
- Added `fbclid` capture beside the existing UTM fields, submitted the clearly labeled live lead `TEST Meta Lead 2026-08-03`, and confirmed that the shared CRM returned it with `facebook / paid_social` attribution and the Meta click ID.
- Published the landing page as deploy `6a7090825016e318dbb0df61`, shared Cloud Run revision `fixads-transparency-api-00051-545`, and isolated ingest revision `pw-perfection-crm-api-00004-z75`.
- Built protected Transparency draft `6a708f472cace50bb97bc718` from exact locked baseline `6a708cc70845930483f7b3f3`, preserved all ten Functions, three schedules, and 29 redirects, then published and locked that same verified draft at `2026-08-03T12:59:31.912Z`.
- Rechecked all ten account lists, confirmed all nine other active users still receive HTTP 403 from PW data, and left existing demo staleness and Meta upstream warnings unchanged.
- Rotated only the PW credential after browser diagnostics exposed its test-time value, synchronized both isolated user hashes, and updated Apple Passwords. No other account password changed.

### 2026-08-03 — Add isolated PW Perfection access inside Transparency

- Re-read this complete living specification, `TRANSPARENCY_README.md`, and the production deployment guard before changing the protected application.
- Used the owner's explicit instruction to create only the `pw-perfection` account inside the existing Transparency location, with its own password, phone call, prefilled editable WhatsApp, comments, lead statuses, and Google Ads connection state.
- Kept PW leads in the named `pw-perfection-crm` Firestore database and enforced a server-reloaded `pwPerfectionAccess` entitlement; all nine other active users returned HTTP 403 from the PW route.
- Built a protected draft from exact production baseline `6a706b6490023abb0dfa885c`. File-map comparison found only four changed Transparency paths and zero non-Transparency changes; all ten Functions, three schedules, and 29 redirects remained exact.
- Published and locked verified deploy `6a70839807b37e72c401d1b5` at `2026-08-03T12:06:11.004Z`.
- Live 390×844 testing loaded two isolated test leads, confirmed phone and WhatsApp destinations, saved a timestamped comment, and showed the Google Ads pending state without reusing another customer's ID.
- Re-ran all ten user account-list checks, the shared Google/Meta health suite, public Transparency response, and existing Function routes. Existing demo age and Meta upstream warnings were unchanged; the preserved BluYacht/chat routes returned expected protected responses rather than 404.

### 2026-07-23 — Restore the multilingual release, clarify the Impressum, stabilize mobile contact, and add localized service pages

- Re-read this complete living specification and `TRANSPARENCY_README.md` before changing the site or deployment.
- Reproduced the owner's “old website” report: production had been switched back at `2026-07-23T07:39:39.744Z` to older deploy `6a60d74ac87da5183901b4c9`, titled `Fix CRM backup authentication`. Its 21-file assistant package served the old AI chat homepage while `/en/`, `/de/`, `/he/`, and the four local legal pages returned 404. The ten Functions, three schedules, and protected transparency application remained present.
- Kept the legally required business Wirtschafts-Identifikationsnummer in the German Impressum, labeled it explicitly as a business identifier rather than a personal tax ID, and gave it a clearer visual treatment. Removed the owner's direct personal telephone number from the Impressum, Privacy Policy, Accessibility Statement, and current living specification; public contact now uses `info@fixads.xyz` and the localized website contact form.
- Simplified the phone contact dock to one predictable scroll lifecycle: hidden in the hero, consistently visible after the hero actions pass, and hidden only for the open menu, contact section, and footer. Removed per-element collision sampling and the closing-action blocker that caused visible flicker during normal scrolling.
- Added static, localized service-detail pages at `/en/services/`, `/de/leistungen/`, and `/he/services/`. Each page uses the already approved eight service descriptions and working principles, adds only the localized framing copy recorded in this specification, and includes responsive navigation, purposeful motion, reduced-motion support, internal contact links, canonical URLs, reciprocal `hreflang`, Open Graph/Twitter metadata, and visible-content `CollectionPage`/`ItemList` JSON-LD.
- Added direct homepage navigation and service-section links to the localized detail pages, and added all three routes to the sitemap without changing country routing or placing a language control outside the footer.
- Extended both the Netlify and Sites packaging scripts to include the static localized service documents and their small shared interaction script.
- Prepared the release from the exact current CRM production baseline so the existing Function bundles, schedules, forms, custom routes, non-marketing files, and protected transparency bytes remain intact.
- Verified protected draft `6a61caff3f05b61691da9938`: all three homepages, three service pages, four legal pages, SEO files, legacy page, transparency root and descendant returned successfully; the three protected hashes stayed exact; transparency rendered in a JavaScript-capable browser; all ten Functions, three schedules, and both forms remained present; and 390 × 844 English, German, Hebrew RTL, service, menu, Impressum, and contact-dock checks completed without overflow or console errors.
- Rechecked that production was still CRM baseline `6a60d74ac87da5183901b4c9`, then published that exact draft at `2026-07-23T08:06:31.543Z`. Live HTTP/HTTPS, apex/`www`, German root routing, all localized and legal routes, mobile behavior, SEO routes, legacy files, Functions, schedules, forms, and protected hashes passed after publication.
- Locked published deploy `6a61caff3f05b61691da9938` in Netlify after verification so future builds cannot automatically replace the corrected production site. A future intentional production release must use the protected draft process and explicitly unlock only for that controlled cutover.
- Backed up the complete source change and living specification to GitHub branch `codex/fixads-multilingual-production`; commit `a8763cdc8a89be1273df0b343846f6b5716b1838` is the first branch head containing all twelve service, mobile, legal, build, sitemap, and README files from this release.

### 2026-07-22 — Recover multilingual and legal routes after the CRM authentication deploy

- Re-read this complete living specification and the dedicated transparency specification after the owner reported that the live legal links showed no content.
- Reproduced the failure in a real browser: `https://www.fixads.xyz/impressum/` redirected to the obsolete deployment `69adc38bf3c64000080241fa`, where it returned `404 Site not found`; `/privacy/` and `/terms/` followed the same stale redirects, `/accessibility/` returned 404, and all three locale routes returned 404.
- Identified newer production deploy `6a60d74ac87da5183901b4c9`, titled `Fix CRM backup authentication`, as the source of the regression. It was published after the verified legal release and contains only the older 21-file assistant package.
- Treat that newer deploy as the mandatory recovery baseline rather than rolling it back. Preserve its ten Function bundles, including its updated `bluyacht-leads` and callback digests, all three schedules, existing form registrations, non-marketing files, custom routes, domain state, and protected transparency files.
- Restore only the approved multilingual marketing and permanent legal output plus the approved 29-rule routing set, using a protected draft and a production-ID recheck before publication.
- Built protected draft `6a60dbca19befec4b5c3d812` from the exact CRM deployment file map, overlaid only the approved marketing/legal package, replaced the obsolete generated redirect configuration, and confirmed that the resulting deployment contains exactly 29 valid redirect rules, ten Functions, three schedules, and both registered forms (`fixads-contact` and `fixads-lead`).
- Preserved the CRM authentication bundles exactly, including `bluyacht-leads` digest `8ddbfa0d8dc8f4e4aea104c1f3875c95546cd10054b5f09de9a956e413153f9f` and callback digest `1a0f64ff78e68e23c3561484cd7bda203a21ab566db3df953f27776dbd0a18f8`.
- Verified the draft, rechecked that production was still `6a60d74ac87da5183901b4c9`, and then published that exact verified draft as production deploy `6a60dbca19befec4b5c3d812` at `2026-07-22T15:05:37.170Z`.
- Repeated live checks on the custom domain: the root routes Germany to `/de/`; `/en/`, `/de/`, and `/he/` return `200`; the slashless legal paths normalize once with `301`; `/impressum/`, `/privacy/`, `/terms/`, and `/accessibility/` return `200`; the CRM leads endpoint remains protected with `401`; and HTTP/apex/`www` canonical connections are valid.
- Repeated the 390 × 844 browser checks on live Hebrew and the German-only Impressum. Hebrew remains RTL with an English/LTR footer and zero horizontal overflow, the fixed mobile menu opens after deep scrolling, the Impressum remains `lang="de"`/LTR and contains the verified identity and W-IdNr., and the browser console is clear.
- Reconfirmed the protected transparency hashes after publication: HTML `e2b26552c5fe4671ff5c7e12900d3a1ed63fc9a5`, JavaScript `571ed211e6fa4cfef8f9efc4c7caff95c29521c9`, and CSS `b5221647142c086c7607feac0a02ba0cfbfbdd9b`; both the root and a representative descendant return `200`.
- Backed up the recovered production status and complete verification record to GitHub commit `241c3d928e0b8e65b00a8ee6b98bac9bd4380832` on branch `codex/fixads-multilingual-production`; the website source itself was unchanged by this recovery because production reused the already approved marketing/legal build.

### 2026-07-22 — Verified legal identity, permanent legal pages, and one English footer

- Re-read this complete living specification and the dedicated transparency specification before changing the site.
- Used the project owner's explicit authorization to inspect local business records and corroborated the publishable legal identity across official ELSTER material, FixAds invoices through 2026, the owner's CV, and a FixAds-billed communications record.
- Added the verified public business identity, address, public email, then-authorized direct telephone, and Wirtschafts-Identifikationsnummer. The direct telephone was later removed from public pages and this living specification at the owner's request on 2026-07-23.
- Deliberately excluded the personal tax number, personal tax identification number, banking information, client records, invoice transactions, passwords, and unrelated personal documents.
- Replaced the three localized footer models with one shared English footer component across English, German, Hebrew, and all legal pages. Kept it left-to-right inside Hebrew while leaving the Hebrew document and marketing layout right-to-left. The footer remains the only country/language control.
- Added a German-only `/impressum/`, bilingual English/German `/privacy/`, English `/terms/`, and English `/accessibility/`, all with direct canonical routes and the same footer.
- Draft verification confirmed Netlify's trailing-slash directory canonicalization; removed competing explicit legal redirects and aligned footer links, form consent links, canonical tags, and sitemap URLs so the legal routes cannot loop.
- Updated all localized form-consent text to link to the Privacy Policy and explain the purpose of contact-data processing.
- Removed the loader's nonessential session-storage access while preserving its visual behavior and reduced-motion bypass, leaving the current marketing and legal source without analytics, advertising pixels, cookies, local storage, or session storage.
- Extended both packaging scripts and the sitemap to include the legal pages and their shared modules. The protected `/transparency` application, routes, files, bundles, styling, content, authentication, data, functions, and features were not modified.
- Verified protected Netlify draft `6a60a81d3f96ee114dee1b30`, then published that exact deploy to `https://www.fixads.xyz`. The release has 29 valid redirects after removing the three obsolete external legal redirects, all ten existing Functions, all three schedules, and both registered Netlify forms.
- Repeated the live 390 × 844 checks on Hebrew and the German-only Impressum: Hebrew remained RTL, the shared footer remained English/LTR, the legal identity was present, horizontal overflow stayed at zero, and the browser console remained clear. HTTP, HTTPS, apex, `www`, German root routing, all three locale URLs, and all four legal URLs passed.
- Reconfirmed the protected transparency hashes after publication: HTML `e2b26552c5fe4671ff5c7e12900d3a1ed63fc9a5`, JavaScript `571ed211e6fa4cfef8f9efc4c7caff95c29521c9`, and CSS `b5221647142c086c7607feac0a02ba0cfbfbdd9b`; the root and a representative descendant both returned the protected application successfully.
- Pushed the exact Sites source state at commit `4a6943163813e29b35a1fdd5038508951c4a6179`, saved Sites version 7 (`appgprj_6a58733e0cbc81919c68610515ea07ca~appgver_52ee901387e88191a24c11f1e0517d3f`), and published deployment `appgdep_6a60a99f412481918084553452e4e439` to `https://fixads-multilingual-preview.anton-goldberg.chatgpt.site`. The three locales, four legal pages, and shared legal assets returned successfully there.
- Published the website/source content in GitHub commit `27454991854647ee8f7cb21a143e56695b81406b` on branch `codex/fixads-multilingual-production`, with only the website source and living specifications; no local source records, tax identifiers other than the published W-IdNr., financial data, client data, credentials, generated deployment bundles, or temporary PDF extracts are included.

### 2026-07-20 — Approved multilingual site restored without removing the newer callback connection

- Re-read this complete living specification and the separate `TRANSPARENCY_README.md` before preparing any production change.
- Confirmed that production deploy `6a5ce96568d9582068c7beec` had replaced the approved English, German, and Hebrew marketing routes with the older FixAds assistant page while adding the `codex-meta-mcp-callback` Function.
- Used that exact newer production deploy as the recovery baseline instead of rolling back to the earlier website release, so the callback Function, the existing nine Functions, three schedules, custom API routes, legacy pages, forms, domain connections, and non-marketing assets remain in scope.
- Reused the previously verified marketing bytes from deploy `6a5cd9013cdc62cf3224c7b5` and the existing 32-rule routing set, which adds only the three root country redirects ahead of the protected and legacy rules.
- Preserved the protected transparency files byte-for-byte at SHA-1 `e2b26552c5fe4671ff5c7e12900d3a1ed63fc9a5` for HTML, `571ed211e6fa4cfef8f9efc4c7caff95c29521c9` for JavaScript, and `b5221647142c086c7607feac0a02ba0cfbfbdd9b` for CSS.
- Rejected incomplete drafts `6a5e0b8be25ab641ea192e6b` and `6a5e0bcd9686bf4759466621` before they became ready, then rejected ready draft `6a5e0dcd7f04474e48d79b8d` because it contained a duplicated 61-rule redirect set. None was published.
- Verified corrected protected draft `6a5e0dec3cf3704ef174e93e`: `/en/`, `/de/`, `/he/`, the protected transparency root and representative descendant, SEO files, legacy page, all 15 client-logo assets, and the localized form transport returned successfully; the footer remained the only country/language control and retained `Impressum` in all locales.
- Rechecked real 390 × 844 phone viewports before and after publication. English, German, and Hebrew had no horizontal overflow; the bottom-of-page mobile menu settled at the full 390 × 844 viewport with focus in the first menu link; Hebrew remained RTL while email and URL values stayed LTR.
- Published production deploy `6a5e10227f04475923d79b23` to `https://www.fixads.xyz`. The live deployment has exactly 32 redirects, ten Functions, and three schedules; both `fixads-contact` and legacy `fixads-lead` remain registered with their existing field contracts and honeypots.
- Verified the live custom-domain connections: `www.fixads.xyz` serves HTTPS, HTTP redirects to HTTPS, the bare `fixads.xyz` HTTP/HTTPS alias redirects to the canonical `www` host, the Germany root request routes to `/de/`, and all three explicit locale URLs return `200`.
- Confirmed that the inherited immutable legal deployment now returns `404` for `/impressum`, `/privacy`, and `/terms`, while `/accessibility` remains pending. No unapproved legal content was created; permanent reviewed legal pages are still required.
- Rechecked the GitHub backup path after publication. The connected GitHub app can again read `fixads/fix-ads-landing-page` and its existing `codex/fixads-multilingual-production` branch, but the local GitHub CLI remains unauthenticated and the local root repository has no remote, so no source commit, branch push, PR update, or protected GitHub file was attempted.
- No `/transparency` or `/transparency/**` content, layout, styling, application logic, authentication, data, asset, or feature was changed.

### 2026-07-19 — Kimi K3 agency-motion pass, mobile-menu repair, real client logos, and compact footer

- Re-read this complete living specification before changing the marketing website and kept `/transparency` plus every descendant route outside the implementation and deployment package.
- Reproduced the reported phone-menu failure on the live site after scrolling to the page bottom. Confirmed that the toggle changed state while the open menu's fixed box collapsed to the 68px scrolled header because the header's `backdrop-filter` established the containing block.
- Sent Kimi K3 the real English, German, and Hebrew production URLs; the broken-after-scroll capture; current phone hero, client-area, and footer captures; all client destinations; and Clay, Cuberto, Locomotive, and BASIC/DEPT as bounded motion references.
- Adopted Kimi's “precision with a pulse” guidance: a body-level direction-neutral menu overlay, a more legible animated menu toggle, a short once-per-session FixAds loader, linked real logos, and a one-time footer connection signal. Rejected heavy animation libraries, decorative scroll parallax on touch devices, a fixed back-to-top control that would compete with the existing contact action, and any copy or section rewrite.
- Replaced all 15 temporary client wordmarks with authentic local SVG/PNG marks obtained from the businesses' own sites or verified domain icon source. Removed only empty canvas and solid source backgrounds needed for transparency, added the verified destination mapping to this specification and `content.js`, preserved the moving rail, hid its repeated copy from assistive technology and keyboard navigation, and added hover, focus, touch-pause, offscreen-pause, visibility-pause, and reduced-motion behavior.
- Used Lampari's verified live Netlify deployment hostname because its public custom domain redirected to an HTTPS certificate that did not cover the domain; this avoids intentionally sending visitors into a certificate warning.
- Moved the mobile menu outside the fixed header, strengthened its 48px button and visual state, retained focus containment and Escape/return-focus behavior, added responsive close behavior, and changed scroll locking so the viewport overlay remains exactly 100dvh without shifting at the top, middle, or bottom of the document.
- Added the FixAds logo preloader with no-JavaScript safety, session-only display, deep-link and reduced-motion bypasses, a 620ms normal minimum, and a 900ms hard leave trigger. Hero title motion begins after the loader when it is shown.
- Reworked the phone footer into compact two-column link groups while preserving every approved company link, Client Login, legal link, German `Impressum`, footer-only country/language control, copyright, email, and back-to-top action. Added only an existing-brand ghost word and a one-time transform/opacity signal reveal.
- Updated the Sites packager to discover all source assets recursively, then verified the three locale documents, every client asset MIME type, and the non-delivering review-form response in the generated worker package.
- Verified locally at 320–390px that English, German, and Hebrew have no horizontal overflow; German and Hebrew menus remain full-viewport after bottom-of-page scrolling; focus enters the first menu link; Hebrew remains mirrored RTL with LTR email/URL controls; all footers retain `Impressum`; every local client asset returns 200; and the client and footer layouts remain phone-readable.
- Verified protected Netlify draft `6a5cd6b1d91a56c69235b77a` on real 320px and 390px phone viewports. All three locale documents and 15 client assets returned 200, both form definitions accepted localized POSTs, the menu remained exactly full-viewport after bottom-of-page scrolling, the client duplicate stayed outside keyboard navigation, and the footer kept its single locale control and German `Impressum`.
- Confirmed the draft preserved the current protected transparency SHA-1 hashes exactly: `e2b26552c5fe4671ff5c7e12900d3a1ed63fc9a5` for HTML, `571ed211e6fa4cfef8f9efc4c7caff95c29521c9` for JavaScript, and `b5221647142c086c7607feac0a02ba0cfbfbdd9b` for CSS. The protected app rendered with its original root, bundle paths, and content rather than the marketing application.
- Published production deploy `6a5cd9013cdc62cf3224c7b5` to `https://www.fixads.xyz`, retaining 32 redirects, nine Functions, and the three existing schedules. Repeated the live phone test after publishing; the menu, client rail, footer, locale rules, RTL/LTR controls, and marketing console all passed without horizontal overflow, errors, or warnings.
- The connection audit found that `www.fixads.xyz` and its certificate were healthy but the bare apex was not assigned to the Netlify project, so one of the legacy apex load-balancer addresses rejected TLS. Added only `fixads.xyz` as a domain alias on the existing `fix-ads` project. Netlify generated managed apex and `www` records, and the authoritative apex route now terminates HTTPS and redirects to the canonical `www` host; cached legacy DNS answers may take up to their 3600-second TTL to expire.
- Published Sites review version 6 from exact pushed source commit `ccd9a621c3ba569f471dd6433858e6458828cec4` through deployment `appgdep_6a5cdaf888788191ae1888de962eb36a`. Rechecked `/en/`, `/de/`, `/he/`, all 15 client assets, the non-delivering 204 review-form response, the bottom-scroll menu, the footer rules, and browser console output on the public review URL.
- Attempted to update the existing GitHub backup branch and draft PR only after the website and Sites publication passed. The GitHub app rejected repository and branch reads with `HTTP 451 no_biscuit_no_service`, while `gh auth status` confirmed no local GitHub login. No GitHub branch, commit, PR, or protected file was changed, and this incomplete backup is recorded explicitly rather than being reported as successful.

### 2026-07-19 — Kimi K3 screenshot-based phone visual review

- Re-read this complete living specification before preparing any visual change.
- Captured six real 390 × 844 production screenshots: English, German, and Hebrew RTL heroes; the English mobile menu; the first English service card with the floating contact action; and the English contact form.
- Sent those exact screenshots to Kimi K3 as vision input so the second review was based on rendered hierarchy, spacing, overlap, RTL balance, and form grouping instead of measurements or source code alone.
- Preserved the heroes, logo, headline scale, CTA hierarchy, menu typography, German wrapping, Hebrew alignment, approved content, and section sequence because Kimi judged those areas visually successful and advised against further redesign.
- Accepted the concrete visual findings: prevent the floating contact action from covering readable page content, increase separation after each phone form underline, restyle required markers as neutral instructions before validation, and visually soften unavoidable moving-rail cropping at the viewport edges.
- Verified that the mobile Client Login control already has a 48px hit area, that the Hebrew metric numerals already occupy the leading RTL grid column, and that the platform rail already contains two complete copies. Those suggested changes therefore require no source modification.
- Identified the apparent second progress strip in the contact capture as page content passing beneath the translucent fixed header during smooth scrolling, not a duplicate progress component; no extra progress UI was added or removed.
- Rejected Netlify draft `6a5cbd05be39941374344e1c` because it contained the nine Function bundles but did not register their three schedules; it was not published.
- Rebuilt the draft from the Function source and verified protected draft `6a5cbd3d714d142c4f0df5e3`: all three locales, assets, SEO files, localized form POSTs, 32 redirects, nine Functions, and three schedules passed; the protected transparency HTML, descendant route, JavaScript, and CSS retained their exact current hashes.
- Repeated the rendered phone checks against that draft at 320–430px, including English, German, Hebrew RTL, reduced motion, menu target sizing, form spacing, dock collision sampling, and browser console output. No horizontal overflow, readable-content overlap, console error, or warning remained.
- Published production deploy `6a5cbddd68d958737bc7bf3d` to `https://www.fixads.xyz`.
- Repeated the live checks after publication: the three locale routes and assets return 200; all localized form POSTs return 200; HTTP, HTTPS, apex, `www`, and Germany routing remain correct; English, German, and Hebrew remain overflow-free at 320px with their primary actions reachable; the dock stays clear of service text and contact; phone form styling matches the verified draft; marketing console output remains clean; all nine Functions, three schedules, and 32 redirects remain registered; and the protected transparency hashes remain exact.
- Kept the protected `/transparency` and `/transparency/**` application outside the visual review and made no change to it.

### 2026-07-19 — Kimi K3-assisted mobile usability and motion refinement

- Re-read this complete living specification before changing the marketing website.
- Used Kimi K3 as an independent mobile UX reviewer, supplied only non-sensitive live measurements and relevant interface constraints, and used its successful findings as the implementation specification.
- Prioritized the five issues identified by Kimi: the floating/contact CTA collision, real hero actions below the first small-phone viewport, excessive locale-dependent hero height, unnecessary form length, and slow repetitive motion with continuously running marquees.
- Tightened the phone hero with locale-aware headline sizing, reduced vertical gaps, 16px primary body copy, earlier real CTAs, and a compact version of the existing four-part connected-system panel without removing approved content.
- Changed the floating contact action to a compact, initially hidden control that appears only after the real hero actions have scrolled above the viewport and hides around existing calls to action, the contact area, footer, and open menu.
- Kept all localized form fields visible while reducing field spacing, preserving 16px controls, 44px touch targets, autofill, validation, localized submission, and a resizable message area.
- Changed the browser form submission target from the country-routed root path to the active physical locale path so Netlify Forms receives English, German, and Hebrew POST requests directly instead of allowing the forced root redirect to intercept them.
- Updated the separate Sites review worker to acknowledge test form submissions on the same physical locale routes; this keeps the public review copy testable without presenting its non-delivering preview response as production lead delivery.
- Replaced the single 900ms fade-rise treatment with shorter section motion, softer non-translating card/process reveals, one hero marker sweep, touch/button feedback, and offscreen/background pausing for both platform and client rails.
- Preserved the full reduced-motion mode, Hebrew RTL behavior, footer-only country/language selection, approved content and sequence, exact FixAds logo, contact form contract, SEO metadata, and existing locale routes.
- Made no change to `/transparency`, `/transparency/**`, their files, bundles, content, layout, routing, assets, or behavior.
- Rejected draft `6a5cb266b37b324993f64e37` because the locale directories were absent from its uploaded file map, and rejected draft `6a5cb2bd187ccd55bb3f28bf` because it retained an older root JavaScript entrypoint; neither draft was published.
- Verified final protected draft `6a5cb3c606d5211df159dfbf`, including all marketing routes and assets, 320px phone behavior, Hebrew RTL, localized form transport and success UI, zero marketing-page console errors, nine Functions, three schedules, 32 redirects, and byte-identical transparency HTML, descendant HTML, JavaScript, and CSS.
- Published production deploy `6a5cb412187ccd596c3f298c` to `https://www.fixads.xyz`.
- Repeated live checks after publication: English, German, and Hebrew routes and assets return 200; Germany routes to German; the primary English action is fully visible at 320×568; the initial dock remains hidden; Hebrew remains RTL without overflow; production form POST returns 200; the protected transparency sign-in renders; all nine Functions and three schedules remain registered; and the protected hashes remain exact.

### 2026-07-16 — Official advertising-platform marks added to the moving ticker

- Re-read this complete living specification before changing the marketing website.
- Replaced the plain Meta Ads, Google Ads, Yelp Ads, and Amazon Ads ticker entries with compact original brand marks and names while preserving the existing marquee speed, direction, duplication, and reduced-motion behavior.
- Used transparent assets without white cards or added backgrounds; cropped unused SVG wordmark space through viewboxes without redrawing the Meta, Google Ads, or Yelp marks, and used Amazon's official transparent Amazon Ads press lockup.
- Added Yelp Ads to the Hebrew ticker so the same four paid-media platforms appear in English, German, and Hebrew.
- Sized the marks at text-like visual scale and retained the existing RTL animation direction and phone-first layout.
- Marked the repeated accessibility copy as decorative so screen readers announce each ticker entry only once.
- Added the platform assets only under `preview-site/assets/platforms/`; no `/transparency` route, file, bundle, content, style, or behavior was changed.
- Detected that production had changed to function-bearing deploy `6a53a7965efe486aecdb4b14` and stopped the initial upload path before it could replace that newer state.
- Rebuilt the release from the newer baseline, retaining its nine Functions, three schedules, custom API routes, non-marketing files, and current protected transparency bundle while adding only the multilingual marketing output and three root-only locale redirects.
- Verified protected draft `6a58f5f69b3f3a8b822b78ea`, then published production deploy `6a58f689b735fb8e7bf59d17`.
- Confirmed live English, German, and Hebrew routes, all four platform assets, German root routing from Germany, 390px no-overflow rendering, RTL reverse motion, zero marketing-page console errors, 32 processed redirects, nine Functions, three schedules, and exact current transparency HTML, JavaScript, and CSS hashes.

### 2026-07-16 — Transparency availability recovered and documented

- Re-read this complete living specification before preparing any recovery action.
- Added the dedicated `TRANSPARENCY_README.md` required to govern the protected area after the owner explicitly instructed that the non-loading page be fixed.
- Diagnosed the forced `/transparency/*` fallback as the reason JavaScript and CSS requests returned the HTML shell and left the page blank.
- Limited the authorized repair to two exact Netlify asset rewrites using the JavaScript and CSS hashes already present in production.
- Prohibited changes to transparency content, layout, styling, application logic, authentication, data, APIs, routes, and features.
- Used initial draft `6a58b40542053026248e9453` to reject an insufficient alias-only approach without publishing it.
- Verified corrected draft `6a58b47b1e5c0b2db1603c79`, then published production recovery deploy `6a58b49c1b6c6829944fdfb1`.
- Confirmed the protected HTML, JavaScript, and CSS retained their exact existing SHA-1 hashes while the bundles returned the correct JavaScript and CSS MIME types.
- Confirmed in a JavaScript-capable headless browser that the live React application rendered the FixAds transparency sign-in interface instead of a blank page.
- Confirmed `/transparency`, a descendant route, all three locale pages, root country routing, SEO files, legal redirects, both Netlify forms, the empty function set, and the existing edge function remained operational after publication.

### 2026-07-16 — Marketing source and living README synchronized to GitHub

- Re-read this complete living specification and the production repository's transparency guard before preparing the GitHub backup.
- Added the complete multilingual source under `preview-site/`, including English, German, and Hebrew content, phone-first styling, contact-form behavior, country routing, SEO/GEO metadata, build scripts, logo, and website imagery.
- Replaced the repository's placeholder README with this complete living specification so future contributors must understand the website and update the README before changing it.
- Used the dedicated branch `codex/fixads-multilingual-production` so the source can be reviewed without triggering a production-branch deployment.
- Left the repository-root application, guarded `netlify.toml`, `public/transparency/`, and all protected transparency routes and assets unchanged.
- Validated both the isolated multilingual build and the existing repository transparency guard before publishing the branch.
- Did not redeploy or otherwise change the live Netlify website as part of the GitHub source synchronization.

### 2026-07-16 — Production publication approved; SEO/GEO and protected Netlify integration added

- Re-read this complete living specification and the production repository's transparency guard before preparing the production change.
- Used the Netlify deployment workflow to authenticate, identify the exact `fix-ads` project, and avoid the unrelated locally linked `acdtraining.com` project.
- Detected a concurrent production deployment change and stopped automatically before uploading; re-audited the newer production state before continuing.
- Built a protected Netlify draft that adds the approved English, German, and Hebrew marketing pages while reusing the exact current transparency HTML, JavaScript, and CSS hashes.
- Added root-only Netlify edge country routing for Israel, Germany, and the allowed-world English fallback without intercepting `/transparency` or any descendant.
- Added localized titles, meta descriptions, canonical URLs, reciprocal `hreflang`, Open Graph, Twitter cards, Organization/WebSite JSON-LD, `robots.txt`, and a three-locale sitemap.
- Added a reproducible `build:netlify` marketing build that keeps production marketing artifacts separate from the protected transparency bundle.
- Verified the draft over real HTTPS: all three locales and shared assets returned 200, Germany routed to German, Hebrew rendered RTL without horizontal overflow, German rendered without overflow, the phone menu worked, and browser console warnings/errors remained at zero.
- Verified byte-identical protected responses for `/transparency`, `/transparency/dashboard`, and the transparency JavaScript and CSS assets against the current production baseline.
- Confirmed Netlify registered the localized `fixads-contact` form and that a synthetic draft submission reached the localized success state without changing the existing `fixads-lead` form.
- Published the verified package as production deploy `6a588dc10dbc293982fead10` on `https://www.fixads.xyz`.
- Verified the live domain after cutover: HTTP-to-HTTPS enforcement, apex-to-`www` canonicalization, Germany-to-German root routing, 200 responses for all three locales, live `robots.txt` and sitemap, valid TLS coverage for apex and `www`, zero browser console warnings/errors, and no mobile horizontal overflow.
- Repeated the protected transparency comparisons after production publication and confirmed identical response hashes for `/transparency`, `/transparency/dashboard`, and both transparency assets.
- Kept the country blocklist unimplemented until the owner supplies the exact ISO country list; did not invent accessibility text, client URLs, ratings, credentials, search metrics, or AI-citation claims.

### 2026-07-16 — Multilingual review preview published to Sites

- Re-read this complete living specification before packaging or publishing the review build.
- Created the separate public Sites review project `FixAds Multilingual Website Preview` and published the English, German, and Hebrew experiences at stable `/en/`, `/de/`, and `/he/` paths.
- Added a reproducible Sites build package that includes the existing localized source, exact FixAds logo, original preview photography, shared styles, and interactions without changing their approved visual or content behavior.
- Added review-root edge routing for Israel to Hebrew, Germany to German, and all other visitors to English when country data is available; direct locale URLs remain available for deterministic review.
- Kept country blocking disabled because the final approved blocklist has not been supplied.
- Made the review project publicly accessible so stakeholders can inspect all three languages without an account.
- Preserved localized form validation and success-state testing while explicitly keeping review submissions non-delivering and non-storing.
- Verified the Sites worker package locally for the root redirect, all three localized HTML routes, JavaScript, localized content, styles, logo, imagery, and review-form response before deployment.
- Did not deploy to Netlify or alter `https://www.fixads.xyz`, `/transparency`, `/transparency/**`, the existing live form, or the repository-root recovery page.

### 2026-07-15 — Phone-first usability pass

- Re-read this living specification before changing the preview and kept all content, locale routing, footer rules, protected transparency links, and the unchanged FixAds logo intact.
- Added modern phone safe-area support and dynamic-viewport handling for the fixed header, full-screen navigation, footer, and contact action.
- Reworked the 320–620px hero into a shorter layout with smaller responsive headings and a compact two-column system summary while preserving all hero copy.
- Added a localized mobile contact dock that stays easy to reach and automatically hides whenever an existing hero or closing call to action, the contact form, or the footer is visible, preventing duplicate or overlapping actions.
- Increased mobile form controls, consent controls, language options, footer links, and other interactive elements to practical touch-target sizes; kept form text at 16px or larger to prevent iOS zoom.
- Added mobile keyboard hints and mixed-direction form handling so email, URL, and telephone values remain readable in Hebrew RTL while natural-language fields follow the visitor's entered script.
- Made the mobile menu scroll safely on short screens, moved focus into it when opened, contained keyboard focus while open, restored focus when closed, and made background content inert.
- Reduced mobile section spacing and oversized decorative areas, added long-word wrapping for German and Hebrew, and disabled desktop-only hover and parallax effects on coarse-pointer devices.
- Verified English, German, and Hebrew at 320px, 360px, 390px, and 430px phone widths, including RTL, menu focus and short-screen scrolling, mobile form submission, mixed-direction fields, horizontal overflow, console output, and touch-target sizing.
- Did not alter or deploy `/transparency`, `/transparency/**`, the live website, or the repository-root recovery page.

### 2026-07-15 — Animated multilingual design preview built

- Created an isolated preview in `preview-site/` without changing or deploying the repository-root recovery site.
- Preserved the existing FixAds logo exactly and used it throughout the header, footer, and connected-system graphic.
- Created three original, text-free editorial photographs for the hero, e-commerce, and HVAC/lead-generation sections.
- Implemented complete English, German, and Hebrew localized experiences with LTR/RTL behavior, shared services, working principles, transparency messaging, clients, about, calls to action, contact, and footer content.
- Added purposeful motion: word and section reveals, scroll progress, marquees, parallax, data-flow animations, interactive cards, and reduced-motion support.
- Added footer-only direct language selection for `/en/`, `/de/`, and `/he/` without persistence.
- Added a Netlify Edge Function that routes only the root path by IP country: Israel to Hebrew, Germany to German, and other allowed countries to English.
- Left country blocking unimplemented until the owner supplies the exact list.
- Added a localized Netlify contact form with required-field validation, consent, locale capture, honeypot protection, and accessible success/error status messaging.
- Confirmed through the connected Netlify project that Forms are enabled and that the new `fixads-contact` name does not conflict with the existing `fixads-lead` form.
- Kept all `/transparency` and `/transparency/**` content untouched; preview links go to the existing live transparency application.
- Verified JavaScript syntax, strict TypeScript compilation for the Edge Function, zero installed-package audit vulnerabilities, local HTTP availability for all locale and asset routes, desktop rendering, mobile Hebrew RTL rendering, localized form submission behavior, and zero browser console errors.
- Did not deploy to Netlify or alter the live website.

### 2026-07-15 — Global footer and German-only Impressum defined

- Required the shared footer elements to appear across the Hebrew, English, and German websites.
- Added `Impressum` to all three localized footer content lists.
- Established that the Impressum link label and destination content always remain German, regardless of IP detection or selected website language.
- Added the country/language control explicitly to every localized footer content list.
- Recorded that the exact Impressum route and legally reviewed content are pending.
- No website behavior or visual design was changed.

### 2026-07-15 — English and German market copy drafted

- Created a professional English website draft adapted to the U.S. market from the Hebrew source structure.
- Added qualitative experience with Yelp Ads, Google Ads, Meta Ads, Amazon Ads, e-commerce, HVAC and service-business lead generation, websites, Klaviyo, bots, automation, analytics, Odoo, and complex platform integrations.
- Made customer care, qualified leads, conversion, retention, acquisition efficiency, and profitable growth central to the English positioning without promising specific results.
- Created a German-market draft emphasizing experience with German companies, reliability, structured execution, transparency, customer care, practical innovation, and international expertise.
- Added draft market-specific SEO phrases, titles, and meta descriptions for later review.
- Preserved the rule that English `Transparency` and German `Transparenz` may link to `/transparency` but cannot authorize changes there.
- No website behavior or visual design was changed.

### 2026-07-15 — Hebrew website content added

- Added the complete Hebrew navigation, hero, services, working principles, transparency, clients, about, closing call to action, contact form, and footer content supplied by the project owner.
- Established the supplied Hebrew wording and sequence as the implementation source of truth.
- Recorded that the `שקיפות` navigation item may link to `/transparency` without authorizing changes to the protected transparency area.
- Updated project status, design readiness, information architecture, and verification requirements to reflect the supplied content.
- No website behavior or visual design was changed.

### 2026-07-15 — Transparency area protected

- Declared `/transparency` and every descendant route under `/transparency/**` outside the authority of this README.
- Prohibited website builds, localization, routing, blocking, and deployment changes from altering or intercepting the protected area.
- Established that only a separate transparency-specific README can authorize changes within that area.
- Allowed shared site changes to reach protected pages only when strictly confined to the footer.
- No website behavior or visual design was changed.

### 2026-07-15 — IP routing and footer-only selector clarified

- Confirmed that the initial country is detected from the visitor's IP address.
- Confirmed Hebrew for Israel, German for Germany, and English for every other allowed country.
- Established the footer as the only interface location where country or language may be displayed or changed.
- No website behavior or visual design was changed.

### 2026-07-15 — Living specification created

- Established this README as the mandatory source of truth for every website change.
- Recorded the three-language localization intent and initial country-routing rules.
- Recorded Hebrew RTL and English/German LTR requirements.
- Documented that India and Bangladesh were mentioned as blocklist examples while leaving the exact list pending approval.
- Recorded the current temporary root site and unresolved `acdt-source/` folder relationship.
- No website behavior or visual design was changed.

## Open decisions required from the project owner

1. Provide the exact countries to block.
2. Confirm whether a visitor's manual footer selection should be remembered for later visits.
3. Arrange or approve a native-language review of the published German copy.
4. Choose an explicit AI-crawler policy if training and retrieval bots should be handled differently from normal crawlers.
