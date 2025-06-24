<<<<<<< HEAD
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// Verifica se o modo escuro já estava ativado no localStorage
if (localStorage.getItem('modoEscuro') === 'true') {
  body.classList.add('dark-mode');
  toggle.checked = true;
}

// Escuta o clique no botão
toggle.addEventListener('change', function () {
  if (this.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('modoEscuro', 'true');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('modoEscuro', 'false');
  }
});
=======
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// Verifica se o modo escuro já estava ativado no localStorage
if (localStorage.getItem('modoEscuro') === 'true') {
  body.classList.add('dark-mode');
  toggle.checked = true;
}

// Escuta o clique no botão
toggle.addEventListener('change', function () {
  if (this.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('modoEscuro', 'true');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('modoEscuro', 'false');
  }
});
>>>>>>> 604cd9b9af1b5ea3cd56741b81189516ce9cacfd
