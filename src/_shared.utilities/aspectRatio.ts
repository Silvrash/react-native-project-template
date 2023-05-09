import { defaultTo } from 'ramda';

export default function aspectRatio(x: number, y: number) {
	function gcd(a: number, b: number) {
		if (typeof a !== 'number' || typeof b !== 'number') return 1;
		a = Math.abs(a);
		b = Math.abs(b);
		while (b) {
			const t = b;
			b = a % b;
			a = t;
		}
		return a;
	}

	const c = gcd(x, y);
	const value = x / c / (y / c);
	return defaultTo(1, value);
}
