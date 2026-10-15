// Objetos, JSON, destructuring y spread · 01-crear-y-acceder.js
// punto, corchetes, añadir y borrar

'use strict'

const name = "pepe"
const price = 30
const available = true

const producto = {
    name: "monitor",
    price: "40",
    available: true,
    "estado producto": "disponible"
}

console.log(producto);

console.log(producto.name);
console.log(producto.price);
console.log(prodcuto["estado producto"]);
console.log(producto["price"]);

producto.color = "azul"
delete producto.price;

console.log(producto);