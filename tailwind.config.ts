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
				aboveAll: '9999',
			},
			keyframes: {
				pinging: {
					'75%, 100%': {
						transform: 'scale(1.5)',
						opacity: '0',
					},
				},
				searchSlideDown: {
					'0%': {
						transform: 'translateY(-25%)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1',
					},
				},
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
				slideup: {
					'0%': {
						transform: 'translateY(0)',
						opacity: '1',
					},
					'100%': {
						transform: 'translateY(-25%)',
						opacity: '0',
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
				pinging: 'pinging 2s cubic-bezier(0, 0, 0.2, 1) infinite',
				searchSlideDown: 'searchSlideDown .25s forwards',
				slideDown: 'slideDown .25s forwards',
				slideUp: 'slideUp .15s forwards',
				drawerSlideIn: 'drawerSlideIn .15s forwards',
				drawerSlideOut: 'drawerSlideOut .15s forwards',
				innerDrawerSlideIn: 'innerDrawerSlideIn .15s ease-in-out',
				innerDrawerSlideOut: 'innerDrawerSlideOut .15s forwards',
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
