'use client';

import { useState } from 'react';

import Container from '@/app/components/Container';

import NavItemsDropDown from '@/app/components/NavItemsDropDown/NavItemsDropDown';
import { IoIosArrowDown } from 'react-icons/io';

const SubTabSlider = ({ tabItems }: { tabItems: any }) => {
	const [activeTab, setActiveTab] = useState<any>(tabItems[0]);

	const handleTabClick = (tabItem: any) => {
		setActiveTab(tabItem);
	};
	return (
		<Container>
			<div className='flex flex-row items-center justify-evenly'>
				{tabItems.map((item: any, idx: any) => (
					<div
						key={item.name}
						onClick={() => handleTabClick(item.name)}
						className={`w-40 h-[35px] items-center justify-center text-center gap-1 p-2 hover:text-slate-800 transition cursor-pointer ${
							activeTab === tabItems[idx].name
								? 'text-slate-800 border-b border-goPink'
								: 'text-slate-500'
						}`}
					>
						<div className='flex group absolute flex-row items-center'>
							<span className='pr-1'>{item.icon}</span>
							<div className='font-medium text-sm'>{item.name}</div>
							<span className='hover:text-goPink'>
								<IoIosArrowDown />
							</span>
							<div className='h-3 visible group-hover:visible group-hover:animate-slideDown'>
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
