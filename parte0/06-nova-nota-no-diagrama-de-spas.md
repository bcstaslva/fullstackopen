# Nova nota no diagrama de SPAs

Criando um diagrama que retrata o contexto em que o usuário cria uma nova nota utilizando a versão de [aplicação de página única](https://studies.cs.helsinki.fi/exampleapp/spa).

```
    participante: usuário
    participante: navegador
	participante: servidor

	usuário --> navegador: digita uma nova nota no campo de entrada do formulário e clica no botão "save"

	o JavaScript intercepta o evento de envio do formulário e impede que a página seja recarregada
	o JavaScript coleta o dado digitado e prepara os dados no formato JSON

	navegador --> servidor: envia os dados da nova nota para o endereço https://studies.cs.helsinki.fi/exampleapp/new_note_spa com o método POST
	
    servidor --> navegador: responde confirmando o recebimento dos dados com o status 200

	o JavaScript, sem recarregar a página, adiciona a nova nota na lista de notas no DOM
```