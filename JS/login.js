document.addEventListener('DOMContentLoaded', function () {
  const botaoLogin = document.getElementById('abrirLogin'); // Corrigido para o ID correto
  const loginBox = document.getElementById('loginBox');

  botaoLogin.addEventListener('click', function (e) {
    e.preventDefault();
    loginBox.classList.toggle('invisivel');
  });
});