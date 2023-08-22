import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import NavBar from '@/app/components/NavBar/NavBar';
import Footer from '@/app/components/Footer/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500'] });

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
		<html lang='en'>
			<body className={poppins.className}>
				<main>
					<NavBar />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
