# Novo diagrama das notas

Criando um diagrama de sequência que retrate a cadeia de eventos causada pela situação em que o usuário cria uma nova nota [nesta página](https://studies.cs.helsinki.fi/exampleapp/notes) escrevendo algo no campo de texto e clicando no botão submit.

```	
	participante: navegador
	participante: servidor

	navegador --> servidor: requisita acesso ao endereço https://studies.cs.helsinki.fi/exampleapp/notes com o método GET
	servidor --> navegador: responde enviando um documento do tipo .html
	
	o navegador renderiza o documento exibindo todos os elementos HTML
	
	navegador --> servidor: requisita o arquivo CSS no endereço https://studies.cs.helsinki.fi/exampleapp/main.css com o método GET
	servidor --> navegador: responde enviando um arquivo do tipo .css
	
	o navegador modifica a aparência dos elementos HTML com os estilos CSS

	navegador --> servidor: requisita o arquivo JavaScript no endereço https://studies.cs.helsinki.fi/exampleapp/main.js com o método GET
	servidor --> navegador: responde enviando um arquivo do tipo .js
	
	onavegador executa o código JavaScript que requisita um arquivo do tipo JSON
	
	navegador --> servidor: requisita o arquivo JSON no endereço https://studies.cs.helsinki.fi/exampleapp/data.json com o método GET
	servidor --> navegador: responde enviando um arquivo do tipo .json
	
	o navegador executa uma função de retorno de chamada do código JavaScript e renderiza as notas
```