# Projeto Calculadora

Projeto voltada a criação de uma calculadora com as quatro operações básicas e parênteses; Tendo a seção do front end, back end e database

## Instalação

Antes de proceder, é necessário ter nodejs e docker instalado no ambiente.

1. Clone o repositório em um ambiente de preferência;
2. Em um terminal, rode o docker-compose.
```bash
$docker-compose up
```
3. Em um outro terminal, acesse o serviço mariadb e inclua o seguinte.:
```bash
$USE todo;
$CREATE TABLE todo.operations (id int AUTO_INCREMENT PRIMARY KEY, username varchar(200), math_op varchar(200), result varchar(200));
$GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'example' with grant option;
$FLUSH PRIVILEGES;
$Exit;
```
4. Em um outro terminal, acesse a pasta web e use `node app.js`
5. Em um outro terminal, acesse a pasta api e use `node server.js`
6. Em um outro terminal, acesse a pasta db e use `node server.js`


## Uso

Acesse o site utilizando o ip da máquina com port 5000, digite o nome de usuário e clique nos botões da calculadora para utilizá-la;
Use "=" para receber a resposta.

## License

[MIT](https://choosealicense.com/licenses/mit/)
