'use strict'
// 🐞 Depurar con breakpoints: esta función tiene un fallo. Encuéntralo SIN añadir console.log.
//
// 1. Abre DevTools → pestaña Sources → abre este fichero (Ctrl/Cmd + P → 03-depurar.js).
// 2. Haz clic en el número de la línea `suma += notas[i]` para poner un breakpoint.
// 3. Recarga la página: la ejecución se detiene ahí.
// 4. Mira el panel Scope: ¿cuánto vale i? ¿y notas[i]? Avanza con F10 (paso a paso).
// 5. Cuando veas el fallo, corrígelo y comprueba que la media es 7.

function calcularMedia (notas) {
  let suma = 0
  for (let i = 0; i <= notas.length; i++) {
    suma += notas[i]
  }
  return suma / notas.length
}

const notas = [6, 8, 7]
console.log('Media:', calcularMedia(notas)) // 🔮 ¿Por qué sale NaN?

// Alternativa al breakpoint: la instrucción `debugger` detiene la ejecución
// en esta línea si las DevTools están abiertas. Descoméntala para probarla.
// debugger
