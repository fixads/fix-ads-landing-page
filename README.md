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

The multilingual design was approved by the project owner and published to `https://www.fixads.xyz` on 2026-07-16 after a protected Netlify draft passed verification.

- The animated multilingual website source exists in `preview-site/` and remains available as a separate review build at `https://fixads-multilingual-preview.anton-goldberg.chatgpt.site`.
- Direct review paths are `/en/`, `/de/`, and `/he/`; the review root uses available edge country information to send Israel to Hebrew, Germany to German, and other visitors to English.
- Hebrew website content has been supplied and is recorded verbatim in this README.
- The project owner authorized publication of the market-adapted English and German versions on 2026-07-16; a native German language review remains recommended.
- The preview uses the active FixAds brand and existing logo from `fixads.xyz`. The requested `myfixers.xyz` hostname did not resolve in DNS when checked on 2026-07-15, so it was not treated as the source site.
- The approved country blocklist, real client logo assets and official URLs, final accessibility content, permanent legal-page integration, and final form notification setup remain pending.
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

Every localized website—Hebrew, English, and German—must use the shared footer structure. The footer must include the applicable localized navigation and legal links, social links, client login, and the country/language control described above.

An `Impressum` link must appear in the footer of **all three localized websites**. This rule applies even when the surrounding footer is Hebrew or English.

The Impressum destination has special language behavior:

- The link label must remain `Impressum` in Hebrew, English, and German footers.
- The Impressum page and its complete legal content must always be in German.
- Never translate the Impressum page into Hebrew or English.
- IP detection, automatic language routing, and a visitor's manual footer selection must not change the Impressum page language.
- The Impressum document must use German language metadata (`lang="de"`) and left-to-right direction.
- The exact Impressum route and legally reviewed content are still pending and must be approved before implementation.
- This rule concerns the shared footer and Impressum destination only; it does not grant permission to change any protected `/transparency` content.

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

## Information architecture

The localized page section sequence is defined by the Hebrew source and the English and German drafts above. The local preview currently implements one long-form marketing experience per language at `/en/`, `/de/`, and `/he/`.

Production interpretation approved on 2026-07-16: “three pages” means the three localized marketing experiences at `/en/`, `/de/`, and `/he/`. Remaining decisions concern permanent legal and accessibility content, form notifications, approved client assets, the country blocklist, and whether footer language selection should be remembered.

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
- Temporary text wordmarks for clients because official client logo files and approved destination URLs have not yet been supplied.
- A phone-first layout tested from 320px through 430px widths, with safe-area support for modern notched devices, compact mobile data visuals, shorter vertical spacing, and typography that accommodates long German words and Hebrew RTL text without horizontal overflow.
- Mobile controls with at least 44–48px practical touch targets, 16px form text to prevent unwanted iOS input zoom, a scroll-safe full-screen menu with contained keyboard focus, and a localized contact dock that disappears whenever an existing page call to action is substantially visible or the contact section or footer is reached.
- Mobile form fields use appropriate phone keyboards and next-action hints; email, URL, and telephone values remain left-to-right inside the Hebrew experience while names, companies, and messages automatically follow the entered script.
- Touch-device performance rules that remove desktop hover states and hero parallax while retaining purposeful lightweight motion and the existing reduced-motion mode.

## Technical baseline

Known repository and hosting state on 2026-07-16:

- Hosting target: Netlify.
- Active Netlify project: `fix-ads`, serving `https://www.fixads.xyz` with Forms enabled.
- Netlify project ID: `f0cf4dc3-9784-4f38-a2e2-9b7cf1b9932a`.
- Canonical production host: `https://www.fixads.xyz`.
- `acdt-source/` contains a separate application scaffold; its relationship to the root deployment requires confirmation before production development starts.
- `preview-site/` is the living multilingual marketing source. Its Netlify marketing build is generated separately so protected production files can be merged without rebuilding or modifying the transparency application.

### Preview architecture

- Rendering: dependency-light static HTML, CSS, and JavaScript.
- Localized content source: `preview-site/content.js`.
- Shared interface and interactions: `preview-site/app.js` and `preview-site/styles.css`.
- Stable preview paths: `/en/`, `/de/`, and `/he/`, with static rewrite rules in `preview-site/_redirects`.
- Geographic entry routing: `preview-site/netlify/edge-functions/locale-router.ts` handles only `GET /` and redirects `IL` to `/he/`, `DE` to `/de/`, and every other allowed country to `/en/`.
- The geographic edge function does not match `/transparency` or any descendant route, so it cannot intercept the protected area.
- No speculative country blocklist is implemented because the exact approved ISO country list is still pending.
- Footer language selection uses direct locale links and is not remembered between visits. The footer is the only location or language control.
- All transparency and client-login links point to the existing protected `https://www.fixads.xyz/transparency` application without changing it.
- All footers link to the existing German `https://www.fixads.xyz/impressum` destination using the unchanged label `Impressum`.

