'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

export default function Home() {
	const [products, setProducts] = useState([]);

	// const fetchData = useCallback(async () => {
	// 	const response = await fetch('/api/products');

	// 	const data = await response.json();
	// 	setProducts(data);
	// 	return data;
	// }, []);

	// useEffect(() => {
	// 	fetchData();
	// }, []);

	return (
		<main>
			<div className='flex'>
				<Image
					width={840}
					height={1000}
					src='/assets/images/test1.jpeg'
					alt='image'
				/>

				<Image
					width={840}
					height={1000}
					src='/assets/images/test2.jpeg'
					alt='image'
				/>
			</div>
			<div>
				<Image
					width={1800}
					height={1000}
					src='/assets/images/test3.jpeg'
					alt='image'
				/>
			</div>
		</main>
	);
}
