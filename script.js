const Email = document.getElementById('email-btn');
const Senha = document.getElementById('senha-btn');
const Submit = document.getElementById('login-btn');
const submitButton = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const getAgreement = document.querySelector('#agreement-container');

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
  const counterNovo = textArea.maxLength - parseInt(textArea.value.length, 10);
  counter.innerText = counterNovo;
});

const labels = [
  'Nome:',
  'Email:',
  'Casa:',
  'Família:',
  'Matérias:',
  'Avaliação:',
  'Observações:'];

const getFamilies = document.querySelectorAll('.family.checkbox');

function getFamilyChecked() {
  let familyChecked;

  for (let index = 0; index < getFamilies.length; index += 1) {
    if (getFamilies[index].classList.contains('checked')) {
      familyChecked = getFamilies[index].firstElementChild.value;
    }
  }
  return familyChecked;
}

const getSubjects = document.querySelectorAll('.subject-div.checkbox');

function getSubjectsChecked() {
  const subjectsChecked = [];

  for (let index = 0; index < getSubjects.length; index += 1) {
    if (getSubjects[index].classList.contains('checked')) {
      subjectsChecked.push(getSubjects[index].firstElementChild.value);
    }
  }
  console.log(subjectsChecked);

  return subjectsChecked.join(', ');
}

const getRates = document.querySelectorAll('.rate.checkbox');

function getRateChecked() {
  let rateChecked;

  for (let index = 0; index < getRates.length; index += 1) {
    if (getRates[index].classList.contains('checked')) {
      rateChecked = getRates[index].firstElementChild.value;
    }
  }
  return rateChecked;
}

const getInputName = document.getElementById('input-name');
const getInputLastName = document.getElementById('input-lastname');
const getInputEmail = document.getElementById('input-email');
const getInputHouse = document.getElementById('house');
const getInputComment = document.getElementById('textarea');

function createInputsObject() {
  const inputValue = [];

  inputValue.push(`${getInputName.value} ${getInputLastName.value}`);
  inputValue.push(getInputEmail.value);
  inputValue.push(getInputHouse.value);
  inputValue.push(getFamilyChecked());
  inputValue.push(getSubjectsChecked());
  inputValue.push(getRateChecked());
  inputValue.push(getInputComment.value);

  return inputValue;
}

function renderData() {
  const getForm = document.getElementById('evaluation-form');
  getForm.innerHTML = '';

  const getAllInputs = createInputsObject();
  const getLabels = labels;

  for (let index = 0; index < getLabels.length; index += 1) {
    const renderInput = document.createElement('p');
    renderInput.innerHTML = `${getLabels[index]} ${getAllInputs[index]}`;
    getForm.appendChild(renderInput);
  }

  getAgreement.style.display = 'none';
  submitButton.style.display = 'none';

  return getForm;
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  renderData();
});
