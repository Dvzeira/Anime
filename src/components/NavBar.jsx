import React, { useContext, useState } from "react";
import { AnimeContext } from "../contexts/context";
import { Link,useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

export default function NavBar() {
  const [textSearch, setTextSearch] = useState("");
  const anime = useContext(AnimeContext);
  const navigate = useNavigate()

  const handleApi = async () => {
    
      const url = "https://kitsu.io/api/edge";
      const response = await fetch(`${url}/anime?filter[text]=${textSearch}&page[limit]=40`);
      const data = await response.json();
      anime.animeSearch(data.data);
      console.log(data.data);

  };

  const handleKeyPress = (ev) => {
    if (ev.key === "Enter") {
      console.log('enter')
      handleApi()
      navigate("/search")
    }
  };

  return (
    <header>
      <nav>
        <Link to={"/"}>
          <h2 id="backToTop">AnimesLib</h2>
          </Link>
        <div className="pesquisar">
          <input
            type="text"
            value={textSearch}
            onChange={(ev) =>setTextSearch(ev.target.value) }
            onKeyDown={handleKeyPress} // Usando onKeyPress para capturar a tecla "Enter"
          />
          <Link to={`/search`}>
            <button onClick={handleApi}>
               <BiSearchAlt2/>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
