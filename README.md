# ss
Configuração da VM para a unidade curricular Segurança de Software do MEI

Esta configuração instala o nginx, node e cria várias pastas com exercicíos
relacionados com as aulas de segurança de software, do Mestrado em Engenharia Informática
do Instituto Politécnico de Castelo Branco

A configuração foi testada no Ubuntu 22 Desktop

O script de instalação é o seguinte:
-----------------------------------------------------------

sudo apt update

sudo apt install -y nginx curl git

cd ~

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

source ~/.bashrc

nvm install v18.12.0

cd ~

git clone https://github.com/droneipcb/ss.git

cd ~/ss/setup

bash ./setup_nginx.sh

