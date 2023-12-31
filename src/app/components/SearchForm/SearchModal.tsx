//file not being used. but wanted to keep it as reference.
import { createPortal } from 'react-dom';
import SearchForm from './SearchForm';

const SearchModal = () => {
	return createPortal(
		<>
			<div className='phone:block sm:hidden w-11/12 mt-[40px] p-4 z-aboveAll absolute top-[50px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border bg-white rounded-md'>
				<div className='w-full mx-auto'>
					<SearchForm />
				</div>
			</div>
		</>,

		document.body,
	);
};

export default SearchModal;
