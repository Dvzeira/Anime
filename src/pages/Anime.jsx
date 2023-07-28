import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AnimeContext } from "../contexts/context";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Anime = () => {
  const { id } = useParams();
  const animeContext = useContext(AnimeContext);

  // Procura o anime no contexto com o ID fornecido
  const anime = animeContext.getAnime(id);

  // Verifica se o anime foi encontrado ou não
  if (!anime) {
    return (
      <>
        <NavBar />
        <div className="container">
          <p>Anime não encontrado.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <h3>{anime.attributes.canonicalTitle}</h3>
        <div className="animeInformation">
          <img src={anime.attributes.posterImage.large} alt="" />
          <div className="text">
            <span>{anime.attributes.endDate}</span>
            <p>{anime.attributes.description}</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Anime;
