import './globals.css';
import type { Metadata } from 'next';
import { inter, roboto_mono, alata, roboto } from './fonts';
import NavBar from '@/app/components/NavBar/NavBar';
import Footer from '@/app/components/Footer/Footer';

export const metadata: Metadata = {
	title: 'Go Boutique',
	description: 'An online shopping experience.',
	icons: {
		icon: {
			url: '/icon.svg',
			type: 'image/svg',
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={roboto.className}>
			<body>
				<div className='flex flex-col min-h-screen'>
					<div className={`bg-black ${roboto.className}`}>
						<NavBar />
					</div>
					<main className={`flex-grow ${roboto_mono.className}`}>
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
