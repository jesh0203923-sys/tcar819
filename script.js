// 小動畫：進入頁面時，每個卡片逐一顯示
document.addEventListener("DOMContentLoaded", () => {
  const days = document.querySelectorAll(".day");
  days.forEach((day, index) => {
    day.style.opacity = 0;
    day.style.transform = "translateY(30px)";
    setTimeout(() => {
      day.style.transition = "all 0.6s ease";
      day.style.opacity = 1;
      day.style.transform = "translateY(0)";
    }, index * 300);
  });
});