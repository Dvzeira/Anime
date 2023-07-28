import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimeContext } from "../contexts/context";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
  const anime = useContext(AnimeContext);

  useEffect(() => {
    const requestApi = async () => {
      const url = "https://kitsu.io/api/edge";
      const response = await fetch(`${url}/anime?page[limit]=20`);
      const data = await response.json();
      anime.animeRequest(data.data);
    };

    requestApi();
  }, []);

  return (
    <>
      <NavBar />
      <section>
        {anime.animeData && anime.animeData.length > 0 ? (
          anime.animeData.map((anm) => {
            console.log(anm)
            return (
              <div className="boxAnimes" key={anm.id}>
                <img src={anm.attributes.posterImage.small} alt="" />
                <div className="ver">
                  <p>{anm.attributes.canonicalTitle}</p>
                  <Link to={`/${anm.id}/anime`}>
                    <button>Detalhes</button>
                  </Link>


                </div>
              </div>
            );
          })
        ) : (
          <p>Nenhum anime encontrado.</p>
        )}
      </section>
      <Footer/>
    </>
  );
};

export default Home;
