import React from 'react';

const Pokecard = ({ id, name, type, exp }) => {
	return (
		<div className="Pokecard">
			<h4 className="Pokecard-title">{name}</h4>
			<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
			<p>Type: {type}</p>
			<p>EXP: {exp}</p>
		</div>
	);
};

export default Pokecard;
