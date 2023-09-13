import Link from 'next/link';

const AboutUs = () => {
	return (
		<div className='text-white'>
			<h3 className='text-base font-bold pb-1'>Need Help?</h3>
			<Link href='/'>help@pierrelabiche.com</Link>
			<p className='py-1'>Call 800-555-1111.</p>
			<p>
				Our customer service is available <br />
				9am-5pm, from Monday to Friday.
			</p>
		</div>
	);
};

export default AboutUs;
