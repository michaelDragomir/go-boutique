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
				</div>

				<SocialMedia />
			</Container>
		</footer>
	);
};

export default Footer;
