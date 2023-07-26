import { useContext, useState } from "react";
import { AnimeContext } from "../contexts/context";
import { Link } from "react-router-dom";

const Home = () => {
  const anime = useContext(AnimeContext);
  const [textSearch, setTextSearch] = useState('');

  const requestApi = async (anime) => {
    const url = "https://kitsu.io/api/edge";
    const response = await fetch(`${url}/anime?filter[text]=${anime}&page[limit]=12`);
    const data = await response.json();
    return data.data;
  };

  const handleApi = async (animeText) => {
    const data = await requestApi(animeText);
    anime.animeRequest(data);
    console.log(data);
  };

  return (
    <>
      <div className="pesquisar">
        <label htmlFor="">Escreva o nome do Anime</label>
        <div>
          <input type="text" value={textSearch} onChange={(ev) => setTextSearch(ev.target.value)} />
          <button onClick={() => handleApi(textSearch)} style={{ margin: "10px" }}>Pesquisar</button>
        </div>
      </div>
      <section>
        {anime.animeData && anime.animeData.length > 0 ? (
          anime.animeData.map((anm) => {
            console.log(anm);
            const attributes = anm.attributes || {}; // Verifica se 'attributes' existe no objeto 'anm'
            const posterImage = attributes.posterImage || {}; // Verifica se 'posterImage' existe em 'attributes'
            const canonicalTitle = attributes.canonicalTitle || 'Título não disponível'; // Defina um valor padrão caso 'canonicalTitle' não exista

            return (
              <div className="boxAnimes" key={anm.id}>
                <img src={posterImage.small} alt="" />
                <div className="ver">
                  <p>{canonicalTitle}</p>
                  <button>
                    <Link to={`${anm.id}/anime`}>Ver</Link>
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>Nenhum anime encontrado.</p>
        )}
      </section>
    </>
  );
}

export default Home;
