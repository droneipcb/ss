#gerar chaves EC
openssl ecparam -name sect571k1 -genkey -noout -out ec_priv_key.pem

#extrair chave pública
openssl ec -in ec_priv_key.pem -pubout -out ec_pub_key.pem

#criar assinatura digital, que vai ficar no ficheiro assinatura.bin
openssl dgst -sha256 -sign ec_priv_key.pem -out assinatura.bin mensagem.txt

#verificar assinatura digital
openssl dgst -sha256 -verify ec_pub_key.pem -signature assinatura.bin mensagem.txt

#experimente alterar o ficheiro mensagem.txt e verificar novamente a assinatura
openssl dgst -sha256 -verify ec_pub_key.pem -signature assinatura.bin mensagem.txt
