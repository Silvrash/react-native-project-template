import { keyExtractor } from '../keyExtractor';

describe('keyExtractor', () => {
	it('should return index if no path is specified', () => {
		const index = 5;
		const result = keyExtractor()({}, index);
		expect(result).toBe(index.toString());
	});

	it('should return value in json path', () => {
		const index = 5;
		const value = 9;
		const result = keyExtractor('hello')({ hello: value }, index);
		expect(result).toBe(value);
	});

	it('should return index if value is undefined in json path', () => {
		const index = 5;
		const result = keyExtractor('hello')({ hello: undefined }, index);
		expect(result).toBe(index.toString());
	});
});
