import { createContext, useState } from "react";

export const AnimeContext = createContext({});

export function AnimeContextProvider({ children }) {
  const [animeData, setAnimeData] = useState([]);
  const [animePesquisa, setAnimePesquisa] = useState([])

  const animeRequest = (data) => {
    setAnimeData(data);
  };

  const animeSearch = (anime) => setAnimePesquisa(anime)

  const getAnime = (id) => {
    return animeData.find((anime) => anime.id === id) || animePesquisa.find((anime) => anime.id === id) || null;
  };

  const animeContextValue = {
    animeRequest,
    animeData,
    getAnime,
    animePesquisa,
    animeSearch,
  };

  return (
    <AnimeContext.Provider value={animeContextValue}>
      {children}
    </AnimeContext.Provider>
  );
}
