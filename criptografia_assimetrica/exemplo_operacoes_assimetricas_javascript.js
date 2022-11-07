const crypto = require('crypto');
const curveType='secp256k1'; //reparar que a curva é outra

// Gerar par de chaves para a Alice
const alice = crypto.createECDH(curveType);
const aliceKey = alice.generateKeys();

// Gerar par de chaves para o Bob
const bob = crypto.createECDH(curveType);
const bobKey = bob.generateKeys();

console.log("\nAlice private key:\t",alice.getPrivateKey().toString('hex'));
console.log("Alice public key:\t",aliceKey.toString('hex'))

console.log("\nBob private key:\t",bob.getPrivateKey().toString('hex'));
console.log("Bob public key:\t",bobKey.toString('hex'));

// Trocar as chaves públicas e gerar a chave secreta partilhada
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

console.log("\nAlice shared key:\t",aliceSecret.toString('hex'))
console.log("Bob shared key:\t\t",bobSecret.toString('hex'));
