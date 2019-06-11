import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Character = (prof) => {
	const [hometown, setHometown] = useState([]);
	useEffect(() => {
		axios.get(prof.location.state.profile.homeworld)
			.then(e => setHometown(e.data.name))
			.catch(e => console.log(e));
	}, []);
	return (
		<div className='container'>
			<h1>{prof.location.state.profile.name}</h1>
			<h2>{hometown}</h2>
			<div>
				<p>Peso: {prof.location.state.profile.mass}</p>
				<p>Talla: {prof.location.state.profile.height}</p>
				<p>Año de nacimiento: {prof.location.state.profile.birth_year}</p>
				<p>Sexo: {prof.location.state.profile.gender}</p>
			</div>
			<Link to='/'>{`< VOLVER`}</Link>
		</div>
	)
}
export default Character;