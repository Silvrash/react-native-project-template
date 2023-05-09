import customTheme from './theme';

type CustomThemeType = typeof customTheme;

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
	interface ICustomTheme extends CustomThemeType {}
}
