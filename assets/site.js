// Ajustes rápidos ficam aqui
var CONFIG = {
  whatsapp: "5521920015458",
  mensagem: "Oi Laís, vim pelo seu site. Sou da marca ",
  mensagemPMG: "Oi Laís, vim pelo seu site e quero saber da mentoria PMG da Rebeca e da Luciana com a sua indicação."
};

(function () {
  function wa(msg) { return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg); }
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = wa(CONFIG.mensagem); a.target = "_blank"; a.rel = "noopener";
  });
  document.querySelectorAll("[data-pmg]").forEach(function (a) {
    a.href = wa(CONFIG.mensagemPMG); a.target = "_blank"; a.rel = "noopener";
  });
})();
