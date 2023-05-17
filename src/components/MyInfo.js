import React from 'react'
import img from '../assets/Images/profile-img.png'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const MyInfo = ({ yinYang }) => {

	const Box = styled(motion.div)``

	return (
		<Box
		  initial={{ height: 0 }} 
		  animate={{ height: 'auto' }}
		  transition={{ type: 'spring', duration: 2, delay: 1 }}
		  className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-[60vw] intro-div-bg ${yinYang ? '!hidden' : '!flex'}`}>
			<motion.div className='flex flex-col items-start justify-evenly w-1/2  text-white p-[2rem] font-karla' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
				<h1 className='font-extrabold text-[calc(2em+1.5vw)]'>Hi,</h1>
				<h3 className='font-semibold text-[calc(1em+1.5vw)] mb-1'>I'm Parth Padhiar</h3>
				<h6 className='font-extralight text-[calc(1.4vw)] leading-8'>I design and code stunning websites that engage users and elevate your online presence.</h6>
			</motion.div>
			<motion.div className='relative flex w-1/2 border transition-all duration-500' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
				<img src={img} alt='' className='absolute bottom-0 left-[50%] translate-x-[-50%] w-full h-auto' />
			</motion.div>
		</Box>

		// <motion.div 
		//   className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-[60vw] flex intro-div-bg `} 
		//   initial={{ height: 0, opacity: 0 }} 
		//   animate={{ height: 'auto', opacity: 1 }}
		//   transition={{ type: 'spring', duration: 2, delay: 1 }}>
		// 	<motion.div className='flex flex-col items-start justify-evenly w-1/2  text-white p-[2rem] font-karla' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
		// 		<h1 className='font-extrabold text-[calc(2em+1.5vw)]'>Hi,</h1>
		// 		<h3 className='font-semibold text-[calc(1em+1.5vw)] mb-1'>I'm Parth Padhiar</h3>
		// 		<h6 className='font-extralight text-[calc(1.4vw)] leading-8'>I design and code stunning websites that engage users and elevate your online presence.</h6>
		// 	</motion.div>
		// 	<motion.div className='relative flex w-1/2 border transition-all duration-500' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
		// 		<img src={img} alt='' className='absolute bottom-0 left-[50%] translate-x-[-50%] w-full h-auto' />
		// 	</motion.div>
		// </motion.div>
	)
}

export default MyInfo