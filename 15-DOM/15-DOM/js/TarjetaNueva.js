{
    const parrafo1 = document.createElement('P');
    parrafo1.textContent = 'How i met your mother';
    parrafo1.classList.add('categoria', 'visita');

    const parrafo2 = document.createElement('P');
    parrafo2.textContent = 'Visita al icónico bar de como conocí a vuestra madre';
    parrafo2.classList.add('titulo');

    const parrafo3 = document.createElement('P');
    parrafo3.textContent = '$20 por persona';
    parrafo3.classList.add('precio');

    // Contenedor de texto
    const info = document.createElement('DIV');
    info.classList.add('info');
    info.appendChild(parrafo1);
    info.appendChild(parrafo2);
    info.appendChild(parrafo3);

    // Imagen
    const imagenSerie = document.createElement('IMG');
    imagenSerie.src = 'https://preview.redd.it/was-how-i-met-your-mother-a-simulation-in-the-orville-v0-cbls6h9m5sg21.jpg?width=640&format=pjpg&auto=webp&s=9a2412b27d92b409da66f1a75543a29a498fa780';
    imagenSerie.alt = 'Mclarens Pub';

    // Tarjeta completa
    const cardPaseo = document.createElement('DIV');
    cardPaseo.classList.add('card');
    cardPaseo.appendChild(imagenSerie);
    cardPaseo.appendChild(info);

    // Insertar en la sección "Que Hacer"
    const contenedor = document.querySelector('.hacer .contenedor-cards');
    if (contenedor) {
        contenedor.appendChild(cardPaseo);
    }
}