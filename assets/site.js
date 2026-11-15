// Ajustes rápidos ficam aqui
var CONFIG = {
  whatsapp: "5521920015458",
  mensagem: "Oi Laís, vim pelo seu site. Sou da marca "
};

(function () {
  function wa(msg) { return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg); }
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = wa(CONFIG.mensagem); a.target = "_blank"; a.rel = "noopener";
  });
})();
