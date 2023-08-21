'use client';

import { useState } from 'react';

const SubTabSlider = ({ tabItems }: { tabItems: any }) => {
	const [activeTab, setActiveTab] = useState<any>(tabItems[0].name);

	const handleTabClick = (tabItem: any) => {
		setActiveTab(tabItem);
	};
	return (
		<div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
			{tabItems.map((item: any, idx: any) => (
				<div
					key={item.name}
					className={`flex items-center justify-center text-center gap-1 p-2 border hover:text-slate-800 transition cursor-pointer border-transparent border-slate-500 text-slate-500 ${
						activeTab === tabItems[idx].name
							? 'text-slate-800 border border-slate-800'
							: 'text-gray-300'
					}`}
					onClick={() => handleTabClick(item.name)}
				>
					{item.icon}
					<div className='font-medium text-sm'>{item.name}</div>
				</div>
			))}
			{/* <div className='flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer border-b-slate-800 text-slate-800'>
					<GiHamburgerMenu className='w-7 h-7' />
					<div className='font-medium text-sm'>All</div>
				</div>
				<div className='flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer border-transparent text-slate-500'>
					<GiClothes className='w-7 h-7' />
					<div className='font-medium text-sm'>Clothing</div>
				</div>
				<div className='flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer border-transparent text-slate-500'>
					<GiSittingDog className='w-7 h-7' />
					<div className='font-medium text-sm'>Pet Supplies</div>
				</div>
				<div className='flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer border-transparent text-slate-500'>
					<GiHouse className='w-7 h-7' />
					<div className='font-medium text-sm'>Household</div>
				</div>
				<div className='flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer border-transparent text-slate-500'>
					<GiSmartphone className='w-7 h-7' />
					<div className='font-medium text-sm'>Electronics</div>
				</div>
				<div className='flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer border-transparent text-slate-500'>
					<GiBathtub className='w-7 h-7' />
					<div className='font-medium text-sm'>Health & Beauty</div>
				</div>
				<div className='flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer border-transparent text-slate-500'>
					<GiGingerbreadMan className='w-7 h-7' />
					<div className='font-medium text-sm'>Toys</div>
				</div> */}
		</div>
	);
};

export default SubTabSlider;
