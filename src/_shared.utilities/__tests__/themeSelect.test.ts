import { themeSelect } from '../themeSelect';

describe('themeSelect', () => {
	const lightValue = 'lightValue';
	const darkValue = 'darkValue';

	it('should get value when in light theme', () => {
		const result = themeSelect({ light: lightValue, dark: darkValue }, 'light');
		expect(result).toBe(lightValue);
	});

	it('should get value when in dark theme', () => {
		const result = themeSelect({ light: lightValue, dark: darkValue }, 'dark');
		expect(result).toBe(darkValue);
	});
});
