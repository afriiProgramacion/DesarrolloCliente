// Objetos, JSON, destructuring y spread · 03-destructuring.js
// por nombre, con renombrado, por defecto y anidado

// Objetos, JSON, destructuring y spread · 02-recorrer.js
// keys, values y entries

'use strict'

const producto = {
    name: "monitor",
    price: "40",
    available: true,
    "estado producto": "disponible"
}

//let name = producto.name

const {name, price, available} = producto

console.log(name);
console.log(price);
console.log(available);

