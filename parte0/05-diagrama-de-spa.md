# Diagrama de SPA

Criando um diagrama que retrata o contexto em que o usuário utiliza a versão de [aplicação de página única](https://studies.cs.helsinki.fi/exampleapp/spa) das notas.

```	
	participante: navegador
	participante: servidor

	navegador --> servidor: requisita acesso ao endereço https://studies.cs.helsinki.fi/exampleapp/spa com o método GET
	servidor --> navegador: responde enviando um documento .html mínimo, contendo apenas o esqueleto da página
	
	o navegador renderiza o documento exibindo apenas a estrutura inicial

	navegador --> servidor: requisita o arquivo CSS no endereço https://studies.cs.helsinki.fi/exampleapp/main.css com o método GET
	servidor --> navegador: responde enviando um arquivo do tipo .css
	
    o navegador modifica a aparência dos elementos HTML com os estilos CSS

	navegador --> servidor: requisita o arquivo JavaScript no endereço https://studies.cs.helsinki.fi/exampleapp/spa.js com o método GET
	servidor --> navegador: responde enviando um arquivo do tipo .js

	o navegador executa o código JavaScript da SPA, que assume o controle da aplicação
	o JavaScript renderiza dinamicamente a interface no DOM, sem recarregar apágina

	o JavaScript realiza uma requisição assíncrona para buscar os dados

	navegador --> servidor: requisita o arquivo JSON no endereço https://studies.cs.helsinki.fi/exampleapp/data.json com o método GET
	servidor --> navegador: responde enviando um arquivo do tipo .json
	
	o JavaScript processa os dados recebidos e atualiza o DOM renderizando as notas dinamicamente
```