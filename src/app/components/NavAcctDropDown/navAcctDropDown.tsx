import Link from 'next/link';

const NavDropDown = () => {
	return (
		<div
			className={`rounded-md drop-shadow-md w-[159px] bg-white overflow-hidden right-0 top-30 text-sm flex flex-col cursor-pointer`}
		>
			<div>
				<Link href='/login'>
					<p className='text-slate-500 px-3 py-2 hover:underline hover:underline-offset-4 hover:text-goGreen'>
						Sign In
					</p>
				</Link>
				<Link href='/register'>
					<p className='text-slate-500 px-3 py-2 hover:underline hover:underline-offset-4 hover:text-goGreen'>
						Create Account
					</p>
				</Link>
			</div>
		</div>
	);
};

export default NavDropDown;
