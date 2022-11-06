// Import the encryptors functions here.
const encryptors = require('./encryptors.js');
const {caesarCipher, symbolCipher, reverseCipher} = encryptors;


const encodeMessage = (str) => {
  // Use the encryptor functions here.
  const caesarCipherResult = caesarCipher(str, 5);
  const symbolCipherResult = symbolCipher(caesarCipherResult);
  return reverseCipher(symbolCipherResult);
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  const reverseCipherResult =  reverseCipher(str);
  const symbolCipherResult = symbolCipher(reverseCipherResult);
  return caesarCipher(symbolCipherResult, -5);
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);