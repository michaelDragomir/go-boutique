import Link from 'next/link';
import * as paymentProductsItems from '@/app/utils/footerItems';

const AboutUs = () => {
	const { paymentProducts } = paymentProductsItems;
	return (
		<div className='mb-6 text-white'>
			<h3 className='text-base font-bold pb lg:flex lg:justify-center'>
				Payment Products
			</h3>
			<div className='phone:space-y-2 flex flex-col md:space-y-4 lg:flex lg:flex-row p1 font-light lg:justify-center'>
				{paymentProducts.map((item: any, idx: any) => (
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

export default AboutUs;
