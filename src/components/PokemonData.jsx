import { useState, useEffect } from "react";
import DisplayPokemon from "./DisplayPokemon";

export default function PokemonData() {
  const [pokemon, setPokemon] = useState({});
  const [query, setQuery] = useState("");
  const [searchBoolean, setSearchBoolean] = useState(false);
  const [isData, setIsData] = useState(false);

  let mount = false;
  useEffect(() => {
    console.log("mounting");
    mount = true;
  }, []);

  useEffect(() => {
    if (mount === true && searchBoolean === false) {
      return;
    }
    fetch(`https:pokeapi.co/api/v2/pokemon/${query}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setPokemon(response);
        setSearchBoolean(false);
        setIsData(true);
      })
      .catch((error) => console.error(error));
  }, [searchBoolean]);

  function handleQuery(e) {
    setQuery(e.target.value);
    console.log(query);
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    console.log(query);
    setSearchBoolean(true);
  }

  if (isData === true) {
    //fix bug where entering empty search breaks app
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Search Pokemon</label>
          <input type="text" value={query} onChange={handleQuery}></input>
          <input type="submit" value="Search"></input>
        </form>
        <DisplayPokemon
          name={pokemon.name}
          sprites={pokemon.sprites.front_default}
        />
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <label>Search Pokemon</label>
        <input type="text" value={query} onChange={handleQuery}></input>
        <input type="submit" value="Search"></input>
      </form>
    );
  }
}
