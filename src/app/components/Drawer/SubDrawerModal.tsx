import Link from 'next/link';

const SubDrawerModal = ({ data }: { data: any }) => {
	type String = any;

	//TODO:
	// sanitize item name for url input

	return (
		<>
			<div className=''>
				{data.map((item: String, idx: number) => (
					<div key={idx} className='px-6 hover:bg-slate-100'>
						<ul className='' key={idx}>
							<Link href={`/${item.name}`}>
								<li className='flex items-center justify-between text-slate-100 pt-6 hover:text-slate-800'>
									{item.name}
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
