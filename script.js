/* ============ 圖片資料（Pexels 直連 CDN） ============
   格式：images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg?... 
   這種連結在 CodePen 通常最穩定，也可外開原檔。
*/
const P = (id, w = 1600) =>
`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&dpr=1`;

const data = {
  1: {
    title: "第一天｜西湖啟程",
    blurb:
    "下午乘大龍船暢遊西湖，探訪「三潭印月」。晚間走訪湖濱銀泰 in77 與北山路沿線，感受杭州的都會夜色與人文底蘊。",
    photos: [
    { src: P(31090609), credit: "西湖" },
    { src: P(32734456), credit: "三潭印月" },
    { src: "https://i.postimg.cc/RCs7vzhj/2949756.jpg", credit: "西湖" }] },


  2: {
    title: "第二天｜龍井品茶 × 人脈交流",
    blurb:
    "清晨走進龍井村，品正宗龍井茶；下午與前字節投資 MCN 內容負責人交流，洞見新媒體與投資的未來趨勢。",
    photos: [
    { src: "https://i.postimg.cc/SNgv05bs/251919.jpg", credit: "課程" },
    { src: "https://images.unsplash.com/photo-1679572472257-d9eefec2d630?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", credit: "Tea Picking" },
    { src: "https://images.unsplash.com/photo-1601831737591-493528c5daa2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", credit: "龍井茶" }] },


  3: {
    title: "第三天｜靈隱古韻 × 《宋城千古情》",
    blurb:
    "上午靈隱寺中尋訪古剎清寧；午後欣賞《宋城千古情》，一場穿越歷史與視覺盛宴的沉浸式體驗。",
    photos: [
    { src: P(6386164), credit: "Lingyin Temple Eaves" },
    { src: P(19955854), credit: "Temple Details" },
    { src: P(18637314), credit: "Buddha Statues" }] },


  4: {
    title: "第四天｜攝影實操 × 傘博物館 × 大運河",
    blurb:
    "上午攝影師實戰教學；午後參觀中國傘博物館、暢遊杭州大運河，並保留一小時周邊自由時間，慢遊城市紋理。",
    photos: [
    { src: P(6249531), credit: "Oil-paper Umbrellas" },
    { src: P(6249532), credit: "西湖" },
    { src: P(21773464), credit: "杭州龍井茶園日出" }] },


  5: {
    title: "第五天｜阿里巴巴參訪",
    blurb:
    "走進中國科創巨頭阿里巴巴，感受創新能量與企業文化，汲取前沿商業智慧與數位化實踐。",
    photos: [
    { src: P(30326900), credit: "Hangzhou Urban Park & Skyline" },
    { src: P(31090609), credit: "West Lake Pavilion（城市名片）" }] } };




/* ============ DOM 綁定 ============ */
const imgEl = document.getElementById("hero-img");
const capEl = document.getElementById("hero-cap");
const blurbEl = document.getElementById("blurb");
const openEl = document.getElementById("openOriginal");
const links = [...document.querySelectorAll(".day-link")];
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentDay = 1;
let currentIndex = 0;

/* 載入指定日／索引的照片 */
function render(day = currentDay, index = 0) {
  const pack = data[day];
  if (!pack) return;

  const photo = pack.photos[index % pack.photos.length];

  // 更新 UI
  currentDay = day;
  currentIndex = index % pack.photos.length;
  links.forEach(a => a.classList.toggle("active", +a.dataset.day === day));

  // 設定圖片與備援
  imgEl.src = photo.src;
  imgEl.alt = `${pack.title}｜${photo.credit}`;
  imgEl.onerror = () => {
    capEl.innerHTML =
    `⚠️ 圖片載入失敗。<a href="${photo.src}" target="_blank" rel="noopener">改以新視窗開啟圖片</a>`;
  };
  imgEl.onload = () => {
    capEl.textContent = `【${pack.title}】相片：${photo.credit}`;
  };

  blurbEl.textContent = pack.blurb;
  openEl.href = photo.src + "&download=1";
}

/* 事件：切換每日 */
links.forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const day = +a.dataset.day;
    render(day, 0);
  });
});

/* 上一張 / 下一張 */
prevBtn.addEventListener("click", () => {
  const pack = data[currentDay];
  const i = (currentIndex - 1 + pack.photos.length) % pack.photos.length;
  render(currentDay, i);
});
nextBtn.addEventListener("click", () => {
  const pack = data[currentDay];
  const i = (currentIndex + 1) % pack.photos.length;
  render(currentDay, i);
});

/* 預載關鍵縮圖（提升流暢度） */
(function preload() {
  Object.values(data).flatMap(d => d.photos).slice(0, 10).forEach(p => {
    const img = new Image();
    img.src = p.src;
  });
})();

/* 初始畫面 */
render(1, 0);