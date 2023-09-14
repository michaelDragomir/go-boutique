import Link from 'next/link';
import Image from 'next/image';

import { roboto } from '@/app/fonts';

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
			<div className='w-[275px]'>
				{collections.map((item: String, idx: number) => (
					<ul className='pb-2 font-light text-black uppercase' key={idx}>
						<Link href={`/${item.name}`}>
							<li
								className={`mb-1 tracking-[.05em] hover:text-slate-400 ${roboto.className}`}
							>
								{item.headline}
							</li>
						</Link>
					</ul>
				))}
			</div>
			<div className='w-[190px]'>
				{items.map((item: String, idx: number) => (
					<ul className='pb-2 font-light text-black uppercase ' key={idx}>
						<Link href={`/${item.name}`}>
							<li className=''>
								<span
									className={`hover:text-slate-400 font-light text-sm tracking-[.1em] ${roboto.className}`}
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
						<Link href={`/${item.name}`}>
							<h2 className={`mb-1 ${roboto.className}`}>{item.headline}</h2>
						</Link>
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
