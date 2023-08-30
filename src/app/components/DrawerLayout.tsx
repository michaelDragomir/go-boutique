'use client';

import { IoMdClose } from 'react-icons/io';

const Layout = ({
	closeModal,
	children,
	isModalOpen,
}: {
	closeModal: Function;
	children: React.ReactNode;
	isModalOpen: any;
}) => {
	return (
		<>
			<IoMdClose
				onClick={closeModal}
				className='iconSize8px absolute top-[10px] left-[300px] text-slate-700 cursor-pointer hover:text-goPink'
			/>
			<div className='border-b-2 border-b-goPink text-xl text-slate-800 bg-slate-100 px-6 py-2'>
				Hello, Renee
			</div>
			<main>{children}</main>
		</>
	);
};

export default Layout;
