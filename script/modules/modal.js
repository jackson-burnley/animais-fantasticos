export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {
    function abrirModal(e) {
      e.preventDefault();
      containerModal.classList.add("ativo");
    }

    function fecharModal(e) {
      e.preventDefault();
      containerModal.classList.remove("ativo");
    }

    function cliqueFora(e) {
      if (e.target === this) fecharModal(e);
    }

    botaoAbrir.addEventListener("click", abrirModal);
    botaoFechar.addEventListener("click", fecharModal);

    console.log(botaoAbrir, botaoFechar, containerModal);
    containerModal.addEventListener("click", cliqueFora);
  }
}
