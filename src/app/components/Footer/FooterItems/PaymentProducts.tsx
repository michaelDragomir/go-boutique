import Link from 'next/link';
import * as paymentProductsItems from '@/app/utils/footerItems';

const AboutUs = () => {
	const { paymentProducts } = paymentProductsItems;
	return (
		<div className='mb-6'>
			<h3 className='text-base font-bold pb-2 lg:justify-center'>
				Payment Products
			</h3>
			<div className='md:flex md:flex-col md:space-y-2 lg:flex lg:flex-row p1 font-light lg:justify-center'>
				{paymentProducts.map((item: any, idx: any) => (
					<>
						<Link href={'/'}>
							<ul className=''>
								<li key={idx}>{item.name}</li>
							</ul>
						</Link>
						<span className='px-2 md:hidden lg:block'>{item.separator}</span>
					</>
				))}
			</div>
		</div>
	);
};

export default AboutUs;
