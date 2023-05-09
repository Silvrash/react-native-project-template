import { defaultTo, path } from 'ramda';

export function keyExtractor<I = any>(__path?: keyof I) {
	return (_item: I, index: number): any => {
		if (!__path) return index.toString();

		const _path = `${__path as any}`.split('.');
		const getVal = path(_path);
		return defaultTo(index.toString(), getVal(_item));
	};
}
