/*

EVENTOS
Em JavaScript, um evento é basicamente uma ação que acontece no 
navegador e que o seu código pode “ouvir” e reagir.

Pensa assim: 
1→ o usuário faz algo (ou algo acontece na página) 
2→ o JavaScript detecta 
3→ você executa uma função em resposta.

💡 Resumindo

Evento = gatilho que dispara uma ação no seu código.

📌 Exemplos de eventos em JavaScript (sem código)
🖱️ Mouse
click → quando o usuário clica
dblclick → clique duplo
mouseover → quando o mouse passa por cima
mouseout → quando o mouse sai de cima
mousemove → quando o mouse se move
⌨️ Teclado
keydown → quando uma tecla é pressionada
keyup → quando a tecla é solta
keypress → quando uma tecla é pressionada (menos usado hoje)
📝 Formulários
submit → envio de formulário
change → quando um valor é alterado
input → enquanto o usuário digita
focus → quando o campo é selecionado
blur → quando o campo perde o foco
🌐 Página / Navegador
load → quando a página termina de carregar
DOMContentLoaded → quando o HTML é carregado
resize → quando a tela é redimensionada
scroll → quando a página é rolada
*/

const element = document.querySelector("#main-input")

function cliqueiNoBotao() {
    console.log(element.value)
}

function digiteiNoInput() {
    console.log("Digitei no input")
}