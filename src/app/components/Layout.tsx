import Link from 'next/link';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';

const Layout = ({
	closeModal,
	children,
}: {
	closeModal: Function;
	children: React.ReactNode;
}) => {
	return (
		<>
			<div className='h-[115px]'>
				<IoMdClose
					onClick={closeModal}
					className='iconSize8px absolute top-[10px] left-[10px] text-white cursor-pointer hover:text-goPink'
				/>
				<Link href='/'>
					<Image
						src='/assets/images/goImageDark.png'
						width={75}
						height={75}
						alt='go Image'
						className={`animate-drawerSlideIn rounded-lg object-cover absolute left-[220px] top-[55px]`}
					/>
				</Link>
			</div>
			<div className='border-b-2 border-b-goPink text-slate-800 bg-slate-100 px-6 py-2 mb-6'>
				Hello, Renee
			</div>
			<main>{children}</main>
		</>
	);
};

export default Layout;
