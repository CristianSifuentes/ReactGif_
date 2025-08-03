
interface Props {
     placeholder?: string;
    //  onQuery: (query: string) => void;
}


export const SearchBar = ({placeholder='Search'}: Props) => {
  return (
        <div className="search-container">
            <input type="text" placeholder="Search gifs"></input>
        </div>

  )
}
