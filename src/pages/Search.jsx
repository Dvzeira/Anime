import { useContext } from "react";
import NavBar from "../components/NavBar";
import { AnimeContext } from "../contexts/context";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";



export default function Search() {
  const animeContext = useContext(AnimeContext);
  console.log(animeContext.animePesquisa)
  return (
    <>
      <NavBar />

      <section>
        {animeContext.animePesquisa.map(anm => {
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
          )
        })}
      </section>
     <Footer/>
    </>
  )
}