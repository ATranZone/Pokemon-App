import "./DisplayPokemon.css";

export default function DisplayPokemon(props) {
	if (props.sprite.front_default != null) {
		const pokemonName = props.name;
		const newName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
		return (
			<li>
				<p>{props.id}</p>
				<p>{newName}</p>
				<img src={props.sprite.front_default}></img>
			</li>
		);
	}
}
