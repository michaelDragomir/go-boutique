'use client';

import './globals.css';
import { useState } from 'react';
import { roboto_mono, roboto, inter } from './fonts';

import NavBar from '@/app/components/NavBar/NavBar';
import Footer from '@/app/components/Footer/Footer';
import NewsLetterSignUp from '@/app/components/NewsLetterSIgnUp/NewsLetterSignUp';
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isDrawerOpen, setIsDrawerOpen] = useState<any>(false);

	const preventScrollHandler = () => {
		setIsDrawerOpen((prev: any) => !prev);
	};
	return (
		<html lang='en' className={roboto.className}>
			<body
				onClick={() => preventScrollHandler()}
				className={`${isDrawerOpen ? 'overflow-hidden' : ''}`}
			>
				<div className='flex flex-col min-h-screen mx-auto max-w-[1750px] m-2'>
					<div className={`sticky top-0 ${roboto.className}`}>
						<NavBar />
					</div>
					<main className={`flex-grow ${roboto_mono.className}`}>
						{children}
					</main>
					<NewsLetterSignUp />
					<div className={`tracking-[.05em] ${inter.className}`}>
						<Footer />N
					</div>
				</div>
			</body>
		</html>
	);
}
