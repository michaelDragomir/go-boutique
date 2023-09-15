'use client';

import { useState } from 'react';

const NewsLetterSignUp = () => {
	type String = string;
	const [emailInput, setEmailInput] = useState<String>('');

	const submitHandler = async (e: any) => {
		e.preventDefault();

		try {
			const response = await fetch('/api/email-route', {
				method: 'POST',
				body: JSON.stringify({
					email: emailInput,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.ok) {
				console.log('hitting statement');
				setEmailInput('');
			}
		} catch (error) {
			console.log('error');
		}
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
						THIS FEATURE WORKS. TRY IT OUT...USING NODEMAILER.
					</p>
				</div>
			</div>
			<div className='text-center'>
				<input
					id='emailField'
					type='email'
					placeholder='Enter your email'
					value={emailInput}
					onChange={(e) => setEmailInput(e.target.value)}
					required
					className='w-72 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#BBA14F] shadow-sm rounded-full text-sm'
				/>
				<button
					type='submit'
					onClick={submitHandler}
					className='w-20 ml-3 px-3 py-2 text-white text-sm bg-black hover:bg-zinc-600 rounded-full duration-150'
				>
					Sign Up
				</button>
			</div>
		</>
	);
};

export default NewsLetterSignUp;
