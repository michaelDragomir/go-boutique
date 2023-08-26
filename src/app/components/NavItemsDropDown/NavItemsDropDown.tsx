const NavItemsDropDown = ({ props }: { props: any }) => {
	console.log('PROPS', props);

	type String = any;

	return (
		<div className='rounded-md drop-shadow-md w-[159px] bg-white text-sm absolute right-[-30px] top-[17px]'>
			{props.map((item: String, idx: number) => (
				<div key={idx}>{item.name}</div>
			))}
		</div>
	);
};

export default NavItemsDropDown;
