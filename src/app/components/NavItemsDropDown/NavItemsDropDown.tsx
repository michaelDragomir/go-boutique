import Link from 'next/link';
import Image from 'next/image';

import { aboreto, roboto, roboto_mono, inter } from '@/app/fonts';

const NavItemsDropDown = ({
	items,
	images,
	collections,
}: {
	items: any;
	images: any;
	collections: any;
}) => {
	type String = any;

	//TODO:
	// sanitize item name for url input

	return (
		<div className='flex justify-evenly pt-4'>
			<div className='w-[270px]'>
				{collections.map((item: String, idx: number) => (
					<ul className='pb-2 font-light text-black uppercase' key={idx}>
						<h2 className={`mb-1 font-medium ${inter.className}`}>
							{item.headline}
						</h2>
					</ul>
				))}
			</div>
			<div className='w-[190px]'>
				{items.map((item: String, idx: number) => (
					<ul
						className='pb-2 font-light text-black uppercase text-sm'
						key={idx}
					>
						<Link href={`/${item.name}`}>
							<li className=''>
								<span
									className={`hover:border-b hover:border-b-black font-medium ${inter.className}`}
								>
									{item.name}
								</span>
							</li>
						</Link>
					</ul>
				))}
			</div>
			<div className='flex gap-4'>
				{images.map((item: String, idx: number) => (
					<ul className='pb-2 font-light text-black uppercase' key={idx}>
						<h2 className={`mb-1 font-medium ${inter.className}`}>
							{item.headline}
						</h2>
						<Image
							width={331}
							height={224}
							src={item.image}
							alt='image'
							className='shadow-md'
						/>
					</ul>
				))}
			</div>
		</div>
	);
};

export default NavItemsDropDown;
