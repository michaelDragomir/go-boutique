import { useState } from 'react';

import DrawerLayout from '@/app/components/Layout';
// import ModalCategories from './ModalCategories';
import SubModalCategories from './SubModalCategories';
import { navTabItems } from '@/app/utils/navTabIcons';
import SubDrawerModal from './SubDrawerModal';
import * as dropDownItems from '@/app/utils/dropDownItems';
import { IoIosArrowForward } from 'react-icons/io';

const SideDrawer = ({
	isModalOpen,
	onClick,
}: {
	isModalOpen: boolean;
	onClick: Function;
}) => {
	const [activeTab, setActiveTab] = useState<String>(navTabItems[0].name);
	const [SubDrawerModalOpen, setSubDrawerModalOpen] = useState<boolean>(false);

	const subDrawerToggleHandler = (tab: any) => {
		setActiveTab(tab);
		setSubDrawerModalOpen((prev) => !prev);
	};

	const test = () => {
		setSubDrawerModalOpen((prev) => !prev);
	};

	// const innerDrawerToggleHandler = (activeTab: any) => {
	// 	switch (activeTab) {
	// 		case 'Clothing':
	// 			return <SubDrawerModal data={dropDownItems.clothing} />;
	// 		case 'Pet Supplies':
	// 			return <SubDrawerModal data={dropDownItems.petSupplies} />;
	// 		case 'Household':
	// 			return <SubDrawerModal data={dropDownItems.household} />;
	// 		case 'Electronics':
	// 			return <SubDrawerModal data={dropDownItems.electronics} />;
	// 		case 'Bath & Body':
	// 			return <SubDrawerModal data={dropDownItems.bathBody} />;
	// 		case 'Toys':
	// 			return <SubDrawerModal data={dropDownItems.toys} />;
	// 		case 'Active':
	// 			return <SubDrawerModal data={dropDownItems.active} />;
	// 		default:
	// 			return null;
	// 	}
	// };

	return (
		<div
			className={`w-[300px] h-screen bg-slate-700 z-sideDrawer absolute left-0 top-0 drop-shadow-md ${
				isModalOpen ? 'animate-drawerSlideIn' : 'animate-drawerSlideOut'
			}`}
		>
			<DrawerLayout closeModal={onClick}>
				{isModalOpen && !SubDrawerModalOpen ? (
					<div>
						{dropDownItems.categories.map((item: any, idx: any) => (
							<div
								key={idx}
								className='px-6 hover:bg-slate-100 cursor-pointer'
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
					</div>
				) : (
					<SubModalCategories activeTab={activeTab} test={SubDrawerModalOpen} />
					// <div className='h-auto relative top-[10px] animate-innerDrawerSlide text-white'>
					// 	{innerDrawerToggleHandler(activeTab)}
					// </div>
				)}
			</DrawerLayout>
		</div>
	);
};

export default SideDrawer;
