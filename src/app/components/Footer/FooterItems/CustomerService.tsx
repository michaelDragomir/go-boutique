import Link from 'next/link';

const CustomerService = () => {
	return (
		<div className='mb-12'>
			<h3 className='text-base font-bold mb-2 text-center underline underline-offset-1'>
				Customer Service
			</h3>
			<div className='flex p1 font-light justify-center'>
				<Link className='pr-2' href='/'>
					Your Account <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Your Orders <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Help <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Store Finder <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Contact Us <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Shipping Policy <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Returns &amp; Exchanges <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					FAQs
				</Link>
			</div>
		</div>
	);
};

export default CustomerService;
