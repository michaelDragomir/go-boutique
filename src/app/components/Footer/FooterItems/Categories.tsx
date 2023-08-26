import Link from 'next/link';

const ShopCategories = () => {
	return (
		<div className='mb-6'>
			<h3 className='text-base font-bold text-center'>Shop Categories</h3>
			<div className='flex p1 font-light justify-center'>
				<Link href='/'>All</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Clothing</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Pet Supplies</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Household</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Electronics</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Bath & Body</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Toys</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Active</Link>
			</div>
		</div>
	);
};

export default ShopCategories;
