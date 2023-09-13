import Link from 'next/link';
import * as categoriesItems from '@/app/utils/footerItems';

const ShopCategories = () => {
	const { categories } = categoriesItems;
	return (
		<div className='mb-6 text-white'>
			<h3 className='text-base font-bold pb lg:flex lg:justify-center'>
				Shop Categories
			</h3>
			<div className=''>
				{categories.map((item: any, idx: any) => (
					<>
						<ul className='mt-[15px]'>
							<Link href={'/'}>
								<li key={idx}>{item.name}</li>
							</Link>
						</ul>
						<span className='px-2 phone:hidden lg:block'>{item.separator}</span>
					</>
				))}
			</div>
		</div>
	);
};

export default ShopCategories;
