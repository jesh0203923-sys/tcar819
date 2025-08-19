// 注意: 這段程式碼已將所有外部元件（如 Button, Card）替換為基本的 HTML 元素，以確保在 CodePen 上直接運作。
// 這是一個純粹的 JSX 程式碼，不依賴任何外部套件。

const App = () => {
  // 由於沒有狀態管理庫，這裡只呈現靜態介面
  // 為了簡化，所有互動功能（如購物車、篩選）都已移除，只保留介面呈現。

  const products = [
  {
    id: "p1",
    title: "抖音起號速成班（4 週）",
    category: "課程",
    priceTWD: 6990,
    highlights: ["演算法基礎", "內容腳本模板", "一鍵剪輯流程"],
    label: "熱門",
    media: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1200" },

  {
    id: "p2",
    title: "抖音帶貨訓練營（8 週）",
    category: "課程",
    priceTWD: 16800,
    highlights: ["選品邏輯", "直播話術", "成交 SOP"],
    label: "高轉化",
    media: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=1200" },

  {
    id: "p3",
    title: "微信小店＆跨境支付實戰",
    category: "課程",
    priceTWD: 9800,
    highlights: ["店鋪開通", "物流關稅", "廣告投放"],
    label: "新手友善",
    media: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200" },

  {
    id: "p4",
    title: "上海自由行 5 日套裝（台北出發）",
    category: "旅遊",
    priceTWD: 18900,
    highlights: ["直飛往返", "精選四星住宿", "地鐵卡&上網卡"],
    label: "限量",
    media: "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?w=1200" },

  {
    id: "p5",
    title: "北京文化深度 6 日",
    category: "旅遊",
    priceTWD: 25900,
    highlights: ["紫禁城導覽", "長城一日", "京味兒美食"],
    label: "經典",
    media: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200" },

  {
    id: "p6",
    title: "中國旅遊簽證代辦（單次）",
    category: "加購",
    priceTWD: 2200,
    highlights: ["專人審件", "表格代填", "進度追蹤"],
    label: "便利",
    media: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200" },

  {
    id: "p7",
    title: "旅平險加購（旅遊）",
    category: "加購",
    priceTWD: 480,
    highlights: ["醫療補助", "班機延誤", "行李保障"],
    label: "安心",
    media: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200" },

  {
    id: "p8",
    title: "一對一顧問（抖音/選品/投放）60 分",
    category: "課程",
    priceTWD: 2800,
    highlights: ["客製策略", "帳號健檢", "30 天跟進"],
    label: "客製",
    media: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200" }];



  const twdToCny = (twd, rate) => Math.round(twd * rate * 100) / 100;
  const formatCurrency = (n, c = "TWD") => new Intl.NumberFormat("zh-TW", { style: "currency", currency: c }).format(n);

  return /*#__PURE__*/(
    React.createElement("div", { className: "min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800" }, /*#__PURE__*/

    React.createElement("header", { className: "sticky top-0 z-50 backdrop-blur bg-white/70 border-b" }, /*#__PURE__*/
    React.createElement("div", { className: "container py-3 flex items-center gap-3" }, /*#__PURE__*/
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-globe w-6 h-6" }, /*#__PURE__*/React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /*#__PURE__*/React.createElement("path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }), /*#__PURE__*/React.createElement("path", { d: "M2 12h20" })), /*#__PURE__*/
    React.createElement("div", { className: "font-bold text-xl" }, "\u53F0\u7063 \u2192 \u4E2D\u570B\uFF5C\u65C5\u904A & \u6296\u97F3\u8AB2\u7A0B\u5546\u5E97"), /*#__PURE__*/
    React.createElement("div", { className: "ml-auto flex items-center gap-2" }, /*#__PURE__*/
    React.createElement("div", { className: "relative" }, /*#__PURE__*/
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-search w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" }, /*#__PURE__*/React.createElement("circle", { cx: "11", cy: "11", r: "8" }), /*#__PURE__*/React.createElement("path", { d: "m21 21-4.3-4.3" })), /*#__PURE__*/
    React.createElement("input", { placeholder: "\u641C\u5C0B\u8AB2\u7A0B / \u884C\u7A0B", className: "pl-9 w-56 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" })), /*#__PURE__*/

    React.createElement("button", { className: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-2" }, /*#__PURE__*/React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-chevron-down w-4 h-4" }, /*#__PURE__*/React.createElement("path", { d: "m6 9 6 6 6-6" })), "\u5168\u90E8")))), /*#__PURE__*/





    React.createElement("section", { className: "relative" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center py-10 md:py-16" }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h1", { className: "text-3xl md:text-5xl font-extrabold leading-tight" }, "\u4E00\u7AD9\u5F0F\uFF1A\u53F0\u7063\u98DB\u4E2D\u570B\u65C5\u904A \xD7 \u6296\u97F3\u6210\u9577\u8AB2"), /*#__PURE__*/
    React.createElement("p", { className: "mt-4 text-slate-600" }, "\u884C\u7A0B\u3001\u7C3D\u8B49\u3001\u4FDD\u96AA\u4E00\u6B21\u641E\u5B9A\uFF1B\u5F9E 0-1 \u8D77\u865F\u5230\u76F4\u64AD\u5E36\u8CA8\uFF0C\u5E6B\u4F60\u628A\u4EBA\u6D41\u8B8A\u73FE\u3002"), /*#__PURE__*/
    React.createElement("div", { className: "mt-6 flex flex-wrap gap-3" }, /*#__PURE__*/
    React.createElement("span", { className: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-base bg-secondary text-secondary-foreground hover:bg-secondary/80" }, /*#__PURE__*/React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-map-pin w-4 h-4 mr-1" }, /*#__PURE__*/React.createElement("path", { d: "M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z" }), /*#__PURE__*/React.createElement("path", { d: "M12 21.7c-.3 0-.6-.1-.9-.2C6.9 19.5 3 14.4 3 10a9 9 0 0 1 18 0c0 4.4-3.9 9.5-8.1 11.5-.3.2-.6.3-.9.3Z" })), "\u76F4\u98DB\u71B1\u9580\u57CE\u5E02"), /*#__PURE__*/
    React.createElement("span", { className: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-base bg-secondary text-secondary-foreground hover:bg-secondary/80" }, /*#__PURE__*/React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucude-youtube w-4 h-4 mr-1" }, /*#__PURE__*/React.createElement("path", { d: "M2.5 17.5V14H6m4 0h-4v3.5" }), /*#__PURE__*/React.createElement("path", { d: "M11 14v6.5m3 0V14h4v3.5" }), /*#__PURE__*/React.createElement("path", { d: "M21.5 15.5L18 14v7l3.5-1.5z" }), /*#__PURE__*/React.createElement("path", { d: "M22 17a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2zM2 17v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" })), "\u77ED\u5F71\u7247 SOP"), /*#__PURE__*/
    React.createElement("span", { className: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-base bg-secondary text-secondary-foreground hover:bg-secondary/80" }, /*#__PURE__*/React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-shield-check w-4 h-4 mr-1" }, /*#__PURE__*/React.createElement("path", { d: "M20 13c0 5-3.5 7.5-7.6 9C6.1 20.5 2 17.8 2 13V5l10-3 10 3Z" }), /*#__PURE__*/React.createElement("path", { d: "m9 12 2 2 4-4" })), "\u7C3D\u8B49/\u4FDD\u96AA\u4EE3\u8FA6")), /*#__PURE__*/

    React.createElement("div", { className: "mt-8 flex gap-3" }, /*#__PURE__*/
    React.createElement("button", { className: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8" }, "\u770B\u65C5\u904A\u5957\u88DD"), /*#__PURE__*/
    React.createElement("button", { className: "inline-flex items-center justify-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8" }, "\u770B\u6296\u97F3\u8AB2\u7A0B"))), /*#__PURE__*/


    React.createElement("div", { className: "relative" }, /*#__PURE__*/
    React.createElement("img", { src: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=1600", alt: "China Travel", className: "rounded-3xl shadow-xl object-cover w-full h-[320px] md:h-[420px]" }), /*#__PURE__*/
    React.createElement("div", { className: "absolute -bottom-5 left-6 bg-white rounded-2xl shadow p-4 flex items-center gap-4" }, /*#__PURE__*/
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-check-circle-2 w-6 h-6 text-green-600" }, /*#__PURE__*/React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /*#__PURE__*/React.createElement("path", { d: "m9 12 2 2 4-4" })), /*#__PURE__*/
    React.createElement("div", { className: "text-sm leading-tight" }, /*#__PURE__*/React.createElement("div", { className: "font-semibold" }, "\u771F\u4EBA\u5BA2\u670D\u5168\u5929\u56DE\u8986"), /*#__PURE__*/React.createElement("div", { className: "text-slate-500" }, "\u4E0B\u55AE\u5F8C\u63D0\u4F9B\u884C\u524D\u5305\u8207\u793E\u7FA4\u7FA4\u7D44"))))))), /*#__PURE__*/







    React.createElement("section", { className: "container py-8 md:py-12" }, /*#__PURE__*/
    React.createElement("div", { className: "grid grid-cols-4 max-w-xl" }, /*#__PURE__*/
    React.createElement("button", { className: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-muted hover:text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm" }, "\u5168\u90E8"), /*#__PURE__*/
    React.createElement("button", { className: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-muted hover:text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm" }, "\u8AB2\u7A0B")), /*#__PURE__*/


    React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6" },
    products.map((p) => /*#__PURE__*/
    React.createElement("div", { key: p.id, className: "overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-xl transition-shadow" }, /*#__PURE__*/
    React.createElement("div", { className: "relative" }, /*#__PURE__*/
    React.createElement("img", { src: p.media, alt: p.title, className: "w-full h-48 object-cover rounded-t-lg" }),
    p.label && /*#__PURE__*/React.createElement("span", { className: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 absolute top-3 left-3" }, p.label)), /*#__PURE__*/

    React.createElement("div", { className: "p-6" }, /*#__PURE__*/
    React.createElement("h3", { className: "text-xl font-semibold leading-snug line-clamp-2" }, p.title), /*#__PURE__*/
    React.createElement("div", { className: "text-sm text-slate-500 mt-1" }, p.category), /*#__PURE__*/
    React.createElement("ul", { className: "text-sm text-slate-700 grid grid-cols-2 gap-x-4 gap-y-1 list-disc list-inside mt-4" },
    p.highlights.map((h, idx) => /*#__PURE__*/React.createElement("li", { key: idx }, h))), /*#__PURE__*/

    React.createElement("div", { className: "flex items-end justify-between mt-4" }, /*#__PURE__*/
    React.createElement("div", { className: "text-lg font-semibold" }, formatCurrency(p.priceTWD)))))))), /*#__PURE__*/








    React.createElement("section", { className: "bg-white border-t" }, /*#__PURE__*/
    React.createElement("div", { className: "container py-12 grid md:grid-cols-3 gap-6" }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h3", { className: "text-xl font-bold" }, "\u70BA\u4EC0\u9EBC\u9078\u64C7\u6211\u5011\uFF1F"), /*#__PURE__*/
    React.createElement("p", { className: "mt-2 text-slate-600" }, "\u5C08\u6CE8\u5169\u5CB8\u65C5\u904A\u8207\u77ED\u5F71\u97F3\u57F9\u8A13\uFF0C\u6574\u5408\u884C\u524D\u6E96\u5099\u8207\u5546\u696D\u5316\u77E5\u8B58\uFF0C\u4E00\u6B21\u5230\u4F4D\u3002"), /*#__PURE__*/
    React.createElement("ul", { className: "mt-4 text-sm space-y-2 text-slate-700 list-disc list-inside" }, /*#__PURE__*/
    React.createElement("li", null, "\u5169\u5CB8\u65C5\u904A\u898F\u5283\u8207\u5BA2\u670D\u652F\u63F4"), /*#__PURE__*/
    React.createElement("li", null, "\u6296\u97F3\u5E33\u865F\u5F9E 0 \u8D77\u865F\u5230\u5E36\u8CA8\u8B8A\u73FE"), /*#__PURE__*/
    React.createElement("li", null, "\u7C3D\u8B49/\u4FDD\u96AA/\u7DB2\u5361\u4E00\u9375\u52A0\u8CFC"))), /*#__PURE__*/


    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h3", { className: "text-xl font-bold" }, "\u5B78\u54E1\u8207\u65C5\u5BA2\u56DE\u994B"), /*#__PURE__*/
    React.createElement("div", { className: "mt-3 space-y-3" }, /*#__PURE__*/
    React.createElement("div", { className: "rounded-lg border bg-card text-card-foreground shadow-sm" }, /*#__PURE__*/React.createElement("div", { className: "p-4 text-sm" }, "\u5F9E 0 \u7C89\u5230 1,500 \u7C89\u53EA\u82B1 3 \u9031\uFF0C\u76F4\u64AD\u9996\u5834\u7834 50 \u55AE\u3002")), /*#__PURE__*/
    React.createElement("div", { className: "rounded-lg border bg-card text-card-foreground shadow-sm" }, /*#__PURE__*/React.createElement("div", { className: "p-4 text-sm" }, "\u5BA2\u670D\u8D85\u8010\u5FC3\uFF0C\u7C3D\u8B49+\u7DB2\u5361\u76F4\u63A5\u52A0\u8CFC\u5F88\u65B9\u4FBF\u3002")), /*#__PURE__*/
    React.createElement("div", { className: "rounded-lg border bg-card text-card-foreground shadow-sm" }, /*#__PURE__*/React.createElement("div", { className: "p-4 text-sm" }, "\u4E0A\u6D77\u884C\u7A0B\u8F15\u9B06\uFF0C\u665A\u4E0A\u9084\u5E36\u6211\u5011\u8E29\u9EDE\u62CD\u7247\u3002")))), /*#__PURE__*/


    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h3", { className: "text-xl font-bold" }, "\u5E38\u898B\u554F\u984C"), /*#__PURE__*/
    React.createElement("div", { className: "mt-3 text-sm space-y-3 text-slate-700" }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "font-semibold" }, "\u5982\u4F55\u4ED8\u6B3E\uFF1F"), /*#__PURE__*/
    React.createElement("div", null, "\u672C\u539F\u578B\u672A\u4E32\u63A5\u91D1\u6D41\u3002\u6B63\u5F0F\u4E0A\u7DDA\u53EF\u652F\u63F4\u53F0\u7063\u5E38\u898B\u91D1\u6D41\u8207\u8DE8\u5883\u652F\u4ED8\uFF0C\u4E26\u652F\u63F4\u96FB\u5B50\u767C\u7968\u3002")), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "font-semibold" }, "\u8AB2\u7A0B\u5982\u4F55\u958B\u8AB2\uFF1F"), /*#__PURE__*/
    React.createElement("div", null, "\u6210\u529F\u4E0B\u55AE\u5F8C\uFF0C\u5C07\u5BC4\u9001\u8AB2\u7DB1\u8207\u793E\u7FA4\u9023\u7D50\uFF0C\u65BC\u6307\u5B9A\u65E5\u671F\u958B\u8AB2\u4E26\u63D0\u4F9B\u9304\u64AD\u3002")), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "font-semibold" }, "\u65C5\u904A\u662F\u5426\u542B\u4FDD\u96AA\uFF1F"), /*#__PURE__*/
    React.createElement("div", null, "\u884C\u7A0B\u53EF\u52A0\u8CFC\u65C5\u5E73\u96AA\uFF1B\u4FDD\u96AA\u5167\u5BB9\u4EE5\u4FDD\u55AE\u70BA\u6E96\u3002")))))), /*#__PURE__*/







    React.createElement("footer", { className: "border-t" }, /*#__PURE__*/
    React.createElement("div", { className: "container py-8 text-xs text-slate-500 space-y-2" }, /*#__PURE__*/
    React.createElement("div", null, "\xA9 ", new Date().getFullYear(), " TW\u2192CN Travel & Courses. \u672C\u9801\u70BA\u793A\u610F\u539F\u578B\uFF0C\u50F9\u683C/\u532F\u7387\u50C5\u4F9B\u53C3\u8003\uFF0C\u5BE6\u969B\u4EE5\u5408\u7D04\u8207\u91D1\u6D41\u70BA\u6E96\u3002"), /*#__PURE__*/
    React.createElement("div", null, "\u4E0A\u7DDA\u63D0\u9192\uFF1A\u8ACB\u4F9D\u53F0\u7063\u8207\u4E2D\u570B\u76F8\u95DC\u6CD5\u898F\u8FA6\u7406\uFF08\u65C5\u884C\u696D\u57F7\u7167\u3001\u7C3D\u8B49\u898F\u7BC4\u3001\u8DE8\u5883\u500B\u8CC7/\u7A05\u52D9\u3001\u5EE3\u544A\u6A19\u793A\u7B49\uFF09\uFF0C\u4E26\u7559\u610F\u5E73\u53F0\u5167\u5BB9\u5408\u898F\u3002")))));




};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));