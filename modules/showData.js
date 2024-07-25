export const showData = async (fetchedData, container) => {
    container.innerHTML = "";
    

    fetchedData.forEach((element) => {
        let { id, Type, Title, Poster, Trailer, Description, Value } = element;

        const div = document.createElement("div");
        div.classList.add("pelicula");
        div.setAttribute('id', id);
        div.innerHTML = `
            <img src="${Poster}" />
            <div class="pelicula-info">
                <h3>${Title}</h3>
                <h4>Tipo: ${Type}</h4>
                <button class="ver-detalle-btn" data-bs-toggle="modal" data-bs-target="#detallePeliculaModal">Ver Detalle</button>
            </div>
        `;
        const btnVerDetalle = div.querySelector('.ver-detalle-btn');
        btnVerDetalle.addEventListener('click', () => {
            // Mostrar detalles en el modal
            document.getElementById('detalleTitulo').textContent = Title;
            document.getElementById('detalleTipo').textContent = `Tipo: ${Type}`;
            document.getElementById('detalleDescripcion').textContent = Description;
            document.getElementById('detallePoster').src = Poster;
            document.getElementById('detalleValue').textContent= `Puntuación: ${Value}`;
            const reproducirBtn = document.getElementById('reproducirTrailerBtn');
            reproducirBtn.addEventListener('click', () => {
                window.open(Trailer, '_blank');

            });

        });
        container.appendChild(div);

    });

};
