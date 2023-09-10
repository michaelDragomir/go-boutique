'use client';

import { useState } from 'react';

import SubDrawerModal from './SubDrawerModal';

import { navTabItems } from '@/app/utils/navTabIcons';
import * as dropDownItems from '@/app/utils/dropDownItems';
import { IoIosArrowForward, IoIosArrowBack, IoMdClose } from 'react-icons/io';
import { CiUser } from 'react-icons/ci';

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
			case 'Men':
				return <SubDrawerModal data={dropDownItems.men} />;
			case 'Women':
				return <SubDrawerModal data={dropDownItems.women} />;
			case 'Kids':
				return <SubDrawerModal data={dropDownItems.kids} />;
			case 'Beauty':
				return <SubDrawerModal data={dropDownItems.beauty} />;
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
			className={`w-[300px] h-screen bg-black z-aboveAll absolute left-[-1px] top-[-10px] drop-shadow-md ${
				isModalOpen ? 'animate-drawerSlideIn' : 'animate-drawerSlideOut'
			}`}
		>
			<div onClick={mainMenuAndCloseHandler}>
				<IoMdClose className='iconSize6px absolute top-[8px] left-[275px] text-black cursor-pointer' />
			</div>
			<div className='flex text-xl bg-white px-6 py-1'>
				<span className='mr-3'>
					<CiUser className='text-slate-900 iconSize6px' />
				</span>
				Hello, Renee
			</div>
			{isModalOpen && !subDrawerModalOpen ? (
				<>
					{dropDownItems.categories.map((item: any, idx: any) => (
						<div
							key={idx}
							className='px-6 cursor-pointer animate-innerDrawerSlideOut pt-8'
							onClick={() => subDrawerToggleHandler(item.name)}
						>
							<ul>
								<li className='group flex hover:border-b items-center justify-between text-slate-100 hover:text-slate-100 h-[20px]'>
									{item.name}
									<span className='text-slate-100 group-hover:text-slate-100'>
										<IoIosArrowForward />
									</span>
								</li>
							</ul>
						</div>
					))}
				</>
			) : (
				<div className='animate-innerDrawerSlideIn'>
					<div
						onClick={backToMainMenuHandler}
						className='mt-6 px-3 flex items-center cursor-pointer mb-6'
					>
						<IoIosArrowBack className='iconSize5px text-white' />
						<h2 className='text-sm text-white'>Main Menu</h2>
					</div>
					{innerDrawerToggleHandler(activeTab)}
				</div>
			)}
		</div>
	);
};

export default SideDrawer;
