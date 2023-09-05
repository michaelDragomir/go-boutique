// import Image from 'next/image';
'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

export default function Home() {
	const [products, setProducts] = useState([]);

	const fetchData = useCallback(async () => {
		const response = await fetch('/api/products');

		const data = await response.json();
		setProducts(data);
		return data;
	}, []);

	useEffect(() => {
		fetchData();
	}, []);

	console.log(
		'PRODUCTS',
		products.map((item: any) => item),
	);

	return (
		<main className='p-8'>
			{/* <div className='max-w-[1550px] xl:px-10 md:px-4 px-4'>Main Page</div>
			 */}
			{products.map((item: any, idx: any) => (
				<ul key={idx}>
					<li>{item.title}</li>
					<Image src={item.image} width={300} height={200} alt={item.title} />
				</ul>
			))}
		</main>
	);
}
