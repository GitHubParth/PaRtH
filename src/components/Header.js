import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = ({ yinYang, bgColor, sayHello }) => {

    useEffect(() => {
        if(yinYang) {
            window.addEventListener('scroll', () => {
                if(window.scrollY >= 50)
				document.querySelector('#header').classList.add('bg-white')
                else
				document.querySelector('#header').classList.remove('bg-white')
            })
        }
	}, [yinYang]);

    return (
        <header className='fixed top-0 left-0 px-10 p-6 w-screen z-10 flex items-center justify-between' id='header'>
            <Link to="/" className='z-[2]'>
                <h1 className={`text-4xl ${yinYang ? 'text-black' : 'text-white'} font-pacifico font-bold hover:animate-waving-logo cursor-pointer`}>PP</h1>
            </Link>
            <Link to="/" className={`border border-black rounded-full p-2 transition-all duration-300 hover:bg-gray-800 hover:text-white z-[2] bg-${bgColor}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                </svg>
            </Link>
            <Link to="mailto:parthpadhiar2002@protonmail.com">
                <motion.h1 className={`font-karla text-lg font-medium ${sayHello ? 'text-white' : ''}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Say hi..</motion.h1>
            </Link>
            
        </header>
    )
}

export default Header