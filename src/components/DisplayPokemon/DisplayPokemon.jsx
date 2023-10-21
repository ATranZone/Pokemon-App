import "./DisplayPokemon.css";

export default function DisplayPokemon(props) {
	if (props.sprite.front_default != null) {
		const pokemonName = props.name;
		const newName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
		return (
			<tr id="pokemon-row">
				<td className="pokemon-cell">{props.id}</td>
				<td className="pokemon-cell">{newName}</td>
				<td className="pokemon-cell">
					<img src={props.sprite.front_default}></img>
				</td>
			</tr>
		);
	}
}
