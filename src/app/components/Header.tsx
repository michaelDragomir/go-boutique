'use client';

import Image from 'next/image';
import SubHeaderTabs from './SubHeaderTabs';
import { IoCartOutline } from 'react-icons/io5';

const Header = () => {
	return (
		<div className='sticky w-full bg-white z-30 shadow-sm top-0 '>
			<div className=''>
				<div className={`max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4`}>
					<div className='flex flex-row items-center justify-between gap-3 md:gap-0 '>
						<Image
							src='/assets/images/goImage.png'
							width={75}
							height={75}
							alt='go Image'
							className='rounded-lg object-cover'
						/>
						<div className='flex items-center'>
							<form
								onSubmit={() => console.log('form submit')}
								noValidate
								className='py-6 text-center flex justify-center items-center'
							>
								<input
									required
									className={`w-[800px] h-10 placeholder:text-slate-400 block bg-slate-100 border border-slate-300 rounded-l-lg py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm`}
									placeholder='Explore Go Boutique...'
									type='text'
									// value={inputFieldValue}
									// onChange={(e) => onChangeValueHandler(e)}
								/>
								<button
									type='submit'
									className='h-10 rounded-r-lg border border-gray-700 bg-gray-800 px-3 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300'
								>
									<span className='text-[#57F8AB]'>GO</span>
								</button>
							</form>
						</div>
						<div className='flex items-center gap-8 md:gap-12'>
							<div className='relative cursor-pointer text-black'>
								<div className='text-3xl'>
									<IoCartOutline className='text-slate-500 w-8 h-8' />
									<span className=' absolute top-[-10px] right-[-10px] bg-slate-600 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm '>
										1
									</span>
								</div>
							</div>
							<div className='relative z-30 text-black'> Placeholder 2</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-slate-100'>
				<SubHeaderTabs />
			</div>
		</div>
	);
};

export default Header;
