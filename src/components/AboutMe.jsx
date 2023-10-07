import React from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'

import Wrapper from './Wrapper'
import flag from '../assets/serbian-flag.webp'
import pe1 from '../assets/sec-2-p-e-1.webp'
import pe2 from '../assets/sec-2-p-e-2.webp'
import Div from './Div'

const AboutMe = () => {
	const { scrollY } = useScroll()
	const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false })
	const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false })
	return (
		<div
			id='about'
			className='w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden'
		>
			{/* BACKGROUND ELEMENTS START */}
			<span className='sec-2-bg-gradient' />
			<motion.img
				className='sec-2-p-e-1'
				style={{ y: y1 }}
				src={pe1}
				alt='pe1'
			/>
			<motion.img
				className='sec-2-p-e-2'
				style={{ y: y2 }}
				src={pe2}
				alt='pe2'
			/>
			{/* BACKGROUND ELEMENTS END */}

			<Wrapper>
				{/* HEADING START */}
				<Div className='text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative'>
					<span>A Web Developer</span>
					<span className='flex items-center gap-2'>
						<span>Based</span>
						<img
							src={flag}
							alt='flag'
							className='w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2'
						/>
						<span>In Serbia</span>
					</span>
				</Div>
				{/* HEADING END */}

				{/* PARAGRAPH START */}
				<Div className='max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative'>
					My web development start in late 2017 with friend project in WordPress
					CMS. He wanted to have a web shop for his business insted of real
					shop. After a few weeks of building, testing and designing, I
					successfully lunch my first web shop. Couple day after, he have a
					first customer on new web shop. The following year, he wanted to
					expand his site with other business offerings, and I did it for him.
				</Div>
				{/* PARAGRAPH END */}

				{/* PARAGRAPH START */}
				<Div className='max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative'>
					By constantly improving and getting to know new possibilities and
					tools, I continue my path of web development. Over time, I got
					knowlage in the JavaScript development environment and its React.js
					and Next.js libraries. I extend that with the CSS library Tailwind CSS
					and the MongoDB database. With those I complete cicrle of Frontend
					development enviroment.
				</Div>
				{/* PARAGRAPH END */}

				{/* PARAGRAPH START */}
				<Div className='max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative'>
					In the first half of 2023, I am gathering a team of young people eager
					for business progress and personal development. The current team
					includes Frontend and Backend development, SEO and Marketing
					improvement, as well as Design and Content Management.
				</Div>
				{/* PARAGRAPH END */}
			</Wrapper>
		</div>
	)
}

export default AboutMe
