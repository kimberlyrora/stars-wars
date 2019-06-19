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
console.log(datawars);

// const playAudio = () => {
// 	const nodeAudio = document.getElementById('prove');
// nodeAudio.play();
// };
		// if(!node.current) return; //stop from running all together
		// node.current.currentTime = 0;
	//  node.current.play()
		// .then(e=> console.log('1', ))
		// .catch(i=>console.log('2',i));
	// }
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
				{datawars
				.filter(elem => elem.name.toLowerCase().includes(person.toLowerCase()))
				.map((character) => {
					return (
						<div data-key={character.created} key={character.created} className='col-3 offset-1 common frame'>
							<div className='name'>{character.name}</div>
							<button className='detail'>
								<Link to={{
									pathname: '/Character',
									state: { profile: character, src: false}}} className='detail'>VER DETALLE</Link>
							</button>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default Home