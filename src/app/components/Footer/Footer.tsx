import ShopCategories from './FooterItems/Categories';
import CustomerService from './FooterItems/CustomerService';
import AboutUs from './FooterItems/AboutUs';
import SocialMedia from './FooterItems/SocialMedia';
import PaymentProducts from './FooterItems/PaymentProducts';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
			<div className=' max-w-[1770px] mx-auto xl:px-20 md:px-2 px-4'>
				<div className='pt-8 pb-4'>
					<div className='flex p1 font-light justify-center mb-6'>
						<Image
							src='/assets/images/goImageDark.png'
							width={75}
							height={75}
							alt='go Image'
						/>
					</div>
					<ShopCategories />
					<CustomerService />
					<PaymentProducts />
					<AboutUs />
				</div>
			</div>
			<SocialMedia />
		</footer>
	);
};

export default Footer;

// w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2
