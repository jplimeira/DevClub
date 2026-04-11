/*
Array -> Um array em JavaScript é uma estrutura usada para armazenar vários valores em uma única variável, como se fosse uma “lista”.
*/


// ISSO:
const users = [{
    nome: "Jayro",
    idade: 21,
    nomeDoConjuge: "Clivya",
    id: null
},
{
    nome: "Clivya",
    idade: 18,
    nomeDoConjuge: "Jayro",
    id: null
}]


// AO INVÉS DISSO:
const jayro = {
    nome: "Jayro",
    idade: 21,
    nomeDoConjuge: "Clivya",
    id: null
}

const clivya = {
    nome: "Clivya",
    idade: 18,
    nomeDoConjuge: "Jayro",
    id: null
}


// Navegar dentro da Array(alguns exemplos)

// imprimir o item da posição desejada
console.log(users[0].nomeDoConjuge)

// alteração de conteúdo da posição desejada
users[0].id = 1
console.log(users[0].id)