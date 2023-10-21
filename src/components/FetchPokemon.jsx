import { useState, useEffect } from "react";
import DisplayPokemon from "./DisplayPokemon";
export default function DisplayAllPokemon() {
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		const promises = []; //array to store our promises
		for (let i = 1; i <= 1010; i++) {
			const url = `https:pokeapi.co/api/v2/pokemon/${i}`;
			promises.push(fetch(url).then((response) => response.json())); //pushing our fetch promises into the promises array
		}
		Promise.all(promises).then((PokemonArray) => {
			//The Promise.all() static method takes an iterable of promises as input and returns a single Promise
			setPokemon(PokemonArray); //PokemonArray is our array of Pokemon data objects and we set our pokemon state to be that array of Pokemon objects
		});
	}, []);

	//map through our pokemon array and pass the data as props into this component
	const pokemonList = pokemon.map((pokemon) => (
		<DisplayPokemon
			key={pokemon.id}
			id={pokemon.id}
			name={pokemon.name}
			sprite={pokemon.sprites}
		/>
	));

	return <ul>{pokemonList}</ul>;
}
