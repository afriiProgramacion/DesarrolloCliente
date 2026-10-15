name = "test"
price = 50

const producto = {
    name: "monitor",
    price: "40",
    available: true,
    mostrarInfo: function () {
        console.log('El producto ${name} vale ${price}');
        console.log('El producto ${name} vale ${this.price}');
    }
}

producto.mostrarInfo()

console.log(Object.keys)