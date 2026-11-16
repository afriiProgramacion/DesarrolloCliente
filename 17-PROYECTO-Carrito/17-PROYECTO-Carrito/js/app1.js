// Estructura
const carrito = document.querySelector("#carrito")
const contenedorcarrito = document.querySelector("#lista-carrito tbody")
const vaciarcarrito = document.querySelector("#vaciar-carrito")
const listarCursos = document.querySelector("#lista-cursos")

let articulosCarrito = []


cargarListeners()
function cargarListeners() {
    listarCursos.addEventListener("click", anadircurso)
    vaciarcarrito.addEventListener("click", vaciarCarritoHTML)
    carrito.addEventListener("click", borrarCurso)
}

function anadircurso(e){
    e.preventDefault()
    if (e.target.classList.contains("agregar-carrito")){
        
    }
    const curso = e.target.parentElement.parentElement
    leerDatosCurso(curso)
}

function leerDatosCurso (curso) {

    
    const infoCurso = {
        imagen:curso.querySelector("img").src,
        titulo:curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }



    // Añadir cursos al array del carrito

    const existecurso = articulosCarrito.find (
        curso => curso.id === infoCurso.id
    );
    console.log(existecurso)
    if (existecurso) {
        existecurso.cantidad++;
    }
    else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    
    carritoHTML(articulosCarrito);
}

function carritoHTML(articulosCarrito){
    contenedorcarrito.innerHTML = ''
    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad, id} = curso
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
            <td>
                <a href="#" class="sumar" data-id="${id}">+</a>
            </td>
            <td>
                <a href="#" class="menos" data-id="${id}">-</a>
            </td>
            

        `;
        contenedorcarrito.appendChild(row);
    });
}


function limpiarHTML () {
    while (contenedorcarrito.firstChild) {
        contenedorcarrito.firstChild.remove()
    }
}

function vaciarCarritoHTML (){
        articulosCarrito = []
        limpiarHTML()
    }

function borrarCurso (e) {
    // detectar si el usuario ha dado click en borrar curso e.target
    // Necesito el id del curso en que se ha hecho click get(e.target)
    // Elimianr el id del array

    if (e.target.classList.contains("borrar-curso")) {
        const selectedID = e.target.getAttribute("data-id")

        articulosCarrito = articulosCarrito.filter((curso) => curso.id !== selectedID)
        carritoHTML (articulosCarrito)
    }

}

function modificarCantidad () {
    if (modificarCantidad.cantidad >= 1) {
        modificarCantidad.cantidad++
    }

    else if(cantidad >=2) {
        cantidad--
    }
}