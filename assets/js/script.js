// let nome = "Alisson"
// let email = "alisson.contact.@gmail.com"
// let telefone = 49999616212
// const PI = 3.15


// console.log(`Olá ${nome}`)
// console.log(`Email: ${email}`)
// console.log(`Telefone: ${telefone}`)
// console.log(PI);

// alert("Hello World!")
// confirm("Está gostando o JavaScript?")

// let nome2 = prompt("Qual seu nome?")
// let element = document.querySelector('.name').innerHTML = nome2;

// let idade = prompt("Qual a sua idade?");
// document.write("Idade: " + idade);

// let numero1 = parseInt(prompt("Qual o 1 número: "))
// let numero2 = parseInt(prompt("Qual o 2 número: "))

// let soma
// soma = numero1 + numero2

// document.write(`O valor de ${numero1} + ${numero1} = ${soma}`)


// let n1 = document.querySelector(".n1")
// let n2 = document.querySelector(".n2")
// let n3 = document.querySelector(".n3")

// let mediaInput = (n1 + n2 + n3 / 3)

let nota1 = parseInt(prompt("Qual a 1 nota: "))
let nota2 = parseInt(prompt("Qual a 2 nota: "))
let nota3 = parseInt(prompt("Qual a 3 nota: "))

let media = (nota1 + nota2 + nota3) / 3

function media2() {
    return ((nota1 + nota2 + nota3) / 3).toFixed(2)
}

document.querySelector('.mediaFinal').innerHTML = media2();