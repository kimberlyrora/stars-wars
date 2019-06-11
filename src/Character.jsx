import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Character = (prof) => {
	const [hometown, setHometown] = useState([]);
	useEffect(() => {
		axios.get(prof.location.state.profile.homeworld)
			.then(e => setHometown(e.data.name))
			.catch(e => console.log(e));
	}, []);
	return (
		<>
			<h1>{prof.location.state.profile.name}</h1>
			<h2>{hometown}</h2>
			<div>
				<p>Peso: {prof.location.state.profile.mass}</p>
				<p>Talla: {prof.location.state.profile.height}</p>
				<p>Año de nacimiento: {prof.location.state.profile.birth_year}</p>
				<p>Sexo: {prof.location.state.profile.gender}</p>
			</div>
		</>
	)
}
export default Character;