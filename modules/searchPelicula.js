export const searchPelicula = (texto, data) => {
    const result = data.filter((pelicula) => pelicula.Title.toLowerCase().includes(texto.toLowerCase()))
    return result;
  }