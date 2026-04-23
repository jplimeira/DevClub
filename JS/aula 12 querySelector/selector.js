// querySelector -> Trás UM elemento, o PRIMEIRO que encontrar

const element = document.querySelector("p")
console.log(element)


// para trazer uma classe, é necessário usar o ponto antes do nome da mesma
const element2 = document.querySelector(".paragraph-js")
console.log(element2)

// para trazer um ID, é necessário usar o # antes do nome da mesma
const element3 = document.querySelector("#main-input")
console.log(element3.placeholder)

/*
 para pegar exatamente o item desejado de uma classe, basta especificar o tipo de item e após inserir o classe
para trazer um ID, é necessário usar o # antes do nome da mesma (EXEMPLO)
*/
const element4 = document.querySelectorAll("buttonm.main-input")
console.log(element4)