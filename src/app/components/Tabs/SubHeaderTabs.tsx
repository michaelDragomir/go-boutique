import SubTabSlider from './SubTabSlider';
import Container from '@/app/components/Container';
import { navTabIcons } from '@/app/utils/navTabIcons';

console.log('@@@', navTabIcons);
const SubHeaderTabs = () => {
	return (
		<>
			<Container>
				<SubTabSlider tabItems={navTabIcons} />
			</Container>
		</>
	);
};

export default SubHeaderTabs;
