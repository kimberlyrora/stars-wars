import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import  './Character.css'

const Character = (prof) => {
	const [hometown, setHometown] = useState([]);
	useEffect(() => {
		axios.get(prof.location.state.profile.homeworld)
			.then(e => setHometown(e.data.name))
			.catch(e => console.log(e));
	}, []);
	return (
		<div className='container'>
			<p className='name-character general'>{prof.location.state.profile.name}</p>
			<p className='hometown general'>{hometown}</p>
			<div className='info'>
				<p className='weight same'>Peso: {prof.location.state.profile.mass}kg</p>
				<p className='height same'>Talla: {prof.location.state.profile.height}cm</p>
				<p className='year same'>Año de nacimiento: {prof.location.state.profile.birth_year}</p>
				<p className='gender same'>Sexo: {prof.location.state.profile.gender}</p>
			</div>
			<div className='back'><Link to='/' className='back'>{`< VOLVER`}</Link></div>
		</div>
	)
}
export default Character;