'use client';

import Image from 'next/image';

const Header = () => {
	return (
		<div className='sticky w-full bg-slate-300 z-30 shadow-sm top-0 '>
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
									className='w-60 h-10 placeholder:text-slate-400 block bg-slate-100 border border-slate-300 rounded-l-lg py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
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
							<div className='relative cursor-pointer text-black'>
								Placeholder 1
							</div>
							<div className='relative z-30 text-black'> Placeholder 2</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-white'>
				<div className='max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4'>
					<div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
						<div className='flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer border-b-slate-800 text-slate-800'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 24 24'
								height='20'
								width='20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path fill='none' d='M0 0h24v24H0z'></path>
								<path d='M21.9 8.89l-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89zm-2.99-3.9l1.05 4.37c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07-.22.26-.54.41-.95.41-.67 0-1.22-.59-1.22-1.31V5zM8.49 9.52L9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41a1.42 1.42 0 01-.33-1.07zm-4.45-.16L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.27-.32-.36-.75-.26-1.17zM5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19H5z'></path>
							</svg>
							<div className='font-medium text-sm'>All</div>
						</div>
						<div className='flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer border-transparent text-slate-500'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 1024 1024'
								height='20'
								width='20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zM512 824c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z'></path>
							</svg>
							<div className='font-medium text-sm'>Clothing</div>
						</div>
						<div className='flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer border-transparent text-slate-500'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 1024 1024'
								height='20'
								width='20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M956.9 845.1L896.4 632V168c0-17.7-14.3-32-32-32h-704c-17.7 0-32 14.3-32 32v464L67.9 845.1C60.4 866 75.8 888 98 888h828.8c22.2 0 37.6-22 30.1-42.9zM200.4 208h624v395h-624V208zm228.3 608l8.1-37h150.3l8.1 37H428.7zm224 0l-19.1-86.7c-.8-3.7-4.1-6.3-7.8-6.3H398.2c-3.8 0-7 2.6-7.8 6.3L371.3 816H151l42.3-149h638.2l42.3 149H652.7z'></path>
							</svg>
							<div className='font-medium text-sm'>Pet Supplies</div>
						</div>
						<div className='flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer border-transparent text-slate-500'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 1024 1024'
								height='20'
								width='20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M928 140H96c-17.7 0-32 14.3-32 32v496c0 17.7 14.3 32 32 32h380v112H304c-8.8 0-16 7.2-16 16v48c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-48c0-8.8-7.2-16-16-16H548V700h380c17.7 0 32-14.3 32-32V172c0-17.7-14.3-32-32-32zm-40 488H136V212h752v416z'></path>
							</svg>
							<div className='font-medium text-sm'>Household</div>
						</div>
						<div className='flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer border-transparent text-slate-500'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 24 24'
								height='20'
								width='20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path fill='none' d='M0 0h24v24H0z' opacity='.1'></path>
								<path d='M20 12c0-2.54-1.19-4.81-3.04-6.27L16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73A7.976 7.976 0 0020 12zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z'></path>
							</svg>
							<div className='font-medium text-sm'>Electronics</div>
						</div>
						<div className='flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer border-transparent text-slate-500'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 24 24'
								height='20'
								width='20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path fill='none' d='M0 0h24v24H0z'></path>
								<path d='M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z'></path>
							</svg>
							<div className='font-medium text-sm'>Health & Beauty</div>
						</div>
						<div className='flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer border-transparent text-slate-500'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 24 24'
								height='20'
								width='20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path fill='none' d='M0 0h24v24H0V0zm0 0h24v24H0V0z'></path>
								<path d='M20 7v10H4V7h16m0-2H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2zm0 3h2v2h-2zM8 8h2v2H8zm0 3h2v2H8zm-3 0h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2z'></path>
							</svg>
							<div className='font-medium text-sm'>Toys</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
