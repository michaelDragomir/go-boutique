import ShopCategories from './FooterItems/ShopCategories';
import CustomerService from './FooterItems/CustomerService';
import AboutUs from './FooterItems/AboutUs';
import SocialMedia from './FooterItems/SocialMedia';
import PaymentProducts from './FooterItems/PaymentProducts';
import { aboreto } from '@/app/fonts';

const Footer = () => {
	return (
		<footer className='bg-[url(/assets/images/laImage.jpg)] bg-cover opacity-70 text-slate-200 text-sm mt-16'>
			<div className='mt-6 flex justify-center'>
				<span className={`text-3xl text-white ${aboreto.className}`}>
					PIERRE
				</span>
				<span
					className={`phone:hidden md:block text-3xl text-white ${aboreto.className}`}
				>
					-
				</span>
				<span className={`text-3xl text-white ${aboreto.className}`}>
					LABICHE
				</span>
			</div>
			<div className='tracking-[.2em] text-white text-center mb-6'>PARIS</div>
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
