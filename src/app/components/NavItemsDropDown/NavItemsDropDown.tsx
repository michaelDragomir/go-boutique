import Link from 'next/link';

const NavItemsDropDown = ({ props }: { props: any }) => {
	type String = any;

	//TODO:
	// sanitize item name for url input

	return (
		<div className='px-3 pt-3 rounded-md drop-shadow-md w-[190px] bg-white text-sm absolute right-[-30px] top-[17px]'>
			{props.map((item: String, idx: number) => (
				<ul
					className='pb-2 font-light text-slate-500 hover:text-slate-800'
					key={idx}
				>
					<Link href={`/${item.name}`}>
						<li className='hover:border-b hover:border-b-goPink h-[20px]'>
							{item.name}
						</li>
					</Link>
				</ul>
			))}
		</div>
	);
};

export default NavItemsDropDown;
