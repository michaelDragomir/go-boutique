'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const NewsLetterSignUp = () => {
	type String = string;
	const router = useRouter();
	const [emailInput, setEmailInput] = useState<String>('');

	const submitHandler = async (event: any) => {
		event.preventDefault();
		try {
			const response = await fetch('/api/emailRoute', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: emailInput,
				}),
			});

			if (response.ok) {
				router.push('/');
			}
		} catch (error) {}
	};

	return (
		<>
			<form onSubmit={submitHandler}>
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
						id='emailField'
						type='email'
						placeholder='Enter your email'
						value={emailInput}
						onChange={(e) => setEmailInput(e.target.value)}
						required
						className='w-72 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#BBA14F] shadow-sm rounded-full text-sm'
					/>
					<button className='w-20 ml-3 px-3 py-2 text-white text-sm bg-black hover:bg-zinc-600 rounded-full duration-150'>
						Sign Up
					</button>
				</div>
			</form>
		</>
	);
};

export default NewsLetterSignUp;
