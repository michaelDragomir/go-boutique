import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				slideDown: {
					'0%': {
						transform: 'translateY(-25%)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1',
					},
				},
				slideUp: {
					'0%': {
						transform: 'translateY(0)',
						opacity: '1',
					},
					'100%': {
						transform: 'translateY(-25%)',
						opacity: '0',
					},
				},
			},
			animation: {
				slideDown: 'slideDown .25s forwards',
				slideUp: 'slideUp .5s ease-in',
			},

			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				goGreen: '#00BF63',
				goPink: '#FF66C4',
			},
		},
	},
	plugins: [],
};
export default config;
