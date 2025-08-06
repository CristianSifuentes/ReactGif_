import { useRef, useState } from 'react';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    // const gifsCache = {
 
    //     'goku': [],
    //     'saitama': [],
    // }
    const gifsCache = useRef<Record<string, Gif[]>>({});



    // handleTermClicked - this function is called when a previous search term is clicked
    // it receives the term as an argument and logs it to the console
    // you can use this function to perform some action when a previous search term is clicked
    // for example, you can call the handleSearch function with the term as an argument
    // or you can update the state with the term value
    const handleTermClicked = async (term: string) => {
        // console.log({term});

        // if (gifsCache[term]) {
        //     setGifs(gifsCache[term]);
        //     return;
        // }

        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }


        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
    }

    // handleSearch - this function is called when the user submits a search query
    // it receives the query as an argument and logs it to the console
    // you can use this function to perform some action when the user submits a search query
    // for example, you can call the API with the query value or update the state with the query value
    // you can also use this function to filter the previous search terms and display only the relevant ones
    const handleSearch = async (query: string = '') => {
      
        // Convert the query to lowercase and remove spaces
        query = query.trim().toLowerCase();

        //Validate that the query is not empty
        if(query.trim().length === 0) return;

        // Update previous Terms by adding the new term at the beginning and limiting it to a maximum of 8 elements, 
        // i.e. it cannot be an array of more than 8.
        if (previousTerms.includes(query)) return;      
        setPreviousTerms([query, ...previousTerms].slice(0, 8));

        // console.log({query})
    
        // const gifs = await getGifsByQuery(query);
        // console.log({gifs});
        const gifs = await getGifsByQuery(query);
        setGifs(gifs);

        // gifsCache[query] = gifs;
        gifsCache.current[query] = gifs;
        console.log({gifsCache});

        // await getGifsByQuery(query);
    };
  

    return {
       // Properties
       gifs, 

       // Functions
       previousTerms,
       handleSearch,
       handleTermClicked
   }
}
