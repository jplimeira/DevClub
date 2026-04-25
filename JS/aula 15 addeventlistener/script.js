/*

addEventListener

Aqui vão exemplos simples de funções que podem ser usadas com eventos (sem código, só a ideia):

Função de clique: executa uma ação quando o usuário clica em um botão, como mostrar uma mensagem ou enviar um formulário.
Função de digitação: é ativada quando o usuário digita em um campo, podendo validar o texto ou mostrar sugestões.
Função de passar o mouse: acontece quando o cursor passa por um elemento, podendo destacar ou mudar o estilo visual.
Função de saída do mouse: executa algo quando o mouse sai de um elemento, como voltar ao estilo original.
Função de carregamento: roda quando a página termina de carregar, útil para iniciar configurações ou dados.
Função de envio de formulário: valida informações antes de enviar, evitando erros ou campos vazios.

Essas funções são ligadas a eventos para tornar a página interativa.

*/

const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")


// Exemplo de forma de utilização de addventListener
select.addEventListener("change", function () {
    console.log("troquei de valor")
})


// Mais uma forma de utilizá-lo, para mostrar informações do evento

function troqueiValor(event){
    console.log(event)
}

select.addEventListener("change", troqueiValor);
input.addEventListener("keypress", troqueiValor);
button.addEventListener("click", troqueiValor)