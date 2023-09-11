'use client';

import { useState } from 'react';
import { roboto } from '@/app/fonts';

import SignIn from '../SignIn/SignIn';
import SignUp from '../SIgnUp/SignUp';

const UserPanal = () => {
	const tabItems = ['Sign In', 'Create Account'];

	const [activeTab, setActiveTab] = useState<string>(tabItems[0]);

	const setActiveTabHandler = (tab: any) => {
		setActiveTab(tab);
	};

	return (
		<main
			className={`border-goGreen w-full flex flex-col items-center justify-center px-3 ${roboto.className}`}
		>
			<div className='flex text-center max-w-sm w-full justify-between'>
				{tabItems.map((tab: any, idx: any) => (
					<div
						onClick={() => setActiveTabHandler(tab)}
						key={idx}
						className={`w-full text-black text-2xl font-bold ${
							activeTab === tab ? 'border-b border-[#BBA14F]' : ''
						}`}
					>
						<span key={idx}></span>
						{tab}
					</div>
				))}
			</div>
			<div className='w-full mt-12'>
				{activeTab === 'Sign In' ? <SignIn /> : <SignUp />}
			</div>
		</main>
	);
};

export default UserPanal;
