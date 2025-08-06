import { type FC } from "react";

interface Props {
  searches: string[];
  onLabelClicked: (term: string) => void;

}

// https://api.giphy.com/v1/gifs/search?lang=es&api_key=IdvFByhuq0EcabV8oUh8kjLd9Eguiuz4&q=goku&limit=10
export const PreviousSearches: FC<Props> = ( {searches, onLabelClicked} ) => {

  return (
         <div className="previous-searches">
               <h2>Previous Searches</h2>
               <ul className="previous-searches-list">
                {
                  searches.map((term) => (
                  <li key={term} onClick={() => onLabelClicked(term)} > {term} </li>
                  //  <li key={term} onClick={ (event) =>  console.log(event)} > {term} </li>
                  ))
                }
               </ul>
           </div> 
  )
}
