import { hexToRgbA } from '../hexToRgbA';

describe('hexToRgbA', () => {
	it('should convert hex to rgba', () => {
		expect(hexToRgbA('#7f11e0', 0.5)).toBe('rgba(127,17,224,0.5)');
	});

	it('should convert hex to rgba', () => {
		expect(hexToRgbA('#fff', 0.4)).toBe('rgba(255,255,255,0.4)');
	});

	it('should throw Error for bad nx', () => {
		expect(() => hexToRgbA('#43KLff64d9')).toThrowError(Error('Bad Hex'));
	});
});
