'use strict'

const numeros = [10, 20, 30, 40] // nuevo

console.log(numeros);
console.table(numeros);

const meses = new Array("Enero", "Febrero") //viejo
console.log(meses);

const deTodo = [
    "hola",
    true,
    {nombre: "pepe", trabajo: "informatico"},
    null
]

console.log(deTodo);
console.log(numeros[1]);
console.log(numeros.length);

for (let i = 0; i< meses.length; i++) {
    console.log(meses[i])
}