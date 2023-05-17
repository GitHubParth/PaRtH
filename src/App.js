import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Work from './pages/Work'
import Blog from './pages/Blog'
import AboutMe from './pages/AboutMe'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} ></Route>
				<Route path='/about' element={<AboutMe />} ></Route>
				<Route path='/skills' element={<Skills />} ></Route>
				<Route path='/work' element={<Work />} ></Route>
				<Route path='/blog' element={<Blog />} ></Route>
			</Routes>
		</>
	)
}

export default App