#correr este script assim: bash ./exemplo_gerar_par_chaves_rsa.sh 

#gerar um par de chaves RSA com 2048 bit
#protegendo a chave privada com uma senha, através de AES128
openssl genrsa -aes128 -out private_key.pem 2048

#exportar a chave pública RSA
openssl rsa -in private_key.pem -outform PEM -pubout -out public_key.pem

#nesta fase temos as duas chaves:
#private_key.pem : ficheiro PEM com a chave privada
#public_key.pem : ficheiro PEM com a chave pública