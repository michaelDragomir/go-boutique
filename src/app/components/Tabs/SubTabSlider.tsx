'use client';

import { useState } from 'react';

import Container from '@/app/components/Container';

import NavItemsDropDown from '@/app/components/NavItemsDropDown/NavItemsDropDown';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const SubTabSlider = ({ tabItems }: { tabItems: any }) => {
	const [activeTab, setActiveTab] = useState<Boolean>(tabItems[0]);

	const handleTabClick = (tabItem: any) => {
		setActiveTab(tabItem);
	};

	return (
		<Container>
			<div className='flex justify-between'>
				{tabItems.map((item: any, idx: any) => (
					<div
						key={item.name}
						onClick={() => handleTabClick(item.name)}
						className={`flex items-center justify-center text-center gap-1 p-3 cursor-pointer text-slate-500
						w-[145px] hover:text-slate-900 ${
							activeTab === tabItems[idx].name ? '' : 'text-slate-500'
						}`}
					>
						<div className='flex group absolute flex-row items-center'>
							<span className='pr-1.5'>{item.icon}</span>
							<p className='font-medium text-sm'>{item.name}</p>
							<span>
								<IoIosArrowDown className='group-hover:hidden text-goGreen' />
								<IoIosArrowUp className='hidden group-hover:block group-hover:text-goPink text-slate-500' />
							</span>
							<div className='h-3 invisible text-black group-hover:visible group-hover:animate-slideDown'>
								{<NavItemsDropDown props />}
							</div>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
};

export default SubTabSlider;
