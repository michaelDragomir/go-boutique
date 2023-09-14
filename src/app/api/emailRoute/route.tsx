import { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');

type UserData = {
	email: any;
};

export const POST = async (
	req: NextApiRequest,
	res: NextApiResponse<UserData>,
) => {
	if (req.method === 'POST') {
		const { email } = req.body;
		console.log('EMAIL', req.body);
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'michaeldragomir@gmail.com',
				pass: 'Dinkledoink1!',
			},
		});

		const mailOptions = {
			from: 'pierrelabiche@gmail.com',
			to: email,
			subject: 'Welcome to Pierre Labiche',
			text: 'Save your money...',
		};

		transporter.sendMail(mailOptions, (error: any, info: any) => {
			if (error) {
				console.log('Error:', error);
				// res.status(500).send('Email sending failed');
			} else {
				console.log('Email sent:', info.response);
				// res.status(200).send('Email sent successfully');
			}
		});
	} else {
		res.status(405).end();
	}
};
