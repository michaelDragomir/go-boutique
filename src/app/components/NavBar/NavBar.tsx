'use client';

// import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';

import SideDrawer from '@/app/components/Drawer/SideDrawer';
import SearchForm from '@/app/components/SearchForm/SearchForm';
import NavItemsDropDown from '@/app/components/NavItemsDropDown/NavItemsDropDown';

import * as dropDownItems from '@/app/utils/dropDownItems';
import { navTabItems } from '@/app/utils/navTabIcons';

import { aboreto, roboto } from '@/app/fonts';

import { IoMdClose } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { CiMenuBurger, CiUser, CiShoppingCart, CiSearch } from 'react-icons/ci';

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
			case 'ACCESSORIES':
				return (
					<NavItemsDropDown
						items={dropDownItems.accessories}
						images={dropDownItems.accessoriesDropdownImages}
						collections={dropDownItems.accessoriesDropdownCollections}
					/>
				);
			case 'MEN':
				return (
					<NavItemsDropDown
						items={dropDownItems.men}
						images={dropDownItems.menDropdownImages}
						collections={dropDownItems.menDropdownCollections}
					/>
				);
			case 'WOMEN':
				return (
					<NavItemsDropDown
						items={dropDownItems.women}
						images={dropDownItems.womenDropdownImages}
						collections={dropDownItems.womenDropdownCollections}
					/>
				);
			case 'KIDS':
				return (
					<NavItemsDropDown
						items={dropDownItems.kids}
						images={dropDownItems.kidsDropdownImages}
						collections={dropDownItems.kidsDropdownCollections}
					/>
				);
			case 'BEAUTY':
				return (
					<NavItemsDropDown
						items={dropDownItems.beauty}
						images={dropDownItems.beautyDropdownImages}
						collections={dropDownItems.beautyDropdownCollections}
					/>
				);
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
			{isScrolled < 155 ? (
				<div className='mx-auto relative'>
					<div className='bg-white phone:border-green-500 tablet:border-red-600 sm:border-amber-400 md:border-green-500 lg:border-goPink xl:border-goGreen'>
						<div className='flex justify-center text-[#BBA14F]'>
							<span
								className={`phone:hidden md:block text-3xl font-bold ${aboreto.className}`}
							>
								PIERRE
							</span>
							<span
								className={`phone:hidden md:block text-3xl font-bold ${aboreto.className}`}
							>
								-
							</span>
							<span
								className={`phone:hidden md:block text-3xl font-bold ${aboreto.className}`}
							>
								LABICHE
							</span>
						</div>
						<div
							className={`flex justify-center border-b border-b-black ${aboreto.className}`}
						>
							<span className='tracking-[.2em] text-[#BBA14F]'>PARIS</span>
						</div>
						<div className='flex items-center justify-between mx-4'>
							<div className='flex flex-row items-center'>
								<div className='flex items-center' onClick={modalToggleHandler}>
									<CiMenuBurger className='text-black phone:animate-pulse md:animate-none phone:block iconSize8px cursor-pointer mr-1' />
								</div>
								<div
									className={`${
										isModalOpen
											? 'absolute w-screen h-screen bg-white fixed top-0 left-0 opacity-40 z-overlay overflow-hidden'
											: ''
									} `}
								/>
								<div>
									<SideDrawer
										isModalOpen={isModalOpen}
										modalToggleHandler={modalToggleHandler}
									/>
								</div>
							</div>
							<div className='flex justify-center ml-[143px] w-5/12 relative phone:hidden lg:flex'>
								{navTabItems.map((item: any, idx: any) => {
									return (
										<ul
											key={idx}
											onMouseEnter={() => onMouseEnterToggle(item.name)}
											onMouseLeave={() => dropDownToggleHandler()}
											className='group flex items-center justify-evenly cursor-pointer text-black w-full h-[30px] relative hover:z-aboveAll py-8'
										>
											<li
												className={`text-sm hover:border-b hover:border-[#BBA14F] animate-fadeIn ${
													activeTab === navTabItems[idx].name && isactiveTab
														? 'border-b border-[#BBA14F]'
														: ''
												}`}
											>
												<span
													className={`font-medium tracking-[.15em] ${roboto.className}`}
												>
													{item.name}
												</span>
											</li>
										</ul>
									);
								})}
							</div>
							{isactiveTab && (
								<div
									onMouseEnter={() => dropDownToggleHandler()}
									onMouseLeave={() => onMouseEnterToggle('')}
									className='animate-fadeIn visible border z-10 absolute w-full h-suto bg-white fixed top-[123px] left-0'
								>
									{dropDownMenuItems()}
								</div>
							)}
							{/* <div
								onClick={searchModalToggleHandler}
								className='phone:w-screen phone:justify-center z-50 border flex border-slate-500 gap-1 cursor-pointer text-black rounded-md sm:hidden text-sm p-[5px] justify-start'
							></div> */}
							<div className='flex items-center gap-3'>
								<FaGithub className='text-[#BBA14F] iconSize5px cursor-pointer' />
								<CiSearch className='text-[#BBA14F] iconSize5px cursor-pointer' />
								<CiUser className='text-[#BBA14F] iconSize5px cursor-pointer' />
								<div className='cursor-pointer'>
									{FavoritesList === 0 ? (
										<GoHeart
											style={{ fill: '#f44336' }}
											className='cursor-pointer iconSize5px'
										/>
									) : (
										<GoHeartFill
											style={{ fill: '#f44336' }}
											className='cursor-pointer iconSize5px animate-pulse'
										/>
									)}
								</div>
								<div className='cursor-pointer text-black'>
									<div className='flex items-center'>
										<div className='md:relative mr-1'>
											<CiShoppingCart className='text-[#BBA14F] iconSize6px' />
										</div>
										<span className='relative flex h-6 w-6'>
											<span className='animate-pinging absolute top-[-9px] right-[16px] h-full w-full rounded-full bg-[#BBA14F] opacity-75' />
											<span className='sm:absolute sm:top-[17px] sm:right-[10px] tablet:absolute tablet:top-[35px] tablet:right-[10px] md:absolute md:top-[-7px] md:right-[18px] text-white h-5 w-5 rounded-full flex items-center justify-center text-sm bg-[#BBA14F] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] text-[12px]'>
												1
											</span>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className='tablet:hidden flex items-center lg:gap-4 phone:gap-4 xl:gap-8 justify-center mt-[20px]'>
							<div className='flex border border-slate-500 rounded-md  phone:p-[3px] xl:p-[7px] hover:border-slate-800'>
								{FavoritesList === 0 ? (
									<GoHeart className='iconSize6px' />
								) : (
									<GoHeartFill
										style={{ fill: '#FF66C4' }}
										className='iconSize6px pr-1 animate-pulse'
									/>
								)}
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
				<div className='mx-auto relative'>
					<div className='group hover:animate-fadeIn hover:bg-white duration-200 ease-in-out phone:border-green-500 tablet:border-red-600 sm:border-amber-400 md:border-green-500 lg:border-goPink xl:border-goGreen'>
						<div className='flex justify-center group-hover:text-[#BBA14F]'>
							<span
								className={`group-hover:text-[#BBA14F] text-white hover:text-black phone:hidden md:block text-3xl font-bold ${aboreto.className}`}
							>
								PIERRE
							</span>
							<span
								className={`group-hover:text-[#BBA14F] text-white hover:text-black phone:hidden md:block text-3xl font-bold ${aboreto.className}`}
							>
								-
							</span>
							<span
								className={`group-hover:text-[#BBA14F] text-white hover:text-black phone:hidden md:block text-3xl font-bold ${aboreto.className}`}
							>
								LABICHE
							</span>
						</div>
						<div
							className={`flex justify-center border-b group-hover:border-b-black border-b-white  ${aboreto.className}`}
						>
							<span className='group-hover:text-[#BBA14F] text-white group-hover:border-b-black tracking-[.2em]'>
								PARIS
							</span>
						</div>
						<div className='flex items-center justify-between mx-4 border-b border-white'>
							<div className='flex flex-row items-center'>
								<div className='flex items-center' onClick={modalToggleHandler}>
									<CiMenuBurger className='group-hover:text-black phone:animate-pulse md:animate-none phone:block iconSize8px cursor-pointer mr-1 text-white hover:text-black' />
								</div>
								<div
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
							</div>
							<div className='flex justify-center ml-[143px] w-5/12 relative phone:hidden lg:flex'>
								{navTabItems.map((item: any, idx: any) => {
									return (
										<ul
											key={idx}
											onMouseEnter={() => onMouseEnterToggle(item.name)}
											onMouseLeave={() => dropDownToggleHandler()}
											className='flex items-center justify-evenly cursor-pointer text-white group-hover:text-black w-full h-[30px] relative hover:z-aboveAll py-8'
										>
											<li
												className={`font-medium text-sm hover:border-b hover:border-white ${
													activeTab === navTabItems[idx].name && isactiveTab
														? 'border-b group-hover:border-[#BBA14F]'
														: ''
												}`}
											>
												<span
													className={`font-medium tracking-[.15em] ${roboto.className}`}
												>
													{item.name}
												</span>
											</li>
										</ul>
									);
								})}
							</div>
							{isactiveTab && (
								<div
									onMouseEnter={() => dropDownToggleHandler()}
									onMouseLeave={() => onMouseEnterToggle('')}
									className='animate-fadeIn visible border-slate-200 border-t z-10 absolute w-screen h-[330px] bg-white fixed top-[123px] left-0'
								>
									{dropDownMenuItems()}
								</div>
							)}
							{/* <div
								onClick={searchModalToggleHandler}
								className='phone:w-screen phone:justify-center z-50 border flex border-slate-500 gap-1 cursor-pointer text-black rounded-md sm:hidden text-sm p-[5px] justify-start'
							></div> */}
							<div className='flex items-center gap-3 text-white'>
								<FaGithub className='iconSize5px group-hover:text-[#BBA14F] cursor-pointer' />
								<CiSearch className='group-hover:text-[#BBA14F] iconSize5px cursor-pointer' />
								<CiUser className='group-hover:text-[#BBA14F] text-white hover:text-black iconSize5px cursor-pointer' />
								<div className='cursor-pointer'>
									{FavoritesList === 0 ? (
										<GoHeart
											style={{ fill: '#f44336' }}
											className='group-hover:text-black cursor-pointer iconSize5px'
										/>
									) : (
										<GoHeartFill
											style={{ fill: '#f44336' }}
											className='cursor-pointer iconSize5px animate-pulse'
										/>
									)}
								</div>
								<div className='cursor-pointer text-white '>
									<div className='flex items-center'>
										<div className='md:relative mr-1'>
											<CiShoppingCart className='group-hover:text-[#BBA14F] text-white iconSize6px' />
										</div>
										<span className='relative flex h-6 w-6'>
											<span className='animate-pinging absolute top-[-9px] right-[16px] h-full w-full rounded-full bg-white opacity-75 group-hover:bg-[#BBA14F]' />
											<span className='group-hover:bg-[#BBA14F] group-hover:text-white sm:absolute sm:top-[17px] sm:right-[10px] tablet:absolute tablet:top-[35px] tablet:right-[10px] md:absolute md:top-[-7px] md:right-[18px] text-black h-5 w-5 rounded-full flex items-center justify-center text-sm bg-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] text-[12px]'>
												1
											</span>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className='tablet:hidden flex items-center lg:gap-4 phone:gap-4 xl:gap-8 justify-center mt-[20px]'>
							<div className='flex border border-slate-500 rounded-md  phone:p-[3px] xl:p-[7px] hover:border-slate-800'>
								{FavoritesList === 0 ? (
									<GoHeart className='iconSize6px pr-1' />
								) : (
									<GoHeartFill
										style={{ fill: '#FF66C4' }}
										className='iconSize6px pr-1 animate-pulse'
									/>
								)}
							</div>
							<div className='cursor-pointer text-white'>
								<div className='flex items-center'>
									<div className='md:relative lg:border-r lg:border-slate-400 mr-1'>
										<CiShoppingCart className='text-white iconSize8px' />
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
