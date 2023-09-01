'use client';

import { useState } from 'react';

import SubDrawerModal from './SubDrawerModal';

import { navTabItems } from '@/app/utils/navTabIcons';
import * as dropDownItems from '@/app/utils/dropDownItems';
import { IoIosArrowForward, IoIosArrowBack, IoMdClose } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa6';

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
			case 'Clothing':
				return <SubDrawerModal data={dropDownItems.clothing} />;
			case 'Pet Supplies':
				return <SubDrawerModal data={dropDownItems.petSupplies} />;
			case 'Household':
				return <SubDrawerModal data={dropDownItems.household} />;
			case 'Electronics':
				return <SubDrawerModal data={dropDownItems.electronics} />;
			case 'Bath & Body':
				return <SubDrawerModal data={dropDownItems.bathBody} />;
			case 'Toys':
				return <SubDrawerModal data={dropDownItems.toys} />;
			case 'Active':
				return <SubDrawerModal data={dropDownItems.active} />;
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
			className={`w-[300px] h-screen bg-slate-700 z-sideDrawer absolute left-[-1px] top-0 drop-shadow-md ${
				isModalOpen ? 'animate-drawerSlideIn' : 'animate-drawerSlideOut'
			}`}
		>
			<div onClick={mainMenuAndCloseHandler}>
				<IoMdClose className='iconSize8px absolute top-[10px] left-[300px] text-slate-700 cursor-pointer hover:text-goPink' />
			</div>
			<div className='flex border-b-2 border-b-goPink text-xl text-slate-800 bg-slate-100 px-6 py-2'>
				<span className='mr-3'>
					<FaRegUser className='text-slate-700 iconSize6px' />
				</span>
				Hello, Renee
			</div>
			{isModalOpen && !subDrawerModalOpen ? (
				<>
					{dropDownItems.categories.map((item: any, idx: any) => (
						<div
							key={idx}
							className='px-6 hover:bg-slate-100 cursor-pointer animate-innerDrawerSlideOut'
							onClick={() => subDrawerToggleHandler(item.name)}
						>
							<ul>
								<li className='group flex items-center justify-between text-slate-100 pt-6 py-2 hover:text-slate-800'>
									{item.name}
									<span className='text-slate-100 group-hover:text-slate-800'>
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
						<IoIosArrowBack className='iconSize5px text-slate-100' />
						<h2 className='text-sm text-slate-200'>Main Menu</h2>
					</div>
					{innerDrawerToggleHandler(activeTab)}
				</div>
			)}
		</div>
	);
};

export default SideDrawer;
