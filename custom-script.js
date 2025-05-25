(function() {
  const ALLOWED_DOMAIN = "mizmo.youcan.store";
  const ACCESS_KEY = "BABEL123";

  if (window.location.hostname !== ALLOWED_DOMAIN || ACCESS_KEY !== "BABEL123") {
    console.warn("Unauthorized access: domain or key mismatch");
    return;
  }

  let css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "https://cdn.jsdelivr.net/gh/costtest/babel/custom-style.css";
  document.head.appendChild(css);
})();
