import { getData } from "../modules/getData.js";
import { postData } from "../modules/postData.js";
import { searchPelicula } from "../modules/searchPelicula.js";
import { showData } from "../modules/showData.js";

const main = document.getElementById("main");
const createForm = document.getElementById("newPelicula");
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
  })

 //BUSCAR PELICULA
const searchValue = document.getElementById("search");

searchValue.addEventListener("input", (e) => {
  const resultados = searchPelicula(e.target.value, peliculas);
  if (resultados.length > 0) {
    showData(resultados, main);
  } else {
    main.innerHTML = "Su busqueda no generó resultados.";
  }
})