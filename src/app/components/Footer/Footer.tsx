import ShopCategories from './FooterItems/ShopCategories';
import CustomerService from './FooterItems/CustomerService';
import AboutUs from './FooterItems/AboutUs';
import SocialMedia from './FooterItems/SocialMedia';
import PaymentProducts from './FooterItems/PaymentProducts';
import Container from '../Container';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
			<Container>
				<div className=''>
					<div className='mb-6 mt-6 flex justify-center'>
						<Image
							src='/assets/images/goImageDark.png'
							width={75}
							height={75}
							alt='go Image'
						/>
					</div>
					<div className='md:flex md:justify-evenly lg:block'>
						<ShopCategories />
						<CustomerService />
						<PaymentProducts />
						<AboutUs />
					</div>
				</div>

				<SocialMedia />
			</Container>
		</footer>
	);
};

export default Footer;

// w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2
// grid gap-4 grid-cols-2
