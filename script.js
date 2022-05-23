function codigoASCII(letra) {
  return letra.charCodeAt(0);
}

function itsLetter(char) {
  const code = codigoASCII(char);
  return ((code >= 65 && code <= 90));
}

function itsNumber(char) {
  const code = codigoASCII(char);
  return ((code >= 48 && code <= 57));
}

function fromASCIIToLetter(code) {
  return String.fromCharCode(code);
}

function moveLetter(char, shift) {
  const code = codigoASCII(char);
  let newCode = 0;
  if (code === 89) {
    newCode = 66;
  } else if (code === 90) {
    newCode = 65;
  } else {
    newCode = code + shift;
  }
  const newChar = fromASCIIToLetter(newCode);
  return newChar;
}

function moveNumber(char, shift) {
  const code = codigoASCII(char);
  let newCode = 0;
  if (code === 56) {
    newCode = 48;
  } else if (code === 57) {
    newCode = 49;
  } else {
    newCode = code + shift;
  }
  const newChar = fromASCIIToLetter(newCode);
  return newChar;
}

function moveLetterBack(char, shift) {
  const code = codigoASCII(char);
  let newCode = 0;
  if (code === 66) {
    newCode = 89;
  } else if (code === 65) {
    newCode = 90;
  } else {
    newCode = code + shift;
  }
  const newChar = fromASCIIToLetter(newCode);
  return newChar;
}

function moveNumberBack(char, shift) {
  const code = codigoASCII(char);
  let newCode = 0;
  if (code === 48) {
    newCode = 56;
  } else if (code === 49) {
    newCode = 57;
  } else {
    newCode = code + shift;
  }
  const newChar = fromASCIIToLetter(newCode);
  return newChar;
}

function cryptMessage(mensagem) {
  let newMessage = '';
  for (let index = 0; index < mensagem.length; index+= 1) {
    if(itsLetter(mensagem[index])) {
      newMessage += moveLetter(mensagem[index], 2);
    } else {
      newMessage += moveNumber(mensagem[index], 2);
    }
  };
  return newMessage.slice(0, mensagem.length);
}

function decryptMessage(mensagem) {
  let newMessage = '';
  for (let index = 0; index < mensagem.length; index+= 1) {
    if(itsLetter(mensagem[index])) {
      newMessage += moveLetterBack(mensagem[index], -2);
    } else {
      newMessage += moveNumberBack(mensagem[index], -2);
    }
  };
  return newMessage.slice(0, mensagem.length);
}


function reverseMessage(mensagem) {
  let reversedMessage = mensagem.split("").reverse().join("");
  return reversedMessage;
}

function crypt(mensagem) {
  let cryptedMessage = '';
  for(let index = 0; index < mensagem.length; index+= 1) {
    const firstMessage = cryptMessage(mensagem);
    const secondMessage = reverseMessage(firstMessage);
    cryptedMessage = secondMessage;
  }
  return cryptedMessage;
};

function decrypt(mensagem) {
  let decryptedMessage = '';
  for(let index = 0; index < mensagem.length; index+= 1) {
    const firstMessage = decryptMessage(mensagem);
    const secondMessage = reverseMessage(firstMessage);
    decryptedMessage = secondMessage;
  }
  return decryptedMessage;
};
window.onload = function() {
  const btnCrypt = document.getElementById('btn-cript');
  const btnDecrypt = document.getElementById('btn-decript');
  const inputMessage = document.getElementById('input-message');
  const spamMessage = document.getElementById('cript-message');
  btnCrypt.addEventListener('click', function() {
    spamMessage.innerHTML = crypt(inputMessage.value);
    inputMessage.value = '';
  });
  btnDecrypt.addEventListener('click', function() {
    const toDecrypt = spamMessage.innerHTML;
    spamMessage.innerHTML = decrypt(toDecrypt);
  })
}