import Link from 'next/link';

const AboutUs = () => {
	return (
		<div className='mb-6'>
			<h3 className='text-base font-bold mb text-center'>About Us</h3>
			<div className='flex p1 font-light justify-center'>
				<Link href='/'>Careers</Link>
				<span className='px-2'>|</span>
				<Link href='/'>About Go Boutique</Link>
				<span className='px-2'>|</span>
				<Link href='/'>NewsLetters</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Sustainability</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Press</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Investor Relations</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Accessibility</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Credit Services</Link>
			</div>
		</div>
	);
};

export default AboutUs;
