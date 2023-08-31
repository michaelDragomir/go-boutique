import Link from 'next/link';
import * as customerServiceItems from '@/app/utils/footerItems';

const AboutUs = () => {
	const { customerService } = customerServiceItems;
	return (
		<div className='mb-6'>
			<h3 className='text-base font-bold pb-2 lg:flex lg:justify-center'>
				Customer Service
			</h3>
			<div className='md:flex md:flex-col md:space-y-4 lg:flex lg:flex-row p1 font-light lg:justify-center'>
				{customerService.map((item: any, idx: any) => (
					<>
						<Link className='mt-[15px]' href={'/'}>
							<ul>
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
