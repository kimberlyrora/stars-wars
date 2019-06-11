import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css'

const Home = () => {
	const [datawars, setData] = useState([]);
	const [person, setPerson] = useState('');
	useEffect(() => {
		axios.get('https://swapi.co/api/people/')
			.then(e => setData(e.data.results))
			.catch(e => console.log(e));
	}, []);
	// console.log(datawars);
	return (
		<div className='container'>
			<div className='common title space'>
				<p className='row justify-content-center one'>STAR WARS</p>
				<p className='row justify-content-center two'>PERSONAJES</p>
			</div>
			<div className='common line'>
				<input placeholder='BUSCAR' value={person} onChange={e => setPerson(e.target.value)}></input>
				<p className='row justify-content-center three'>RESULTADOS</p>
				<p className='color-border' />
			</div>
			<div className='row justify-content-around common'>
				{datawars.filter(elem => {
					if ((elem.name.toLowerCase()).includes(person.toLowerCase())) {
						return elem.name
					}
				}).map((character) => {
					return (
						<div data-key={character.created} key={character.created} className='col-3 offset-1 common frame'>
							<div className='name'>{character.name}</div>
							<button className='detail'>
								<Link to={{
									pathname: '/Character',
									state: { profile: character }
								}} className='detail'>VER DETALLE</Link>
							</button>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default Home