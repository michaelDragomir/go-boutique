'use client';

import { useState } from 'react';

const SubTabSlider = ({ tabItems }: { tabItems: any }) => {
	const [activeTab, setActiveTab] = useState<any>(tabItems[0]);

	const handleTabClick = (tabItem: any) => {
		setActiveTab(tabItem);
	};
	return (
		<div className='flex flex-row items-center justify-between overflow-x-auto'>
			{tabItems.map((item: any, idx: any) => (
				<div
					key={item.name}
					onClick={() => handleTabClick(item.name)}
					className={`w-40 flex items-center justify-center text-center gap-1 p-2 hover:text-slate-800 transition cursor-pointer ${
						activeTab === tabItems[idx].name
							? 'text-slate-800 border border-[#FF66C4]'
							: 'text-slate-500'
					}`}
				>
					{item.icon}
					<div className='font-medium text-sm'>{item.name}</div>
				</div>
			))}
		</div>
	);
};

export default SubTabSlider;
