import Link from 'next/link';

const SubDrawerModal = ({ data }: { data: any }) => {
	type String = any;

	//TODO:
	// sanitize item name for url input

	return (
		<>
			<div className=''>
				{data.map((item: String, idx: number) => (
					<div key={idx} className='px-6'>
						<ul className='' key={idx}>
							<Link href={`/${item.name}`}>
								<li className='flex items-center justify-between text-white hover:text-slate-100 pt-6'>
									<span className='hover:border-b h-[20px]'>{item.name}</span>
								</li>
							</Link>
						</ul>
					</div>
				))}
			</div>
		</>
	);
};

export default SubDrawerModal;
