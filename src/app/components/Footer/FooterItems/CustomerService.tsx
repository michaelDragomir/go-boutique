import Link from 'next/link';

const CustomerService = () => {
	return (
		<div className='mb-12'>
			<h3 className='text-base font-bold mb-2 text-center'>Customer Service</h3>
			<div className='flex p1 font-light justify-center'>
				<Link href='/'>Your Account</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Your Orders</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Help</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Store Finder</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Contact Us</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Shipping Policy</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Returns &amp; Exchanges</Link>
				<span className='px-2'>|</span>
				<Link href='/'>FAQs</Link>
			</div>
		</div>
	);
};

export default CustomerService;
