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
import { CgMenuGridR } from 'react-icons/cg';

import SubTabSlider from './SubTabSlider';
import Container from '@/app/components/Container';

const tabItems = [
	{
		icon: <CgMenuGridR className='w-5 h-5' />,
		name: 'All',
	},
	{
		icon: <GiClothes className='w-5 h-5' />,
		name: 'Clothing',
	},
	{
		icon: <GiSittingDog className='w-5 h-5' />,
		name: 'Pet Supplies',
	},
	{
		icon: <GiHouse className='w-5 h-5' />,
		name: 'Household',
	},
	{
		icon: <GiSmartphone className='w-5 h-5' />,
		name: 'Electronics',
	},
	{
		icon: <GiBathtub className='w-5 h-5' />,
		name: 'Bath & Body',
	},
	{
		icon: <GiGingerbreadMan className='w-5 h-5' />,
		name: 'Toys',
	},
	{
		icon: <FaPersonRunning className='w-5 h-5' />,
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
