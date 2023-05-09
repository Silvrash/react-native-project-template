import { extendTheme } from 'native-base';
import colors from './colors';
import { default as fonts } from './fonts';

const customTheme = extendTheme({
	config: {},
	colors,
	...fonts,
	components: {
		Flex: {
			baseStyle: {
				bgColor: '#FFFFFF',
			},
		},
		Heading: {
			baseStyle: {
				fontFamily: 'heading',
			},
		},
		Text: {
			baseStyle: {
				fontFamily: 'body',
				fontWeight: '300',
				_light: { color: colors.text!['400'] },
				_dark: { color: colors.text!['500'] },
			},
		},
	},
});

export default customTheme;
