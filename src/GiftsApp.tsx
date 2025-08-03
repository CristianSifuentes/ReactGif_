import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs-mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GiftsApp = () => {
  return (
    <>
        {/* { header } */}
        <CustomHeader  title="Gifs Searcher" description="Find and share the perfect gift"  ></CustomHeader>
        
        {/* { searc|h } */}
        <SearchBar placeholder="Busca lo que quieras" ></SearchBar>

        { /* Busquedas previas*/ }
        <PreviousSearches searches={['Goku', 'Dragon Ball Z']} ></PreviousSearches>

        { /* Gifs */ }
        <GifList gifs={mockGifs}></GifList>
        
        </>

  )
}
