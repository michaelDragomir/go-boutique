import { createTransport } from 'nodemailer';

const NewsLetterSignUp = () => {
	const transporter = createTransport({
		service: 'gmail',
		auth: {
			user: 'michaeldragomir@gmail.com',
			pass: 'Dinkledoink1!',
		},
	});

	const mailOptionsFun = (e: any) => {
		const mailOptions = {
			from: 'pierrelabichel@pierrelabiche.com',
			to: e.target.value,
			subject: 'Thanks for subscribing!',
			text: 'Welcome to our email list. We will keep you updated with the latest news and promotions.',
		};

		return mailOptions;
	};

	const test = (e: any) => {
		transporter.sendMail(mailOptionsFun(e), (error, info) => {
			if (error) {
				console.log('Error:', error);
			} else {
				console.log('Email sent:', info.response);
			}
		});
	};

	return (
		<>
			<div className='text-center'>
				<div>
					<h2 className='uppercase pb-2'>
						subscibe to our newsletter and receive an extra 15% off your first
						order.
					</h2>
					<p className='text-[12px] text-zinc-500'>
						BE THE FIRST TO KNOW ABOUT OUR LATEST NEWS AND PROMOTIONS.
					</p>
				</div>
			</div>
			<div className='text-center'>
				<input
					type='email'
					placeholder='Enter your email'
					onChange={(e) => test(e.target.value)}
					required
					className='w-72 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#BBA14F] shadow-sm rounded-full text-sm'
				/>
				<button
					type='submit'
					onClick={test}
					className='w-20 ml-3 px-3 py-2 text-white text-sm bg-black hover:bg-zinc-600 rounded-full duration-150'
				>
					Sign Up
				</button>
			</div>
		</>
	);
};

export default NewsLetterSignUp;
