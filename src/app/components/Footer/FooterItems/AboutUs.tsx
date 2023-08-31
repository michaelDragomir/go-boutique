import Link from 'next/link';
import * as aboutUsItems from '@/app/utils/footerItems';

const AboutUs = () => {
	const { aboutUs } = aboutUsItems;
	return (
		<div className='mb-6'>
			<h3 className='text-base font-bold pb flex md:flex-col md:space-y-2 lg:flex-row p1 lg:justify-center'>
				About Us
			</h3>
			<div className='phone:space-y-2 flex flex-col md:space-y-4 lg:flex lg:flex-row p1 font-light lg:justify-center'>
				{aboutUs.map((item: any, idx: any) => (
					<>
						<Link className='mt-[15px]' href={'/'}>
							<ul>
								<li key={idx}>{item.name}</li>
							</ul>
						</Link>
						<span className='px-2 phone:hidden lg:block'>{item.separator}</span>
					</>
				))}
			</div>
		</div>
	);
};

export default AboutUs;
