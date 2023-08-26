import ShopCategories from './FooterItems/Categories';
import CustomerService from './FooterItems/CustomerService';
import AboutUs from './FooterItems/AboutUs';
import SocialMedia from './FooterItems/SocialMedia';
import PaymentProducts from './FooterItems/PaymentProducts';

const Footer = () => {
	return (
		<footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
			<div className=' max-w-[1770px] mx-auto xl:px-20 md:px-2 px-4'>
				<div className='pt-16 pb-6'>
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
