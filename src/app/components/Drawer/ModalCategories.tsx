import * as dropDownItems from '@/app/utils/dropDownItems';
import { IoIosArrowForward } from 'react-icons/io';

const ModalCategories = ({ subModalOnClick }: { subModalOnClick: any }) => {
	return (
		<>
			{dropDownItems.categories.map((item: any, idx: any) => (
				<>
					<div
						className='px-6 hover:bg-slate-100 cursor-pointer'
						onClick={() => subModalOnClick(item.name)}
					>
						<ul key={idx}>
							<li className='flex items-center justify-between text-slate-100 pt-6 py-2 hover:text-slate-800'>
								{item.name}
								<span className='text-goGreen'>
									<IoIosArrowForward />
								</span>
							</li>
						</ul>
					</div>
				</>
			))}
		</>
	);
};

export default ModalCategories;
