import { useRef } from 'react'
import { motion } from 'framer-motion'

import Wrapper from './Wrapper'
import man from '../assets/man.webp'
import externalLinkIcon from '../assets/external-link-icon.png'
import logo from '../assets/dev78.webp'
import { scrollTo } from '../helper'
import { useFollowPointer } from './useFollowPointer'
import { CiLinkedin } from 'react-icons/ci'

const HeroBanner = () => {
	const ref = useRef(null)
	const { x, y } = useFollowPointer(ref)
	return (
		<div
			id='hero'
			className='w-full h-full relative bg-[#111111] overflow-hidden'
		>
			{/* BACKGROUND ELEMENTS FOR DESKTOP START */}
			<motion.span
				ref={ref}
				animate={{ x, y }}
				className='hidden md:block sec-1-bg-gradient-1-desktop md:w-[768px] 2xl:w-[1536px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]'
			/>
			<span className='hidden md:block sec-1-bg-gradient-2-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]' />
			{/* BACKGROUND ELEMENTS FOR DESKTOP END */}

			{/* BACKGROUND ELEMENTS FOR DESKTOP START */}
			<span className='md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]' />
			<span className='md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]' />
			{/* BACKGROUND ELEMENTS FOR DESKTOP END */}

			<Wrapper>
				{/* NAVBAR START */}
				<motion.div
					className=' md:flex items-center justify-between mt-[40px] 2xl:mt-[63px] relative'
					initial={{ y: -200, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7, delay: 0.25 }}
				>
					<div className='flex items-center gap-2 md:gap-[6px]'>
						<div
						// className='w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center'
						>
							<img
								src={logo}
								alt=''
								className='w-[75px] md:w-[180px]'
							/>
						</div>
						{/* <div>mladen.krstin@gmail.com</div> */}
					</div>
					<ul className='hidden md:flex 2xl:text-[24px]'>
						<li className='cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg'>
							<a href='https://www.linkedin.com/in/mladen-krstin/'>
								<CiLinkedin
									size={32}
									color='#fff'
								/>
							</a>
						</li>
						<li
							className='cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg'
							onClick={() => scrollTo('about')}
						>
							About me
						</li>
						<li
							className='cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg'
							onClick={() => scrollTo('skills')}
						>
							Skills
						</li>
						{/* <li
							className='cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg'
							onClick={() => scrollTo('work')}
						>
							Work
						</li>
						<li
							className='cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg'
							onClick={() => scrollTo('contact')}
						>
							Contact
						</li> */}
					</ul>
				</motion.div>
				{/* NAVBAR END */}

				{/* BIG HEADING START */}
				<motion.div
					className='flex justify-center text-center mt-6 md:mt-14 mb-10 relative'
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className='text-[50px] md:text-[120px] 2xl:text-[189px] leading-[50px] md:leading-[125px]  2xl:leading-[192px] font-oswald uppercase'>
						I am A Creative
						<br className='invisible md:visible' />
						Web Developer
					</h1>
				</motion.div>
				{/* BIG HEADING END */}

				{/* INTRO START */}
				<motion.div
					className='flex flex-col mb-10 justify-center text-center md:text-left md:text-xl text-lg leading-[24px] md:leading-[28px] relative'
					initial={{ y: 300, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7, delay: 0.25 }}
				>
					<div className='font-light mb-4'>
						👋 Hi, I am <span className='font-semibold'>Mladen Krstin</span>
					</div>
					<div className='contents md:flex max-w-[400px] lg:max-w-[510px] xl:max-w-[650px] text-base lg:text-xl xl:text-2xl'>
						Me and my team create and maintain modern websites and web
						applications. We solve all your business website or webshop
						problems. From WordPress CMS to custom made web sites using React.js
						and Next.js techologies.
					</div>
				</motion.div>
				{/* INTRO END */}

				{/* NUMBER BLOCK START */}
				<motion.div
					className='hidden md:flex gap-8 relative z-10'
					initial={{ y: 300, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7, delay: 0.25 }}
				>
					{/* START */}
					<div className='flex items-center gap-3 mb-10'>
						<div className='text-[80px] font-light'>20+</div>
						<div className='leading-[22px]'>
							SUCCESSFULLY
							<br />
							COMPLETED
							<br />
							PROJECTS
						</div>
					</div>
					{/* END */}

					{/* START */}
					<div className='flex items-center gap-3 mb-10'>
						<div className='text-[80px] font-light'>5+</div>
						<div className='leading-[22px]'>
							YEARS OF
							<br />
							EXPERIENCE
						</div>
					</div>
					{/* END */}
				</motion.div>
				{/* NUMBER BLOCK END */}

				{/* PERSON BLOCK START */}
				<motion.div
					className='w-[300px] lg:w-[375px] 2xl:w-[475px] absolute -bottom-5 right-2 -translate-x-2'
					initial={{ y: 180, x: '-10%' }}
					animate={{ y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<img
						src={man}
						alt=''
						className='hidden md:block'
					/>

					{/* HIRE ME BUTTON START */}
					<div
						className='absolute top-[320px] right-3 lg:top-[400px] lg:right-[80%] 2xl:top-[550px] 2xl:right-[90%] w-[140px] h-[140px] rounded-full bg-white/[0.7] flex flex-col justify-center items-center gap-2 backdrop-blur-sm cursor-pointer transition-transform scale-[0.65] md:scale-100 active:scale-[0.55] md:active:scale-90'
						onClick={() => scrollTo('contact')}
					>
						<img
							src={externalLinkIcon}
							alt=''
							className='w-[15px]'
						/>
						<div className='text-black'>Hire Us</div>
					</div>
					{/* HIRE ME BUTTON END */}
				</motion.div>
				{/* PERSON BLOCK END */}
			</Wrapper>
		</div>
	)
}

export default HeroBanner
