import Link from 'next/link';

const ShopCategories = () => {
	return (
		<div className='mb-12'>
			<h3 className='text-base font-bold mb-2 text-center underline underline-offset-1'>
				Shop Categories
			</h3>
			<div className='flex p1 font-light justify-center'>
				<Link className='pr-2' href='/'>
					All <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Clothing <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Pet Supplies <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Household <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Electronics <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Bath & Body <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Toys <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Active
				</Link>
			</div>
		</div>
	);
};

export default ShopCategories;
