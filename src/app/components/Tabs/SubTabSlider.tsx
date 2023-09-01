'use client';

import { useState } from 'react';

import Container from '@/app/components/Container';
import NavItemsDropDown from '@/app/components/NavItemsDropDown/NavItemsDropDown';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

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
			case 'Active':
				return <NavItemsDropDown props={dropDownItems.active} />;
			default:
				return null;
		}
	};

	return (
		<Container>
			<div className='flex justify-between'>
				{navTabItems.map((item: any, idx: any) => (
					<div
						key={item.name}
						onMouseEnter={() => onMouseEnterToggle(item.name)}
						className={`flex items-center justify-center text-center gap-1 pt-3 pb-2.5 cursor-pointer text-slate-500
						w-[145px] hover:text-slate-900 ${
							activeTab === navTabItems[idx].name ? '' : 'text-slate-500'
						}`}
					>
						<div className='flex group absolute flex-row items-center'>
							<span className='pr-2 sm:hidden lg:block xl:block'>
								{item.icon}
							</span>
							<p className='font-medium text-sm'>{item.name}</p>
							<span>
								<IoIosArrowDown className='group-hover:hidden text-goGreen' />
								<IoIosArrowUp className='hidden group-hover:block group-hover:text-goPink text-slate-500' />
							</span>
							<div className='h-3 invisible text-black group-hover:visible group-hover:animate-slideDown'>
								{dropDownMenuItems()}
							</div>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
};

export default SubTabSlider;
