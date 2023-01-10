import { useEffect, useState } from "react";
import Character from "./Character";
import NavPage from "./NavPage";



function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // async debe ser parte de una funcion
    async function fetchData() {
      //cuando me responda algo, lo guardo en una constante #response
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      //convierto la respuesta en un json
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
      console.log(data);
    }

    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <div className="spinner-border text-primary" role="status"></div>
      ) : (
        <div className="row ">
          {characters.map((character) => {
            return (
              <div className="col-sm-1 col-md-6 col-lg-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
