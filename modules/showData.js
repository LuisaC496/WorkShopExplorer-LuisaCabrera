export const showData = async (fetchedData) => {
    // Objeto para agrupar películas por tipo
    const PeliTipos = {
        anime: [],
        adulto: [],
        infantil: []
    };

    // Clasificar las películas por tipo
    fetchedData.forEach((element) => {
        let { Type } = element;
        switch (Type.toLowerCase()) {
            case 'anime':
                PeliTipos.anime.push(element);
                break;
            case 'adulto':
                PeliTipos.adulto.push(element);
                break;
            case 'infantil':
                PeliTipos.infantil.push(element);
                break;
            default:
                break;
        }
    });

    for (const type in PeliTipos) {
        if (PeliTipos[type].length > 0) {
            const section = document.getElementById(type); 

            PeliTipos[type].forEach((pelicu) => {
                const { id, Title, Poster, Trailer, Description, Value } = pelicu;
                const div = document.createElement("div");
                div.classList.add("pelicula");
                div.setAttribute('id', id);
                div.innerHTML = `
                    <img src="${Poster}" />
                    <div class="pelicula-info">
                        <h3>${Title}</h3>
                        <h4>Tipo: ${type}</h4>
                        <button class="ver-detalle-btn" data-bs-toggle="modal" data-bs-target="#detallePeliculaModal">Ver Detalle</button>
                    </div>
                `;
                const btnVerDetalle = div.querySelector('.ver-detalle-btn');
                btnVerDetalle.addEventListener('click', () => {
                    // Mostrar detalles en el modal
                    document.getElementById('detalleTitulo').textContent = Title;
                    document.getElementById('detalleTipo').textContent = `Tipo: ${type}`;
                    document.getElementById('detalleDescripcion').textContent = Description;
                    document.getElementById('detallePoster').src = Poster;
                    document.getElementById('detalleValue').textContent = `Puntuación: ${Value}`;
                    const reproducirBtn = document.getElementById('reproducirTrailerBtn');
                    reproducirBtn.addEventListener('click', () => {
                        window.open(Trailer, '_blank');
                    });
                });

                section.appendChild(div);
            });
        }
    }
};
