// Variables, tipos, textos y números · 03-textos.js
// los métodos de texto que más se usan

const producto = '    Monitor de 24 pulgadas   '
const producto2 = 'Monitor de 30 pulgadas'

console.log(producto.length);
console.log(producto.trim());
console.log(producto.trim.length);

console.log(producto.toUpperCase());
console.log(producto.toLowerCase());

console.log(producto.includes('23'));
console.log(producto.includes('24'));

console.log(producto2.startsWith('Monit'));
console.log(producto2.endsWith('das'));

console.log(producto2.slice(0,5));

console.log(producto2.indexOf('24'));

console.log(producto2.replace('24', '27'));

console.log(producto2.replaceAll('o', 'a'));

console.log(producto2.split(' '));

console.log(['DWEC', 'DWES'].join(''));

console.log('ja'.repeat(4));

const frase = 'Agustín pasa de JavaScript'

// ['A', 'p', 'd', 'J']

