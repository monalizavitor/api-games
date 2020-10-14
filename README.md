# API de Games 

## Para alterar dados dos jogos.

Aplicação feita no desafio da semana 10 da **{reprograma}** para alterar dados da api utilizando os métodos HTTP **PUT** e **PATCH**. 


## Orientação do projeto

Vamos entender melhor os nossos dados e o contrato definido para nossa API. Iremos usar um json com os dados da API.

| Recurso |	Descrição |
| --- | --- |
`/jogos` |	A partir de um parâmetro para escolher um determinado jogo, vamos alterar o dado de name, usando o verbo ***PUT***


| Recurso |	Descrição |
| --- | --- |
`/jogos` |	A partir de um parâmetro para escolher um determinado jogo, vamos alterar o dado de name, usando o verbo **PATCH**

| Recurso |	Descrição |
| --- | --- |
`/jogos` |	A partir do parâmetro ID para escolher um determinado jogo, vamos alterar o dado de company desse jogo usando o **PUT**


| Recurso |	Descrição |
| --- | --- |
`/jogos` |	A partir de um parâmetro para escolher um determinado jogo, usando o ***PATCH*** vamos alterar o dado de company desse jogo


### Ferramentas utilizadas

* Node.js
* Express
* Nodemon
* Cors
