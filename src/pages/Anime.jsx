import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimeContext } from "../contexts/context";

export default function Anime() {
  const { id } = useParams();
  const animeContext = useContext(AnimeContext);

  // Verifica se o objeto anime está vazio ou se attributes não está definido
  const anime = animeContext.getAnime(id);
  if (!anime || !anime.attributes) {
    return <p>Anime não encontrado.</p>;
  }

  return (
    <>
      <button style={{ marginLeft: "20px", marginTop: "20px" }}>
        <Link to={`/`} style={{ color: "white" }}>Voltar</Link>
      </button>
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
    </>
  );
}
