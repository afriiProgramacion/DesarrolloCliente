const email = document.querySelector("#email")
const asunto = document.querySelector("#asunto")
const mensaje = document.querySelector("#mensaje")
const envio = document.querySelector("#formulario button[type=submit]")
const reset = document.querySelector("#formulario button[type=reset]")
const form = document.querySelector("#formulario")
const spinner = document.querySelector(".spinner")

cargarListeners()

function cargarListeners() {
    form.addEventListener("input", dispararEvento)
    reset.addEventListener("click", resetFormulario)
    form.addEventListener("submit", activarSpinner)
}

function dispararEvento(e) {
    validarFormulario(e)
    enviarFormulario()
    validarEmail(email)
    //activarSpinner(e)
}

function validarFormulario(e) {
    if (e.target.value.trim().length > 0) {
        if (e.target.id === "email" && !validarEmail(e.target)) {
            e.target.classList.add("error")
            return true
            }
        e.target.classList.remove("error")
    }
    else {
        e.target.classList.add("error")
    }
}

function enviarFormulario() {
    if (email.value.trim() !="" && asunto.value.trim() !="" && mensaje.value.trim() !="" && validarEmail(email) == true) {
        envio.classList.remove("opacity-50")
        envio.disabled = false
    }
    else {
        envio.classList.add("opacity-50")
        envio.disabled = true
    }
}

function validarEmail(email) {
    const mensaje = email.value
    // console.log("email recibido")
    if (mensaje.indexOf("@") !== -1) {
        return true
    }
    else {
        return false
    }
}

function resetFormulario(e) {
    e.preventDefault()
    form.reset()
    email.classList.remove("error")
    asunto.classList.remove("error")
    mensaje.classList.remove("error")
    enviarFormulario()
}

function activarSpinner(e) {
    e.preventDefault()
    spinner.classList.remove("hidden")
    setTimeout(() => {
        3000
    });
    spinner.classList.add("hidden")
    form.reset()
    enviarFormulario()
}