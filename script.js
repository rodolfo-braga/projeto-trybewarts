const Email = document.getElementById('email-btn');
const Senha = document.getElementById('senha-btn');
const Submit = document.getElementById('login-btn');
const submitButton = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

Submit.addEventListener('click', () => {
  if (Email.value === 'tryber@teste.com' && Senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

checkbox.addEventListener('click', () => {
  if (submitButton.disabled === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

textArea.addEventListener('keyup', () => {
  const counterNovo = 500 - parseInt(textArea.value.length, 10);
  counter.innerText = counterNovo;
});
