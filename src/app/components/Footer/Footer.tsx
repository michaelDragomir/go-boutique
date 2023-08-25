const Footer = () => {
	return (
		<footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
			<div className=' max-w-[1770px] mx-auto xl:px-20 md:px-2 px-4'>
				<div className='flex flex-col md:flex-row justify-center pt-16 pb-8'>
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
					<div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2'>
						<h3 className='text-base font-bold mb-2'>About Us</h3>
						<p className='mb-2'>Some Go Boutique text</p>
						<p className='text-sm'>© 2023</p>
					</div>
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
				</div>
			</div>
			<div className='border-t-2 border-slate-400 flex justify-center p-4'>
				<div className='flex gap-2'>
					<a href='#'>
						<svg
							stroke='currentColor'
							fill='currentColor'
							stroke-width='0'
							viewBox='0 0 24 24'
							height='24'
							width='24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path fill='none' d='M0 0h24v24H0z'></path>
							<path d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z'></path>
						</svg>
					</a>
					<a href='#'>
						<svg
							stroke='currentColor'
							fill='currentColor'
							stroke-width='0'
							viewBox='0 0 1024 1024'
							height='24'
							width='24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z'></path>
						</svg>
					</a>
					<a href='#'>
						<svg
							stroke='currentColor'
							fill='currentColor'
							stroke-width='0'
							viewBox='0 0 1024 1024'
							height='24'
							width='24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z'></path>
						</svg>
					</a>
					<a href='#'>
						<svg
							stroke='currentColor'
							fill='currentColor'
							stroke-width='0'
							viewBox='0 0 1024 1024'
							height='24'
							width='24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z'></path>
						</svg>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
