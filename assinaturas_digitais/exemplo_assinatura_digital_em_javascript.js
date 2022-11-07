// exemplo de assinatura digital em código nodeJS
const crypto = require ("crypto");

const mensagemOriginal='Esta mensagem serve de teste';

// geração do par de chaves EC (curva elíptica)
console.log("criando par de chaves EC...")
const { privateKey, publicKey } = crypto.generateKeyPairSync('ec', { namedCurve: 'secp384r1' });

// este bloco de código vai produzir a assinatura digital da mensagem
console.log("criando assinatura digital ECDSA...")
const sign = crypto.createSign('SHA256');
sign.update(mensagemOriginal);
sign.end();
const signature = sign.sign(privateKey);

// este bloco de código vai verificar se a assinatura digital é válida
console.log("Verificando assinatura digital ECDSA...")
const verify = crypto.createVerify('SHA256');
verify.update(mensagemOriginal);
verify.end();

const validation=verify.verify(publicKey, signature);
console.log('Resultado da validação: ', validation);
