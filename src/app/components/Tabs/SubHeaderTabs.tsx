import SubTabSlider from './SubTabSlider';
import { navTabItems } from '@/app/utils/navTabIcons';

const SubHeaderTabs = () => {
	return (
		<>
			<SubTabSlider navTabItems={navTabItems} />
		</>
	);
};

export default SubHeaderTabs;
