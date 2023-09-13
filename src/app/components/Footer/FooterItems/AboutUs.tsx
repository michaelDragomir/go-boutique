import Link from 'next/link';
import * as aboutUsItems from '@/app/utils/footerItems';

const AboutUs = () => {
	const { aboutUs } = aboutUsItems;
	return (
		<div className='mb-6 text-white'>
			<h3 className='text-base font-bold pb'>Get to Know Us</h3>
			<div className=''>
				{aboutUs.map((item: any, idx: any) => (
					<>
						<ul className='mt-[6px]'>
							<Link href={'/'}>
								<li key={idx}>{item.name}</li>
							</Link>
						</ul>
					</>
				))}
			</div>
		</div>
	);
};

export default AboutUs;
