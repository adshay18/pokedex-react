import React from 'react';
import './Pokecard.css';

const Pokecard = ({ id, name, type, exp }) => {
	return (
		<div className="Pokecard">
			<h4 className="Pokecard-title">{name}</h4>
			<div className="Pokecard-container">
				<img
					className="Pokecard-img"
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
				/>
				<p>Type: {type}</p>
				<p>EXP: {exp}</p>
			</div>
		</div>
	);
};

export default Pokecard;
