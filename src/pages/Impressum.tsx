import React from 'react';
import SEO from '../components/layout/SEO';
import { Building2, Mail, Phone } from 'lucide-react';

const Impressum = () => {
  return (
    <>
      <SEO 
        title="Impressum" 
        description="Legal information about FixAds digital marketing agency"
      />
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
              <h1 className="text-3xl font-bold mb-2">Impressum</h1>
              <p className="text-blue-100">(gemäß § 5 DDG / § 18 Abs. 2 MStV)</p>
            </div>

            <div className="p-8 space-y-8">
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>Anton Goldberg</p>
                  <p>Schönhauser Allee 108</p>
                  <p>10439 Berlin – Deutschland</p>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-semibold">Kontakt</h2>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">Tel.: +49 174 7810735</p>
                  <p className="text-gray-600">E-Mail: anton@fixads.xyz</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Steuernummer</h2>
                <p className="text-gray-600">31/312/02590 (Finanzamt Berlin-Prenzlauer Berg)</p>
                <p className="text-gray-600 mt-2">Kleinunternehmer nach § 19 UStG – keine Umsatzsteuer­ausweisung</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Verantwortlich i. S. d. § 55 Abs. 2 RStV</h2>
                <div className="text-gray-600">
                  <p>Anton Goldberg</p>
                  <p>Anschrift wie oben</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">EU-Streitbeilegung</h2>
                <p className="text-gray-600 mb-4">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a 
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-gray-600">
                  Ich bin weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impressum;