import { statefulReducer } from '../statefulReducer';

describe('statefulReducer', () => {
	it('should return new state', () => {
		const oldState = { hello: '4' };
		const newState = { hello: '6' };
		expect(statefulReducer(oldState, newState)).toStrictEqual(newState);
	});
});
