import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs-mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GiftsApp = () => {


  const [previousTerms, setPreviousTerms] = useState(['Dragon Ball Z'])

  const handleTermClicked = (term: string) => {
    console.log({term});
  }

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
