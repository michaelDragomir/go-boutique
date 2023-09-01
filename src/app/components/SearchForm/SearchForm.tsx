'use client';

import { IoSearchSharp } from 'react-icons/io5';
const SearchForm = () => {
	return (
		<div className='flex items-center'>
			<form
				onSubmit={() => console.log('form submit')}
				noValidate
				className='w-full text-center flex justify-center items-center'
			>
				<input
					required
					className={`w-full h-9 placeholder:text-slate-400 block bg-slate-100 border border-slate-300 rounded-l-lg py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm`}
					placeholder='Explore Go Boutique...'
					type='text'
					// value={inputFieldValue}
					// onChange={(e) => onChangeValueHandler(e)}
				/>
				<button
					type='submit'
					className='h-9 rounded-r-lg border border-gray-700 bg-gray-800 px-3 py-2 text-center text-sm font-medium text-white shadow-sm hover:border-gray-900 hover:bg-gray-900'
				>
					<span className='text-[#57F8AB]'>
						<IoSearchSharp className='iconSize5px' />
					</span>
				</button>
			</form>
		</div>
	);
};

export default SearchForm;
