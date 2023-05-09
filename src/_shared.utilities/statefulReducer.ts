import { Reducer } from 'react';

export type StatefulReducer<S = any> = Reducer<S, Partial<S>>;

export function statefulReducer<T>(state: T, newState: Partial<T>) {
	return { ...state, ...newState };
}
