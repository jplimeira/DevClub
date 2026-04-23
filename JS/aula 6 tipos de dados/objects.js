// Entidade com variáveis relacionadas a ela(características do objeto)

let jayro = {
    name: "Jayro",
    age: 21,
    adress: {
        street: "Rua São José",
        number: 0,
        city: "São Brás",
        state: "Alagoas",
        cep: 57380000,
        country: "Brasil"
    }
}

jayro.adress.number = 5 

console.log(jayro)
console.log(jayro.adress.street)


// (exemplo de comando que possibilita a alteração de variável de dentro do objeto)

// quando é const, ele permite a alteração de uma variável do objeto, mas se 
// for uma alteração completa do objeto, não é permitido.


console.log(jayro)
console.log(jayro.adress.street)