// Objetos, JSON, destructuring y spread · 04-copiar-y-combinar.js
// referencias, spread, structuredClone y freeze
'use strict'

const producto = {
    name: "monitor",
    price: "40",
    available: true,
    "estado producto": "disponible",
    informacion: {
        peso: "2kg",
        medida: "29 m",
        origen: {
            pais: "ES"
        }
    }
}

console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.origen.pais);

let {name, informacion: {medida}} = producto
let {informacion} = producto
let {price, informacion: {origen: {pais}}} = producto
console.log(informacion);
