import SubDrawerModal from './SubDrawerModal';
import * as dropDownItems from '@/app/utils/dropDownItems';

const SubModalCategories = ({ activeTab }: { activeTab: any }) => {
	const innerDrawerToggleHandler = () => {
		console.log('innerDrawerToggleHandler', activeTab);
		switch (activeTab) {
			case 'Clothing':
				return <SubDrawerModal data={dropDownItems.clothing} />;
			case 'Pet Supplies':
				return <SubDrawerModal data={dropDownItems.petSupplies} />;
			case 'Household':
				return <SubDrawerModal data={dropDownItems.household} />;
			case 'Electronics':
				return <SubDrawerModal data={dropDownItems.electronics} />;
			case 'Bath & Body':
				return <SubDrawerModal data={dropDownItems.bathBody} />;
			case 'Toys':
				return <SubDrawerModal data={dropDownItems.toys} />;
			case 'Active':
				return <SubDrawerModal data={dropDownItems.active} />;
			default:
				return null;
		}
	};

	return (
		<div className='h-auto relative top-[170] animate-innerDrawerSlide border border-goGreen text-white'>
			{innerDrawerToggleHandler()}
		</div>
	);
};

export default SubModalCategories;
