# Test It Yourself

Uma maneira simples de gerar testes automatizados

### POC

- /example/index.html

### Todo Protótipo

- [DONE] Ler steps à partir de json
- [DONE] N's de espera pra cada step 
- Caso de uso real
- Ler steps à partir de yaml
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

O teste é rodado à partir de um arquivo JSON, abaixo um exemplo de código

```
{
    "tests": [
        {
            "name": "Teste de click da página de exemplo",
            "steps": [
                {
                    "action": "click",
                    "elementId": "clean"
                },
                {
                    "action": "read",
                    "elementId": "text",
                    "expect": "Limpo"
                }
            ]
        }
    ]
}
```

Para start, só rodar o comando `runTests('tests.json');`. Sendo `tests.json` o caminho do arquivo json que irá ser lido.