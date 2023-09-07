'use client';

// import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';

import SubHeaderTabs from '@/app/components/Tabs/SubHeaderTabs';
import NavAcctDropDown from '@/app/components/NavAcctDropDown/navAcctDropDown';
import SideDrawer from '@/app/components/Drawer/SideDrawer';
import SearchForm from '@/app/components/SearchForm/SearchForm';
import NavItemsDropDown from '@/app/components/NavItemsDropDown/NavItemsDropDown';

import * as dropDownItems from '@/app/utils/dropDownItems';
import { navTabItems } from '@/app/utils/navTabIcons';

import { abril, aboreto } from '@/app/fonts';

import { FaRegUser } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from 'react-icons/io';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { CiMenuBurger, CiUser, CiShoppingCart, CiSearch } from 'react-icons/ci';

const aboveNav = ['Find a Store', 'Help'];

const Header = () => {
	type Array = number[];

	const [FavoritesList, setfavoritesList] = useState<Number>(0);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

	const [activeTab, setActiveTab] = useState<any>(navTabItems[0]);

	const onMouseEnterToggle = (tab: any) => {
		setActiveTab(tab);
	};

	const dropDownMenuItems = () => {
		switch (activeTab) {
			case 'Categories':
				return <NavItemsDropDown props={dropDownItems.categories} />;
			case 'Men':
				return <NavItemsDropDown props={dropDownItems.men} />;
			case 'Women':
				return <NavItemsDropDown props={dropDownItems.women} />;
			case 'Kids':
				return <NavItemsDropDown props={dropDownItems.kids} />;
			case 'Beauty':
				return <NavItemsDropDown props={dropDownItems.beauty} />;
			default:
				return null;
		}
	};

	const modalToggleHandler = () => {
		setIsModalOpen((prev) => !prev);
	};

	const searchModalToggleHandler = () => {
		setIsSearchModalOpen((prev) => !prev);
	};

	console.log(FavoritesList);
	// #dabbb8;
	return (
		<>
			<div className='relative sticky w-full top-0 mx-auto'>
				<div className='phone:hidden md:block bg-black m-4 my-2'>
					<div className='flex justify-end gap-12 text-sm font-light h-[20px] cursor-pointer'>
						{aboveNav.map((item: any, idx: any) => (
							<ul key={idx}>
								<li className='above-nav text-white'>{item}</li>
							</ul>
						))}
					</div>
				</div>
				<div className='p-4 bg-white border-b border-black'>
					{/* <Container> */}
					<div className='flex flex-row items-center justify-between gap-3 bg-white'>
						<div className='flex flex-row items-center'>
							<div className='flex items-center' onClick={modalToggleHandler}>
								<CiMenuBurger className='phone:animate-pulse md:animate-none iconSize8px cursor-pointer mr-1' />
								<p className='mr-8 text-lg cursor-pointer phone:hidden md:block'></p>
							</div>
							<div
								onClick={modalToggleHandler}
								className={`${
									isModalOpen
										? 'absolute w-screen h-screen bg-slate-400 fixed top-[-8px] left-0 opacity-40 z-overlay'
										: ''
								} `}
							/>
							<div>
								<SideDrawer
									isModalOpen={isModalOpen}
									modalToggleHandler={modalToggleHandler}
								/>
							</div>
							<div className={`text-3xl pr-1 ${aboreto.className}`}>IVY</div>
							<div className={`text-2xl ${aboreto.className}`}>LABICHE</div>
						</div>
						<div className='relative group'>
							<div className='flex justify-center relative'>
								{navTabItems.map((item: any, idx: any) => (
									<div
										key={item.name}
										onMouseEnter={() => onMouseEnterToggle(item.name)}
										className={`flex items-center justify-center text-center gap-1 pt-3 pb-2.5 cursor-pointer text-black
					w-[145px] h-[30px] relative hover:z-aboveAll ${
						activeTab === navTabItems[idx].name ? '' : ''
					}`}
									>
										<div className='flex group absolute flex-row items-center'>
											{/* <span className='pr-2 sm:hidden lg:block xl:block'>
												{item.icon}
											</span> */}
											<p className='font-medium text-sm hover:border-b border-black'>
												{item.name}
											</p>
										</div>
									</div>
								))}
							</div>
							{/* <div className='invisible bg-white border-slate-400 border z-10 absolute w-screen h-screen bg-slate-400 fixed top-0 left-[-481px] opacity-40 z-overlay'>
								{dropDownMenuItems()}
							</div> */}
						</div>
						<div
							onClick={searchModalToggleHandler}
							className='phone:w-screen phone:justify-center z-50 border flex border-slate-500 gap-1 cursor-pointer text-black rounded-md sm:hidden text-sm p-[5px] justify-start'
						>
							<span className=''>Click to Search</span>
							<CiSearch className='text-goGreen iconSize5px' />
						</div>
						<div className='phone:hidden tablet:flex items-center phone:gap-4'>
							<div className='mr-6'>
								<SearchForm />
							</div>
							<CiUser className='text-black iconSize5px' />
							<div className='flex phone:p-[3px] xl:p-[7px] cursor-pointer'>
								{FavoritesList === 0 ? (
									<GoHeart className='iconSize6px pr-1 text-[#ddaaa5]' />
								) : (
									<GoHeartFill
										style={{ fill: '#ddaaa5' }}
										className='iconSize6px pr-1 animate-pulse'
									/>
								)}

								{/* <h4 className='border-r border-goPink cursor-pointer text-sm text-slate-500 flex items-center'></h4> */}
								<span className='border-0 border-l border-black text-black flex items-center text-sm pl-1'>
									2
								</span>
							</div>
							<div className='cursor-pointer text-black'>
								<div className='flex items-center'>
									<div className='md:relative mr-1'>
										<CiShoppingCart className='text-black iconSize8px' />
										{/* <h4 className='phone:hidden lg:block xl:block text-sm pr-1 text-slate-500 flex justify-center items-center'>
												Cart
											</h4> */}
									</div>
									<span className='sm:absolute sm:top-[17px] sm:right-[10px] tablet:absolute tablet:top-[17px] tablet:right-[10px] md:absolute md:top-[40px] md:right-[10px] text-slate-100 h-6 w-6 rounded-full flex items-center justify-center text-sm bg-slate-900 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'>
										1
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className='tablet:hidden flex items-center lg:gap-4 phone:gap-4 xl:gap-8 justify-center mt-[20px]'>
						{/* <div className='group text-black z-50 hover:bg-slate-100'>
							<div className='phone:p-[5px] xl:p-[7px] border border-slate-500 flex flex-row items-center gap-1 cursor-pointer text-slate-500 rounded-md'>
								<span className='text-sm pr-2 sm:block'>Account</span>
								<FaRegUser className='text-slate-500 iconSize5px' />
								<IoIosArrowDown className='group-hover:hidden text-goGreen iconSize5px' />
								<IoIosArrowUp className='hidden group-hover:block group-hover:text-goPink text-slate-500 iconSize5px' />
							</div>
							<div className='absolute invisible group-hover:visible group-hover:animate-slideDown'>
								<NavAcctDropDown />
							</div>
						</div> */}
						<div className='flex border border-slate-500 rounded-md  phone:p-[3px] xl:p-[7px] hover:border-slate-800'>
							{FavoritesList === 0 ? (
								<GoHeart className='text-goPink iconSize6px pr-1' />
							) : (
								<GoHeartFill
									style={{ fill: '#FF66C4' }}
									className='iconSize6px pr-1 animate-pulse'
								/>
							)}
							<span className='text-black flex items-center text-sm pl-1'>
								3
							</span>
						</div>
						<div className='cursor-pointer text-black'>
							<div className='flex items-center'>
								<div className='md:relative lg:border-r lg:border-slate-400 mr-1'>
									<CiShoppingCart className='text-black iconSize8px' />
									{/* <h4 className='phone:hidden lg:block xl:block text-sm pr-1 text-slate-500 flex justify-center items-center'>
										Cart
									</h4> */}
								</div>
								<span className='phone:relative phone:top-[-10px] phone:right-[18px] tablet:absolute tablet:top-[36px] tablet:right-[10px] md:absolute md:top-[55px] md:right-[10px] lg:static text-slate-100 h-6 w-6 rounded-full flex items-center justify-center text-sm bg-slate-900 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'>
									1
								</span>
							</div>
						</div>
					</div>
					{/* </Container> */}
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

// lg:w-[55%] xl:w-[100%] phone:w-[68%] phone:hidden sm:block -- form search width
