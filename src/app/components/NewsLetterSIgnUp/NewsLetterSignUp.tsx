'use client';

import Link from 'next/link';
import { useState } from 'react';

import { createTransport } from 'nodemailer';

const NewsLetterSignUp = () => {
	const [emailValue, setEmailValue] = useState<any>('');

	const emailBody =
		'this is for demo purposes. Email is not being shared nor will you recieve anything';

	const transporter = createTransport({
		service: 'gmail',
		auth: {
			user: 'michaeldragomir@gmail.com',
			pass: 'Dinkledoink1!',
		},
	});

	const mailOptions = {
		from: 'pierrelabichel@pierrelabiche.com',
		to: emailValue,
		subject: 'Thanks for subscribing!',
		text: 'Welcome to our email list. We will keep you updated with the latest news and promotions.',
	};

	const test = () => {
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log('Error:', error);
			} else {
				console.log('Email sent:', info.response);
			}
		});
	};

	return (
		<>
			<div className='text-center'>
				<div>
					<h2 className='uppercase pb-2'>
						subscibe to our newsletter and receive an extra 15% off your first
						order.
					</h2>
					<p className='text-[12px] text-zinc-500'>
						BE THE FIRST TO KNOW ABOUT OUR LATEST NEWS AND PROMOTIONS.
					</p>
				</div>
			</div>
			<div className='text-center'>
				<input
					type='email'
					placeholder='Enter your email'
					value={emailValue}
					onChange={(e) => setEmailValue(e.target.value)}
					required
					className='w-72 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#BBA14F] shadow-sm rounded-full text-sm'
				/>
				<button
					type='submit'
					onClick={test}
					className='w-20 ml-3 px-3 py-2 text-white text-sm bg-black hover:bg-zinc-600 rounded-full duration-150'
				>
					Sign Up
				</button>
			</div>
		</>
	);
};

export default NewsLetterSignUp;

// <Link
// 	href={`mailto:${emailValue}?subject=welcome to the pierre labiche newsletter&body=${emailBody}`}
// 	className='w-20 ml-3 px-3 py-2 text-white text-sm bg-black hover:bg-zinc-600 rounded-full duration-150'
// >

// </Link>;
