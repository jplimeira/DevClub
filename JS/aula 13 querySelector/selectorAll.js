// querySelector -> Trás TODOS os elementos que se enquadre no tipo citado

const elements = document.querySelectorAll("p")
console.log(elements)

// para trazer uma classe, é necessário usar o ponto antes do nome da mesma
const elements = document.querySelectorAll(".paragraph-js")
console.log(elements)

// para trazer um ID, é necessário usar o # antes do nome da mesma
const elements = document.querySelectorAll("#main-input")
console.log(elements)