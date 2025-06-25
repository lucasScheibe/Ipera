document.addEventListener("DOMContentLoaded", function () {
  const botoesQuantidade = document.querySelectorAll(".btn-quantidade");

  botoesQuantidade.forEach((botao) => {
    botao.addEventListener("click", function () {
      let quantidadeSpan;

      // Tenta encontrar o span próximo com a classe .quantidade
      const pai = this.closest(".item-carrinho") || this.closest(".quantidade1");
      if (!pai) return;

      quantidadeSpan = pai.querySelector(".quantidade");
      if (!quantidadeSpan) return;

      let quantidadeAtual = parseInt(quantidadeSpan.textContent);

      if (this.textContent.trim() === "+") {
        quantidadeAtual++;
      } else if (this.textContent.trim() === "-" && quantidadeAtual > 1) {
        quantidadeAtual--;
      }

      quantidadeSpan.textContent = quantidadeAtual;
    });
  });
});
