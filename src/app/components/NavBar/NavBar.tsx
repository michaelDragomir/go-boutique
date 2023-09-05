'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';

import Container from '@/app/components/Container';
import SubHeaderTabs from '@/app/components/Tabs/SubHeaderTabs';
import NavAcctDropDown from '@/app/components/NavAcctDropDown/navAcctDropDown';
import SideDrawer from '@/app/components/Drawer/SideDrawer';
import SearchForm from '@/app/components/SearchForm/SearchForm';

import { IoCartOutline, IoSearchSharp } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from 'react-icons/io';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';

const aboveNav = ['Store Finder', 'Gift Cards', 'Credit Services', 'Help'];

const Header = () => {
	type Array = number[];

	const [FavoritesList, setfavoritesList] = useState<Array>([0]);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

	const modalToggleHandler = () => {
		setIsModalOpen((prev) => !prev);
	};

	const searchModalToggleHandler = () => {
		setIsSearchModalOpen((prev) => !prev);
	};

	return (
		<>
			<div className='relative sticky w-full bg-white top-0'>
				<div className='p-4'>
					<Container>
						<div className='relative phone:hidden md:block mb-2'>
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
									onClick={modalToggleHandler}
									className='phone:animate-pulse phone:text-goGreen md:text-slate-500 md:animate-none iconSize8px hover:text-goPink cursor-pointer mr-4'
								/>
								<div
									onClick={modalToggleHandler}
									className={`${
										isModalOpen
											? 'absolute w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-40 z-overlay'
											: ''
									} `}
								/>
								<div>
									<SideDrawer
										isModalOpen={isModalOpen}
										modalToggleHandler={modalToggleHandler}
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
							<div className='lg:w-[55%] xl:w-[100%] phone:w-[68%] phone:hidden sm:block'>
								<SearchForm />
							</div>
							<div
								onClick={searchModalToggleHandler}
								className='phone:w-screen phone:justify-center z-50 border flex border-slate-500 gap-1 cursor-pointer text-slate-500 rounded-md sm:hidden text-sm p-[5px] justify-start'
							>
								<span className=''>Click to Search</span>
								<IoSearchSharp className='text-goGreen iconSize5px' />
							</div>
							<div className='phone:hidden tablet:flex items-center lg:gap-4 phone:gap-4 xl:gap-8'>
								<div className='group text-black z-50 hover:bg-slate-100'>
									<div className='phone:p-[5px] xl:p-[7px] border border-slate-500 flex flex-row items-center gap-1 cursor-pointer text-slate-500 rounded-md'>
										<span className='text-sm pr-2 phone:hidden md:block'>
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
								<div className='flex border border-slate-500 rounded-md  phone:p-[3px] xl:p-[7px] hover:border-slate-800'>
									{FavoritesList.length > 0 ? (
										<GoHeart className='text-goPink iconSize6px pr-1' />
									) : (
										<GoHeartFill
											style={{ fill: '#FF66C4' }}
											className='iconSize6px pr-1 animate-pulse'
										/>
									)}

									<h4 className='border-r border-goPink cursor-pointer text-sm text-slate-500 flex items-center'>
										<span className='mr-1 phone:hidden md:block'>
											Favorites
										</span>
									</h4>
									<span className='text-slate-500 flex items-center text-sm pl-1'>
										3
									</span>
								</div>
								<div className='cursor-pointer text-black'>
									<div className='flex items-center'>
										<div className='md:relative lg:border-r lg:border-slate-400 mr-1'>
											<IoCartOutline className='text-slate-500 iconSize8px' />
											{/* <h4 className='phone:hidden lg:block xl:block text-sm pr-1 text-slate-500 flex justify-center items-center'>
												Cart
											</h4> */}
										</div>
										<span className='sm:absolute sm:top-[15px] sm:right-[10px] tablet:absolute tablet:top-[12px] tablet:right-[10px] md:absolute md:top-[40px] md:right-[10px] lg:static text-slate-100 h-6 w-6 rounded-full flex items-center justify-center text-sm bg-slate-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'>
											1
										</span>
										<h4 className='phone:hidden lg:block xl:block text-sm font-bold pl-1 text-slate-500'>
											item(s)
										</h4>
									</div>
								</div>
							</div>
						</div>
						<div className='tablet:hidden flex items-center lg:gap-4 phone:gap-4 xl:gap-8 justify-center mt-[20px]'>
							<div className='group text-black z-50 hover:bg-slate-100'>
								<div className='phone:p-[5px] xl:p-[7px] border border-slate-500 flex flex-row items-center gap-1 cursor-pointer text-slate-500 rounded-md'>
									<span className='text-sm pr-2 sm:block'>Account</span>
									<FaRegUser className='text-slate-500 iconSize5px' />
									<IoIosArrowDown className='group-hover:hidden text-goGreen iconSize5px' />
									<IoIosArrowUp className='hidden group-hover:block group-hover:text-goPink text-slate-500 iconSize5px' />
								</div>
								<div className='absolute invisible group-hover:visible group-hover:animate-slideDown'>
									<NavAcctDropDown />
								</div>
							</div>
							<div className='flex border border-slate-500 rounded-md  phone:p-[3px] xl:p-[7px] hover:border-slate-800'>
								{FavoritesList.length > 0 ? (
									<GoHeart className='text-goPink iconSize6px pr-1' />
								) : (
									<GoHeartFill
										style={{ fill: '#FF66C4' }}
										className='iconSize6px pr-1 animate-pulse'
									/>
								)}

								<h4 className='border-r border-goPink cursor-pointer text-sm text-slate-500 flex items-center'>
									<span className='mr-1 sm:block'>Favorites</span>
								</h4>
								<span className='text-slate-500 flex items-center text-sm pl-1'>
									3
								</span>
							</div>
							<div className='cursor-pointer text-black'>
								<div className='flex items-center'>
									<div className='md:relative lg:border-r lg:border-slate-400 mr-1'>
										<IoCartOutline className='text-slate-500 iconSize8px' />
										<h4 className='phone:hidden lg:block xl:block text-sm pr-1 text-slate-500 flex justify-center items-center'>
											Cart
										</h4>
									</div>
									<span className='phone:relative phone:top-[-14px] phone:right-[15px] tablet:absolute tablet:top-[36px] tablet:right-[10px] md:absolute md:top-[55px] md:right-[10px] lg:static text-slate-100 h-6 w-6 rounded-full flex items-center justify-center text-sm bg-slate-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'>
										1
									</span>
									<h4 className='phone:hidden lg:block xl:block text-sm font-bold pl-1 text-slate-500'>
										item(s)
									</h4>
								</div>
							</div>
						</div>
					</Container>
				</div>
				<div className='phone:hidden md:block border-0'>
					<SubHeaderTabs />
				</div>
				{isSearchModalOpen && (
					<div onClick={searchModalToggleHandler}>
						<IoMdClose className='sm:hidden rounded-full phone:absolute animate-searchSlideDown z-overlay phone:right-[12px] phone:top-[112px] iconSize6px bg-slate-400 text-white tablet:top-[60px]' />
						<div className='rounded-b-lg phone:mx-auto sm:hidden w-screen phone:absolute bg-slate-400 animate-searchSlideDown p-3'>
							<SearchForm />
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Header;
