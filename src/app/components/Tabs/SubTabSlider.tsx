'use client';

import { useState } from 'react';

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
			case 'Men':
				return (
					<NavItemsDropDown
						items={dropDownItems.men}
						images={null}
						collections={null}
					/>
				);
			case 'Women':
				return (
					<NavItemsDropDown
						items={dropDownItems.women}
						images={null}
						collections={null}
					/>
				);
			case 'Kids':
				return (
					<NavItemsDropDown
						items={dropDownItems.kids}
						images={null}
						collections={null}
					/>
				);
			case 'Beauty':
				return (
					<NavItemsDropDown
						items={dropDownItems.beauty}
						images={null}
						collections={null}
					/>
				);
			default:
				return null;
		}
	};

	return (
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
			<div className='invisible bg-white border-slate-400 border z-10 absolute w-screen h-screen bg-slate-400 fixed top-0 left-[-481px] opacity-40 z-overlay'>
				{dropDownMenuItems()}
			</div>
		</div>
	);
};

export default SubTabSlider;
