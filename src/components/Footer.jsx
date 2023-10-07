import React from 'react'

import Wrapper from './Wrapper'
import gmailIcon from '../assets/email-icon.png'
import { scrollTo } from '../helper'
import { CiLinkedin } from 'react-icons/ci'

const Footer = () => {
	return (
		<div className='bg-[#F2F2F2]'>
			<Wrapper>
				{/* NAVBAR START */}
				<div className='flex flex-col md:flex-row items-center justify-between gap-5 2xl:mt-[63px] relative text-[#111111] border-t border-[#CCCCCC] py-10'>
					<div className='flex items-center gap-[6px]'>
						<div className='w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center'>
							<img
								src={gmailIcon}
								alt='gmail'
								className='w-[18px]'
							/>
						</div>
						<a href='mailto:contact@dev78.net'>contact@dev78.net</a>
					</div>
					<div>All rights reserved &copy; Copyright by dev78 Team</div>
					<ul className='flex 2xl:text-[20px] gap-5 md:gap-8'>
						<li className='cursor-pointer transition active:scale-90'>
							<a
								href='https://www.linkedin.com/in/mladen-krstin/'
								alt='linkedin'
							>
								<CiLinkedin size={24} />
							</a>
						</li>
						<li
							className='cursor-pointer transition active:scale-90'
							onClick={() => scrollTo('hero')}
						>
							Home
						</li>
						<li
							className='cursor-pointer transition active:scale-90'
							onClick={() => scrollTo('about')}
						>
							About me
						</li>
						<li
							className='cursor-pointer transition active:scale-90'
							onClick={() => scrollTo('skills')}
						>
							Skills
						</li>
						<li
							className='cursor-pointer transition active:scale-90'
							onClick={() => scrollTo('work')}
						>
							Work
						</li>
						{/* <li
							className='cursor-pointer transition active:scale-90'
							onClick={() => scrollTo('contact')}
						>
							Contact
						</li> */}
					</ul>
				</div>
				{/* NAVBAR END */}
			</Wrapper>
		</div>
	)
}

export default Footer