### Netlify production integration

- `preview-site/scripts/build-netlify.mjs` creates a marketing-only package in `preview-site/netlify-dist/` with physical `/en/`, `/de/`, and `/he/` HTML documents plus shared JavaScript, localized content, styles, logo, photographs, `robots.txt`, and `sitemap.xml`.
- The production root uses `preview-site/netlify/edge-functions/locale-router.ts` and Netlify edge country context: `IL` redirects to `/he/`, `DE` redirects to `/de/`, and every other visitor redirects to `/en/`.
- The edge function matches only `GET /`. It cannot run for `/transparency`, `/transparency/**`, legal pages, assets, form submissions, or locale pages.
- The deployment process begins from the exact currently published Netlify file map and adds only the marketing files, localized routes, SEO/GEO files, and root locale edge bundle.
- The production state changed concurrently during preparation. The safety check stopped before upload, re-read the new baseline deploy `6a588b70762e6e3374058da1`, and used that newer deployment as the source of truth.
- In that baseline, the current transparency application was deployed at the root with exact SHA-1 file hashes `81689e69934c48149151198e98fc69d9256d92fe` for its HTML, `f7f468c5953baa8c3526b396be6494e22001574c` for its JavaScript, and `343d85e9cec30a307c45bd5a550c28b7b6633398` for its CSS.
- Production integration reuses those exact immutable transparency file hashes and maps the same HTML to `/transparency/index.html`; `/transparency` and `/transparency/**` rewrite only to that identical file. No transparency HTML, CSS, JavaScript, text, layout, feature, or asset content is edited.
- The validated Netlify draft deploy is `6a588c6faebae3f21df391b1` at `https://6a588c6faebae3f21df391b1--fix-ads.netlify.app`.
- The resulting production deploy is `6a588dc10dbc293982fead10` at `https://6a588dc10dbc293982fead10--fix-ads.netlify.app`, serving the canonical production domain `https://www.fixads.xyz`.
- A later availability audit found that the forced `/transparency/*` fallback intercepted the protected HTML's JavaScript and CSS URLs and returned the HTML shell for both assets. The dedicated `TRANSPARENCY_README.md` authorized the smallest recovery: two exact asset rewrites to the existing immutable bundles, without changing transparency HTML, JavaScript, CSS, content, layout, logic, data, authentication, or features.
- The corrected draft is `6a58b47b1e5c0b2db1603c79`; the current production recovery deploy is `6a58b49c1b6c6829944fdfb1` at `https://6a58b49c1b6c6829944fdfb1--fix-ads.netlify.app`.
- The draft returned byte-identical SHA-256 hashes for `/transparency`, a representative descendant `/transparency/dashboard`, and both transparency assets when compared with the then-current production deployment.
- The newer production baseline contained no Netlify Functions. The integration preserves that exact empty function set instead of restoring or assuming functions from an older deploy.
- `/impressum`, `/privacy`, and `/terms` temporarily redirect to their existing immutable legacy Netlify deployment until permanent, reviewed legal pages are integrated on the canonical production host. The Impressum destination remains German.
- `/accessibility` remains pending because approved accessibility-statement content has not been supplied; no legal text was invented.

### GitHub source backup

- Production repository: `https://github.com/fixads/fix-ads-landing-page`.
- The complete multilingual marketing source and this living specification are synchronized in the dedicated branch `codex/fixads-multilingual-production`.
- Marketing source remains isolated in `preview-site/`. The repository-root application, guarded `netlify.toml`, and every file under `public/transparency/` are intentionally unchanged.
- This branch is a reviewed source backup and integration proposal; creating or updating it does not deploy the live website. Any later merge into the production branch must preserve the protected transparency area and use the verified production integration process documented above.

### Sites review deployment

