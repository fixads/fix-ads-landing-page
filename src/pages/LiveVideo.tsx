import React, { useState } from 'react';
import { Video, CheckCircle2 } from 'lucide-react';
import SEO from '../components/layout/SEO';

const LiveVideo = () => {
  const [language, setLanguage] = useState<'en' | 'de'>('en');

  const content = {
    en: {
      title: 'FixAds Live Commerce: Professional Live Streaming That Sells',
      subtitle: 'FixAds delivers a complete live commerce solution for e-commerce brands that want more than "just content." We create high-converting live streams on TikTok Live, Instagram Live, and additional platforms—hosted by professional actresses/models who can present products confidently, build trust fast, and drive viewers to take action.',
      description: 'Live streams are one of the strongest formats for e-commerce right now because they combine what customers need most: real-time demonstration, social proof, entertainment, and instant Q&A. FixAds turns live selling into a repeatable, brand-safe system.',
      whatYouGet: {
        title: 'What You Get',
        items: [
          {
            title: 'Professional Host (Actress/Model)',
            description: 'A trained on-camera host who can:',
            points: [
              'Present products naturally and convincingly',
              'Keep energy high and audience engaged',
              'Answer questions smoothly and clearly',
              'Deliver strong calls-to-action without sounding "salesy"'
            ]
          },
          {
            title: 'FixAds Live Strategy + Structure',
            description: 'We handle the planning that makes live streams actually perform:',
            points: [
              'Product selection and product order (what to show first / when to upsell)',
              'Offers, bundles, and urgency messaging',
              'Engagement prompts (polls, questions, giveaways, comments strategy)',
              'Platform-specific best practices (TikTok vs Instagram)'
            ]
          },
          {
            title: 'Brand-Safe Concept Approval',
            description: 'Before we go live, FixAds sends a short script / role-play concept showing exactly:',
            points: [
              'The flow of the live stream',
              'Key talking points per product',
              'Tone of voice and audience interaction',
              'CTAs, offers, and link strategy'
            ],
            footer: 'You review it, request edits if needed, and approve. Only then do we go live.'
          },
          {
            title: 'Content Repurposing (Long-Term Value)',
            description: 'Every live stream becomes high-value content you can reuse for weeks:',
            points: [
              'TikTok/Instagram Reels and Shorts',
              'Paid ads (UGC-style clips)',
              'Product page videos',
              'Email marketing and landing pages',
              'Retargeting creatives and "offer" videos'
            ]
          }
        ]
      },
      howItWorks: {
        title: 'How It Works (Step-by-Step)',
        steps: [
          {
            title: 'Discovery & Planning',
            items: ['Your products and bestsellers', 'Target audience and brand tone', 'Platforms (TikTok Live, Instagram Live, etc.)', 'Timing, duration, and sales goal']
          },
          {
            title: 'Script / Role-Play Concept',
            description: 'FixAds creates the role-play plan:',
            items: ['Opening hook + credibility', 'Product demonstrations', 'Q&A moments and audience prompts', 'Offer structure + closing CTA']
          },
          {
            title: 'Approval',
            description: 'You approve the concept and product list. We align on:',
            items: ['Pricing / discount codes', 'Shipping/returns details', 'Stock limitations and availability']
          },
          {
            title: 'Go Live',
            description: 'We execute the live stream with a professional host and a clear conversion flow.'
          },
          {
            title: 'Analyze & Improve',
            description: 'We review performance and optimize future sessions:',
            items: ['Retention, engagement, clicks, sales lift', 'Best moments to repurpose into ads']
          }
        ]
      },
      whoFor: {
        title: 'Who This Is For',
        description: 'FixAds Live Commerce is ideal for brands that:',
        points: [
          'Want more conversions from social (not just views)',
          'Need a professional face for the brand (without hiring full-time talent)',
          'Sell products that benefit from demo (beauty, fashion, accessories, home, gadgets, food, etc.)',
          'Want repeatable weekly/monthly live campaigns'
        ]
      },
      faq: {
        title: 'FAQ',
        items: [
          { q: 'Do we need to provide a script?', a: 'No. FixAds creates the concept/script. You simply review and approve it.' },
          { q: 'Can you present only a few products?', a: 'Yes. Many brands start with 3–8 products (bestsellers + one "hero" product).' },
          { q: 'How long is a typical live stream?', a: 'Usually 30–60 minutes, depending on platform and product range.' },
          { q: 'Do you handle both TikTok Live and Instagram Live?', a: 'Yes. We can run on one platform or multi-platform, depending on your goals.' },
          { q: 'Will the actress represent our brand professionally?', a: 'Yes. We use professional on-camera talent and align fully with your tone, audience, and brand rules.' },
          { q: 'Can the live content be used later as ads and content?', a: 'Yes. That is a major advantage—each live session becomes reusable content for paid and organic campaigns.' },
          { q: 'What do you need from us before going live?', a: 'Product details, pricing/offer info, shipping & returns policy, and any "do not say" brand rules. We handle the rest.' },
          { q: 'How do you measure success?', a: 'Based on your goals: engagement, retention, clicks, conversions, and revenue lift. We review and optimize after each session.' },
          { q: 'Is this influencer marketing?', a: 'Not exactly. This is professional live commerce: structured selling, scripted flow, brand approval, and performance-driven execution.' },
          { q: 'Can we do this as a monthly plan?', a: 'Yes. Most brands see best results with weekly or bi-weekly live sessions, plus ongoing content repurposing.' },
          { q: 'How do we start?', a: 'Book a short call with FixAds. We will define your first live plan and send a concept for approval.' }
        ]
      }
    },
    de: {
      title: 'FixAds Live-Commerce: Professionelle Live-Streams, die verkaufen',
      subtitle: 'FixAds bietet eine vollständige Live-Commerce-Lösung für E-Commerce-Brands, die mehr wollen als „nur Content". Wir produzieren verkaufsstarke Live-Streams auf TikTok Live, Instagram Live und weiteren Plattformen – moderiert von professionellen Schauspielerinnen/Models, die Produkte überzeugend präsentieren, Vertrauen aufbauen und Zuschauer in Käufer verwandeln.',
      description: 'Live-Streams funktionieren so gut, weil sie alles vereinen, was Kunden brauchen: Live-Demonstration, Social Proof, Entertainment und direkte Q&A. FixAds macht Live Selling zu einem wiederholbaren, markensicheren System.',
      whatYouGet: {
        title: 'Was Sie bekommen',
        items: [
          {
            title: 'Professionelle Host (Schauspielerin/Model)',
            description: 'Ein erfahrenes On-Camera-Talent, das:',
            points: [
              'Produkte natürlich und überzeugend präsentiert',
              'Energie und Engagement hochhält',
              'Fragen souverän beantwortet',
              'Klare CTAs setzt, ohne „zu pushy" zu wirken'
            ]
          },
          {
            title: 'FixAds Live-Strategie + Struktur',
            description: 'Wir planen alles, was Live-Streams wirklich erfolgreich macht:',
            points: [
              'Produktauswahl und Reihenfolge (Hook → Bestseller → Upsell)',
              'Angebote, Bundles und Dringlichkeit',
              'Engagement-Mechaniken (Fragen, Umfragen, Giveaways, Kommentare)',
              'Plattform-Optimierung (TikTok vs Instagram)'
            ]
          },
          {
            title: 'Markensichere Konzept-Freigabe',
            description: 'Vor dem Go-Live erstellt FixAds ein kurzes Skript/Rollen-Konzept, das zeigt:',
            points: [
              'Den Ablauf des Live-Streams',
              'Kernaussagen je Produkt',
              'Tonalität und Interaktionspunkte',
              'CTAs, Angebote und Link-/Code-Strategie'
            ],
            footer: 'Sie prüfen das Konzept, geben Feedback und geben es frei. Erst danach gehen wir live.'
          },
          {
            title: 'Content-Reuse (Langfristiger Wert)',
            description: 'Jeder Live-Stream wird aufgezeichnet und als Content weiterverwendet – für Wochen:',
            points: [
              'TikTok/Instagram Reels und Shorts',
              'Paid Ads (UGC-Style Clips)',
              'Produktseiten-Videos',
              'E-Mail-Marketing und Landingpages',
              'Retargeting Creatives und Angebotsvideos'
            ]
          }
        ]
      },
      howItWorks: {
        title: 'So läuft es ab (Schritt für Schritt)',
        steps: [
          {
            title: 'Discovery & Planung',
            items: ['Produkte und Bestseller', 'Zielgruppe und Brand-Tonalität', 'Plattformen (TikTok Live, Instagram Live usw.)', 'Timing, Dauer und Sales-Ziel']
          },
          {
            title: 'Skript / Rollen-Konzept',
            description: 'FixAds erstellt den Plan:',
            items: ['Opening Hook + Glaubwürdigkeit', 'Produkt-Demos', 'Q&A und Engagement-Punkte', 'Angebotsstruktur + Closing CTA']
          },
          {
            title: 'Freigabe',
            description: 'Sie geben Konzept und Produktauswahl frei. Wir stimmen ab:',
            items: ['Preise / Rabattcodes', 'Versand & Retouren', 'Verfügbarkeit / Bestand / Limits']
          },
          {
            title: 'Go Live',
            description: 'Wir führen den Live-Stream mit professioneller Host und klarer Conversion-Struktur durch.'
          },
          {
            title: 'Analyse & Optimierung',
            description: 'Wir werten aus und optimieren:',
            items: ['Retention, Engagement, Klicks, Sales-Uplift', 'Beste Momente zur Weiterverwendung als Ads']
          }
        ]
      },
      whoFor: {
        title: 'Für wen ist das geeignet?',
        description: 'FixAds Live-Commerce ist ideal für Brands, die:',
        points: [
          'Mehr Conversions aus Social wollen (nicht nur Views)',
          'Ein professionelles Gesicht für die Marke brauchen (ohne Full-Time Hire)',
          'Produkte verkaufen, die von Demos profitieren (Beauty, Fashion, Accessoires, Home, Gadgets, Food usw.)',
          'Regelmäßig Live-Kampagnen und Content-Assets aufbauen wollen'
        ]
      },
      faq: {
        title: 'FAQ',
        items: [
          { q: 'Müssen wir ein Skript liefern?', a: 'Nein. FixAds erstellt das Konzept/Skript. Sie prüfen und geben frei.' },
          { q: 'Können wir nur wenige Produkte zeigen?', a: 'Ja. Viele Brands starten mit 3–8 Produkten (Bestseller + ein „Hero"-Produkt).' },
          { q: 'Wie lange dauert ein Live-Stream typischerweise?', a: 'Meist 30–60 Minuten – abhängig von Plattform, Sortiment und Ziel.' },
          { q: 'Macht ihr TikTok Live und Instagram Live?', a: 'Ja. Auf Wunsch auch nur eine Plattform oder mehrere parallel.' },
          { q: 'Repräsentiert die Schauspielerin unsere Marke professionell?', a: 'Ja. Wir arbeiten mit professionellen On-Camera-Talenten und stimmen Tonalität, Inhalte und Regeln exakt ab.' },
          { q: 'Können wir den Live-Content später als Ads nutzen?', a: 'Ja. Das ist ein zentraler Vorteil: Ein Live-Stream liefert Content für organisch und paid.' },
          { q: 'Was braucht ihr von uns vor dem Go-Live?', a: 'Produktinfos, Preise/Angebote, Versand/Retouren und ggf. Brand-Guidelines („Do\'s & Don\'ts").' },
          { q: 'Wie messt ihr Erfolg?', a: 'Je nach Ziel: Engagement, Retention, Klicks, Conversions, Umsatz-Uplift. Danach optimieren wir.' },
          { q: 'Ist das Influencer-Marketing?', a: 'Nicht direkt. Das ist professioneller Live-Commerce mit Struktur, Freigabeprozess und Performance-Fokus.' },
          { q: 'Kann man das als monatliches Paket buchen?', a: 'Ja. Die besten Ergebnisse entstehen oft mit wöchentlichen oder zweiwöchentlichen Lives plus Content-Reuse.' },
          { q: 'Wie starten wir?', a: 'Vereinbaren Sie einen kurzen Call mit FixAds. Wir planen den ersten Live und senden ein Konzept zur Freigabe.' }
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <>
      <SEO
        title="Live Commerce - Professional Live Streaming That Sells"
        description="Complete live commerce solution for e-commerce brands. Professional live streams on TikTok Live, Instagram Live, and more platforms."
      />

      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-12 md:py-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-lg bg-white/10 p-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 sm:px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    language === 'en' ? 'bg-white text-blue-600' : 'text-white hover:bg-white/10'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('de')}
                  className={`px-4 sm:px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    language === 'de' ? 'bg-white text-blue-600' : 'text-white hover:bg-white/10'
                  }`}
                >
                  Deutsch
                </button>
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-full mb-6">
                <Video className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                {currentContent.title}
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-4 leading-relaxed">
                {currentContent.subtitle}
              </p>
              <p className="text-base sm:text-lg text-blue-50 leading-relaxed">
                {currentContent.description}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <section className="mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center px-4">
              {currentContent.whatYouGet.title}
            </h2>
            <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
              {currentContent.whatYouGet.items.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 break-words">{item.title}</h3>
                      <p className="text-gray-700 mb-4 text-sm sm:text-base">{item.description}</p>
                      <ul className="space-y-2.5">
                        {item.points.map((point, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                            <span className="text-gray-600 leading-relaxed text-sm sm:text-base">{point}</span>
                          </li>
                        ))}
                      </ul>
                      {item.footer && (
                        <p className="text-gray-700 mt-4 font-medium text-sm sm:text-base border-t border-gray-200 pt-4">{item.footer}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center px-4">
              {currentContent.howItWorks.title}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {currentContent.howItWorks.steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    {step.description && (
                      <p className="text-gray-700 mb-3 text-sm leading-relaxed">{step.description}</p>
                    )}
                    {step.items && (
                      <ul className="space-y-2.5 flex-grow">
                        {step.items.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-blue-600 text-xs mt-1 flex-shrink-0">•</span>
                            <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {index < currentContent.howItWorks.steps.length - 1 && (
                    <div className="hidden xl:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-0.5 bg-blue-200"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 md:mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 text-center px-4">
                {currentContent.whoFor.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 md:mb-8 text-center max-w-3xl mx-auto px-4">
                {currentContent.whoFor.description}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto">
                {currentContent.whoFor.points.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-4 md:p-5 hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed text-sm sm:text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center px-4">
              {currentContent.faq.title}
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
              {currentContent.faq.items.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 leading-snug">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 md:mt-16 text-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {language === 'en' ? 'Ready to Start?' : 'Bereit zu starten?'}
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto px-4">
                {language === 'en'
                  ? 'Book a short call with FixAds. We will define your first live plan and send a concept for approval.'
                  : 'Vereinbaren Sie einen kurzen Call mit FixAds. Wir planen den ersten Live und senden ein Konzept zur Freigabe.'}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
              >
                {language === 'en' ? 'Contact Us' : 'Kontakt aufnehmen'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveVideo;
