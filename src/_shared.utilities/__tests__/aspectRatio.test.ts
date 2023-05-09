import aspectRatio from '../aspectRatio';

describe('aspectRatio', () => {
	it('should return 1', () => {
		const result = aspectRatio(100, 100);
		expect(result).toBe(1);
	});

	it('should return half', () => {
		const result = aspectRatio(50, 100);
		expect(result).toBe(0.5);
	});

	it('should return one and half', () => {
		const result = aspectRatio(3, 2);
		expect(result).toBe(1.5);
	});
});
