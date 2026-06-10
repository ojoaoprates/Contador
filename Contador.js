let contador = 0;

    const numero = document.getElementById("numero");
    const btnIncrementar = document.getElementById("btn-incrementar");
    const btnDecrementar = document.getElementById("btn-decrementar");
    const btnZerar = document.getElementById("btn-zerar");

    function atualizarTela() {
      numero.textContent = contador;

      numero.classList.remove("positivo", "negativo");

      if (contador > 0) {
        numero.classList.add("positivo");
      } else if (contador < 0) {
        numero.classList.add("negativo");
      }
    }

    btnIncrementar.addEventListener("click", function() {
      contador++;
      atualizarTela();
    });

    btnDecrementar.addEventListener("click", function() {
      contador--;
      atualizarTela();
    });

    btnZerar.addEventListener("click", function() {
      contador = 0;
      atualizarTela();
    });