
'use strict'

const producto = {
    name: "monitor",
    price: "40",
    available: true,
    "estado producto": "disponible"
}
// congelamos el objeto

Object.freeze(producto)

// producto.available = "false"

console.log(producto);

delete producto.name

producto.tipo ("vehiculo")
console.log(Object.isFrozen(producto));