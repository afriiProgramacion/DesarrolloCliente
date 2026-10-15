const carrito  = []

const producto = {
    nombre: "Monitor de 85 ",
    precio: 500
} 

const producto2 = {
    nombre: "lavadora ",
    precio: 500
}

const producto3 = {
    nombre: "test",
    precio: 444
}

carrito.push(producto)
carrito.push(producto2)
carrito.push(producto3)

carrito.splice(1,0)

console.log(carrito);