import Link from 'next/link';

const NavItemsDropDown = ({ props }: { props: any }) => {
	type String = any;

	//TODO:
	// item name for url input

	return (
		<div className='px-3 pt-3 rounded-md drop-shadow-md w-[159px] bg-white text-sm absolute right-[-30px] top-[17px]'>
			{props.map((item: String, idx: number) => (
				<div
					className='pb-2 font-light text-slate-500 hover:text-slate-800'
					key={idx}
				>
					<Link href={`/${item.name}`}>
						<span className='hover:border-b hover:border-b-goPink'>
							{item.name}
						</span>
					</Link>
				</div>
			))}
		</div>
	);
};

export default NavItemsDropDown;
