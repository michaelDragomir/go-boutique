import Link from 'next/link';
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillTwitterCircle,
	AiFillYoutube,
} from 'react-icons/ai';

const SocialMedia = () => {
	return (
		<div className='border-t-2 border-slate-400 flex justify-center p-4'>
			<div className='flex gap-2'>
				<Link href='/'>
					<AiFillFacebook className='w-5 h-5' />
				</Link>
				<Link href='/'>
					<AiFillInstagram className='w-5 h-5' />
				</Link>
				<Link href='/'>
					<AiFillTwitterCircle className='w-5 h-5' />
				</Link>
				<Link href='/'>
					<AiFillYoutube className='w-5 h-5' />
				</Link>
			</div>
			<div className='pl-8 font-extralight text-sm'>
				&#169; 2023, Go Boutique, Inc.
			</div>
		</div>
	);
};

export default SocialMedia;
