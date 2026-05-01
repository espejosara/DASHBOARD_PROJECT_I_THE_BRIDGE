const passwordLengthInput = document.getElementById('password-length');
const generatePasswordButton = document.getElementById('generate-password');
const passwordResult = document.getElementById('password-result');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_=+';

function randomFrom(string) {
  return string[Math.floor(Math.random() * string.length)];
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

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

  // Validamos que esté dentro de los límites
  if (length < 12 || length > 50) {
    passwordLengthInput.classList.add('input-error');
    passwordResult.innerHTML = '<span class="error">La longitud debe estar entre 12 y 50.</span>';
    
    // Le quitamos la clase tras la animación para que pueda volver a repetirse si vuelve a fallar
    setTimeout(() => {
      passwordLengthInput.classList.remove('input-error');
    }, 300);
    return; // Detenemos la ejecución aquí
  }

  const password = createPassword(length);
  passwordResult.textContent = password;
}

if (generatePasswordButton) {
  generatePasswordButton.addEventListener('click', handleGeneratePassword);
}
