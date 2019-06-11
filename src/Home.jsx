import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Home = () => {
	const [datawars, setData] = useState([]);
	const [person, setPerson] = useState('');
	useEffect(() => {
		axios.get('https://swapi.co/api/people/')
			.then(e => setData(e.data.results))
			.catch(e => console.log(e));
	}, []);
	return (
		<>
			<h1>STAR WARS</h1>
			<h1>PERSONAJES</h1>
			<input placeholder= 'BUSCAR' value={person} onChange={e => setPerson(e.target.value)}></input>
			<h4>RESULTADOS</h4>
			{datawars.filter(elem => {
				if ((elem.name.toLowerCase()).includes(person.toLowerCase())) {
					return elem.name
				}}).map((character) => {
				return (
					<div key={character.created}>
						<div>{character.name}</div>
						<button>
							<Link to = {{
							pathname:'/Character', 
							state: { profile: character}}}>VER DETALLE</Link>
						</button>
					</div>
				)
			})}
		</>
	)
}
export default Home