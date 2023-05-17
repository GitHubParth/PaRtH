import React from 'react'
import Header from '../components/Header'
import SocialIcons from '../components/SocialIcons'
import ParticlesComponent from '../components/ParticlesComponent'

const Work = () => {

	const yinYang = 1;

	return (
		<>
			<Header yinYang={yinYang} bgColor="white" />

			<SocialIcons yinYang={yinYang}/>
			<ParticlesComponent particlesColor="dark" />
		</>
	)
}

export default Work