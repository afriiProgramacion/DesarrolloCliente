const carDiv = document.querySelector(".card")
const cardInfo = document.querySelector(".info")
const carTitulo = document.querySelector(".titulo")

carDiv.addEventListener("click", (e) => {
    e.stopPropagation
    console.log("Click en card")
})

cardInfo.addEventListener("click", (e) => {
    e.stopPropagation
    console.log("Click en info")
})

carTitulo.addEventListener("click", (e) => {
    e.stopPropagation
    console.log("Click en titulo")
})

