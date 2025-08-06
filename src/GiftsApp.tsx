import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
// import { mockGifs } from "./mock-data/gifs-mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GiftsApp = () => {

  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState(['Dragon Ball Z']);

  // handleTermClicked - this function is called when a previous search term is clicked
  // it receives the term as an argument and logs it to the console
  // you can use this function to perform some action when a previous search term is clicked
  // for example, you can call the handleSearch function with the term as an argument
  // or you can update the state with the term value
  const handleTermClicked = (term: string) => {
    console.log({term});
  }

  // handleSearch - this function is called when the user submits a search query
  // it receives the query as an argument and logs it to the console
  // you can use this function to perform some action when the user submits a search query
  // for example, you can call the API with the query value or update the state with the query value
  // you can also use this function to filter the previous search terms and display only the relevant ones
  const handleSearch = async (query: string = '') => {
    query = query.trim().toLowerCase();
    if(query.trim().length === 0) return;
    if (previousTerms.includes(query)) return;
    setPreviousTerms([query, ...previousTerms].slice(0, 8));
    // console.log({query})

        // const gifs = await getGifsByQuery(query);
        // console.log({gifs});
        const gifs = await getGifsByQuery(query);
        setGifs(gifs);

    // await getGifsByQuery(query);
    

//     Validar que el query no esté vacío
// Convertir el query a minúsculas y eliminar espacios en blanco
// Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
// Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8.
  };

  return (
    <>
        {/* { header } */}
        <CustomHeader  title="Gifs Searcher" description="Find and share the perfect gift"  ></CustomHeader>
        
        {/* { searc|h } */}
        <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch}  ></SearchBar>

        { /* Busquedas previas*/ }
        <PreviousSearches searches={previousTerms}   onLabelClicked={handleTermClicked}></PreviousSearches>

        { /* Gifs */ }
        <GifList gifs={gifs}></GifList>
        
        </>

  )
}


// Debouncing is a programming technique used to ensure a function is executed only once after a
//  certain period of time since the last time it was triggered