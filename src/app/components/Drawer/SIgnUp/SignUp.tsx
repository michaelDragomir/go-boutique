const SignUp = () => {
	return (
		<main className='w-full flex flex-col items-center justify-center px-4'>
			<div className='max-w-sm w-full text-gray-600 space-y-5'>
				<div className='text-center pb-8'>
					<div className='mt-5'>
						<h3 className='text-gray-800 text-2xl font-bold sm:text-3xl'>
							Create Account
						</h3>
					</div>
				</div>
				<form onSubmit={(e) => e.preventDefault()} className='space-y-5'>
					<div>
						<label className='font-medium'>
							First Name <span className='text-red-600'>*</span>
						</label>
						<input
							type='text'
							required
							className='bg-[#eefbef] border border-[#2e7d32] w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#BBA14F] shadow-sm rounded-full'
						/>
					</div>
					<div>
						<label className='font-medium'>
							Last Name <span className='text-red-600'>*</span>
						</label>
						<input
							type='text'
							required
							className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#BBA14F] shadow-sm rounded-full'
						/>
					</div>
					<div>
						<label className='font-medium'>
							Email <span className='text-red-600'>*</span>
						</label>
						<input
							type='email'
							required
							className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#BBA14F] shadow-sm rounded-full'
						/>
					</div>
					<div>
						<label className='font-medium'>
							Password <span className='text-red-600'>*</span>
						</label>
						<input
							type='password'
							required
							className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#BBA14F] shadow-sm rounded-full'
						/>
					</div>
					<div className='flex items-center justify-between text-sm'>
						<div className='flex items-center gap-x-3'>
							<input
								type='checkbox'
								id='remember-me-checkbox'
								className='checkbox-item peer hidden'
							/>
							<label
								htmlFor='remember-me-checkbox'
								className='relative flex w-10 h-5 bg-white peer-checked:bg-[#BBA14F] rounded-md border ring-offset-2 ring-[#BBA14F] duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45'
							></label>
							<span className='text-sm'>
								Yes, I would like to join the Pierre-Labiche mailing list and
								get first access to new products, promotions and other special
								announcements.
							</span>
						</div>
					</div>
					<button className='w-full px-4 py-2 text-white font-medium bg-black hover:bg-zinc-600 active:bg-indigo-600 rounded-full duration-150'>
						Create Account
					</button>
				</form>
				<p className='text-slate-400 text-[10px] text-center'>
					By clicking Create Account you agree to Terms and Conditions and
					Privacy Policy
				</p>
			</div>
		</main>
	);
};

export default SignUp;
