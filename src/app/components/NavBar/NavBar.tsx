'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import Container from '@/app/components/Container';
import SubHeaderTabs from '@/app/components/Tabs/SubHeaderTabs';
import NavAcctDropDown from '@/app/components/NavAcctDropDown/navAcctDropDown';
import SideDrawer from '../Drawer/SideDrawer';

import { IoCartOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';

const aboveNav = ['Store Finder', 'Gift Cards', 'Credit Services', 'Help'];

const Header = () => {
	type Array = number[];

	const [FavoritesList, setfavoritesList] = useState<Array>([0]);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const ModalToggleHandler = () => {
		setIsModalOpen((prev) => !prev);
	};

	return (
		<div className='sticky w-full bg-white shadow-sm top-0 border border-slate-500 sm:border-goGreen md:border-rose-500 lg:border-blue-500 xl:border-goGreen phone:border-goPink tablet:border-blue-500'>
			<div className='pt-4 px-4 border-b-[1px]'>
				<Container>
					<div className='relative phone:hidden md:block'>
						<div className='flex justify-end gap-12 text-sm font-light h-[20px] cursor-pointer'>
							{aboveNav.map((item: any, idx: any) => (
								<ul key={idx}>
									<li className='above-nav'>{item}</li>
								</ul>
							))}
						</div>
					</div>
					<div className='flex flex-row items-center justify-between gap-3'>
						<div className='flex flex-row items-center'>
							<GiHamburgerMenu
								onClick={ModalToggleHandler}
								className='text-slate-500 iconSize8px hover:text-goPink cursor-pointer mr-4'
							/>
							<div
								onClick={ModalToggleHandler}
								className={`${
									isModalOpen
										? 'absolute w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-40 z-overlay'
										: ''
								} `}
							/>
							<div>
								<SideDrawer
									isModalOpen={isModalOpen}
									ModalToggleHandler={ModalToggleHandler}
								/>
							</div>
							<Link href='/'>
								<Image
									src='/assets/images/goImage.png'
									width={75}
									height={75}
									alt='go Image'
									className='rounded-lg max-w-[75px]'
								/>
							</Link>
						</div>
						<div className='lg:w-[50%] xl:w-[100%] md:w-[60%]'>
							<div className='flex items-center'>
								<form
									onSubmit={() => console.log('form submit')}
									noValidate
									className='w-full py-6 text-center flex justify-center items-center'
								>
									<input
										required
										className={`w-full h-10 placeholder:text-slate-400 block bg-slate-100 border border-slate-300 rounded-l-lg py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm`}
										placeholder='Explore Go Boutique...'
										type='text'
										// value={inputFieldValue}
										// onChange={(e) => onChangeValueHandler(e)}
									/>
									<button
										type='submit'
										className='h-10 rounded-r-lg border border-gray-700 bg-gray-800 px-3 py-2 text-center text-sm font-medium text-white shadow-sm hover:border-gray-900 hover:bg-gray-900'
									>
										<span className='text-[#57F8AB]'>GO</span>
									</button>
								</form>
							</div>
						</div>
						<div className='flex items-center lg:gap-4 md:gap-6 xl:gap-8'>
							<div className='group text-black z-50 hover:bg-slate-100'>
								<div className='md:p-[5px] xl:p-[7px] border border-slate-500 flex flex-row items-center gap-1 cursor-pointer text-slate-500 rounded-md'>
									<span className='text-sm pr-2 md:hidden lg:block'>
										Account
									</span>
									<FaRegUser className='text-slate-500 iconSize5px' />
									<IoIosArrowDown className='group-hover:hidden text-goGreen iconSize5px' />
									<IoIosArrowUp className='hidden group-hover:block group-hover:text-goPink text-slate-500 iconSize5px' />
								</div>
								<div className='absolute invisible group-hover:visible group-hover:animate-slideDown'>
									<NavAcctDropDown />
								</div>
							</div>
							<div className='flex border border-slate-500 rounded-md  md:p-[3px] xl:p-[7px] hover:border-slate-800'>
								{FavoritesList.length > 0 ? (
									<GoHeart className='text-goPink iconSize6px pr-1' />
								) : (
									<GoHeartFill
										style={{ fill: '#FF66C4' }}
										className='iconSize6px pr-1 animate-pulse'
									/>
								)}

								<h4 className='border-r border-goPink cursor-pointer text-sm text-slate-500 flex items-center'>
									<span className='mr-1 md:hidden lg:block'>Favorites</span>
								</h4>
								<span className='text-slate-500 flex items-center text-sm pl-1'>
									3
								</span>
							</div>
							<div className='cursor-pointer text-black'>
								<div className='flex items-center'>
									<div className='md:relative lg:border-r lg:border-slate-400 mr-1'>
										<IoCartOutline className='text-slate-500 iconSize8px' />
										<h4 className='md:hidden lg:block xl:block text-sm pr-1 text-slate-500 flex justify-center items-center'>
											Cart
										</h4>
									</div>
									<span className='md:absolute md:top-[55px] md:right-[10px] lg:static text-slate-100 h-6 w-6 rounded-full flex items-center justify-center text-sm bg-slate-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] animate-pulse'>
										1
									</span>
									<h4 className='md:hidden lg:block xl:block text-sm font-bold pl-1 text-slate-500'>
										item(s)
									</h4>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
			<div className='bg-slate-100'>
				<SubHeaderTabs />
			</div>
		</div>
	);
};

export default Header;
