import React from 'react';

export type HandleChangeFn = {
	(e: React.ChangeEvent<any>): void;
	<T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any>
		? void
		: (e: string | React.ChangeEvent<any>) => void;
};

export type HandleBlurFn = {
	(e: React.FocusEvent<any>): void;
	<T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
};

export interface FormHandlers {
	handleChange: HandleChangeFn;
	handleBlur?: HandleBlurFn;
	getError: (key: string) => string | undefined;
}
