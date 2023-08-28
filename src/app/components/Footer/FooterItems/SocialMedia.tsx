import Link from 'next/link';
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillTwitterCircle,
	AiFillYoutube,
} from 'react-icons/ai';

const SocialMedia = () => {
	return (
		<div className='border-t border-slate-400 flex justify-center p-4'>
			<div className='flex gap-2'>
				<Link href='/'>
					<AiFillFacebook className='iconSize5px' />
				</Link>
				<Link href='/'>
					<AiFillInstagram className='iconSize5px' />
				</Link>
				<Link href='/'>
					<AiFillTwitterCircle className='iconSize5px' />
				</Link>
				<Link href='/'>
					<AiFillYoutube className='iconSize5px' />
				</Link>
			</div>
			<div className='pl-8 font-extralight text-sm'>
				&#169; 2023, Go Boutique, Inc.
			</div>
		</div>
	);
};

export default SocialMedia;
