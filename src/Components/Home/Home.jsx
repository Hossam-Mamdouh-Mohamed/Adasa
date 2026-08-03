import React from 'react'

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a] mt-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]">
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob">
        </div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob" style={{ animationDelay: "-2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-500/5 rounded-full blur-3xl"></div><div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="section-label inline-flex items-center gap-2 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium text-neutral-300">مرحباً بك في عدسة</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">اكتشف <span className="text-amber-500">فن <br /></span>التصوير الفوتوغرافي</h1>
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p><div className="flex flex-col sm:flex-row justify-center gap-4 mb-16"><a className="btn-primary inline-flex items-center justify-center gap-2 group" href="/blog" data-discover="true"><span>استكشف المقالات</span>
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a><a className="btn-secondary inline-flex items-center justify-center gap-2" href="/about" data-discover="true"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>اعرف المزيد</span>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass-card p-4 hover:scale-105 transition-transform duration-300" style={{ animationDelay: "0ms" }}><i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold gradient-text">+50</p>
                <p className="text-neutral-500 text-sm">مقالة</p>
              </div>
              <div className="glass-card p-4 hover:scale-105 transition-transform duration-300" style={{ animationDelay: "100ms" }}><i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold gradient-text">+10ألف</p>
                <p className="text-neutral-500 text-sm">قارئ</p>
              </div>
              <div className="glass-card p-4 hover:scale-105 transition-transform duration-300" style={{ animationDelay: "200ms" }}><i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold gradient-text">4</p>
                <p className="text-neutral-500 text-sm">تصنيفات</p>
              </div>
              <div className="glass-card p-4 hover:scale-105 transition-transform duration-300" style={{ animationDelay: "300ms" }}><i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold gradient-text">6</p>
                <p className="text-neutral-500 text-sm">كاتب</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-500/5 to-transparent">
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="section-label mb-4">
                <span className="relative flex h-2 w-2 ml-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75">
                  </span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>مميز</span>
              <h2 className="section-title text-white">مقالات مختارة</h2>
              <p className="section-subtitle max-w-lg">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>
            <a className="group inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5" href="/blog" data-discover="true">عرض الكل<svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
          <div className="space-y-8">
            <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500" style={{ animationDelay: "0ms" }}><a className="block" href="/blog/mastering-golden-hour-photography" data-discover="true"><div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-72 md:h-100 overflow-hidden">
                <img alt="إتقان تصوير الساعة الذهبية: دليل شامل" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&amp;h=400&amp;fit=crop" />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-rrom-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>مميز</span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">إضاءة</span>
                  <span className="flex items-center gap-1 text-sm text-neutral-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>8 دقائق للقراءة</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">إتقان تصوير الساعة الذهبية: دليل شامل</h2>
                <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img alt="سالم أحمد" className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=face" />
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">سالم أحمد</p>
                      <p className="text-xs text-neutral-500">١٥ يناير ٢٠٢٦</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">اقرأ المقال<svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                </div>
              </div>
            </div>
            </a>
            </article>
            <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500" style={{ animationDelay: "150ms" }}><a className="block" href="/blog/portrait-photography-secrets" data-discover="true"><div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-72 md:h-100 overflow-hidden">
                <img alt="أسرار تصوير البورتريه: كيف تلتقط روح الشخصية" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&amp;h=400&amp;fit=crop" />
                <div className="absolute inset-0 bg-linear-to-trom-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>مميز</span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">بورتريه</span>
                  <span className="flex items-center gap-1 text-sm text-neutral-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>6 دقائق للقراءة</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">أسرار تصوير البورتريه: كيف تلتقط روح الشخصية</h2>
                <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img alt="محمد علي" className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=face" />
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]">
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">محمد علي</p>
                      <p className="text-xs text-neutral-500">١٢ يناير ٢٠٢٦</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">اقرأ المقال<svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                </div>
              </div>
            </div>
            </a>
            </article>
            <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500" style={{ animationDelay: "300ms" }}><a className="block" href="/blog/landscape-photography-guide" data-discover="true"><div className="grid md:grid-cols-2 gap-0"><div className="relative h-72 md:h-100rflow-hidden">
              <img alt="دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&amp;h=400&amp;fit=crop" />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              </div>
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>مميز</span>
              </div>
            </div>
              <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">مناظر طبيعية</span>
                  <span className="flex items-center gap-1 text-sm text-neutral-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>10 دقائق للقراءة</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف</h2>
                <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img alt="إبراهيم حسن" className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop&amp;crop=face" />
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]">
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">إبراهيم حسن</p>
                      <p className="text-xs text-neutral-500">١٠ يناير ٢٠٢٦</p></div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">اقرأ المقال<svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                </div>
              </div>
            </div>
            </a>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mb-4">
              <span className="relative flex h-2 w-2 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>التصنيفات</span>
            <h2 className="section-title text-white">استكشف حسب الموضوع</h2>
            <p className="section-subtitle max-w-lg mx-auto">اعثر على محتوى مصمم حسب اهتماماتك</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <a className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1" href="/blog?category=إضاءة" data-discover="true" style={{animationDelay: "0ms"}}>
              <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div><div className="relative z-10">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <i className="fa-solid fa-sun text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">إضاءة</h3>
                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">3 مقالة</p>
                <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-4 h-4 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div></div></a>
                  <a className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1" href="/blog?category=بورتريه" data-discover="true" style={{animationDelay: "100ms"}}>
              <div className="absolute inset-0 bg-linear-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <i className="fa-solid fa-user text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">بورتريه</h3>

                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">3 مقالة</p>
                <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300"><svg className="w-4 h-4 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </a>
            <a className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1" href="/blog?category=مناظر طبيعية" data-discover="true" style={{animationDelay: "200ms"}}>
              <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent"><i className="fa-solid fa-mountain-sun text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                </div>

                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">مناظر طبيعية</h3><p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">2 مقالة</p>
                <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300"><svg className="w-4 h-4 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </a>
            <a className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1" href="/blog?category=تقنيات" data-discover="true" style={{animationDelay: "300ms"}}>
              <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div><div className="relative z-10"><div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent"><i className="fa-solid fa-sliders text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i></div><h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">تقنيات</h3><p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">5 مقالة</p>
                <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300"><svg className="w-4 h-4 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div>
              </div>
            </a>
            <a className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1" href="/blog?category=معدات" data-discover="true" style={{animationDelay: "400ms"}}>
              <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div><div className="relative z-10"><div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent"><i className="fa-solid fa-sun text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i></div><h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">معدات</h3><p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">3 مقالة</p><div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300"><svg className="w-4 h-4 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
