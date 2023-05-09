import { FormikConfig, FormikValues, getIn, useFormik } from 'formik';
import React from 'react';

export function useForm<Values extends FormikValues = FormikValues>(config: FormikConfig<Values>) {
	const formik = useFormik<Values>(config);
	const { touched, errors } = formik;

	const getError = React.useCallback(
		(key: string) => {
			const isTouched = getIn(touched, key);
			const error = getIn(errors, key);
			return isTouched && error ? error : undefined;
		},
		[touched, errors],
	);

	return {
		...formik,
		getError,
	};
}
