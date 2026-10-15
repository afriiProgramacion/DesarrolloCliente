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


// Mostrar nombre de dos maneras

console.log(tienda.nombre)
console.log(tienda["nombre"])

// Nombre y contacto en una sola linea:
let {nombre, contacto: {email}} = tienda
console.log(tienda)

// Añadir abierta y congelarla
tienda.abierta = true
console.log(tienda)

//Object.freeze(tienda)
//tienda.nombre = "GAME"
//Object.isFrozen(tienda)

// Crear horario 

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

