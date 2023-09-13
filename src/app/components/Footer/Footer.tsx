import TheBrand from './FooterItems/TheBrand';
import CustomerService from './FooterItems/CustomerService';
import AboutUs from './FooterItems/AboutUs';
import SocialMedia from './FooterItems/SocialMedia';
import ContactInfo from './FooterItems/ContactInfo';
import { aboreto } from '@/app/fonts';

const Footer = () => {
	return (
		<footer className='bg-[url(/assets/images/parisImage.webp)] filter z-1 grayscale bg-cover bg-center text-slate-200 text-sm mt-16'>
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
			<div className='flex justify-evenly'>
				<div>
					<AboutUs />
				</div>
				<div className=''>
					<TheBrand />
				</div>
				<div>
					<CustomerService />
				</div>
				<div>
					<ContactInfo />
				</div>
			</div>
			<SocialMedia />
		</footer>
	);
};

export default Footer;
