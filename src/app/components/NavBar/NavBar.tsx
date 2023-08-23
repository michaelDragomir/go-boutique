'use client';

import Image from 'next/image';
import Link from 'next/link';

import SubHeaderTabs from '../Tabs/SubHeaderTabs';
import Container from '@/app/components/Container';

import { IoCartOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa6';
import { BiSolidDownArrow } from 'react-icons/bi';
import { GoHeart } from 'react-icons/go';

const Header = () => {
	return (
		<div className='sticky w-full bg-white z-30 shadow-sm top-0'>
			<Container>
				<div className='flex flex-row items-center justify-between gap-3 md:gap-0 '>
					<Link href='/'>
						<Image
							src='/assets/images/goImage.png'
							width={75}
							height={75}
							alt='go Image'
							className='rounded-lg object-cover'
						/>
					</Link>
					<div className='flex items-center'>
						<form
							onSubmit={() => console.log('form submit')}
							noValidate
							className='py-6 text-center flex justify-center items-center'
						>
							<input
								required
								className={`w-[700px] h-10 placeholder:text-slate-400 block bg-slate-100 border border-slate-300 rounded-l-lg py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm`}
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
						<div className='group relative z-30 text-black'>
							<div className='p-[9px] border border-slate-500 flex flex-row items-center gap-1 cursor-pointer transition text-slate-500 rounded-md'>
								<span className='text-sm pr-2'>My Account</span>
								<FaRegUser className='text-slate-500 w-5 h-5' />
								<BiSolidDownArrow className='text-slate-500' />
							</div>
							<div className='absolute rounded-md drop-shadow-md w-[155px] bg-white overflow-hidden right-0 top-30 text-sm flex flex-col cursor-pointer invisible group-hover:visible group-hover:animate-slide'>
								<div>
									<Link href='/login'>
										<p className='text-slate-500 px-3 py-2 hover:underline hover:underline-offset-4 hover:text-goGreen'>
											Sign In
										</p>
									</Link>
									<Link href='/register'>
										<p className='text-slate-500 px-3 py-2 hover:underline hover:underline-offset-4 hover:text-goGreen'>
											Create Account
										</p>
									</Link>
								</div>
							</div>
						</div>
						<div className='flex'>
							<GoHeart className='text-goPink w-6 h-6 pr-1' />
							<h4 className='border-r border-slate-400 cursor-pointer text-sm font-bold text-slate-500 flex items-center'>
								<span className='mr-1'>My Favorites</span>
							</h4>
							<span className='text-slate-500 flex items-center text-sm ml-1'>
								1
							</span>
						</div>
						<div className='cursor-pointer text-black mt-2'>
							<div className='flex items-center'>
								<div className='border-r border-slate-400 mr-1'>
									<IoCartOutline className='text-slate-500 w-8 h-8' />
									<h4 className='text-sm font-bold pr-1 text-slate-500 flex justify-center items-center'>
										Cart
									</h4>
								</div>
								<span className='text-slate-100 h-6 w-6 rounded-full flex items-center justify-center text-sm bg-goPink drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] animate-pulse'>
									1
								</span>
								<h4 className='text-sm font-bold pl-1 text-slate-500'>
									item(s)
								</h4>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<div className='bg-slate-100'>
				<SubHeaderTabs />
			</div>
		</div>
	);
};

export default Header;
