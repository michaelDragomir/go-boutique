import SubTabSlider from './SubTabSlider';
import { navTabIcons } from '@/app/utils/navTabIcons';

const SubHeaderTabs = () => {
	return (
		<>
			<SubTabSlider tabItems={navTabIcons} />
		</>
	);
};

export default SubHeaderTabs;
