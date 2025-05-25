// حماية بسيطة بالدومين والمفتاح
(function() {
  const ALLOWED_DOMAIN = "client1.youcan.shop";
  const ACCESS_KEY = "BABEL123";

  if (window.location.hostname !== ALLOWED_DOMAIN || ACCESS_KEY !== "BABEL123") {
    console.warn("Unauthorized access: domain or key mismatch");
    return;
  }

  // تحميل CSS من GitHub عبر jsDelivr
  let css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "https://cdn.jsdelivr.net/gh/costtest/babel/custom-style.css";
  document.head.appendChild(css);

  // يمكن تضيف هنا أي JS إضافي خاص بالتعديلات
})();
