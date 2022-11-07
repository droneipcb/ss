//exemplo de cálculo de um hash e HMAC de uma String
const crypto = require('crypto');
const texto = 'Um texto qualquer';

const hash = crypto.createHash('sha256');
hash.update(texto);
hashResult=hash.copy().digest('hex');
console.log('O hash sha256 do texto é: ',hashResult);

const secret = 'wefdhwehlfklwkkljwflhwfjk9203482';
const hmac = crypto.createHmac('sha256', secret);
hmac.update(texto);
const hmacResult=hmac.digest().toString('hex');
console.log('O HMAC do texto é: ',hmacResult);
