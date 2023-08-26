import Link from 'next/link';

const PaymentProducts = () => {
	return (
		<div className='mb-12'>
			<h3 className='text-base font-bold mb-2 text-center underline underline-offset-1'>
				Payment Products
			</h3>
			<div className='flex p1 font-light justify-center'>
				<Link className='pr-2' href='/'>
					Go Visa <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Go Store Card <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Go Secured Card <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Go Business Card <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Shop with Points <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Reload Your Balance <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Gift Cards <span className='pl-2'>|</span>
				</Link>
				<Link className='pr-2' href='/'>
					Go Currency Converter
				</Link>
			</div>
		</div>
	);
};

export default PaymentProducts;
