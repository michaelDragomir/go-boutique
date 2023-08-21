'use client';

import Image from 'next/image';

const Header = () => {
	return (
		<div className='sticky w-full bg-slate-200 z-30 shadow-sm top-0 '>
			<div className='py-4 border-b-[1px]'>
				<div className='max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4'>
					<div className='flex flex-row items-center justify-between gap-3 md:gap-0 '>
						<Image
							src='/assets/images/goImage.png'
							width={125}
							height={125}
							alt='go Image'
							className='rounded-lg'
						/>
						<div className='flex items-center'>
							<form
								onSubmit={() => console.log('form submit')}
								noValidate
								className='py-6 text-center flex justify-center items-center'
							>
								<input
									required
									className='w-60 h-10 placeholder:text-slate-400 block bg-white border border-slate-300 rounded-l-lg py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
									placeholder='Explore Go Boutique...'
									type='text'
									// value={inputFieldValue}
									// onChange={(e) => onChangeValueHandler(e)}
								/>
								<button
									type='submit'
									className='h-10 rounded-r-lg border border-gray-700 bg-gray-700 px-3 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300'
								>
									GO
								</button>
							</form>
						</div>
						<div className='flex items-center gap-8 md:gap-12'>
							<div className='relative cursor-pointer'> Placeholder 1</div>
							<div className='relative z-30'> Placeholder 2</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
