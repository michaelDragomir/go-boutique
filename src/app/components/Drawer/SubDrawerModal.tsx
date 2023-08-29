import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

const subDrawerModal = ({ data }: { data: any }) => {
	type String = any;

	//TODO:
	// sanitize item name for url input

	return (
		<div>
			<div className='mt-3 px-3 flex items-center'>
				<IoIosArrowBack className='iconSize8px text-goPink' />
				<h2>Back to Menu</h2>
			</div>
			{data.map((item: String, idx: number) => (
				<div className='px-6 hover:bg-slate-100'>
					<ul className='' key={idx}>
						<Link href={`/${item.name}`}>
							<li className='flex items-center justify-between text-slate-100 pt-6 py-2 hover:text-slate-800'>
								{item.name}
							</li>
						</Link>
					</ul>
				</div>
			))}
		</div>
	);
};

export default subDrawerModal;
