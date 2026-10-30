const tienda = {
    nombre: 'GameZone',
    ciudad: 'El Puerto',
    contacto: {
        email: 'info@gamezone.es',
        telefono: '956 000 000'
    }
};

const juegos = [
    { titulo: 'Zelda', precio: 60, plataforma: 'Switch', stock: 4 },
    { titulo: 'FIFA', precio: 70, plataforma: 'PS5', stock: 0 },
    { titulo: 'Minecraft', precio: 25, plataforma: 'PC', stock: 12 },
    { titulo: 'Mario Kart', precio: 55, plataforma: 'Switch', stock: 2 }
];


console.log(tienda.nombre)
console.log(tienda["nombre"])

let {nombre, contacto: {email}} = tienda
console.log(tienda)

tienda.abierta = true
console.log(tienda)


const horario = {apertura: '10:00', cierre: '21:00'}

const tiendaCompleta = {...tienda, ...horario}

console.log(tiendaCompleta)

// Recorrer tienda completa
for (const [clave, valor] of Object.entries(tiendaCompleta)) {
    console.log(`${clave} → ${valor}`)
}


// ARRAYS 

console.log(juegos.length)
console.log(juegos[0])
console.log(juegos.at(-1).titulo)

// Añadir y eliminar

juegos.unshift({titulo: "Resident Evil 4 HD", precio: 5, plataforma: "PC", stock:10})
console.log(juegos)
juegos.push({titulo: "Resident Evil Requiem", precio: 60, plataforma: "PS5", stock: 20})
juegos.pop()
console.log(juegos)

// Desestructuring

const [primero, segundo, ...resto] = juegos
console.log(juegos)

// forEach

juegos.forEach(juego => {
    const aviso = juego.stock === 0 ? ' · AGOTADO' : ''
    console.log(`${juego.titulo} (${juego.plataforma}) - ${juego.precio} €${aviso}`)
})

// map

const conIVA = juegos.map(juego => ({
    ...juego,                              
    precio: +(juego.precio * 1.21).toFixed(2)   
}))

console.log(conIVA)
console.log(juegos)  

const fechaHoy = new Date();
const fechaFormateada = fechaHoy.toLocaleDateString('es-ES');
console.log(`GameZone · Informe del ${fechaFormateada}`);
console.log(`Año: ${fechaHoy.getFullYear()}`)

function fabricante(plataforma) {
    switch (plataforma) {
        case 'Switch':
            return 'Nintendo';
        case 'PS5':
            return 'Sony';
        case 'PC':
            return 'Varios';
        default:
            return 'Desconocido';
    }
}

// Pruebas requeridas
console.log(fabricante('PS5'));
console.log(fabricante('Xbox')); 

juegos.forEach(juego => {
    const estado = juego.stock > 0 ? 'Disponible' : 'Agotado';
    console.log(`${juego.titulo}: ${estado}`);
});


console.log(juegos[0].stock == '4');  // false
console.log(juegos[0].stock === '4'); // false


for (const juego of juegos) {
    if (juego.stock === 0) {
        break; 
    }
    console.log(`Título: ${juego.titulo}`);
}

console.log("--- Propiedades del primer juego ---");
const primerJuego = juegos[0];
for (const clave in primerJuego) {
    console.log(`${clave}: ${primerJuego[clave]}`);
}


// ============================================
// PARTE 2 · FUNCIONES Y ARRAY METHODS
// ============================================

// Hoisting de funciones: la llamada funciona aunque la declaración esté abajo
console.log(precioFinal(60))
console.log(precioFinal(60, '$'))

function precioFinal(precio, moneda = '€') {
    return `${precio} ${moneda}`
}

// aplicarDescuento
const aplicarDescuento = (precio, porcentaje) => precio - precio * porcentaje / 100
console.log(aplicarDescuento(60, 20))

// map
const plataformas = juegos.map(juego => juego.plataforma)
console.log(plataformas)
console.log(plataformas.includes('Xbox'))

// some
const hayPS5 = juegos.some(juego => juego.plataforma === 'PS5')
console.log(hayPS5)

// find
const minecraft = juegos.find(juego => juego.titulo === 'Minecraft')
console.log(minecraft)

const tetris = juegos.find(juego => juego.titulo === 'Tetris')
console.log(tetris === undefined)

// findIndex
const indiceFIFA = juegos.findIndex(juego => juego.titulo === 'FIFA')
juegos[indiceFIFA].stock = 5
console.log(juegos[indiceFIFA])

// filter
const deSwitch = juegos.filter(juego => juego.plataforma === 'Switch')
console.log(deSwitch)

const disponiblesBaratos = juegos.filter(juego => juego.stock > 0 && juego.precio < 60)
console.log(disponiblesBaratos)

// every
console.log(juegos.every(juego => juego.precio < 100))
console.log(juegos.every(juego => juego.stock > 0))

// reduce
const valorInventario = juegos.reduce((total, juego) => total + juego.precio * juego.stock, 0)
console.log(valorInventario)

// filter + map encadenados
const disponiblesMayus = juegos
    .filter(juego => juego.stock > 0)
    .map(juego => juego.titulo.toUpperCase())

console.log(disponiblesMayus)

