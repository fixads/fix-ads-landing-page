import React, { useState, useEffect } from 'react';
import SEO from '../components/layout/SEO';
import { ArrowLeft, Mail, TrendingUp, Users, Award, CheckCircle, Zap, Target, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SaudiArabia = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Extract video IDs from URLs
  const mobileVideoId = 'wCcNrVndCg8'; // From shorts URL
  const desktopVideoId = '9N6Wk3x9w_8'; // From regular URL

  const currentVideoId = isMobile ? mobileVideoId : desktopVideoId;

  return (
    <>
      <SEO
        title="فيكس آدز - حلول التسويق الرقمي للشركات السعودية"
        description="نحن متخصصون في إعلانات ميتا وجوجل للشركات في السعودية. نساعدك على تنمية أعمالك عبر الإنترنت بنتائج مضمونة."
      />

      <div className="min-h-screen bg-white" dir="rtl">
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                نحوّل إعلاناتك إلى عملاء فعليين
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                متخصصون في إعلانات ميتا وجوجل للشركات السعودية
                <br />
                نتائج حقيقية، نمو مستدام، عائد استثمار مضمون
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:sari@fixads.xyz"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 ml-2" />
                  احصل على استشارة مجانية
                </a>
              </div>
            </div>

            {/* YouTube Video */}
            <div className="relative z-20 w-full max-w-4xl mx-auto mb-12">
              <div className={`relative ${isMobile ? 'aspect-[9/16]' : 'aspect-video'} rounded-lg overflow-hidden shadow-2xl`}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${currentVideoId}?autoplay=1&mute=1&loop=1&playlist=${currentVideoId}&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                  title="FixAds Marketing Video"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">+250%</div>
                <div className="text-blue-100">زيادة متوسطة في المبيعات</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">حملة ناجحة تم تنفيذها</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-100">معدل رضا العملاء</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                لماذا تختار فيكس آدز؟
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نجمع بين الخبرة الدولية والفهم العميق للسوق السعودي
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">استهداف دقيق</h3>
                <p className="text-gray-600 leading-relaxed">
                  نستهدف عملائك المثاليين بدقة عالية باستخدام أحدث تقنيات الذكاء الاصطناعي وتحليل البيانات
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">نمو مستدام</h3>
                <p className="text-gray-600 leading-relaxed">
                  نبني استراتيجيات طويلة المدى تضمن نموًا مستمرًا لعملك وليس فقط نتائج قصيرة الأجل
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">تقارير شفافة</h3>
                <p className="text-gray-600 leading-relaxed">
                  تقارير تفصيلية واضحة تُظهر بالضبط أين تذهب أموالك وما النتائج التي تحققها
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">تنفيذ سريع</h3>
                <p className="text-gray-600 leading-relaxed">
                  نبدأ حملاتك خلال 48 ساعة ونحسّنها باستمرار لضمان أفضل النتائج الممكنة
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-red-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">دعم متواصل</h3>
                <p className="text-gray-600 leading-relaxed">
                  فريق مخصص يتحدث العربية متاح لك على مدار الساعة للإجابة على استفساراتك
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-indigo-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">خبرة مثبتة</h3>
                <p className="text-gray-600 leading-relaxed">
                  عملنا مع أكثر من 200 شركة في السعودية والخليج بنتائج استثنائية
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                خدماتنا
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                حلول تسويقية متكاملة مصممة خصيصًا لتحقيق أهدافك
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">إعلانات ميتا (فيسبوك وإنستغرام)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 ml-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">حملات مخصصة تستهدف جمهورك المثالي</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 ml-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">إعلانات إبداعية تجذب الانتباه وتحقق التفاعل</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 ml-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">تحسين مستمر للحصول على أقل تكلفة لكل عميل</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 ml-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">إعادة استهداف الزوار لزيادة معدلات التحويل</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">إعلانات جوجل</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">إعلانات البحث للظهور عندما يبحث العملاء عنك</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">إعلانات العرض للوصول لجمهور أوسع</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">تحسين محركات البحث (SEO) لنتائج طويلة المدى</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">إعلانات يوتيوب لزيادة الوعي بعلامتك التجارية</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              جاهز لتنمية أعمالك؟
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              احصل على استشارة مجانية واكتشف كيف يمكننا مضاعفة مبيعاتك عبر الإنترنت
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:sari@fixads.xyz"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Mail className="w-5 h-5 ml-2" />
                sari@fixads.xyz
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <img
                  src="/logos/my_logo/Fixads_logo.png"
                  alt="FixAds Logo"
                  className="h-10"
                />
                <div className="text-sm text-gray-400">
                  © 2026 فيكس آدز. جميع الحقوق محفوظة.
                </div>
              </div>
              <div className="flex gap-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  سياسة الخصوصية
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  الشروط والأحكام
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SaudiArabia;
