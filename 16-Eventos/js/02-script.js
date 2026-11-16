const nav  = document.querySelector(".navegacion")
nav.addEventListener("click", () => {
    console.log("click en el nav");
})

nav.addEventListener("click", () => {
    console.log("click en el nav");
})             

nav.addEventListener("mousedown", () => {
    console.log("Presionando el botón en el nav");
})

nav.addEventListener("mouseout", () => {
    console.log("Soltando el botón en el nav");
})

nav.addEventListener("mouseenter", () => {
    console.log("Entrando en el nav");
})

nav.addEventListener("mousedown", () => {
    nav.style.backgroundColor = "red"
    console.log("Cambiando el color del botón en el nav");
})


