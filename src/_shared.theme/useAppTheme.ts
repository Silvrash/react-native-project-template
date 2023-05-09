import { useColorModeValue, useTheme } from 'native-base';
import appTheme from './appTheme';

export default function useAppTheme() {
	// const { shopCategory, shopType, searchAll } = useServiceSelector();
	// const placeholderTextKey = !searchAll ? shopType + defaultTo('', shopCategory) : '';
	// const color = Constants.SHOP_TYPE_CONFIGS[placeholderTextKey]?.COLOR;

	const theme: typeof appTheme.light & typeof appTheme.dark = useColorModeValue(
		appTheme.light,
		appTheme.dark,
	);
	const { colors } = useTheme();
	// theme.primary = defaultTo(theme.primary, color);
	return { ...theme, colors };
}
