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
const family = document.getElementById('input[name=family]');
const subject = document.getElementById('input[type=checkbox]');
const assessment = document.getElementById('input[name=rate]');
const info = document.getElementById('info');

const nome = document.createElement('p');
const emailInfo = document.createElement('p');
const CasalInfo = document.createElement('p');
const FamíliaInfo = document.createElement('p');
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

function createInfoSection() {
  nome.innerHTML = `Nome: ${firstName.value} ${lastName.value}`;
  emailInfo.innerHTML = `email: ${email.value}`;
  CasalInfo.innerHTML = `Casa: ${house.value}`;
  FamíliaInfo.innerHTML = `Família: ${family.value}`;
  materiasInfo.innerHTML = `Matérias: ${subject.value}`;
  avaliacaoInfo.innerHTML = `Matérias: ${assessment.value}`;
  observacaoInfo.innerHTML = `Observações: ${textarea.value}`;
  info.appendChild(nome);
  info.appendChild(emailInfo);
  info.appendChild(CasalInfo);
  info.appendChild(FamíliaInfo);
  info.appendChild(materiasInfo);
  info.appendChild(avaliacaoInfo);
  info.appendChild(observacaoInfo);
}

function sendInfo(event) {
  event.preventDefault();
  form.style.display = 'none';
  createInfoSection();
}

login.addEventListener('click', logintrybewarts);
agreement.addEventListener('input', checkbox);
textarea.addEventListener('input', contador);
enviar.addEventListener('click', sendInfo);
