import {
	GiClothes,
	GiSittingDog,
	GiHouse,
	GiSmartphone,
	GiHamburgerMenu,
	GiGingerbreadMan,
	GiBathtub,
} from 'react-icons/gi';
import { FaPersonRunning } from 'react-icons/fa6';

import SubTabSlider from './SubTabSlider';
import Container from '@/app/components/Container';

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
		name: 'Bath & Body',
	},
	{
		icon: <GiGingerbreadMan className='w-7 h-7' />,
		name: 'Toys',
	},
	{
		icon: <FaPersonRunning className='w-7 h-7' />,
		name: 'Active',
	},
];

const SubHeaderTabs = () => {
	return (
		<>
			<Container>
				<SubTabSlider tabItems={tabItems} />
			</Container>
		</>
	);
};

export default SubHeaderTabs;
