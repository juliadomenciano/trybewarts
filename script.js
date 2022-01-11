const login = document.getElementById('login');
const emailLogin = document.getElementById('email');
const senha = document.getElementById('senha');
const enviar = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const count = document.getElementById('counter');
const textarea = document.getElementById('textarea');
const form = document.getElementById('form');
const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.querySelectorAll('input[name=family]');
const subject = document.querySelectorAll('input[type=checkbox]');
const assessment = document.querySelectorAll('input[name=rate]');
const info = document.getElementById('info');

const nome = document.createElement('p');
const emailInfo = document.createElement('p');
const casaInfo = document.createElement('p');
const famíliaInfo = document.createElement('p');
const materiasInfo = document.createElement('p');
const avaliacaoInfo = document.createElement('p');
const observacaoInfo = document.createElement('p');

enviar.disabled = true;

function logintrybewarts() {
  if (emailLogin.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function checkbox() {
  if (agreement.checked === true) {
    enviar.disabled = false;
  }
}

function contador() {
  const char = textarea.value.length;
  count.innerHTML = 500 - char;
}

function getFamilyValue() {
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      famíliaInfo.innerHTML = `Família: ${family[i].value}`;
    }
  }
}

function getRateValue() {
  for (let i = 0; i < assessment.length; i += 1) {
    if (assessment[i].checked) {
      avaliacaoInfo.innerHTML = `Avaliação: ${assessment[i].value}`;
    }
  }
}

function getCheckboxValue() {
  const arr = [];
  for (let i = 0; i < subject.length; i += 1) {
    if (subject[i].checked) {
      arr.push(subject[i].value);
    }
  }
  const checkbox = arr.toString();
  materiasInfo.innerHTML = `Matéria: ${checkbox}`;
}

function createInfoSection() {
  nome.innerHTML = `Nome: ${firstName.value} ${lastName.value}`;
  emailInfo.innerHTML = `email: ${email.value}`;
  casaInfo.innerHTML = `Casa: ${house.value}`;
  observacaoInfo.innerHTML = `Observações: ${textarea.value}`;
  info.appendChild(nome);
  info.appendChild(emailInfo);
  info.appendChild(casaInfo);
  info.appendChild(famíliaInfo);
  info.appendChild(materiasInfo);
  info.appendChild(avaliacaoInfo);
  info.appendChild(observacaoInfo);
}

function sendInfo(event) {
  event.preventDefault();
  form.style.display = 'none';
  createInfoSection();
  getFamilyValue();
  getRateValue();
  getCheckboxValue();

}

login.addEventListener('click', logintrybewarts);
agreement.addEventListener('input', checkbox);
textarea.addEventListener('input', contador);
enviar.addEventListener('click', sendInfo);
