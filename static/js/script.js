const cabecalho = document.querySelector("#cabecalho");
const anoAtual = document.querySelector("#ano-atual");

function atualizarCabecalho() {
  const paginaFoiRolada = window.scrollY > 20;
  cabecalho.classList.toggle("site-header--scrolled", paginaFoiRolada);
}

anoAtual.textContent = new Date().getFullYear();
atualizarCabecalho();

window.addEventListener("scroll", atualizarCabecalho, { passive: true });
