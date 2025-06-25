document.getElementById("btnLogin").addEventListener("click", function () {
    const nome = document.getElementById("nomeUsuario").value.trim();
    const email = document.getElementById("emailUsuario").value.trim();

    if (nome === "" || email === "") {
      alert("Por favor, preencha nome e e-mail.");
      return;
    }

    localStorage.setItem("usuarioLogado", nome);
    window.location.href = "main.html";
  });

  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;

  if (localStorage.getItem('modoEscuro') === 'true') {
    body.classList.add('dark-mode');
    toggle.checked = true;
  }

  toggle.addEventListener('change', function () {
    if (this.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('modoEscuro', 'true');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('modoEscuro', 'false');
    }
  });