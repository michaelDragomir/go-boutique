import {
	GiClothes,
	GiSittingDog,
	GiHouse,
	GiSmartphone,
	GiGingerbreadMan,
	GiBathtub,
} from 'react-icons/gi';
import { FaPersonRunning } from 'react-icons/fa6';

export const navTabItems = [
	{
		icon: <GiClothes className='xl:iconSize5px lg:iconSize4px' />,
		name: 'Clothing',
	},
	{
		icon: <GiSittingDog className='xl:iconSize5px lg:iconSize4px' />,
		name: 'Pet Supplies',
	},
	{
		icon: <GiHouse className='xl:iconSize5px lg:iconSize4px' />,
		name: 'Household',
	},
	{
		icon: <GiSmartphone className='xl:iconSize5px lg:iconSize4px' />,
		name: 'Electronics',
	},
	{
		icon: <GiBathtub className='xl:iconSize5px lg:iconSize4px' />,
		name: 'Bath & Body',
	},
	{
		icon: <GiGingerbreadMan className='xl:iconSize5px lg:iconSize4px' />,
		name: 'Toys',
	},
	{
		icon: <FaPersonRunning className='xl:iconSize5px lg:iconSize4px' />,
		name: 'Sporting Goods',
	},
];
