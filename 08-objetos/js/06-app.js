'use strict'

const producto = {
    name: "monitor",
    price: "40",
    available: true,
    "estado producto": "disponible"
}

const medidas = {
   peso: "40kg",
   medida: "1m",
}

const resultado = Object.assign(producto, medidas)
console.log(resultado);

const resultado2 = {...producto, ...medidas}

console.log(resultado2);