import { roundTo2Dp } from '../roundTo2Dp';

describe('roundTo2Dp', () => {
	it('should round to 2 decimal places', () => {
		expect(+roundTo2Dp(1.235)).toBe(1.24);
		expect(+roundTo2Dp(1.555)).toBe(1.56);
	});
});
