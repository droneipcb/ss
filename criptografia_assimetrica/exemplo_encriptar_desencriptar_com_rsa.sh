# encriptar um pequeno ficheiro (token.bin) com a chave pública
# o token encriptado vai ficar no ficheiro token.encrypted

openssl rsautl -encrypt -pubin -inkey public_key.pem -in token.bin -out token.encrypted



# desencriptar o token com a chave privada
# vai ser solicitada a senha que está a proteger a chave privada
# o resultado da desencriptação vai ficar no ficheiro token.decrypted

openssl rsautl -decrypt -inkey private_key.pem -in token.encrypted -out token.decrypted


# reparar que o token foi encriptado com a chave pública
# e desencriptado com a respetiva chave privada
