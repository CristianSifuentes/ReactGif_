import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
     placeholder?: string;
     onQuery: (query: string) => void;
}


export const SearchBar = ({placeholder='Search', onQuery}: Props) => {

   
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onQuery(query);
    // setQuery('');
  }


  // this hook is called when the component is mounted and when the query changes
  // it is used to perform side effects, like fetching data or updating the DOM
  // it can also return a cleanup function that is called when the component is unmounted or when the dependencies change
  // in this case, we are calling onQuery with the query value
  // and we are logging a message when the component is unmounted or when the query changes
  useEffect(() => {   

    const timeoutId = setTimeout(() => {
      // console.log('hi into effect');
      onQuery(query); 
    }, 1000);
    // console.log('hi into effect')  
    // onQuery(query); 

    // cleanup function
    // this function is called when the component is unmounted or when the dependencies change
    // in this case, we are logging a message when the component is unmounted or when the query changes
    // if you want to perform some cleanup, like cancelling a request or removing an event listener, you can do it here
    return () => {
      // console.log('clean function');
      clearTimeout(timeoutId);
      // onQuery(query); // this is not necessary, because we are already calling onQuery in the effect
      // you can remove this line if you want
      // it is useful if you want to call onQuery with the last query value when the component is unmounted or when the query changes
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // this is a dependency array, it tells React when to call the effect
    // if you want to call the effect only when the query changes, you can pass [query] as a dependency
    // if you want to call the effect only when the component is mounted, you can pass an empty array []
    // in this case, we are calling the effect every time the query changes
   }, [query, onQuery]
  
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
      handleSearch();
    }
  }
  
  return (
        <div className="search-container">
             {/* <h1>{query}</h1> */}
            <input 
            type="text" 
            placeholder={placeholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            // onKeyDown={(event) => {
            //   if(event.key === 'Enter'){
            //     handleSearch();
            //   }
            // }}
            ></input>
            <button onClick={handleSearch} >Search</button>
        </div>
  )
}
