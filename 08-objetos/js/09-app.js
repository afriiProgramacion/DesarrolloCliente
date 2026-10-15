const carrito = [
    {nombre: "Monitor de 24 pulgadas", precio: 50},
    {nombre: "Lavadora", precio: 40},
    {nombre: "Telefono", precio: 5},
]

for (let i=0; i< carrito.length; i++) {
    console.log(`Articulo: ${carrito[i].nombre}`);
}

carrito.forEach(function(producto) {
    console.log(`Articulo: ${producto.nombre}`);
});

