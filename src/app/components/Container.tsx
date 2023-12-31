type ContainerProps = {
	children: React.ReactNode;
};
const Container = ({ children }: ContainerProps) => {
	return <div className='max-w-[1550px] mx-auto bg-black'>{children}</div>;
};

export default Container;
