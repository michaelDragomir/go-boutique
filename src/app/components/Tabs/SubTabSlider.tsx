'use client';

import { useState } from 'react';

import Container from '@/app/components/Container';
import NavItemsDropDown from '@/app/components/NavItemsDropDown/NavItemsDropDown';

import * as dropDownItems from '@/app/utils/dropDownItems';

const SubTabSlider = ({ navTabItems }: { navTabItems: any }) => {
	type String = string;
	const [activeTab, setActiveTab] = useState<String>(navTabItems[0]);

	const onMouseEnterToggle = (tab: any) => {
		setActiveTab(tab);
	};

	const dropDownMenuItems = () => {
		switch (activeTab) {
			case 'Categories':
				return <NavItemsDropDown props={dropDownItems.categories} />;
			case 'Men':
				return <NavItemsDropDown props={dropDownItems.men} />;
			case 'Women':
				return <NavItemsDropDown props={dropDownItems.women} />;
			case 'Kids':
				return <NavItemsDropDown props={dropDownItems.kids} />;
			case 'Beauty':
				return <NavItemsDropDown props={dropDownItems.beauty} />;
			default:
				return null;
		}
	};

	return (
		// <Container>
		<div className='relative group'>
			<div className='flex justify-center relative'>
				{navTabItems.map((item: any, idx: any) => (
					<div
						key={item.name}
						onMouseEnter={() => onMouseEnterToggle(item.name)}
						className={`flex items-center justify-center text-center gap-1 pt-3 pb-2.5 cursor-pointer text-slate-500
					w-[145px] h-[30px] hover:text-slate-900 hover:bg-slate-100 relative hover:z-aboveAll border-0 hover:border-x hover:border-slate-400 hover:border-t ${
						activeTab === navTabItems[idx].name ? '' : 'text-slate-500'
					}`}
					>
						<div className='flex group absolute flex-row items-center'>
							<span className='pr-2 sm:hidden lg:block xl:block'>
								{item.icon}
							</span>
							<p className='font-medium text-sm'>{item.name}</p>
						</div>
					</div>
				))}
			</div>
			<div className='w-screen h-[300px] invisible bg-white group-hover:visible absolute top-[50px] left-[-465px] border-slate-400 border z-10'>
				{dropDownMenuItems()}
			</div>
		</div>
		// </Container>
	);
};

export default SubTabSlider;
