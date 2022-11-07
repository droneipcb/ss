#neste exemplo, vamos calcular um autenticador HMAC de um ficheiro chamado texto.txt
#é usada a chave pré gerada e partilhada aa32f51096d7aa65c4419c00be94d26a


openssl dgst -sha256 -mac hmac -macopt hexkey:aa32f51096d7aa65c4419c00be94d26a texto.txt
