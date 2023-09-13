import Link from 'next/link';
import * as customerServiceItems from '@/app/utils/footerItems';

const AboutUs = () => {
	const { customerService } = customerServiceItems;
	return (
		<div className='text-white'>
			<h3 className='text-base font-bold'>Customer Care</h3>
			<div className=''>
				{customerService.map((item: any, idx: any) => (
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

// phone:space-y-2 flex flex-col md:space-y-4 lg:flex lg:flex-row p1 font-light lg:justify-center
