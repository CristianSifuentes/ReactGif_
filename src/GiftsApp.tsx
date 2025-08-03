import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs-mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GiftsApp = () => {


  const [previousTerms, setPreviousTerms] = useState(['Dragon Ball Z'])

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
  const handleSearch = (query: string = '') => {
    query = query.trim().toLowerCase();
    if(query.trim().length === 0) return;
    if (previousTerms.includes(query)) return;
    setPreviousTerms([query, ...previousTerms].slice(0, 8));
    console.log({query})
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
        <GifList gifs={mockGifs}></GifList>
        
        </>

  )
}
