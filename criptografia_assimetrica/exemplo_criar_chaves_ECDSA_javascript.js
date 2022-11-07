// exemplo de criação de par de chaves de curva eliptica

const crypto = require ("crypto");

// neste exemplo, vamos usar a curva secpt521r1
const curv = crypto.createECDH('secp521r1');
curv.generateKeys();

const publicKey=curv.getPublicKey();
const privateKey=curv.getPrivateKey();

// mostra a chave publica
console.log("\r\nPublic Key: ", publicKey.toString('hex'));

// mostra a chave privada
console.log("\r\nPrivate Key :", privateKey.toString('hex'));
