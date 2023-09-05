import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
	try {
		const response = await fetch('https://fakestoreapi.com/products');
		const data = await response.json();
		return NextResponse.json(data);
	} catch {
		return new Response('no data', { status: 500 });
	}
};
