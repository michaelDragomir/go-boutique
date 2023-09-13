'use client';

import { useState } from 'react';

import SubDrawerModal from './SubDrawerModal';
import SignIn from './SignIn/SignIn';
import SignUp from './SIgnUp/SignUp';
import UserPanal from './UserPanal/UserPanal';

import { roboto } from '@/app/fonts';
import { navTabItems } from '@/app/utils/navTabIcons';
import * as dropDownItems from '@/app/utils/dropDownItems';
import { IoIosArrowForward, IoIosArrowBack, IoMdClose } from 'react-icons/io';

const SideDrawer = ({
	isModalOpen,
	modalToggleHandler,
}: {
	isModalOpen: boolean;
	modalToggleHandler: any;
}) => {
	const [activeTab, setActiveTab] = useState<String>(navTabItems[0].name);
	const [subDrawerModalOpen, setSubDrawerModalOpen] = useState<boolean>(false);

	const innerDrawerToggleHandler = (activeTab: any) => {
		switch (activeTab) {
			case 'categories':
				return <SubDrawerModal data={dropDownItems.categories} />;
			case 'accessories':
				return <SubDrawerModal data={dropDownItems.accessories} />;
			case 'men':
				return <SubDrawerModal data={dropDownItems.men} />;
			case 'women':
				return <SubDrawerModal data={dropDownItems.women} />;
			case 'kids':
				return <SubDrawerModal data={dropDownItems.kids} />;
			case 'beauty':
				return <SubDrawerModal data={dropDownItems.beauty} />;
			default:
				return null;
		}
	};

	const secondaryInfoSetToggleHandler = (activeTab: any) => {
		switch (activeTab) {
			case 'my account':
				return <UserPanal />;
			default:
				return null;
		}
	};

	const subDrawerToggleHandler = (tab: any) => {
		setActiveTab(tab);
		setSubDrawerModalOpen((prev) => !prev);
	};

	const mainMenuAndCloseHandler = () => {
		setSubDrawerModalOpen((prev) => !prev);
		modalToggleHandler();
	};

	const backToMainMenuHandler = () => {
		setSubDrawerModalOpen((prev) => !prev);
	};

	return (
		<div
			className={`w-[450px] h-screen bg-white z-aboveAll absolute left-0 top-0 drop-shadow-md ${
				isModalOpen ? 'animate-drawerSlideIn' : 'animate-drawerSlideOut'
			}`}
		>
			<div className='m-20' onClick={mainMenuAndCloseHandler}>
				<IoMdClose className='iconSize5px absolute top-[30px] right-[21px] text-black cursor-pointer' />
			</div>
			{isModalOpen && !subDrawerModalOpen ? (
				<>
					{dropDownItems.categories.map((item: any, idx: any) => (
						<div
							key={idx}
							className='px-6 animate-innerDrawerSlideOut pt-8'
							onClick={() => subDrawerToggleHandler(item.name)}
						>
							<ul
								className={`font-medium tracking-[.15em] uppercase text-sm ${roboto.className}`}
							>
								<li className='cursor-pointer group flex hover:text-[#BBA14F] items-center justify-between text-black hover:text-slate-400'>
									{item.name}
									<span>
										<IoIosArrowForward />
									</span>
								</li>
							</ul>
						</div>
					))}
					<div className='border-b border-[#BBA14F] mx-6 mt-12' />
					{dropDownItems.secondaryCategories.map((item: any, idx: any) => (
						<>
							<div
								key={idx}
								className='px-6 pt-8 animate-innerDrawerSlideOut'
								onClick={() => subDrawerToggleHandler(item.name)}
							>
								<ul
									className={`font-medium tracking-[.15em] uppercase text-sm ${roboto.className}`}
								>
									<li className='cursor-pointer hover:text-[#BBA14F] text-black hover:text-slate-400'>
										{item.name}
									</li>
								</ul>
							</div>
						</>
					))}
				</>
			) : (
				<>
					<div
						onClick={backToMainMenuHandler}
						className='relative mt-6 px-3 flex items-center cursor-pointer mb-6'
					>
						<IoIosArrowBack className='iconSize5px text-black absolute top-[-47px] left-[20px]' />
					</div>
					<div className='animate-innerDrawerSlideIn'>
						{innerDrawerToggleHandler(activeTab)}
					</div>
					<div className='animate-fadeIn'>
						{secondaryInfoSetToggleHandler(activeTab)}
					</div>
				</>
			)}
		</div>
	);
};

export default SideDrawer;
