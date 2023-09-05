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
			case 'Clothing':
				return <NavItemsDropDown props={dropDownItems.clothing} />;
			case 'Pet Supplies':
				return <NavItemsDropDown props={dropDownItems.petSupplies} />;
			case 'Household':
				return <NavItemsDropDown props={dropDownItems.household} />;
			case 'Electronics':
				return <NavItemsDropDown props={dropDownItems.electronics} />;
			case 'Bath & Body':
				return <NavItemsDropDown props={dropDownItems.bathBody} />;
			case 'Toys':
				return <NavItemsDropDown props={dropDownItems.toys} />;
			case 'Sporting Goods':
				return <NavItemsDropDown props={dropDownItems.active} />;
			default:
				return null;
		}
	};

	return (
		<Container>
			<div className='flex justify-center relative group border-y gap-3'>
				{navTabItems.map((item: any, idx: any) => (
					<div
						key={item.name}
						onMouseEnter={() => onMouseEnterToggle(item.name)}
						className={`flex items-center justify-center text-center gap-1 pt-3 pb-2.5 cursor-pointer text-slate-500
						w-[145px] h-[30px] hover:text-slate-900 hover:bg-slate-200 ${
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
				<div className='w-full h-[300px] invisible bg-slate-200 group-hover:visible absolute top-[180px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-b-lg drop-shadow-md border'>
					{dropDownMenuItems()}
				</div>
			</div>
			<div className='h-[35px] w-[260px] absolute top-[105px]' />
			<div className='h-[35px] w-[260px] absolute right-[68px] top-[105px]' />
		</Container>
	);
};

export default SubTabSlider;
