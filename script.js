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

function movedMessage(mensagem) {
  let newMessage = '';
  for (let index = 0; index < mensagem.length; index+= 1) {
    if(itsLetter(mensagem[index])) {
      newMessage += moveLetter(mensagem[index], 2);
    } else {
      newMessage += moveNumber(mensagem[index], 2);
    }
  };
  return newMessage;
}

function reverseMessage(mensagem) {
  let reversedMessage = mensagem.split("").reverse().join("");
  return reversedMessage;
}

function crypt(mensagem) {
  let cryptMessage = '';
  for(let index = 0; index < mensagem.length; index+= 1) {
    const firstMessage = movedMessage(mensagem);
    const secondMessage = reverseMessage(firstMessage);
    cryptMessage += secondMessage;
  }
  return cryptMessage;
};

crypt('cachorro')