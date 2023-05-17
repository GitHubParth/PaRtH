import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogComponent = ({ blog }) => {
	return (
		<NavLink to={blog.link} target='_blank' className={`no-underline p-4 sm:w-[calc(15rem+15vw)] lg:w-[calc(15rem+15vw)] rounded-md bg-black/10 backdrop-blur-md group hover:bg-black transition-colors duration-300`}>
			<div className='flex flex-col'>
				<img src={blog.imgSrc} alt='' className='w-full h-auto rounded object-contain group-hover:border group-hover:border-white/40' />
				<h3 className='font-karla font-bold md:text-lg text-base leading-5 md:leading-6 mt-5 pb-3 border-b-2 border-b-black group-hover:text-white group-hover:border-b-white/60'>{blog.name}</h3>
				<div className='md:py-2 py-0.5 pt-2 px-0'>
					{blog.tags.map((tag, index) => (
						<span className='pr-2 font-semibold text-sm group-hover:text-white/80' key={index}>#{tag}</span>
					))}
				</div>
				<span className='font-semibold text-sm group-hover:text-white/80'>{blog.date}</span>
			</div>
		</NavLink>
	)
}

export default BlogComponent