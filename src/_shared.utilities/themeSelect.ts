import { ColorMode } from 'native-base';

export const themeSelect = (data: { light: string; dark: string }, state: ColorMode) => {
	return data[state!];
};
