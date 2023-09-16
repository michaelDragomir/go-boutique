import nodemailer from 'nodemailer';
import { SES } from '@aws-sdk/client-ses';

export const POST = async (req) => {
	const { email } = await req.json();
	if (req.method === 'POST') {
		const ses = new SES({
			region: 'us-east-2',
			credentials: {
				accessKeyId: process.env.ACCESS_KEY_ID,
				secretAccessKey: process.env.SECRET_ACCESS_KEY,
			},
		});

		const transporter = nodemailer.createTransport({
			SES: { ses, aws: { region: 'us-east-2' } },
		});

		const mailOptions = {
			from: 'michaeldragomir@gmail.com',
			to: email,
			subject: 'Welcome to Pierre Labiche fake Newsletter.',
			text: 'I am a fullstack javascript engineer.  This is my full stack, fully functional e-commerce portfolio site.  stack: next.js, typescript, tailwind css, mongo, prisma, graphql, stripe, next auth, nodemailer.',
			returnPath: 'michaeldragomir@gmail.com',
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

// sanity.io - cms prfeormance cdns..how they deliver the content. how much does it cost? how do they deleiver things..what do they use? how does it work..impact/benefit.
// cms.
// programmatic SEO!!!!!!!!

// jobs and accomodataions..what's the latest and greatest scrapping tool for node js.  how do we architecture it? who what when where why?
// read through seo docs in next .js
