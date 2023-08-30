import { useState } from 'react';

import DrawerLayout from '@/app/components/Layout';
import SubDrawerModal from './SubDrawerModal';

import { navTabItems } from '@/app/utils/navTabIcons';
import * as dropDownItems from '@/app/utils/dropDownItems';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const SideDrawer = ({
	isModalOpen,
	onClick,
}: {
	isModalOpen: boolean;
	onClick: Function;
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

	return (
		<div
			className={`w-[300px] h-screen bg-slate-700 z-sideDrawer absolute left-0 top-0 drop-shadow-md ${
				isModalOpen ? 'animate-drawerSlideIn' : 'animate-drawerSlideOut'
			}`}
		>
			<DrawerLayout closeModal={onClick}>
				{isModalOpen && !subDrawerModalOpen ? (
					<>
						{dropDownItems.categories.map((item: any, idx: any) => (
							<div
								key={idx}
								className='px-6 hover:bg-slate-100 cursor-pointer animate-innerDrawerSlideOut'
								onClick={() => subDrawerToggleHandler(item.name)}
							>
								<ul>
									<li className='flex items-center justify-between text-slate-100 pt-6 py-2 hover:text-slate-800'>
										{item.name}
										<span className='text-goGreen'>
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
							onClick={() => subDrawerToggleHandler(activeTab)}
							className='mt-3 px-3 flex items-center cursor-pointer mb-6'
						>
							<IoIosArrowBack className='iconSize5px text-goPink' />
							<h2 className='text-sm text-slate-200'>Main Menu</h2>
						</div>
						{innerDrawerToggleHandler(activeTab)}
					</div>
				)}
			</DrawerLayout>
		</div>
	);
};

export default SideDrawer;
