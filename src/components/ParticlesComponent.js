import { React, useCallback } from 'react'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import DarkParticles from '../config/DarkParticles'
import LightParticles from '../config/LightParticles'

const ParticlesComponent = ({ particlesColor }) => {

	const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

	const particlesLoaded = useCallback(async (container) => {
        // console.log(container);
    }, []);

	return (
		<div className='absolute top-0 bottom-0 left-0 right-0 z-0 w-full h-full !max-w-screen' >
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				style={{ width: "100%", height: "100%", position: "absolute", top: "0", left: "0" }}
				options={particlesColor === 'dark' ? LightParticles : DarkParticles}
			/>
		</div>
	)
}

export default ParticlesComponent