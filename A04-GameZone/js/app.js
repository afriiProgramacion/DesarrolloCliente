const juegos = [
    { titulo: 'Zelda', precio: 60, plataforma: 'Switch', stock: 4, lanzamiento: '2023-05-12', descuento: 0 },
    { titulo: 'FIFA', precio: 70, plataforma: 'PS5', stock: 0, lanzamiento: '2023-09-29', descuento: 20 },
    { titulo: 'Minecraft', precio: 25, plataforma: 'PC', stock: 12, lanzamiento: '2011-11-18', descuento: 0 },
    { titulo: 'Mario Kart', precio: 55, plataforma: 'Switch', stock: 2, lanzamiento: '2017-04-28', descuento: 0 },
    { titulo: 'Elden Ring', precio: 50, plataforma: 'PS5', stock: 3, lanzamiento: '2022-02-25', descuento: 30 },
    { titulo: 'Stardew Valley', precio: 15, plataforma: 'PC', stock: 0, lanzamiento: '2016-02-26', descuento: 0 },
    { titulo: 'Spider-Man 2', precio: 70, plataforma: 'PS5', stock: 1, lanzamiento: '2023-10-20', descuento: 10 },
    { titulo: 'Hollow Knight', precio: 15, plataforma: 'PC', stock: 7, lanzamiento: '2017-02-24', descuento: 0 }
];

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

function precioFinal(precio, moneda = '€') {
    return `${precio} ${moneda}`;
}

const precioConDescuento = (juego) =>
    juego.descuento ? Math.round(juego.precio - juego.precio * juego.descuento / 100) : juego.precio;

console.log(precioConDescuento(juegos[1]));

function aniosDesde(fechaTexto) {
    const fecha = new Date(fechaTexto);
    const hoy = new Date();
    const ms = hoy - fecha;
    return Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
}

function esNovedad(juego) {
    return aniosDesde(juego.lanzamiento) < 4;
}

console.log('Minecraft años:', aniosDesde('2011-11-18'), 'novedad:', esNovedad(juegos[2]));
console.log('Zelda años:', aniosDesde('2023-05-12'), 'novedad:', esNovedad(juegos[0]));

const hoy = new Date();
document.querySelector('#fecha').textContent = hoy.toLocaleDateString('es-ES', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
});
document.querySelector('#anio').textContent = hoy.getFullYear();

const catalogo = document.querySelector('#catalogo');
const tarjetaEjemplo = document.querySelector('.card.ejemplo');
catalogo.removeChild(tarjetaEjemplo);

const filtros = document.querySelectorAll('.filtro');
console.log('Número de filtros:', filtros.length);

const hayXbox = juegos.some(juego => juego.plataforma === 'Xbox');
console.log('¿Hay algún juego de Xbox?', hayXbox);

if (!hayXbox) {
    filtros.forEach(filtro => {
        if (filtro.textContent.trim() === 'Xbox') {
            filtro.parentElement.removeChild(filtro);
        }
    });
}

function crearCard(juego) {
    const card = document.createElement('article');
    card.className = 'card';

    const portada = document.createElement('div');
    portada.className = 'portada ' + juego.plataforma.toLowerCase();
    portada.textContent = juego.titulo.charAt(0);
    card.appendChild(portada);

    const info = document.createElement('div');
    info.className = 'info';

    const titulo = document.createElement('p');
    titulo.className = 'titulo';
    titulo.textContent = juego.titulo;
    info.appendChild(titulo);

    const plataforma = document.createElement('p');
    plataforma.className = 'plataforma';
    plataforma.textContent = `${juego.plataforma} · ${fabricante(juego.plataforma)}`;
    info.appendChild(plataforma);

    const precio = document.createElement('p');
    precio.className = 'precio';
    if (juego.descuento) {
        const original = document.createElement('span');
        original.className = 'original';
        original.textContent = precioFinal(juego.precio);
        precio.appendChild(original);

        precio.appendChild(document.createTextNode(` ${precioConDescuento(juego)} € `));

        const oferta = document.createElement('span');
        oferta.className = 'oferta';
        oferta.textContent = `-${juego.descuento} %`;
        precio.appendChild(oferta);
    } else {
        precio.textContent = precioFinal(juego.precio);
    }
    info.appendChild(precio);

    const stock = document.createElement('p');
    const agotado = juego.stock === 0;
    stock.className = agotado ? 'stock agotado' : 'stock disponible';
    stock.textContent = agotado ? 'Agotado' : `Disponible (${juego.stock})`;

    if (juego.stock === 1 || juego.stock === 2) {
        const aviso = document.createElement('span');
        aviso.textContent = ' · ¡Últimas unidades!';
        aviso.style.color = 'orange';
        aviso.style.fontWeight = 'bold';
        stock.appendChild(aviso);
    }
    info.appendChild(stock);

    if (agotado) {
        card.classList.add('agotada');
    }

    card.appendChild(info);
    return card;
}

function pintarCatalogo(lista) {
    const cont = document.querySelector('#catalogo');
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }
    lista.forEach(juego => {
        cont.appendChild(crearCard(juego));
    });
}

pintarCatalogo(juegos);

document.querySelector('#total-juegos').textContent = juegos.length;

const disponibles = juegos.filter(j => j.stock > 0);
document.querySelector('#total-disponibles').textContent = disponibles.length;

const valorInventario = juegos.reduce((total, juego) => total + precioConDescuento(juego) * juego.stock, 0);
document.querySelector('#valor-inventario').textContent = `${valorInventario} €`;

if (juegos.some(j => j.stock === 0)) {
    document.querySelector('#total-disponibles').style.color = 'red';
}

const novedades = document.querySelector('#novedades');
const listaNovedades = juegos.filter(j => esNovedad(j));
listaNovedades.forEach(juego => {
    const li = document.createElement('li');
    const anios = aniosDesde(juego.lanzamiento);
    li.textContent = `${juego.titulo} (${juego.plataforma}) · hace ${anios} año${anios === 1 ? '' : 's'}`;

    novedades.insertBefore(li, novedades.firstChild);
});

const conteo = juegos.reduce((acc, juego) => {
    acc[juego.plataforma] = (acc[juego.plataforma] || 0) + 1;
    return acc;
}, {});
console.log(conteo);

const tbody = document.querySelector('#tabla-plataformas tbody');
for (const plat in conteo) {
    const tr = document.createElement('tr');
    const tdNombre = document.createElement('td');
    tdNombre.textContent = `${plat} (${fabricante(plat)})`;
    const tdCount = document.createElement('td');
    tdCount.textContent = conteo[plat];
    tr.appendChild(tdNombre);
    tr.appendChild(tdCount);
    tbody.appendChild(tr);
}

const maxStock = juegos.reduce((max, j) => Math.max(max, j.stock), 0);
const posMax = juegos.findIndex(j => j.stock === maxStock);
catalogo.children[posMax].classList.add('destacada');

const primeraTarjeta = catalogo.firstElementChild;
const tituloPrimera = primeraTarjeta.children[1].children[0];
console.log('Título primera tarjeta:', tituloPrimera.textContent);

const segundaTarjeta = primeraTarjeta.nextElementSibling;
console.log('Título segunda tarjeta:', segundaTarjeta.children[1].children[0].textContent);

const ultimoTitulo = catalogo.lastElementChild.children[1].children[0];
const tarjetaDesdeTitulo = ultimoTitulo.parentElement.parentElement;
console.log('¿Es la misma tarjeta?', tarjetaDesdeTitulo === catalogo.lastElementChild);
