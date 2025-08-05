import { useEffect, useState, type KeyboardEvent } from 'react'

interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;   // ← here
}

export const SearchBar = ({ placeholder = 'Buscar', onQuery }: Props) => {
  const [query, setQuery] = useState('');

  // 1️⃣ Debounce side‑effect
  useEffect(() => {
    const id = setTimeout(() => onQuery(query), 700);
    return () => clearTimeout(id);
  }, [query, onQuery]);

  const handleSearch = () => onQuery(query);          // 2️⃣ Immediate search
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => { // 3️⃣ Enter key
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};