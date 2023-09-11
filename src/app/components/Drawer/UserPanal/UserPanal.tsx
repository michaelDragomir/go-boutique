'use client';

import { useState } from 'react';

const UserPanal = () => {
	const tabItems = ['Sign In', 'Create Account'];

	const [activeTab, setActiveTab] = useState<string>(tabItems[0]);

	const setActiveTabHandler = (tab: any) => {
		setActiveTab(tab);
	};
	return (
		<main className='border-goGreen w-full flex flex-col items-center justify-center px-4'>
			<div className='border-b flex text-center max-w-sm w-full justify-between px-8'>
				{tabItems.map((tab: any, idx: any) => (
					<div key={idx} className='text-black text-2xl'>
						{tab}
					</div>
				))}
			</div>
		</main>
	);
};

export default UserPanal;
