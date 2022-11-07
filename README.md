# saucedemo-cypress
Estudo de Cypress, BDD e PO (PageObjects). | em desenvolvimento

### O repositório tem como objetivo fixar estudos em Cypress e metodologia BDD (sem ferramentas) apenas em sua teoria, utilizando o site da saucedemo.

#### A divisão dos testes ocorre no formato Page Objects, com o objetivo de minimizar a quantidade de código repetido e também visando manter uma boa legibilidade principalmente em futuras manutenções do código!

#### O arquivo *env* do cypress está sendo upado no projeto pois nesse caso DESSE projeto de estudo não estou mexendo com dados sensíveis. No cenário da vida real, certamente este arquivo deve estar no .gitignore e não deve ser subido.

Para rodar a aplicação em sua máquina, faça o clone, abra o seu terminal no diretório raiz do projeto e digite --npm install--. (certifique-se de que o Node.Js está instalado na sua maquina antes de executar o comando anterior)
- Logo após este passo, digite --npx cypress run-- e logo em seguida, no terminal, você terá os resultados do teste. 
- Se você deseja ver os testes de forma mais visual, você pode optar por digitar o comando --npx cypress open-- e em seguida ele abrirá a tela inicial do cypress.


