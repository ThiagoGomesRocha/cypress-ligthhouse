# cypress-ligthhouse
Teste de perfomace utilizando o cypress com o google lighthouse e geração de report em HTML para os testes.

Feito com base no tutorial: [Cypress com Google Lighthouse para testes de perfomance](https://medium.com/engenharia-arquivei/cypress-com-google-lighthouse-para-testes-de-perfomance-ba1b756653d0)

Instalar o Cypress:

```
npm install cypress --save-dev
```
Abrir o Cypress pela primeira vez para a ferramenta criar toda a estrutura de pastas automaticamente:
```
npx cypress open
```
Instalar a biblioteca cypress-audit:
```
npm install --save-dev @cypress-audit/lighthouse
``` 
Instalar a biblioteca pa11y:
```
npm install --save-dev @cypress-audit/pa11y
```
