import {
	GiClothes,
	GiSittingDog,
	GiHouse,
	GiSmartphone,
	GiHamburgerMenu,
	GiGingerbreadMan,
	GiBathtub,
} from 'react-icons/gi';

import SubTabSlider from './SubTabSlider';

const tabItems = [
	{
		icon: <GiHamburgerMenu className='w-7 h-7' />,
		name: 'All',
	},
	{
		icon: <GiClothes className='w-7 h-7' />,
		name: 'Clothing',
	},
	{
		icon: <GiSittingDog className='w-7 h-7' />,
		name: 'Pet Supplies',
	},
	{
		icon: <GiHouse className='w-7 h-7' />,
		name: 'Household',
	},
	{
		icon: <GiSmartphone className='w-7 h-7' />,
		name: 'Electronics',
	},
	{
		icon: <GiBathtub className='w-7 h-7' />,
		name: 'Health & Beauty',
	},
	{
		icon: <GiGingerbreadMan className='w-7 h-7' />,
		name: 'Toys',
	},
];

const SubHeaderTabs = () => {
	return (
		<>
			<div className='box-border max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4'>
				<SubTabSlider tabItems={tabItems} />
			</div>
		</>
	);
};

export default SubHeaderTabs;
