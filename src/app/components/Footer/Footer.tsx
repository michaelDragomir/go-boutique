import ShopCategories from './FooterItems/ShopCategories';
import CustomerService from './FooterItems/CustomerService';
import AboutUs from './FooterItems/AboutUs';
import SocialMedia from './FooterItems/SocialMedia';
import PaymentProducts from './FooterItems/PaymentProducts';
import { aboreto } from '@/app/fonts';

const Footer = () => {
	return (
		<footer className='bg-black text-slate-200 text-sm mt-16'>
			<div className='mb-6 mt-6 flex justify-center'>
				<div className={`text-3xl pr-2 ${aboreto.className}`}>IVY</div>
				<div className={`text-2xl ${aboreto.className}`}>LABICHE</div>
			</div>
			<div className='sm:flex sm:flex-row sm:justify-center md:justify-center lg:block'>
				<div className='sm:pr-[20px] md:pr-0 phone:text-center tablet:flex tablet:justify-center sm:flex-row lg:block md:mr-12 lg:mr-0'>
					<span className='tablet:pr-12 md:pr-12 lg:pr-0'>
						<ShopCategories />
					</span>
					<CustomerService />
				</div>
				<div className='phone:text-center tablet:flex tablet:justify-center sm:flex-row lg:block md:mr-12 lg:mr-0'>
					<span className='tablet:pr-12 md:pr-12 lg:pr-0'>
						<PaymentProducts />
					</span>
					<AboutUs />
				</div>
			</div>

			<SocialMedia />
		</footer>
	);
};

export default Footer;
