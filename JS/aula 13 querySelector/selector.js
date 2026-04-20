// querySelector -> Trás UM elemento, o PRIMEIRO que encontrar

const elements = document.querySelector("p")
console.log(elements)


// para trazer uma classe, é necessário usar o ponto antes do nome da mesma
const elements = document.querySelector(".paragraph-js")
console.log(elements)

// para trazer um ID, é necessário usar o # antes do nome da mesma
const elements = document.querySelector("#main-input")
console.log(elements)

/*
 para pegar exatamente o item desejado de uma classe, basta especificar o tipo de item e após inserir o classe
para trazer um ID, é necessário usar o # antes do nome da mesma (EXEMPLO)
*/
const elements = document.querySelectorAll("buttonm.main-input")
console.log(elements)