- Public review URL: `https://fixads-multilingual-preview.anton-goldberg.chatgpt.site`.
- Direct review URLs: `https://fixads-multilingual-preview.anton-goldberg.chatgpt.site/en/`, `https://fixads-multilingual-preview.anton-goldberg.chatgpt.site/de/`, and `https://fixads-multilingual-preview.anton-goldberg.chatgpt.site/he/`.
- The Sites review project is `appgprj_6a58733e0cbc81919c68610515ea07ca`; it is separate from the Netlify production project and does not deploy to or modify `fixads.xyz`.
- `preview-site/.openai/hosting.json` binds the review source to the Sites project. `preview-site/scripts/build-sites.mjs` packages the shared HTML, localized content, CSS, JavaScript, exact logo, and review photographs into the Sites worker output under `preview-site/dist/`.
- `npm run build` and `npm run build:sites` create the same Sites review package. Generated `preview-site/dist/` output is not source content and may be removed or regenerated.
- The Sites review root mirrors the intended country fallback using hosting-edge country data when available. Stable locale paths remain the authoritative way to inspect a specific language.
- No country blocklist is active in the review deployment because the approved ISO country list is still pending.
- The review deployment serves only the marketing preview and its assets. Transparency and client-login links leave the review site and open the existing protected `https://www.fixads.xyz/transparency` application; no `/transparency` route or content was copied, changed, intercepted, or deployed.
- Contact form validation and localized success states can be tested in Sites, but review submissions are acknowledged without delivery or storage. Real delivery remains reserved for the later approved Netlify production deployment and notification setup.

### Contact form implementation

- Shared Netlify form name: `fixads-contact`.
- Localized form labels, options, validation messages, consent text, success state, and failure state exist for English, Hebrew, and German.
- Captured fields: full name, company, phone, email, company website, requested service, message, locale, consent, and honeypot.
- Required fields: full name, email, service, message, and contact consent.
- The static HTML contains Netlify's form-detection schema and a honeypot; the visible form submits URL-encoded data without navigating away.
- The live project currently has a separate existing `fixads-lead` form. The preview intentionally uses a different form name so current chat leads are not disrupted.
- Netlify recognized the new `fixads-contact` form from the protected draft on 2026-07-16 with all ten expected fields and honeypot protection. A synthetic draft submission returned the localized success state.
- The existing `fixads-lead` form remains separately registered with its historical submissions.
- Notification recipients for `fixads-contact` must still be confirmed in the Netlify dashboard after production publication.

### SEO and GEO baseline

- Every locale has a market-specific title and meta description drawn only from approved visible claims; no rankings, guarantees, ratings, certifications, or unsupported performance numbers were added.
- English targets `performance marketing agency`; German targets `Performance-Marketing-Agentur`; Hebrew describes the same connected digital marketing and growth scope in natural Hebrew.
- `/en/`, `/de/`, and `/he/` have static self-referencing canonicals, reciprocal absolute `hreflang` links, and an English `x-default` URL.
- Open Graph and Twitter metadata use the canonical locale URL, localized title and description, the existing hero photograph, and the FixAds site name.
- Crawler-visible JSON-LD identifies `FixAds` as an `Organization` and the multilingual property as a `WebSite`. Only visible and verified properties are included; no placeholder, review, rating, phone, address, or social-profile data is published.
- `robots.txt` allows normal crawling and declares `https://www.fixads.xyz/sitemap.xml`. No AI-crawler-specific allow or block policy is added because the owner has not selected a training/retrieval stance.
- `sitemap.xml` lists only the three canonical marketing locales with reciprocal `hreflang` alternates and the real 2026-07-16 modification date. Protected transparency routes are intentionally excluded and retain `noindex, nofollow`.
- GEO improvements are limited to accurate entity markup, clear headings, direct service explanations, structured lists, and extractable market-specific descriptions. No sourced statistics or FAQ schema were invented.
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
- [ ] Israel, Germany, fallback, and blocked-country routing behaviors are covered when routing is affected.
- [ ] Language routing does not loop or discard the requested path.
- [ ] The footer is the only visible place where country or language can be viewed or changed.
- [ ] Hebrew, English, and German footers all contain an `Impressum` link.
- [ ] The Impressum destination always remains German with `lang="de"`, regardless of detected country or selected website language.
- [ ] `/transparency` and all `/transparency/**` routes remain untouched and operational; any authorized shared-footer update is confined to the footer.
- [ ] Accessibility and keyboard behavior remain usable.
- [ ] No secrets, private tokens, or personal data were added to browser code or the repository.
- [ ] This README accurately documents the resulting website.
- [ ] The Change Log contains an entry for the change.

## Change Log

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
4. Approve permanent legal-page content and canonical-host integration for Impressum, Privacy, and Terms.
5. Supply approved client logo files and official client website URLs.
6. Confirm the Accessibility Statement route and content.
7. Confirm the notification recipients for the new `fixads-contact` Netlify form.
8. Choose an explicit AI-crawler policy if training and retrieval bots should be handled differently from normal crawlers.
