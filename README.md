Estoque de Bebidas

- Descrição do Projeto:
  - O sistema desenvolvido para uma empresa fictícia, chamada Dsofts, que vende diversos tipos de bebibias, foi baseado no meu outro projeto de estoque de bebidas, porém agora usando JavaScript com Node e Express ao invés de Python e Flask.
    A aplicação permite que o usuário, ao acessar a rota raiz, tenha acesso à uma lista que mostra todas as bebidas do sistema.
    Nessa página, além de conseguir visualizar, o usuário pode cadastrar uma nova bebida, utilizando o botão "Cadastrar" no topo da página, editar uma bebida no botão verde "Editar" e excluir uma bebida no botão vermelho "Excluir".
    Cada bebida possui os mesmo atributos que são visualizados na lista, que são: tipo, marca, fornecedor, preço de compra, preço de venda, quantidade, total a pagar (preço de compra multiplicado pela quantidade),
    total a vender (preço de venda multiplicado pela quantidade), lucro (diferença entre total a pagar e total a vender), data de entrada e data de validade.
    
- Ferramentas utilizadas: JavaScript, Node.js, Express.js, Handlebars, Bodyparser, mysql2 (conector), MySQL
- Comandos no terminal:
  - nmm install -g typescript
  - npm install express --save
  - npm install express-handlebars --save
  - nmp install body-parser --save
  - nmp install mysql2 --save
  - nmp install sequelize --save
