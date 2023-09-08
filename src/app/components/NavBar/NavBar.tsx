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

import { aboreto } from '@/app/fonts';

import { IoMdClose } from 'react-icons/io';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { CiMenuBurger, CiUser, CiShoppingCart, CiSearch } from 'react-icons/ci';

const aboveNav = ['Find a Store', 'Help'];

const Header = () => {
	const [FavoritesList, setfavoritesList] = useState<Number>(0);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

	const [activeTab, setActiveTab] = useState<any>('');
	const [isactiveTab, setIsActiveTab] = useState<any>(false);
	const [isScrolled, setIsScrolled] = useState<any>(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;

			setIsScrolled(scrollPosition);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const dropDownMenuItems = () => {
		switch (activeTab) {
			case 'MEN':
				return <NavItemsDropDown props={dropDownItems.men} />;
			case 'WOMEN':
				return <NavItemsDropDown props={dropDownItems.women} />;
			case 'KIDS':
				return <NavItemsDropDown props={dropDownItems.kids} />;
			case 'BEAUTY':
				return <NavItemsDropDown props={dropDownItems.beauty} />;
			default:
				return null;
		}
	};

	const onMouseEnterToggle = (tab: any) => {
		setActiveTab(tab);
		setIsActiveTab((prev: any) => !prev);
	};

	const dropDownToggleHandler = () => {
		setIsActiveTab((prev: any) => !prev);
	};

	const modalToggleHandler = () => {
		setIsModalOpen((prev: any) => !prev);
	};

	const searchModalToggleHandler = () => {
		setIsSearchModalOpen((prev) => !prev);
	};

	return (
		<>
			{isScrolled < 110 ? (
				<div className='mx-auto relative pt-2'>
					<div className='bg-white border-b border-black'>
						<div className='phone:hidden md:block bg-white mb-1'>
							<div className='flex justify-end gap-12 text-sm font-light h-[20px] w-full'>
								{aboveNav.map((item: any, idx: any) => (
									<ul key={idx}>
										<li className='text-black cursor-pointer hover:font-bold'>
											{item}
										</li>
									</ul>
								))}
							</div>
						</div>
						<div className='flex flex-row items-center justify-between gap-3 bg-white border-t border-black'>
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
								<span className={`text-3xl pr-1 ${aboreto.className}`}>
									PIERRE
								</span>
								<span
									className={`text-2xl border-r border-black pr-1 ${aboreto.className}`}
								>
									LABICHE
								</span>
								<span
									className={`text-sm text-black pl-1 ${aboreto.className}`}
								>
									PARIS
								</span>
							</div>
							<div className='flex justify-center relative'>
								{navTabItems.map((item: any, idx: any) => {
									return (
										<ul
											key={idx}
											onMouseEnter={() => onMouseEnterToggle(item.name)}
											onMouseLeave={() => dropDownToggleHandler()}
											className='group flex items-center justify-center cursor-pointer text-black w-[110px] h-[30px] relative hover:z-aboveAll py-8'
										>
											<li
												className={`font-medium text-sm hover:border-b hover:border-black ${
													activeTab === navTabItems[idx].name && isactiveTab
														? 'border-b border-black'
														: ''
												}`}
											>
												{item.name}
											</li>
										</ul>
									);
								})}
							</div>
							{isactiveTab && (
								<div
									onMouseEnter={() => dropDownToggleHandler()}
									onMouseLeave={() => onMouseEnterToggle('')}
									className='animate-slideDown visible border-slate-200 border-t z-10 absolute w-screen h-[400px] bg-white fixed top-[98px] left-0'
								>
									{dropDownMenuItems()}
								</div>
							)}
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
								<CiUser className='text-black iconSize6px' />
								<div className='flex phone:p-[3px] xl:p-[7px] cursor-pointer'>
									{FavoritesList === 0 ? (
										<GoHeart className='iconSize6px pr-1 text-[#ddaaa5]' />
									) : (
										<GoHeartFill
											style={{ fill: '#ddaaa5' }}
											className='iconSize6px pr-1 animate-pulse'
										/>
									)}
									<span className='border-0 border-l border-black text-black flex items-center text-sm pl-1'>
										2
									</span>
								</div>
								<div className='cursor-pointer text-black'>
									<div className='flex items-center'>
										<div className='md:relative mr-1'>
											<CiShoppingCart className='text-black iconSize8px' />
										</div>
										<span className='sm:absolute sm:top-[17px] sm:right-[10px] tablet:absolute tablet:top-[17px] tablet:right-[10px] md:absolute md:top-[40px] md:right-[10px] text-slate-100 h-6 w-6 rounded-full flex items-center justify-center text-sm bg-slate-900 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'>
											1
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className='tablet:hidden flex items-center lg:gap-4 phone:gap-4 xl:gap-8 justify-center mt-[20px]'>
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
									</div>
									<span className='phone:relative phone:top-[-10px] phone:right-[18px] tablet:absolute tablet:top-[36px] tablet:right-[10px] md:absolute md:top-[55px] md:right-[10px] lg:static text-slate-100 h-6 w-6 rounded-full flex items-center justify-center text-sm bg-slate-900 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'>
										1
									</span>
								</div>
							</div>
						</div>
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
			) : (
				<div className='mx-auto animate-slideDown pt-2'>
					<div className='border-b border-white'>
						<div className='phone:hidden md:block mb-1'>
							<div className='flex justify-end gap-12 text-sm font-light h-[20px]'>
								{aboveNav.map((item: any, idx: any) => (
									<ul key={idx}>
										<li className='text-white hover:font-bold'>{item}</li>
									</ul>
								))}
							</div>
						</div>
						<div className='flex flex-row items-center justify-between gap-3 border-t border-white'>
							<div className='flex flex-row items-center'>
								<div className='flex items-center' onClick={modalToggleHandler}>
									<CiMenuBurger className='text-white phone:animate-pulse md:animate-none iconSize8px cursor-pointer mr-1' />
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
								<span
									className={`text-3xl pr-1 text-white ${aboreto.className}`}
								>
									PIERRE
								</span>
								<span
									className={`text-2xl text-white border-r border-white pr-1 ${aboreto.className}`}
								>
									LABICHE
								</span>
								<span
									className={`text-sm text-white pl-1 ${aboreto.className}`}
								>
									PARIS
								</span>
							</div>
							<div className='flex justify-center relative'>
								{navTabItems.map((item: any, idx: any) => {
									return (
										<ul
											key={idx}
											onMouseEnter={() => onMouseEnterToggle(item.name)}
											onMouseLeave={() => dropDownToggleHandler()}
											className='group flex items-center justify-center cursor-pointer text-white w-[110px] h-[30px] relative hover:z-aboveAll py-8'
										>
											<li
												className={`font-medium text-sm hover:border-b hover:border-white ${
													activeTab === navTabItems[idx].name
														? 'border-b border-white'
														: ''
												}`}
											>
												{item.name}
											</li>
										</ul>
									);
								})}
							</div>
							{isactiveTab && (
								<div
									onMouseEnter={() => dropDownToggleHandler()}
									onMouseLeave={() => onMouseEnterToggle('')}
									className='animate-slideDown visible border-slate-200 border-t z-10 absolute w-screen h-[400px] bg-white fixed top-[98px] left-0'
								>
									{dropDownMenuItems()}
								</div>
							)}
							<div
								onClick={searchModalToggleHandler}
								className='phone:w-screen phone:justify-center z-50 border flex border-slate-500 gap-1 cursor-pointer text-black rounded-md sm:hidden text-sm p-[5px] justify-start'
							>
								<span className=''>Click to Search</span>
								<CiSearch className='text-white iconSize5px' />
							</div>
							<div className='phone:hidden tablet:flex items-center phone:gap-4'>
								<div className='mr-6'>
									<SearchForm />
								</div>
								<CiUser className='text-white iconSize6px' />
								<div className='flex phone:p-[3px] xl:p-[7px] cursor-pointer'>
									{FavoritesList === 0 ? (
										<GoHeart className='iconSize6px pr-1 text-white' />
									) : (
										<GoHeartFill
											style={{ fill: '#ddaaa5' }}
											className='iconSize6px pr-1 animate-pulse'
										/>
									)}
									<span className='border-0 border-l border-white text-white flex items-center text-sm pl-1'>
										2
									</span>
								</div>
								<div className='cursor-pointer text-black'>
									<div className='flex items-center'>
										<div className='md:relative mr-1'>
											<CiShoppingCart className='text-white iconSize8px' />
										</div>
										<span className='sm:absolute sm:top-[17px] sm:right-[10px] tablet:absolute tablet:top-[17px] tablet:right-[10px] md:absolute md:top-[40px] md:right-[10px] text-black h-6 w-6 rounded-full flex items-center justify-center text-sm bg-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'>
											1
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className='tablet:hidden flex items-center lg:gap-4 phone:gap-4 xl:gap-8 justify-center mt-[20px]'>
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
									</div>
									<span className='phone:relative phone:top-[-10px] phone:right-[18px] tablet:absolute tablet:top-[36px] tablet:right-[10px] md:absolute md:top-[55px] md:right-[10px] lg:static text-slate-100 h-6 w-6 rounded-full flex items-center justify-center text-sm bg-slate-900 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'>
										1
									</span>
								</div>
							</div>
						</div>
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
			)}
		</>
	);
};

export default Header;
