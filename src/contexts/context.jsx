import { createContext, useState } from "react";

export const AnimeContext = createContext({});

export function AnimeContextProvider({ children }) {
  const [animeData, setAnimeData] = useState([]);

  const animeRequest = (data) => {
    setAnimeData(data);
  };

  const getAnime = (id) => {
    return animeData.find((anime) => anime.id === id);
  };

  const animeContextValue = {
    animeRequest,
    animeData,
    getAnime,
  };

  return (
    <AnimeContext.Provider value={animeContextValue}>
      {children}
    </AnimeContext.Provider>
  );
}
