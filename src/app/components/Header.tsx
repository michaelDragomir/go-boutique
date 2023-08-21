import Image from 'next/image';

const Header = () => {
	return (
		<div className='bg-slate-200'>
			<Image
				src='/assets/images/goImage.png'
				width={100}
				height={100}
				alt='go Image'
				className='mx-auto border-4 border-slate-200 rounded-lg'
			/>
		</div>
	);
};

export default Header;
