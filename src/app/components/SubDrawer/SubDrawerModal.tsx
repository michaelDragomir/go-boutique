import Link from 'next/link';

const subDrawerModal = ({ data }: { data: any }) => {
	type String = any;

	//TODO:
	// sanitize item name for url input

	return (
		<div className=''>
			{data.map((item: String, idx: number) => (
				<ul className='' key={idx}>
					<Link href={`/${item.name}`}>
						<li className=''>{item.name}</li>
					</Link>
				</ul>
			))}
		</div>
	);
};

export default subDrawerModal;
