# Test It Yourself

Uma maneira simples de gerar testes automatizados

### POC

- /example/index.html

### Todo Protótipo

- Ler steps à partir de json ou yaml
- 1s de espera pra cada step
- Layout fixed gerado pela build
- Layout com lista de testes e um botão de começar
- Apresentar resultado final dos testes

## Install

`npm install http-server -g`

## Run

`http-server`

## Access 

http://localhost:8080/examples/index.html

## Test code example

```
click('clean'); // #id do elemento
read('text','Limpo'); // #id do elemento, texto esperado
```