import SubTabSlider from './SubTabSlider';
import { navTabIcons } from '@/app/utils/navTabIcons';

console.log('@@@', navTabIcons);
const SubHeaderTabs = () => {
	return (
		<>
			<SubTabSlider tabItems={navTabIcons} />
		</>
	);
};

export default SubHeaderTabs;
