import Link from 'next/link';

const NewsLetterSignUp = () => {
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
			<div className='mx-auto'>
				<input
					type='email'
					placeholder='Enter your email'
					required
					className='w-72 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#BBA14F] shadow-sm rounded-full text-sm'
				/>
				<Link
					href={`mailto:?subject=pierre labiche&body=this is working`}
					className='w-20 ml-3 px-3 py-2 text-white text-sm bg-black hover:bg-zinc-600 rounded-full duration-150'
				>
					Sign Up
				</Link>
			</div>
		</>
	);
};

export default NewsLetterSignUp;
