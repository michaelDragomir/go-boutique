import Link from 'next/link';
import * as SocialMediaIcons from '@/app/utils/footerItems';

const SocialMedia = () => {
	const { socialMedia } = SocialMediaIcons;
	return (
		<div className='border-t border-slate-400 flex justify-center p-4 text-white'>
			<div className='flex gap-2'>
				{socialMedia.map((icon: any, idx: any) => (
					<ul key={idx}>
						<Link href='/'>
							<li>{icon.icon}</li>
						</Link>
					</ul>
				))}
			</div>
			<div className='pl-8 font-extralight text-sm'>
				&#169; 2023, Go Boutique, Inc.
			</div>
		</div>
	);
};

export default SocialMedia;
