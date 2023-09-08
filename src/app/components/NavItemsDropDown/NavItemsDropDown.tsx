import Link from 'next/link';

const NavItemsDropDown = ({ props }: { props: any }) => {
	type String = any;

	//TODO:
	// sanitize item name for url input

	return (
		<div className=''>
			{props.map((item: String, idx: number) => (
				<ul className='pb-2 font-light text-black' key={idx}>
					<Link href={`/${item.name}`}>
						<li className=''>
							<span className='hover:border-b hover:border-b-black'>
								{item.name}
							</span>
						</li>
					</Link>
				</ul>
			))}
		</div>
	);
};

export default NavItemsDropDown;
