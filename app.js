const aesjs = require('aes-js')
const scanner = require('prompt-sync')();

const data = scanner('Insira o dado a ser encriptado: ');
var dataBytes = aesjs.utils.utf8.toBytes(data)

// Para exibir o dado binário armazenado, ele deve ser passado para Hex
var dataHex = aesjs.utils.hex.fromBytes(dataBytes);

console.log('Dado encriptado: ' + dataHex);


