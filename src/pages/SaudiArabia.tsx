import React, { useState, useEffect } from 'react';
import SEO from '../components/layout/SEO';
import { ArrowLeft, Mail, TrendingUp, Users, Award, CheckCircle, Zap, Target, BarChart3, Sparkles, Rocket, Shield, Clock } from 'lucide-react';
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

  const mobileVideoId = 'wCcNrVndCg8';
  const desktopVideoId = '9N6Wk3x9w_8';
  const currentVideoId = isMobile ? mobileVideoId : desktopVideoId;

  return (
    <>
      <SEO
        title="فيكس آدز - شريكك في النجاح الرقمي | خبراء التسويق الرقمي في السعودية"
        description="نحوّل استثماراتك الإعلانية إلى نتائج حقيقية. متخصصون في إعلانات ميتا وجوجل مع ضمان تحقيق عائد استثمار مضاعف للشركات السعودية."
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir="rtl">
        {/* Hero Section */}
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)' }}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            {/* Trust Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 text-white">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-semibold">شريك معتمد من جوجل وميتا</span>
              </div>
            </div>

            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                نضاعف أرباحك من
                <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mt-2">
                  الإعلانات الرقمية
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
                نحوّل كل ريال تنفقه على الإعلانات إلى عملاء حقيقيين ومبيعات مضمونة
                <br className="hidden md:block" />
                مع استراتيجيات مدروسة وتقنيات متقدمة في إعلانات ميتا وجوجل
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="mailto:sari@fixads.xyz"
                  className="group inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1"
                >
                  <Mail className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform" />
                  احجز استشارتك المجانية الآن
                </a>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all">
                  <div className="text-5xl font-extrabold text-white mb-2">×2.5</div>
                  <div className="text-blue-100 font-medium">ضعف العائد على الاستثمار</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all">
                  <div className="text-5xl font-extrabold text-white mb-2">6 أسابيع</div>
                  <div className="text-blue-100 font-medium">للوصول إلى الربحية</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all">
                  <div className="text-5xl font-extrabold text-white mb-2">200+</div>
                  <div className="text-blue-100 font-medium">عميل ناجح في الخليج</div>
                </div>
              </div>
            </div>

            {/* YouTube Video */}
            <div className="relative z-20 w-full max-w-5xl mx-auto">
              <div className={`relative ${isMobile ? 'aspect-[9/16]' : 'aspect-video'} rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20`}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${currentVideoId}?autoplay=1&mute=1&loop=1&playlist=${currentVideoId}&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                  title="فيديو تسويقي فيكس آدز"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-5 py-2 mb-6 font-semibold">
                <Sparkles className="w-5 h-5" />
                لماذا فيكس آدز؟
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                الفرق الذي يصنع النجاح
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                نجمع بين الخبرة العالمية والفهم العميق للسوق السعودي لتحقيق نتائج استثنائية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-blue-100 hover:border-blue-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">استهداف دقيق بالذكاء الاصطناعي</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  نستخدم تقنيات الذكاء الاصطناعي المتقدمة لاستهداف عملائك المثاليين بدقة تصل إلى 95%، مما يضمن وصول إعلاناتك للأشخاص الأكثر احتمالية للشراء
                </p>
              </div>

              <div className="group bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-green-100 hover:border-green-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">نمو قابل للقياس</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  كل حملة مبنية على أهداف واضحة قابلة للقياس. نضمن لك زيادة مبيعاتك بنسبة 150% خلال الأشهر الثلاثة الأولى أو نعيد إليك أموالك
                </p>
              </div>

              <div className="group bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-orange-100 hover:border-orange-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">تقارير لحظية شفافة</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  تابع نتائجك في الوقت الفعلي عبر لوحة تحكم خاصة تُظهر كل تفاصيل حملاتك: عدد العملاء، تكلفة كل عميل، والعائد على كل ريال
                </p>
              </div>

              <div className="group bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-red-100 hover:border-red-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">إطلاق سريع خلال 48 ساعة</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  نبدأ حملاتك خلال يومين فقط من التوقيع، مع تحسين يومي مستمر لضمان أفضل أداء وأقل تكلفة لكل عميل جديد
                </p>
              </div>

              <div className="group bg-gradient-to-br from-cyan-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-cyan-100 hover:border-cyan-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">فريق سعودي متخصص</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  فريق من الخبراء السعوديين يفهم ثقافة السوق المحلي ويتحدث لغتك، متاح على مدار الساعة للرد على استفساراتك وتحسين نتائجك
                </p>
              </div>

              <div className="group bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-yellow-100 hover:border-yellow-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">شراكات رسمية مع جوجل وميتا</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  كشركاء معتمدين رسميًا، نحصل على ميزات حصرية ودعم مباشر يضمن لك أفضل النتائج بأقل التكاليف الممكنة
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-5 py-2 mb-6 font-semibold">
                <Zap className="w-5 h-5" />
                خدماتنا
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                حلول متكاملة لنجاحك الرقمي
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                نقدم باقة شاملة من الخدمات المصممة خصيصًا لتحقيق أهدافك وتنمية أعمالك
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Meta Ads */}
              <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all border-2 border-blue-100 hover:border-blue-400 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full filter blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-gray-900">إعلانات ميتا</h3>
                  </div>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    استفد من قوة فيسبوك وإنستغرام للوصول إلى ملايين العملاء المحتملين
                  </p>
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 ml-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">حملات مخصصة تستهدف جمهورك المثالي بدقة عالية باستخدام تقنيات الذكاء الاصطناعي</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 ml-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">تصاميم إبداعية احترافية تجذب الانتباه وتحقق أعلى معدلات التفاعل والمبيعات</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 ml-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">تحسين يومي مستمر لخفض تكلفة العميل وزيادة العائد على كل ريال تنفقه</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 ml-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">إعادة استهداف ذكية للزوار السابقين لمضاعفة معدلات التحويل والمبيعات</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 ml-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">اختبار A/B متقدم لضمان أفضل أداء ممكن لكل إعلان</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Google Ads */}
              <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all border-2 border-green-100 hover:border-green-400 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400 to-green-600 rounded-full filter blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-gray-900">إعلانات جوجل</h3>
                  </div>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    احتل المراتب الأولى في نتائج البحث وحوّل الباحثين إلى عملاء
                  </p>
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 ml-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">إعلانات البحث للظهور في اللحظة التي يبحث فيها عملاؤك عن خدماتك</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 ml-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">إعلانات العرض للوصول إلى جمهور أوسع عبر ملايين المواقع الإلكترونية</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 ml-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">تحسين محركات البحث (SEO) لنتائج عضوية مستدامة وطويلة المدى</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 ml-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">إعلانات يوتيوب لزيادة الوعي بعلامتك التجارية والوصول لملايين المشاهدين</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 ml-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">إعلانات التسوق لعرض منتجاتك مباشرة في نتائج البحث</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 rounded-full px-5 py-2 mb-6 font-semibold">
                <Clock className="w-5 h-5" />
                طريقة العمل
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                رحلتك نحو النجاح في 4 خطوات
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                عملية واضحة ومنظمة لضمان تحقيق أهدافك بأسرع وقت ممكن
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl rotate-6"></div>
                  <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl w-full h-full flex items-center justify-center shadow-xl">
                    <span className="text-4xl font-extrabold text-white">1</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">الاستشارة المجانية</h3>
                <p className="text-gray-600 leading-relaxed">
                  نتعرف على عملك وأهدافك ونضع خطة مخصصة لتحقيق النجاح
                </p>
              </div>

              <div className="text-center">
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl rotate-6"></div>
                  <div className="relative bg-gradient-to-br from-green-500 to-green-700 rounded-3xl w-full h-full flex items-center justify-center shadow-xl">
                    <span className="text-4xl font-extrabold text-white">2</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">التخطيط الاستراتيجي</h3>
                <p className="text-gray-600 leading-relaxed">
                  نصمم استراتيجية شاملة مبنية على بيانات السوق وتحليل المنافسين
                </p>
              </div>

              <div className="text-center">
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl rotate-6"></div>
                  <div className="relative bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl w-full h-full flex items-center justify-center shadow-xl">
                    <span className="text-4xl font-extrabold text-white">3</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">الإطلاق والتنفيذ</h3>
                <p className="text-gray-600 leading-relaxed">
                  نبدأ حملاتك خلال 48 ساعة مع تصاميم احترافية ومحتوى جذاب
                </p>
              </div>

              <div className="text-center">
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-3xl rotate-6"></div>
                  <div className="relative bg-gradient-to-br from-red-500 to-red-700 rounded-3xl w-full h-full flex items-center justify-center shadow-xl">
                    <span className="text-4xl font-extrabold text-white">4</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">التحسين المستمر</h3>
                <p className="text-gray-600 leading-relaxed">
                  نراقب ونحسّن حملاتك يوميًا لضمان أفضل النتائج وأقل التكاليف
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)' }}>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-float"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              جاهز لمضاعفة أرباحك؟
            </h2>
            <p className="text-2xl text-blue-50 mb-12 leading-relaxed max-w-3xl mx-auto">
              احصل على استشارة مجانية اليوم واكتشف كيف يمكننا تحويل إعلاناتك إلى آلة مبيعات مستمرة
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="mailto:sari@fixads.xyz"
                className="group inline-flex items-center px-12 py-6 bg-white text-blue-600 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1"
              >
                <Mail className="w-7 h-7 ml-3 group-hover:rotate-12 transition-transform" />
                تواصل معنا الآن
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg">استشارة مجانية بدون التزام</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg">رد خلال 24 ساعة</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg">ضمان تحقيق النتائج</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <img
                  src="/logos/my_logo/Fixads_logo.png"
                  alt="شعار فيكس آدز"
                  className="h-12"
                />
                <div className="text-sm text-gray-400">
                  © 2026 فيكس آدز. جميع الحقوق محفوظة.
                </div>
              </div>
              <div className="flex gap-8 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  سياسة الخصوصية
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  الشروط والأحكام
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  النسخة الإنجليزية
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SaudiArabia;
