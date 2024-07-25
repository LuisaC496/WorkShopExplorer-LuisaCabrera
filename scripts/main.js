import { getData } from "../modules/getData.js";
import { postData } from "../modules/postData.js";
import { showData } from "../modules/showData.js";

const main = document.getElementById("main");
const createForm = document.getElementById("newPelicula");
const searchForm = document.getElementById("form");
const searchInput = document.getElementById("search");
export const url = 'http://localhost:3000/peliculas'


const peliculas = await getData(url);
showData(peliculas, main)

//AGREGAR PELICULA
createForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    let newPelicula = {
      "id": crypto.randomUUID(),
      "Title": document.getElementById("nameInput").value,
      "Description": document.getElementById("descriptionInput").value,
      "Trailer": document.getElementById("LinkInput").value,
      "Poster": document.getElementById("imageInput").value,
      "Type": document.getElementById("tipoInput").value,
    }
    await postData(url, newPelicula); 
    createForm.reset();
    peliculas.push(newPelicula); // Actualiza el array de películas localmente
    showData(peliculas, main); // Actualiza la visualización de las películas
    
  })
