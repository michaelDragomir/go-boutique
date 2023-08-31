import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			phone: '375px',
			tablet: '500px',
			searchBreak: '700px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			zIndex: {
				overlay: '9998',
				sideDrawer: '9999',
			},
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
				drawerSlideIn: {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
				},
				drawerSlideOut: {
					'0%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
					'100%': {
						transform: 'translateX(-100%)',
						opacity: '0',
					},
				},
				innerDrawerSlideIn: {
					'0%': {
						transform: 'translateX(100%)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
				},
				innerDrawerSlideOut: {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
				},
			},
			animation: {
				slideDown: 'slideDown .25s forwards',
				drawerSlideIn: 'drawerSlideIn .25s forwards',
				drawerSlideOut: 'drawerSlideOut .25s forwards',
				innerDrawerSlideIn: 'innerDrawerSlideIn .25s ease-in-out',
				innerDrawerSlideOut: 'innerDrawerSlideOut .25s forwards',
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
