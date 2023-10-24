const aesjs = require('aes-js')
const scanner = require('prompt-sync')();

const data = scanner('Insira o dado a ser encriptado: ');
var dataBytes = aesjs.utils.utf8.toBytes(data)

// To print or store the binary data, you may convert it to hex
var dataHex = aesjs.utils.hex.fromBytes(dataBytes);

console.log('Dado encriptado: ' + dataHex);
