import React from 'react'
import Header from '../components/Header'
import SocialIcons from '../components/SocialIcons'
import ParticlesComponent from '../components/ParticlesComponent'
import spacemenImg from '../assets/Images/spaceman.png'

const AboutMe = () => {

	const yinYang = 0;

	return (
		<>
			<Header yinYang={yinYang} bgColor="white" sayHello="white" />

			<section className='w-screen lg:!min-h-[calc(100vh-2.5rem)] md:!min-h-[calc(100vh-3.5rem)] sm:!min-h-[calc(100vh-5rem)] min-h-[calc(100vh-8rem)] relative flex sm:flex-row flex-col items-center sm:justify-start justify-center xl:pr-[15%] xl:pl-[10%] lg:pl-[12%] md:pl-[13%] sm:pl-[14%] pl-0 pr-0 sm:pr-[10%] px-[30px] lg:mt-10 md:mt-14 sm:mt-20 mt-32 lg:py-14 md:py-10 sm:py-8 py-4'>


				{/* Main Div */}
				<div className='relative flex items-center sm:justify-start justify-center'>
					<p className='absolute lg:text-stroke-2-transparent text-stroke-transparent bg-transparent bg-clip-text 2xl:-top-36 xl:-top-32 lg:-top-24 md:-top-[4.5rem] sm:-top-16 -top-[4.5rem] z-[3] sm:text-[10vw] sm:text-left text-center text-[20vw] font-bold font-sans'>ABOUT ME</p>
					<div className='z-[5] relative border-2 border-white md:p-8 p-5 md:px-10 sm:w-[60vw] w-[80%] min-h-[40vh] h-full flex flex-col items-start justify-center backdrop-blur-sm font-karla'>
						<p className='text-gray-300 lg:text-[calc(1.5vw+1rem)] lg:leading-tight sm:text-[calc(1.5vw+0.8rem)] font-bold mb-3'>Hello there,</p>
						<p className='text-gray-300 lg:text-[calc(0.6vw+1rem)] sm:text-[calc(0.6vw+0.8rem)] mb-3'>I'm <span className='text-white font-bold'>Parth Padhiar</span>, a frontend developer located in India. I love to create simple yet beautiful websites with great user experiences.</p>
						<p className='text-gray-300 lg:text-[calc(0.6vw+1rem)] sm:text-[calc(0.6vw+0.8rem)] mb-3'>I'm interested in the full stack development and on its way with trying new things and building great projects.</p>
						<p className='text-gray-300 lg:text-[calc(0.6vw+1rem)] sm:text-[calc(0.6vw+0.8rem)]'>I believe everything is an Art when you put your consciousness in it.</p>
						<p className='text-gray-300 lg:text-[calc(0.6vw+1rem)] sm:text-[calc(0.6vw+0.8rem)]'>You can connect with me via social links.</p>
					</div>
				</div>
				

				<div className='absolute sm:top-[10%] bottom-[15%] right-[4%] w-[20vw] animate-float z-[3] sm:block hidden'>
					<img src={spacemenImg} alt='spacemen' className='w-full h-auto object-cover' />
				</div>

				<SocialIcons yinYang={yinYang}/>
				<ParticlesComponent particlesColor="light" />
			</section>
		</>
	)
}

export default AboutMe