import { React, useState } from 'react'
import Header from '../components/Header'
import SocialIcons from '../components/SocialIcons'
import ParticlesComponent from '../components/ParticlesComponent'

const Skills = () => {

	const [skillIndex, setSkillIndex] = useState(null)

	const skills = [
		{
			"name": "HTML",
			"score": "88",
			"experience": "I have been creating projects based on HTML since 2018.I have strong understanding of HTML5 syntax and structure.experience in creating HTML forms and handling user input.proficiency in integrating multimedia content such as images, audio, and video using HTML tags.experience in creating responsive web layouts using HTML and CSS"
		},
		{
			"name": "CSS",
			"score": "85",
			"experience": "I have my hands on CSS since 2018.Proficiency in writing css code to style web pages.Skills in building mobile-friendly and adaptive web pages that work well across different devices and screen sizes.Knowledge of keyframe animations, transforms, and transitions properties to add visual effects and interactivity to web pages.Also i can write CSS code that works consistently across different web browsers and versions"
		},
		{
			"name": "Bootstrap 5",
			"score": "76",
			"experience": "Experience in creating responsive layouts using Bootstrap's grid system and responsive utility classes.Experience in utilizing the various UI components like navbars, cards, buttons, forms, modals, and carousels.I also have knowledge of using Bootstrap's built-in features, like responsive images and CSS optimization, to improve performance.experience in integrating Bootstrap with React, Html"
		},
		{
			"name": "Tailwind CSS",
			"score": "87",
			"experience": "I have an very good experience in using Tailwind CSS to rapidly build modern and responsive web interfaces.skills in designing web pages that adapt to different screen sizes and devices.knowledge of customizing the default utility classes to match specific design requirements.experience in integrating Tailwind CSS with React, Html"
		},
		{
			"name": "JavaScript",
			"score": "80",
			"experience": "I have strong understanding of core JavaScript concepts, such as variables, data types, operators, and control structures.proficiency in working with functions, objects, arrays, and prototypes.knowledge of key JavaScript features like hoisting, closures and so on.Experience in manipulating DOM using JS to dynamically modify webpage content.Skill in accessing and modifying HTML elements, adding event listeners, and manipulating CSS classes"
		},
		{
			"name": "jQuery",
			"score": "64",
			"experience": "I have decent knowledge of jQuery's core syntax, selectors, and manipulation methods.experience in manipulating DOM and in applying animations using jQuery.knowledge of event handling methods, such as click, hover, submit, keypress.Experience in using UI components like date pickers, accordions, sliders.Knowledge in manipulating form elements and validating user input using jQuery"
		},
		{
			"name": "Git",
			"score": "83",
			"experience": "I have decent knowledge in using GitHub and GitLab.I have knowledge creating branches and merging changes back into the main branch.I am familiar with essential Git commands, such as add, commit, push, pull, fetch, merge, reset"
		},
		{
			"name": "ReactJS",
			"score": "81",
			"experience": "I have knowledge of React's core concepts to develop interactive and dynamic web applications.Experience in building reusable and modular components and React-Router for implementing client-side routing in single-page applications.I have been using hooks such as useState, useEffect, useContext, useRef.understanding of integrating React with APIs to fetch and manage data"
		},
		{
			"name": "PHP",
			"score": "83",
			"experience": "I have incredible experience using PHP for web development & server-side scripting.Knowledge in integrating PHP with databases like SQL Server, MySQL.understanding of common web application security vulnerabilities and best practices for securing PHP applications and skills in troubleshooting and debugging PHP code"
		},
		{
			"name": "Python",
			"score": "72",
			"experience": "I have a decent experience in Python and its core syntax, data types, operators, and control structures.I also have a good error and logic solving capability in Python"
		},
		{
			"name": "SQL",
			"score": "86",
			"experience": "I have excellent knowledge in writing SQL queries to retrieve, insert, update, and delete data from databases and experience in working with popular DBMS like MySQL, Oracle, SQL Server.Good understanding in DQL statements for data retrieval like SELECT, DML statements including INSERT, UPDATE, and DELETE, DDL statements for creating, altering, and dropping database objects like tables, views, indexes, and constraints, DCL statements for user authorization on tables, views like GRANT, REVOKE, TCL statements for transaction controls like COMMIT, ROLLBACK and SAVEPOINT.Experience in writing complex SQL queries like multiple queries and subqueries to retrieve data from multiple tables.Understanding of SQL constraints, such as primary keys, foreign keys, unique constraints, and check constraints.Knowledge of different types of SQL joins, including inner join, outer join, and self-join"
		},
		{
			"name": "Java",
			"score": "78",
			"experience": "I have pretty good knowledge in Java and its core syntax, object-oriented concepts, data types, operators.Familiarity with popular Java frameworks like Spring, Hibernate and developing web applications using Java Servlets, JavaServer Pages.Knowledge of connecting and interacting with databases using JDBC.Understanding of Java multithreading and concurrency concepts"
		},
		// {
		// 	"name": "Team Work",
		// 	"score": "92",
		// 	"experience": "I have been creating projects based on HTML since 2018.I have a very good knowlegde and experience in creating web pages using HTML"
		// },
		// {
		// 	"name": "Communication Skills",
		// 	"score": "75",
		// 	"experience": "I have been creating projects based on HTML since 2018.I have a very good knowlegde and experience in creating web pages using HTML"
		// },
		// {
		// 	"name": "Planning",
		// 	"score": "87",
		// 	"experience": "I have been creating projects based on HTML since 2018.I have a very good knowlegde and experience in creating web pages using HTML"
		// },
		// {
		// 	"name": "Decision Making",
		// 	"score": "79",
		// 	"experience": "I have been creating projects based on HTML since 2018.I have a very good knowlegde and experience in creating web pages using HTML"
		// },
		// {
		// 	"name": "Problem Solving",
		// 	"score": "83",
		// 	"experience": "I have been creating projects based on HTML since 2018.I have a very good knowlegde and experience in creating web pages using HTML"
		// },
		// {
		// 	"name": "Adaptivity",
		// 	"score": "94",
		// 	"experience": "I have been creating projects based on HTML since 2018.I have a very good knowlegde and experience in creating web pages using HTML"
		// },
	]

	const yinYang = true

	setTimeout(() => {
		document.querySelector('#moreDetailsSpan').classList.remove('opacity-0')
	}, 1000)

	return (
		<>
			<Header yinYang={yinYang} bgColor="white" />
			
			{/* Note Div */}
			<div className='z-50 absolute opacity-0 top-0 left-0 transition-opacity duration-300 w-full min-h-screen h-[100%] bg-[rgba(0,0,0,0.5)] flex items-center justify-center' id='moreDetailsSpan'>
				<div className='text-xl flex flex-col sm:flex-row items-center justify-center gap-2 w-[85%] max-w-[500px] h-auto py-10 bg-white rounded-xl border-2 border-black relative'>
					<b>Note : </b><p className='text-center sm:w-auto w-[90%]'>Click on any skill for more Details</p>
					<button 
						onClick={() => { document.querySelector('#moreDetailsSpan').classList.add('hidden') }} 
						className='absolute bg-white -right-4 -top-4 border-2 border-black rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,0.6)] shadow-black'>
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
							</svg>
					</button>
				</div>
			</div>
			
			<section className='w-full max-w-screen min-h-screen relative flex flex-col items-center justify-center gap-10 mt-20 pt-8 sm:pb-16 pb-12 xl:px-[15%] sm:px-[10%] px-[30px] scroll-smooth'>

				{/* Main Div */}
				<div className='z-[3] w-full h-full flex flex-col md:flex-row items-start justify-center xl:gap-8 lg:gap-6 gap-4 xl:pl-0 lg:pl-4 md:pl-8 sm:pl-10'>

					{/* Skills List */}
					<div className='border-2 border-black text-black bg-white lg:p-8 md:p-6 md:pt-8 md:pb-7 px-6 py-8 pb-9 min-w-1/2 w-full relative'>
						<ul className='flex flex-col gap-4 skillsList'>
							<h1 className='text-center text-4xl font-bold'>Skills</h1>
							{skills.map((item, index) => (
								<li className='flex items-center justify-center gap-4 cursor-pointer' key={index} 
								onClick={() => 
								{ 
									setSkillIndex(index); 
									setTimeout(() => {
										var skillDetailsDiv = document.querySelector('#skillDetails');
										var divPos = skillDetailsDiv.getBoundingClientRect().top;
										var scrollToPos =divPos + window.pageYOffset - 112; // 112 = offset
										window.scrollTo(0, scrollToPos);
									}, 50);
								}}>
									<div className='flex flex-col items-start justify-end gap-1 w-full'>
										<span className='font-karla text-lg '>{item.name}</span>
										<div className={`rounded-lg h-2.5 bg-[#F2E7D5] w-full flex group relative`}>
											<span className={`rounded-lg h-full`} style={{ width: item.score+"%", background: "linear-gradient(to right, black, rgba(0,0,0,0.5))" }}></span>
											<span className='flex bg-black px-2.5 py-1 text-xs rounded-lg transition-all duration-300 absolute -top-8 left-[50%] translate-x-[-50%] text-white opacity-0 group-hover:opacity-100 after:content-[""] after:w-2 after:h-2 after:bg-black after:rotate-45 after:absolute after:left-[50%] after:translate-x-[-50%] after:-bottom-1 after:z-10'>
												{item.score}%
											</span>
										</div>
									</div>
									{/* <span className='border rounded-full p-2 pr-1.5 font-bold'>
										<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
											<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
										</svg>
									</span> */}
								</li>
							))}
						</ul>
					</div>

					{/* Skill Details */}
					{ 
						skillIndex !== null && 
						<div className='border-2 border-black text-black bg-white lg:p-8 md:p-6 md:pt-8 md:pb-7 px-6 py-8 w-full flex flex-col' id='skillDetails'>
							<h1 className='text-4xl font-bold mb-6 text-center'>Skill Details</h1>
							<h1 className='text-2xl font-bold mb-3'>{skillIndex !== null ? <div>{skills[skillIndex]?.name} <span className='text-sm'>{ "( " + skills[skillIndex]?.score + "% )"} </span></div> : ""} </h1>
							{skillIndex !== null ? 
								<div className={`rounded-lg h-2 bg-[#F2E7D5] w-full flex group relative mb-6`}>
									<span className={`rounded-lg h-full`} style={{ width: skills[skillIndex].score+"%", background: "linear-gradient(to right, black, rgba(0,0,0,0.5))" }}></span>
								</div> : ""}
							<div className='text-lg font-karla flex flex-col items-start justify-center gap-2'> <span className='lg:text-2xl sm:text-xl text-2xl font-bold'>Experience</span> <ul className='pl-5'>{skillIndex !== null ? skills[skillIndex]?.experience?.trim().split(".").map((line, i) => (<li key={i} className=' lg:text-lg sm:text-base text-lg list-outside list-disc mb-2.5 leading-normal'>{line.charAt(0).toUpperCase() + line.slice(1).toLowerCase()}.</li>)) : ""}</ul> </div>
						</div>
					}
				</div>

				<SocialIcons yinYang={yinYang} />
				<ParticlesComponent particlesColor="dark" />
			</section>
			
		</>
	)
}

export default Skills