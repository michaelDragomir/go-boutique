import DrawerLayout from '@/app/components/Layout';
import ModalCategories from './ModalCategories';
import SubModalCategories from './SubModalCategories';

import { IoIosArrowForward } from 'react-icons/io';

const SideDrawer = ({
	isModalOpen,
	isSubDrawerModalOpen,
	onClick,
	subModalOnClick,
	activeTab,
}: {
	isModalOpen: boolean;
	isSubDrawerModalOpen: boolean;
	onClick: Function;
	subModalOnClick: Function;
	activeTab: any;
}) => {
	return (
		<div
			className={`w-[300px] h-screen bg-slate-700 z-sideDrawer absolute left-0 top-0 drop-shadow-md ${
				isModalOpen ? 'animate-drawerSlideIn' : 'animate-drawerSlideOut'
			}`}
		>
			<DrawerLayout closeModal={onClick}>
				{isModalOpen && !isSubDrawerModalOpen ? (
					<ModalCategories subModalOnClick={subModalOnClick} />
				) : (
					<SubModalCategories activeTab={activeTab} />
				)}
			</DrawerLayout>
		</div>
	);
};

export default SideDrawer;
