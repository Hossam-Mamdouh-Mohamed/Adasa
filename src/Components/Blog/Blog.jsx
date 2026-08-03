import React from 'react';
import Article from '../Article/Article';
import articlesData from "../../Data/posts.json";
import { useSearchParams } from "react-router-dom";

export default function Blog() {

  const [articles, setArticles] = React.useState(articlesData.posts);
  const [category, setCategory] = React.useState('all');
  const [categories, setCategories] = React.useState(articlesData.categories);
  const [query, setQuery] = React.useState('');
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");


  const visibleArticles = articles.filter((a) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      (a.title && a.title.toLowerCase().includes(q)) ||
      (a.excerpt && a.excerpt.toLowerCase().includes(q)) ||
      (a.content && a.content.toLowerCase().includes(q))
    );
  });

  function changeCategory(catId) {
    if (catId === 'all') {
      setArticles(articlesData.posts);
      setCategory('all');
    } else {
      const filteredArticles = articlesData.posts.filter((article) => article.category === catId);
      setArticles(filteredArticles);
      console.log(filteredArticles);
      setCategory(catId);
    }
  }

  return (
    <div class="min-h-screen bg-[#0a0a0a]">
      <div class="relative py-20 overflow-hidden">
        <div class="absolute inset-0 bg-[#0a0a0a]">
        </div>
        <div class="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]">
        </div>
        <div class="absolute inset-0">
          <div class="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl">
          </div>
          <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl">
          </div>
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span class="section-label inline-flex items-center gap-2 mb-6"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>مدونتنا</span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">استكشف <span class="gradient-text">مقالاتنا</span>
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl mx-auto">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
        </div>
      </div>
      <div class="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="relative w-full md:w-80">
          <input placeholder="ابحث في المقالات..." className="input-light w-full px-5 py-3 pr-12 text-white placeholder:text-neutral-500" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
          <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <div class="flex flex-wrap justify-center gap-2">
          <button onClick={() => changeCategory("all")} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${category === "all" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#0a0a0a]/80 backdrop-blur-sm text-white hover:bg-linear-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white"}`}>جميع المقالات</button>
          {categories.map((cat) => (
            <button key={cat.name} onClick={() => changeCategory(cat.name)} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${category === cat.name ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#0a0a0a]/80 backdrop-blur-sm text-white hover:bg-linear-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white"}`}>{cat.name}</button>
          ))}
        </div>
      </div>
      </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {visibleArticles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
