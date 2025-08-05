// import { useCallback, useState } from "react";
// import { SearchBar } from "./Test";
// import { GifList } from "./GifList";

// export function GifApp() {
//   const [results, setResults] = useState<Gif[]>([]);

//   // Stable callback prevents needless re‑effects
//   const handleQuery = useCallback((q: string) => {
//     fetchGifs(q).then(setResults);
//   }, []);

//   return (
//     <>
//       <SearchBar onQuery={handleQuery} />
//       <GifList gifs={results} />
//     </>
//   );
// }