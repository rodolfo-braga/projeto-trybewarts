const Email = document.getElementById('email-btn');
const Senha = document.getElementById('senha-btn');
const Submit = document.getElementById('submit-btn');

Submit.addEventListener('click', () => {
  if (Email.value === 'tryber@teste.com' && Senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
