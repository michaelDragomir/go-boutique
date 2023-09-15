import nodemailer from 'nodemailer';

const emailENV = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: emailENV,
		pass: pass,
	},
});

export const POST = async (req) => {
	const { email } = await req.json();
	if (req.method === 'POST') {
		const mailOptions = {
			from: emailENV,
			to: email,
			subject: 'Hello ✔',
			text: 'Hello world?',
			html: '<b>Hello world?</b>',
		};

		try {
			transporter.sendMail(mailOptions, (error) => {
				if (error) {
					console.log('NNNOOOOOOOOOOOOOO', error);
					new Response('Email sending failed', { status: 500 });
				} else {
					console.log('IT WORKED');
					new Response('Email sent successfully', { status: 200 });
				}
			});
			return new Response(JSON.stringify(email), { status: 201 });
		} catch (error) {
			return new Response('no data', { status: 500 });
		}
	} else {
		return new Response('no data', { status: 500 });
	}
};
