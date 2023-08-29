import SubDrawerModal from './SubDrawerModal';
import * as dropDownItems from '@/app/utils/dropDownItems';

const SubModalCategories = ({
	activeTab,
	test,
}: {
	activeTab: any;
	test: boolean;
}) => {
	console.log('!!!@@@', test);
	const innerDrawerToggleHandler = (activeTab: any) => {
		switch (activeTab) {
			case 'Clothing':
				return <SubDrawerModal test={test} data={dropDownItems.clothing} />;
			case 'Pet Supplies':
				return <SubDrawerModal test={test} data={dropDownItems.petSupplies} />;
			case 'Household':
				return <SubDrawerModal test={test} data={dropDownItems.household} />;
			case 'Electronics':
				return <SubDrawerModal test={test} data={dropDownItems.electronics} />;
			case 'Bath & Body':
				return <SubDrawerModal test={test} data={dropDownItems.bathBody} />;
			case 'Toys':
				return <SubDrawerModal test={test} data={dropDownItems.toys} />;
			case 'Active':
				return <SubDrawerModal test={test} data={dropDownItems.active} />;
			default:
				return null;
		}
	};

	return (
		<div className='h-auto relative top-[8px] animate-innerDrawerSlide text-white'>
			{innerDrawerToggleHandler(activeTab)}
		</div>
	);
};

export default SubModalCategories;
