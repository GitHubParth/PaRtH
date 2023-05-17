/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			keyframes: {
				wave: {
					'0%': { transform: 'rotate(0deg)' },
					'10%': { transform: 'rotate(14deg)' },
					'20%': { transform: 'rotate(-8deg)' },
					'30%': { transform: 'rotate(14deg)' },
					'40%': { transform: 'rotate(-4deg)' },
					'50%': { transform: 'rotate(10deg)' },
					'60%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
				rubberBand: {
					'from' : { transform: 'scale3d(1, 1, 1)' },
					'30%' : { transform: 'scale3d(1.25, 0.75, 1)' },
					'40%' : { transform: 'scale3d(0.75, 1.25, 1)' },
					'50%' : { transform: 'scale3d(1.15, 0.85, 1)' },
					'65%' : { transform: 'scale3d(0.95, 1.05, 1)' },
					'75%' : { transform: 'scale3d(1.05, 0.95, 1)' },
					'to' : { transform: 'scale3d(1, 1, 1)' },
				},
				float: {
					'0%' : { transform: 'translateY(-10px)' },
					'50%' : { transform: 'translateY(20px) translateX(20px)' },
					'100%' : { transform: 'translateY(-10px)' },
				}
			},
			animation: {
				'waving-logo' : 'wave 2s linear infinite',
				'rubber-band' : 'rubberBand 2s linear infinite',
				'float' : 'float 4s linear infinite',
			},
		},
	},
	plugins: [],
}
