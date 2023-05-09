import { Theme } from 'native-base';

const fontConfig: Theme['fontConfig'] = {
	'Inter-Body': {
		100: {
			normal: 'Inter-Regular',
			fontSize: 12,
		},
		200: {
			normal: 'Inter-Regular',
			fontSize: 14,
		},
		300: {
			normal: 'Inter-Regular',
			fontSize: 16,
		},
		400: {
			normal: 'Inter-Regular',
			fontSize: 18,
		},
	},
	'Inter-Heading': {
		100: {
			normal: 'Urbanist-Medium',
			fontSize: 10,
		},
		200: {
			normal: 'Urbanist-SemiBold',
			fontSize: 12,
		},
		300: {
			normal: 'Urbanist-Bold',
			fontSize: 14,
		},
		400: {
			normal: 'Urbanist-Medium',
			fontSize: 14,
		},
		500: {
			normal: 'Urbanist-SemiBold',
			fontSize: 16,
		},
		600: {
			normal: 'Urbanist-Bold',
			fontSize: 20,
		},
		700: {
			normal: 'Urbanist-SemiBold',
			fontSize: 24,
		},
		800: {
			normal: 'Urbanist-SemiBold',
			fontSize: 36,
		},
		900: {
			normal: 'Urbanist-Bold',
			fontSize: 48,
		},
	},
};

const fonts: Record<keyof Theme['fonts'], string> = {
	heading: 'Inter-Heading',
	body: 'Inter-Body',
	mono: 'Inter-Body',
};

export default { fontConfig, fonts };
