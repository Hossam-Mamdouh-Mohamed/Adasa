import React from 'react'

export default function Article({ article }) {
    return (
        <article class="group card overflow-hidden" >
            <a class="block" href={`/blog/${article.slug}`} data-discover="true">
                <div class="relative h-52 overflow-hidden">
                    <img alt={article.title} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src={article.image} />
                    <div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>
                    <div class="absolute top-4 right-4">
                        <span class="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">{article.category}</span>
                    </div>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                        <span class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>8 دقائق للقراءة</span>
                        <span class="w-1 h-1 bg-neutral-600 rounded-full"></span>
                        <span>١٥ يناير ٢٠٢٦</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">{article.title}</h3>
                    <p class="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">{article.excerpt}</p>
                    <div class="flex items-center justify-between pt-4 border-t border-[#262626]">
                        <div class="flex items-center gap-3">
                            <img alt={article.author.name} class="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]" src={article.author.avatar} />
                            <div>
                                <p class="text-sm font-medium text-white">{article.author.name}</p>
                                <p class="text-xs text-neutral-500">{article.author.title}</p>
                            </div>
                        </div>
                        <div class="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent"><svg class="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    </div>
                </div>
            </a>
        </article>
    )
}
