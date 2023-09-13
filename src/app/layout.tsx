'use client';

import './globals.css';
import { roboto_mono, roboto } from './fonts';
import NavBar from '@/app/components/NavBar/NavBar';
import Footer from '@/app/components/Footer/Footer';
import { useState } from 'react';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isModalOpen, setIsModalOpen] = useState<any>(false);

	const preventScrollHandler = () => {
		setIsModalOpen((prev: any) => !prev);
	};
	return (
		<html lang='en' className={roboto.className}>
			<body
				onClick={() => preventScrollHandler()}
				className={`${isModalOpen ? 'overflow-hidden' : ''}`}
			>
				<div className='flex flex-col min-h-screen max-w-[1750px] m-2'>
					<div className={`sticky top-0 ${roboto.className}`}>
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
