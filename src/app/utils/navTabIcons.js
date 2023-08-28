import {
	GiClothes,
	GiSittingDog,
	GiHouse,
	GiSmartphone,
	GiGingerbreadMan,
	GiBathtub,
} from 'react-icons/gi';
import { FaPersonRunning } from 'react-icons/fa6';
import { CgMenuGridR } from 'react-icons/cg';

export const navTabItems = [
	{
		icon: <CgMenuGridR className='iconSize5px' />,
		name: 'Categories',
	},
	{
		icon: <GiClothes className='iconSize5px' />,
		name: 'Clothing',
	},
	{
		icon: <GiSittingDog className='iconSize5px' />,
		name: 'Pet Supplies',
	},
	{
		icon: <GiHouse className='iconSize5px' />,
		name: 'Household',
	},
	{
		icon: <GiSmartphone className='iconSize5px' />,
		name: 'Electronics',
	},
	{
		icon: <GiBathtub className='iconSize5px' />,
		name: 'Bath & Body',
	},
	{
		icon: <GiGingerbreadMan className='iconSize5px' />,
		name: 'Toys',
	},
	{
		icon: <FaPersonRunning className='iconSize5px' />,
		name: 'Active',
	},
];
