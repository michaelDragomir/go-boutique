import * as dropDownItems from '@/app/utils/dropDownItems';
import { IoIosArrowForward } from 'react-icons/io';

const ModalCategories = () => {
	return (
		<>
			{dropDownItems.categories.map((item: any, idx: any) => (
				<div key={idx} className='px-6 hover:bg-slate-100 cursor-pointer'>
					<ul>
						<li className='flex items-center justify-between text-slate-100 pt-6 py-2 hover:text-slate-800'>
							{item.name}
							<span className='text-goGreen'>
								<IoIosArrowForward />
							</span>
						</li>
					</ul>
				</div>
			))}
		</>
	);
};

export default ModalCategories;
