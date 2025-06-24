document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkModeToggle");
  const userImg = document.getElementById("userImage");
  const logoImg = document.getElementById("logoImage");
  const userNomeDiv = document.getElementById("userNome");

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

  // Mostrar nome do usuário salvo
  const nome = localStorage.getItem("usuarioLogado");
  if (nome && userNomeDiv) {
    userNomeDiv.textContent = `Olá, ${nome}!`;
    userNomeDiv.style.fontWeight = "bold";
    userNomeDiv.style.marginLeft = "10px";
  }
});
