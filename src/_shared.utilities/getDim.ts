import { Dimensions } from 'react-native';

export function getDim(size = 1, height = false): number {
	const win = Dimensions.get('window');

	if (height) return win.height * size;
	return win.width * size;
}
