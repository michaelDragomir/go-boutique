const Footer = () => {
	return (
		<footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
			<div className=' max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4'>
				<div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
					<div className=' w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2'>
						<h3 className='text-base font-bold mb-2'>Shop Categories</h3>
						<a href='#'>Clothing</a>
						<a href='#'>Pet Supplies</a>
						<a href='#'>Household</a>
						<a href='#'>Electronics</a>
						<a href='#'>Bath & Body</a>
						<a href='#'>Toys</a>
						<a href='#'>Active</a>
					</div>
					<div className=' w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2'>
						<h3 className='text-base font-bold mb-2'>Customer Service</h3>
						<a href='#'>Contact Us</a>
						<a href='#'>Shipping Policy</a>
						<a href='#'>Returns &amp; Exchanges</a>
						<a href='#'>FAQs</a>
					</div>
					<div className='w-full md:w-1/3 mb-6 md:mb-0'>
						<h3 className='text-base font-bold mb-2'>About Us</h3>
						<p className='mb-2'>Some Go Boutique text</p>
						<p className='text-sm'>© 2023</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
