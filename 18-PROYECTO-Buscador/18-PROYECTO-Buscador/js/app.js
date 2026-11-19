// Selectores (cacheados una sola vez)
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const transmision = document.querySelector("#transmision");
const puertas = document.querySelector("#puertas");
const color = document.querySelector("#color");
const contenedor = document.querySelector("#resultado");

// Estado de la búsqueda
const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    transmision: "",
    puertas: "",
    color: ""
};

// Renderiza la lista de coches en el contenedor
function cargarCoches(lista = coches) {
    contenedor.innerHTML = "";

    if (!lista.length) {
        contenedor.innerHTML = "<p>No se encontraron resultados</p>";
        return;
    }

    const fragment = document.createDocumentFragment();
    lista.forEach(coche => {
        const { marca, modelo, year, puertas, transmision, precio, color } = coche;
        const p = document.createElement("p");
        p.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio ${precio} - Color: ${color}`;
        fragment.appendChild(p);
    });
    contenedor.appendChild(fragment);
}

// Rellena el select de años con los últimos 20
function ultimosVeinte() {
    const max = new Date().getFullYear();
    const min = max - 20;

    const fragment = document.createDocumentFragment();
    for (let i = max; i > min; i--) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        fragment.appendChild(option);
    }
    year.appendChild(fragment);
}

// Filtra los coches según todos los campos de búsqueda
function filtrarCoche() {
    const resultado = coches.filter(coche => {
        if (datosBusqueda.marca && coche.marca !== datosBusqueda.marca) return false;
        if (datosBusqueda.year && coche.year !== Number(datosBusqueda.year)) return false;
        if (datosBusqueda.minimo && coche.precio < Number(datosBusqueda.minimo)) return false;
        if (datosBusqueda.maximo && coche.precio > Number(datosBusqueda.maximo)) return false;
        if (datosBusqueda.transmision && coche.transmision !== datosBusqueda.transmision) return false;
        if (datosBusqueda.puertas && coche.puertas !== Number(datosBusqueda.puertas)) return false;
        if (datosBusqueda.color && coche.color !== datosBusqueda.color) return false;
        return true;
    });
    cargarCoches(resultado);
}

// Eventos: un solo listener por campo, usando "change" (más adecuado para <select>)
const campos = [marca, year, minimo, maximo, transmision, puertas, color];
const nombres = ["marca", "year", "minimo", "maximo", "transmision", "puertas", "color"];

campos.forEach((campo, i) => {
    campo.addEventListener("change", e => {
        datosBusqueda[nombres[i]] = e.target.value;
        filtrarCoche();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    cargarCoches();
    ultimosVeinte();
});
