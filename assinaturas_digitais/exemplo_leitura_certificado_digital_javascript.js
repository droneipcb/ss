//nota: este código só é suportado a partir da versão 16 do node
// Importing crypto module
const {X509Certificate} = require('crypto')

// Importing fs module
const fs = require('fs')

// getting object of a PEM encoded X509 Certificate.
//este ficheiro deve existir e estar no formato PEM
const x509 = new X509Certificate(fs.readFileSync('certificate.pem'));

// getting subject included in this certificate.
const Subject = x509.subject
// get the RSA public key
const RSApublicKey = x509.publicKey.export({type:"pkcs1",format:"pem"})

// display the result
console.log("Subject: " + Subject)
console.log('\r\nPublic Key: ' + RSApublicKey)