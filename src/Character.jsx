import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Character.css'

const contents = [
	{
		name: 'luke',
		created: '2014-12-09T13:50:51.644000Z',
		src: 'http://www.kiwinutz.com/sounds/wav_starwars/wontfail.wav'
	},
	{
		name: 'c3po',
		created: '2014-12-10T15:10:51.357000Z',
		src: 'http://www.galaxyfaraway.com/Sounds/IAMC3PO.WAV'
	},
	{
		name: 'r2d2',
		created: '2014-12-10T15:11:50.376000Z',
		src: 'http://www.galaxyfaraway.com/Sounds/R2D2a.wav'
	},
	{
		name: 'darth',
		created: '2014-12-10T15:18:20.704000Z',
		src: 'http://www.galaxyfaraway.com/Sounds/FATHER.WAV'
	},
	{
		name: 'leia',
		created: '2014-12-10T15:20:09.791000Z',
		src: 'http://www.galaxyfaraway.com/Sounds/HELP.WAV'
	},
	{
		name: 'owen',
		created: '2014-12-10T15:52:14.024000Z',
		src: 'http://www.kiwinutz.com/sounds/wav_starwars/saberon.wav'
	},
	{
		name: 'beru',
		created: '2014-12-10T15:53:41.121000Z',
		src: 'http://www.kiwinutz.com/sounds/wav_starwars/blaster.wav'
	},
	{
		name: 'r5d4',
		created: '2014-12-10T15:57:50.959000Z',
		src: 'http://www.galaxyfaraway.com/Sounds/AT-AT_walking.mp3'
	},
	{
		name: 'biggs',
		created: '2014-12-10T15:59:50.509000Z',
		src: 'http://www.galaxyfaraway.com/Sounds/lightsaber-struggle.mp3'
	},
	{
		name: 'obi',
		created: '2014-12-10T16:16:29.192000Z',
		src: 'http://www.kiwinutz.com/sounds/wav_starwars/force.wav'
	}
];
const Character = (prof) => {
	const [hometown, setHometown] = useState([]);
	useEffect(() => {
		axios.get(prof.location.state.profile.homeworld)
			.then(e => setHometown(e.data.name))
			.catch(e => console.log(e));
	}, [prof.location.state.profile.homeworld]);
	useEffect(() => {
		if (!prof.location.state.src) {
			const nodeAudio = refAudio.current;
			nodeAudio.play();
			console.log(nodeAudio);
		} else {
			console.log('bye');
		}
	});
	const refAudio = useRef(prof.location.state.profile.created)
	const rightContent =
	contents
	.filter(elem => elem.created === prof.location.state.profile.created)
	.map(e => e.src);
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
			<div className='back'><Link to='/stars-wars/' className='back'>{`< VOLVER`}</Link></div>
			<audio data-key="83" id='prove' ref={refAudio} src={rightContent}></audio>
		</div>
	)
}
export default Character;