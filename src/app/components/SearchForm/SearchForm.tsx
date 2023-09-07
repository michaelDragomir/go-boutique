'use client';

import { CiSearch } from 'react-icons/ci';
const SearchForm = () => {
	return (
		<div className='flex items-center relative justify-end'>
			<form
				onSubmit={() => console.log('form submit')}
				noValidate
				className='w-6/12 text-center flex justify-end items-center'
			>
				<input
					required
					className={`w-52 h-9 justify-end placeholder:text-black block bg-slate-200 rounded-full py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:ring-gray-900 focus:ring-1 sm:text-sm pl-8`}
					placeholder='Search'
					type='text'
					// value={inputFieldValue}
					// onChange={(e) => onChangeValueHandler(e)}
				/>
				<CiSearch className='absolute top-[8px] right-[16px] iconSize5px' />
			</form>
		</div>
	);
};

export default SearchForm;
