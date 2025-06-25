document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggleBtn");

  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      btn.textContent = "☀️ Modo Claro";
    } else {
      document.body.classList.remove("dark-mode");
      btn.textContent = "🌙 Modo Escuro";
    }
  }

  const savedTheme = localStorage.getItem("theme");
  applyTheme(savedTheme || "light");

  btn.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      applyTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      applyTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
