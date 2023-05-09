import { Dimensions } from 'react-native';
import { getDim } from '../getDim';

describe('getDim', () => {
	it('should get default width', () => {
		const result = getDim();
		const expected = Dimensions.get('window').width;
		expect(result).toBe(expected);
	});

	it('should get default height', () => {
		const result = getDim(1, true);
		const expected = Dimensions.get('window').height;
		expect(result).toBe(expected);
	});

	it('should get scaled width', () => {
		const result = getDim(0.5);
		const expected = Dimensions.get('window').width * 0.5;
		expect(result).toBe(expected);
	});

	it('should get scaled height', () => {
		const result = getDim(0.5, true);
		const expected = Dimensions.get('window').height * 0.5;
		expect(result).toBe(expected);
	});
});
