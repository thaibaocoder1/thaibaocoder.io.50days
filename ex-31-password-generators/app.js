const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const clipboardEl = document.getElementById("clipboard");
const generateEl = document.getElementById("generate");
const funcObj = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
// Events
clipboardEl.addEventListener("click", () => {
  const textareaEl = document.createElement("textarea");
  const password = resultEl.innerText;
  if (!password) {
    alert("Fail to copy password");
    return;
  }
  textareaEl.value = password;
  document.body.appendChild(textareaEl);
  textareaEl.select();
  document.execCommand("copy");
  textareaEl.remove();
  alert("Copy success");
});
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const upper = +uppercaseEl.checked;
  const lower = +lowercaseEl.checked;
  const number = +numberEl.checked;
  const symbol = +symbolEl.checked;
  const generatePassword = getRandomPassword(
    upper,
    lower,
    number,
    symbol,
    length
  );
  if (generatePassword) {
    resultEl.innerText = generatePassword;
  }
});
// Functions
function getRandomPassword(upper, lower, number, symbol, length) {
  let generatedPassword = "";
  let typesCount = upper + lower + number + symbol;
  let typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  if (typesCount === 0) return "";
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += funcObj[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*()-_+={}[]<>/";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
