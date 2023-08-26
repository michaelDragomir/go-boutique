import Link from 'next/link';

const AboutUs = () => {
	return (
		<div className='mb-6'>
			<h3 className='text-base font-bold mb-2 text-center underline underline-offset-1'>
				About Us
			</h3>
			<div className='flex p1 font-light justify-center'>
				<Link className='pr-2' href='/'>
					Careers <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					About Go Boutique <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					NewsLetters <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Sustainability <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Press <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Investor Relations <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Accessibility <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Credit Services
				</Link>
			</div>
		</div>
	);
};

export default AboutUs;
