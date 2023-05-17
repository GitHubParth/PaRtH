import { React, useState } from 'react'
import SocialIcons from '../components/SocialIcons'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

import MyInfo from '../components/MyInfo'

const Home = () => {

	const [yinYang, setYinYang] = useState(true)

	return (
		<div className='p-6 px-10 w-full min-h-screen !overflow-hidden'>
			<Header yinYang={yinYang} bgColor="white" />
			<SocialIcons yinYang={yinYang} page="home" />

			{/* Blog Link */}
			<motion.h1  className='absolute text-gray-800 top-[50%] right-[calc(2vw-0.5rem)] rotate-90 decoration-none' initial={{ rotate: 90, translateX: '-50%', translateY: '-50%' }} whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9, rotate: 90 }}>
				<Link to="/blog" className='text-xl font-karla font-semibold w-full h-full'>Blog.</Link>
			</motion.h1>

			{/* Work Link */}
			<motion.h1  className={`absolute ${yinYang ? 'text-gray-800' : 'text-white'} top-[50%] translate-y-[-50%] left-[calc(2rem+1rem)] translate-x-[-50%] -rotate-90 decoration-none z-[2]`} initial={{ rotate: 270, translateX: '-50%', translateY: '-50%' }} whileHover={{ scale: 1.1, rotate: 270 }} whileTap={{ scale: 0.9, rotate: 270 }}>
				<Link to="/work" className='text-xl font-karla font-semibold'>Work.</Link>
			</motion.h1>

			{/* About - Skills Link */}
			<div className='absolute bottom-[1rem] left-0 right-0 w-full flex justify-evenly z-[2]'>
				<motion.h1 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
					<Link to="/about" className={`text-xl ${yinYang ? 'text-gray-800' : 'text-white'} font-karla font-semibold`}>About.</Link>
				</motion.h1>
				<motion.h1 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
					<Link to="/skills" className='text-xl text-gray-800 font-karla font-semibold'>Skills.</Link>
				</motion.h1>
			</div>

			{/* YinYang Symbol */}
			<div className={`absolute cursor-pointer ${yinYang ? 'top-[50%]' : 'top-[85%]'} ${yinYang ? 'left-[50%]' : 'left-[85%] sm:left-[90%] md:left-[92%]'} translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center !transition-all !duration-1000 z-[2]`}>
				<span className={`animate-spin h-auto ${yinYang ? 'w-[90px] sm:w-[120px] md:w-[140px] lg:w-[160px]' : 'w-[50px]'}`} onClick={() => {
					setYinYang(!yinYang)
				}}>
					<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-yin-yang" viewBox="0 0 16 16">
						<path d="M9.167 4.5a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0Z"/>
						<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 0 1 7-7 3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 0 0 7 7 7 0 0 1-7-7Zm7 4.667a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334Z"/>
					</svg>
				</span>
				<button className={`mt4 ${yinYang ? 'block' : 'hidden' }`}>Click Here</button>
			</div>

			{/* Dark Div Left side */}
			<div className={`absolute ${yinYang ? 'w-[20px]' : 'w-1/2'}  ${yinYang ? 'h-0' : 'h-full'} transition-home-black-div bg-black top-0 bottom-0 right-[50%]`} />

			{/* Introduction Div */}
			<MyInfo yinYang={yinYang} />
			
		</div>
	)
}

export default Home