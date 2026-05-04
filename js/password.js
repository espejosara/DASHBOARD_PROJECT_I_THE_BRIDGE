/* 1. ELEMENTOS DEL DOM */
const passwordLengthInput = document.getElementById('password-length');
const generatePasswordButton = document.getElementById('generate-password');
const passwordResult = document.getElementById('password-result');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_=+';

/* 2. FUNCIONES AUXILIARES */
function randomFrom(string) {
  return string[Math.floor(Math.random() * string.length)];
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

/* 3. LÓGICA DE GENERACIÓN */
function createPassword(length) {
  const minLength = 12;
  const maxLength = 50;
  const size = Math.min(maxLength, Math.max(minLength, length));
  const passwordChars = [];

  passwordChars.push(randomFrom(upperLetters));
  passwordChars.push(randomFrom(lowerLetters));
  passwordChars.push(randomFrom(numbers));
  passwordChars.push(randomFrom(symbols));

  const allChars = upperLetters + lowerLetters + numbers + symbols;
  for (let i = passwordChars.length; i < size; i += 1) {
    passwordChars.push(randomFrom(allChars));
  }

  return shuffleArray(passwordChars).join('');
}

function handleGeneratePassword() {
  const length = Number(passwordLengthInput.value);

  if (length < 12 || length > 50) {
    passwordLengthInput.classList.add('input-error');
    passwordResult.innerHTML = '<span class="error">La longitud debe estar entre 12 y 50.</span>';
    
    setTimeout(() => {
      passwordLengthInput.classList.remove('input-error');
    }, 300);
    return;
  }

  const password = createPassword(length);
  passwordResult.textContent = password;
}

/* 4. INICIALIZACIÓN Y EVENTOS */
if (generatePasswordButton) {
  generatePasswordButton.addEventListener('click', handleGeneratePassword);
}
