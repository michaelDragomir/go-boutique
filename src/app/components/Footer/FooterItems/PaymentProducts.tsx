import Link from 'next/link';

const PaymentProducts = () => {
	return (
		<div className='mb-6'>
			<h3 className='text-base font-bold text-center'>Payment Products</h3>
			<div className='flex p1 font-light justify-center'>
				<Link href='/'>Go Visa</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Go Store Card</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Go Secured Card</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Go Business Card</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Shop with Points</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Reload Your Balance</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Gift Cards</Link>
				<span className='px-2'>|</span>
				<Link href='/'>Go Currency Converter</Link>
			</div>
		</div>
	);
};

export default PaymentProducts;
