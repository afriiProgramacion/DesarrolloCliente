// Fichero con errores típicos para que ESLint los detecte.
// Desde esta carpeta:  npm install  y después  npm run lint

var total = 0

function sumar (precios) {
  for (var i = 0; i < precios.length; i++) {
    total = total + precios[i]
  }
  return total
}

let iva = 0.21
const resultado = sumar([10, '20', 30])

if (resultado == '60') {
  console.log('Total con IVA: ' + resultado * (1 + iva))
}

function sinUsar () {
  return descuento * 2
}
