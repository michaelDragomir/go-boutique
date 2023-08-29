import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import * as dropDownItems from '@/app/utils/dropDownItems';
import { navTabItems } from '@/app/utils/navTabIcons';

const subDrawerModal = ({ data }: { data: any }) => {
	type String = any;

	const [subDrawerModalOpen, setSubDrawerModalOpen] = useState<boolean>(false);
	const [activeTab, setActiveTab] = useState<String>(navTabItems[0].name);

	const subDrawerToggleHandler = (tab: any) => {
		setActiveTab(tab);
		setSubDrawerModalOpen((prev) => !prev);
	};

	//TODO:
	// sanitize item name for url input

	return (
		<>
			{!subDrawerModalOpen ? (
				<div>
					<div
						onClick={() => subDrawerToggleHandler(activeTab)}
						className='mt-3 px-3 flex items-center cursor-pointer mb-6'
					>
						<IoIosArrowBack className='iconSize5px text-goPink' />
						<h2 className='text-sm'>Main Menu</h2>
					</div>
					{data.map((item: String, idx: number) => (
						<div key={idx} className='px-6 hover:bg-slate-100'>
							<ul className='' key={idx}>
								<Link href={`/${item.name}`}>
									<li className='flex items-center justify-between text-slate-100 pt-6 hover:text-slate-800'>
										{item.name}
									</li>
								</Link>
							</ul>
						</div>
					))}
				</div>
			) : (
				<div>
					{dropDownItems.categories.map((item: any, idx: any) => (
						<div
							key={idx}
							className='px-6 hover:bg-slate-100 cursor-pointer'
							onClick={() => subDrawerToggleHandler(item.name)}
						>
							<ul>
								<li className='flex items-center justify-between text-slate-100 pt-6 py-2 hover:text-slate-800'>
									{item.name}
									<span className='text-goGreen'>
										<IoIosArrowForward />
									</span>
								</li>
							</ul>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default subDrawerModal;
