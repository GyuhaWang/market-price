import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			keyframes: {
				movingShimmer: {
					'0%,100%': { transform: 'translateX(0%)', filter: 'brightness(1)' },
					'50%': { transform: 'translateX(100%)', filter: 'brightness(0.8)' },
				},
				brighingShimmer: {
					'0%,100%': { filter: 'brightness(1)' },
					'50%': { filter: 'brightness(0.8)' },
				},
			},
			animation: {
				shimmer: 'movingShimmer 3s linear infinite ',
				shimmerSimple: 'brighingShimmer 3s linear infinite',
			},
		},
	},
	plugins: [],
};
export default config;
