const carrito  = []

const producto = {
    nombre: "Monitor de 85 ",
    precio: 500
} 

const producto2 = {
    nombre: "lavadora ",
    precio: 500
}

let resultado;
resultado = [...carrito, producto]
console.log(resultado);

resultado = [...resultado, producto2]
