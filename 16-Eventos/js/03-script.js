const busqueda = document.querySelector(".busqueda")

// busqueda.addEventListener("input", () => {
// console.log("evento ejecutándose");})

// Eventos de teclado

// keydown
// keyup
// copy
// paste
// input
// blur



//busqueda.addEventListener("input", (e) => {
//    console.log("evento ejecutándose");})
    
busqueda.addEventListener("paste", () => {
    console.log("evento pegandose");})


//busqueda.addEventListener("focus", () => {
  //  console.log("evento ejecutándose");})
    


busqueda.addEventListener("input", leerInput)

function leerInput(e) {
    if (e.target.value == "a") {
    console.log("Error de validación")       
    }
}


    
    
