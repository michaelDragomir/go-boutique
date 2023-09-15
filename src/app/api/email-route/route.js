import nodemailer from 'nodemailer';

const emailENV = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
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
			to: email,
			subject: 'Welcome to Pierre Labiche fake Newsletter.',
			text: 'I am a fullstack javascript engineer.  This is my full stack, fully functional e-commerce portfolio site.  stack: next.js, typescript, tailwind css, mongo, prisma, graphql, stripe, next auth, nodemailer.',
		};

		try {
			transporter.sendMail(mailOptions, (error) => {
				if (error) {
					new Response('Email sending failed', { status: 500 });
				} else {
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
