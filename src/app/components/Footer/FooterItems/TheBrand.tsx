import Link from 'next/link';
import * as categoriesItems from '@/app/utils/footerItems';

const ShopCategories = () => {
	const { theBrand } = categoriesItems;
	return (
		<div className='mb-6 text-white'>
			<h3 className='text-base font-bold pb-1'>Pierre Labiche</h3>
			<div className=''>
				{theBrand.map((item: any, idx: any) => (
					<ul key={idx} className='mt-[6px]'>
						<Link href={'/'}>
							<li key={idx}>{item.name}</li>
						</Link>
					</ul>
				))}
			</div>
		</div>
	);
};

export default ShopCategories;
