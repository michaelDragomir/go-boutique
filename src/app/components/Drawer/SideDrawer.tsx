import { useState } from 'react';

import DrawerLayout from '@/app/components/Layout';
import SubModalCategories from './SubModalCategories';
import { navTabItems } from '@/app/utils/navTabIcons';
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
	const [subDrawerModalOpen, setSubDrawerModalOpen] = useState<boolean>(false);

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
					</>
				) : (
					<SubModalCategories activeTab={activeTab} />
				)}
			</DrawerLayout>
		</div>
	);
};

export default SideDrawer;
