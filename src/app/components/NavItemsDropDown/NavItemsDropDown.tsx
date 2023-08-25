const NavItemsDropDown = ({ props }: { props: any }) => {
	console.log('PROPS', props);

	return (
		<div className='rounded-md drop-shadow-md w-[159px] bg-white overflow-hidden text-sm flex flex-col cursor-pointer border border-goGreen relative z-50 right-[-30px] top-[20px]'>
			DROP DOWN MENU
		</div>
	);
};

export default NavItemsDropDown;
