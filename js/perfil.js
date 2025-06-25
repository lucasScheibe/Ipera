document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkModeToggle");
  const userImg = document.getElementById("userImage");
  const logoImg = document.getElementById("logoImage");
  const userNomeDiv = document.getElementById("userNome");
  const popup = document.querySelector(".popup");

  function setThemeImages(darkModeEnabled) {
    if (userImg) {
      userImg.src = darkModeEnabled
        ? "../Imagens/user dark.png"
        : "../Imagens/user.png";
    }

    if (logoImg) {
      logoImg.src = darkModeEnabled
        ? "../Imagens/pera dark.png"
        : "../Imagens/pera.jpg";
    }
  }

  // Verifica se o modo escuro está salvo
  const savedMode = localStorage.getItem("darkMode");
  const darkModeEnabled = savedMode === "enabled";

  if (darkModeEnabled) {
    document.body.classList.add("dark-mode");
    if (toggle) toggle.checked = true;
  }

  setThemeImages(darkModeEnabled);

  if (toggle) {
    toggle.addEventListener("change", function () {
      const enabled = this.checked;

      if (enabled) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
      }

      setThemeImages(enabled);
    });
  }

  // Exibir nome e email do usuário
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado')) || {};
  const nome = usuario.nome || 'Usuário';
  const email = usuario.email || 'Email não cadastrado';
  const nomeEl = document.getElementById('perfilNome');
  const emailEl = document.getElementById('perfilEmail');
  if (nomeEl) nomeEl.textContent = nome;
  if (emailEl) emailEl.textContent = email;

  // Exibir carrinho do usuário
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [
    { nome: 'Pera do Amor', quantidade: 1 },
    { nome: 'Pera Asiática', quantidade: 1 },
    { nome: 'Pera Europeia', quantidade: 1 }
  ];
  const lista = document.getElementById('listaCarrinho');
  if (lista) {
    lista.innerHTML = '';
    carrinho.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.nome} (x${item.quantidade})`;
      lista.appendChild(li);
    });
  }

  // Mostrar nome do usuário salvo no topo (caso use userNomeDiv)
  if (nome && userNomeDiv) {
    userNomeDiv.textContent = `Olá, ${nome}!`;
    userNomeDiv.style.fontWeight = "bold";
    userNomeDiv.style.marginLeft = "10px";
  }

  // Atualiza conteúdo do popup conforme usuário logado
  if (nome && popup) {
    popup.innerHTML = `
      <h2>Olá, ${nome}!</h2>
      <a href="perfil.html"><i class="fa fa-user"></i> Perfil</a>
      <a href="#" id="sair"><i class="fa fa-sign-out-alt"></i> Sair</a>
    `;

    // Evento para o botão "Sair"
    const sairBtn = document.getElementById("sair");
    sairBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("usuarioLogado");
      location.reload();
    });
  } else if (popup) {
    popup.innerHTML = `
      <h2>Bem-vindo!</h2>
      <a href="cadastro.html"><i class="fa fa-user-plus"></i> Cadastrar-se</a>
      <a href="login.html"><i class="fa fa-sign-in-alt"></i> Login</a>
    `;
  }
});
