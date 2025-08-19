const App = () => {
  const products = [
    {
      id: "p1",
      title: "抖音起號速成班（4 週）",
      category: "課程",
      priceTWD: 6990,
      highlights: ["演算法基礎", "內容腳本模板", "一鍵剪輯流程"],
      label: "熱門",
      media: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1200",
    },
    {
      id: "p2",
      title: "抖音帶貨訓練營（8 週）",
      category: "課程",
      priceTWD: 16800,
      highlights: ["選品邏輯", "直播話術", "成交 SOP"],
      label: "高轉化",
      media: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=1200",
    },
    {
      id: "p3",
      title: "微信小店＆跨境支付實戰",
      category: "課程",
      priceTWD: 9800,
      highlights: ["店鋪開通", "物流關稅", "廣告投放"],
      label: "新手友善",
      media: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200",
    },
    {
      id: "p4",
      title: "上海自由行 5 日套裝（台北出發）",
      category: "旅遊",
      priceTWD: 18900,
      highlights: ["直飛往返", "精選四星住宿", "地鐵卡&上網卡"],
      label: "限量",
      media: "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?w=1200",
    },
    {
      id: "p5",
      title: "北京文化深度 6 日",
      category: "旅遊",
      priceTWD: 25900,
      highlights: ["紫禁城導覽", "長城一日", "京味兒美食"],
      label: "經典",
      media: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200",
    },
    {
      id: "p6",
      title: "中國旅遊簽證代辦（單次）",
      category: "加購",
      priceTWD: 2200,
      highlights: ["專人審件", "表格代填", "進度追蹤"],
      label: "便利",
      media: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200",
    },
    {
      id: "p7",
      title: "旅平險加購（旅遊）",
      category: "加購",
      priceTWD: 480,
      highlights: ["醫療補助", "班機延誤", "行李保障"],
      label: "安心",
      media: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200",
    },
    {
      id: "p8",
      title: "一對一顧問（抖音/選品/投放）60 分",
      category: "課程",
      priceTWD: 2800,
      highlights: ["客製策略", "帳號健檢", "30 天跟進"],
      label: "客製",
      media: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200",
    },
  ];

  const twdToCny = (twd, rate) => Math.round((twd * rate) * 100) / 100;
  const formatCurrency = (n, c = "TWD") => new Intl.NumberFormat("zh-TW", { style: "currency", currency: c }).format(n);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* 頂部導覽 */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70">
        <div className="container py-3 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-6 h-6"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          <div className="font-bold text-xl">台灣 → 中國｜旅遊 & 抖音課程商店</div>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input placeholder="搜尋課程 / 行程" className="pl-9 w-56 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-4 h-4"><path d="m6 9 6 6 6-6"/></svg>全部</button>
          </div>
        </div>
      </header>

      {/* Hero 區塊 */}
      <section className="relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center py-10 md:py-16">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">一站式：台灣飛中國旅遊 × 抖音成長課</h1>
              <p className="mt-4 text-slate-600">行程、簽證、保險一次搞定；從 0-1 起號到直播帶貨，幫你把人流變現。</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-base bg-secondary text-secondary-foreground hover:bg-secondary/80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-4 h-4 mr-1"><path d="M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z"/><path d="M12 21.7c-.3 0-.6-.1-.9-.2C6.9 19.5 3 14.4 3 10a9 9 0 0 1 18 0c0 4.4-3.9 9.5-8.1 11.5-.3.2-.6.3-.9.3Z"/></svg>直飛熱門城市</span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-base bg-secondary text-secondary-foreground hover:bg-secondary/80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucude-youtube w-4 h-4 mr-1"><path d="M2.5 17.5V14H6m4 0h-4v3.5"/><path d="M11 14v6.5m3 0V14h4v3.5"/><path d="M21.5 15.5L18 14v7l3.5-1.5z"/><path d="M22 17a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2zM2 17v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/></svg>短影片 SOP</span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-base bg-secondary text-secondary-foreground hover:bg-secondary/80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-4 h-4 mr-1"><path d="M20 13c0 5-3.5 7.5-7.6 9C6.1 20.5 2 17.8 2 13V5l10-3 10 3Z"/><path d="m9 12 2 2 4-4"/></svg>簽證/保險代辦</span>
              </div>
              <div className="mt-8 flex gap-3">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">看旅遊套裝</button>
                <button className="inline-flex items-center justify-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">看抖音課程</button>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=1600" alt="China Travel" className="rounded-3xl shadow-xl object-cover w-full h-[320px] md:h-[420px]"/>
              <div className="absolute -bottom-5 left-6 bg-white rounded-2xl shadow p-4 flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2 w-6 h-6 text-green-600"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                <div className="text-sm leading-tight"><div className="font-semibold">真人客服全天回覆</div><div className="text-slate-500">下單後提供行前包與社群群組</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 商品區塊 */}
      <section className="container py-8 md:py-12">
        <div className="grid grid-cols-4 max-w-xl">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-muted hover:text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">全部</button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-muted hover:text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">課程</button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {products.map(p => (
            <div key={p.id} className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-xl transition-shadow">
              <div className="relative">
                <img src={p.media} alt={p.title} className="w-full h-48 object-cover rounded-t-lg"/>
                {p.label && <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 absolute top-3 left-3">{p.label}</span>}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold leading-snug line-clamp-2">{p.title}</h3>
                <div className="text-sm text-slate-500 mt-1">{p.category}</div>
                <ul className="text-sm text-slate-700 grid grid-cols-2 gap-x-4 gap-y-1 list-disc list-inside mt-4">
                  {p.highlights.map((h, idx)=>(<li key={idx}>{h}</li>))}
                </ul>
                <div className="flex items-end justify-between mt-4">
                  <div className="text-lg font-semibold">{formatCurrency(p.priceTWD)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 信任區塊 */}
      <section className="bg-white border-t">
        <div className="container py-12 grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold">為什麼選擇我們？</h3>
            <p className="mt-2 text-slate-600">專注兩岸旅遊與短影音培訓，整合行前準備與商業化知識，一次到位。</p>
            <ul className="mt-4 text-sm space-y-2 text-slate-700 list-disc list-inside">
              <li>兩岸旅遊規劃與客服支援</li>
              <li>抖音帳號從 0 起號到帶貨變現</li>
              <li>簽證/保險/網卡一鍵加購</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">學員與旅客回饋</h3>
            <div className="mt-3 space-y-3">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm"><div className="p-4 text-sm">從 0 粉到 1,500 粉只花 3 週，直播首場破 50 單。</div></div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm"><div className="p-4 text-sm">客服超耐心，簽證+網卡直接加購很方便。</div></div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm"><div className="p-4 text-sm">上海行程輕鬆，晚上還帶我們踩點拍片。</div></div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">常見問題</h3>
            <div className="mt-3 text-sm space-y-3 text-slate-700">
              <div>
                <div className="font-semibold">如何付款？</div>
                <div>本原型未串接金流。正式上線可支援台灣常見金流與跨境支付，並支援電子發票。</div>
              </div>
              <div>
                <div className="font-semibold">課程如何開課？</div>
                <div>成功下單後，將寄送課綱與社群連結，於指定日期開課並提供錄播。</div>
              </div>
              <div>
                <div className="font-semibold">旅遊是否含保險？</div>
                <div>行程可加購旅平險；保險內容以保單為準。</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 頁腳 */}
      <footer className="border-t">
        <div className="container py-8 text-xs text-slate-500 space-y-2">
          <div>© {new Date().getFullYear()} TW→CN Travel & Courses. 本頁為示意原型，價格/匯率僅供參考，實際以合約與金流為準。</div>
          <div>上線提醒：請依台灣與中國相關法規辦理（旅行業執照、簽證規範、跨境個資/稅務、廣告標示等），並留意平台內容合規。</div>
        </div>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
