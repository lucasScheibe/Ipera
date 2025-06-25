document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("darkModeToggle");

  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
