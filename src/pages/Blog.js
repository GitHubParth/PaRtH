import React from 'react'
import Header from '../components/Header'
import SocialIcons from '../components/SocialIcons'
import BlogComponent from '../components/BlogComponent'
import { Blogs } from '../data/BlogData'

const Blog = () => {

	const yinYang = true

    return (
		<>
			<Header yinYang={yinYang} bgColor="transparent" />

			<section className={`blog-bg w-screen h-screen no-scrollbar`}>
				<div className='bg-[rgba(255,255,255,0.5)] w-full h-full pt-24 p-6 sm:pb-12 pb-0 px-10 overflow-x-hidden'>
					<div className='flex items-center justify-center  lg:w-[90%] md:w-[80%] mx-auto sm:mb-0 mb-10'>
						<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(2,minmax(calc(10rem+15vw),1fr))] gap-5'>
							{Blogs.map((blog, index) => (
								<BlogComponent key={index} blog={blog} />
							))}
							
						</div>
					</div>

					<SocialIcons yinYang={yinYang} />
				</div>
			</section>
		</>
      	
    )
}

export default Blog