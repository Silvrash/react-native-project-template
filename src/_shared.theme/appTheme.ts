const appTheme = {
	light: {
		isDark: false,
		statusBarColor: '#F8F8FF',
		primary: '#101010',
		backgroundColor: '#fff',
		text: {
			primary: '#6F6F6F',
		},
	},
	dark: {
		isDark: true,
	},
};

export type AppTheme = typeof appTheme.light & typeof appTheme.dark;

export default appTheme;
