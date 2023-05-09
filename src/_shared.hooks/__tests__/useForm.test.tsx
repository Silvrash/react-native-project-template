import { act, renderHook } from '@testing-library/react-native';
import * as yup from 'yup';
import { useForm } from '../useForm';

const validationSchema = yup.object().shape({
	name: yup.string().min(6),
});

describe('useForm', () => {
	const onSubmit = jest.fn();
	const initialValues = { name: 'hello' };

	it('should render hook', () => {
		const { result } = renderHook(() => useForm({ initialValues, onSubmit }));

		expect(result.current.values).toStrictEqual(initialValues);
	});

	it('should get error', async () => {
		const { result } = renderHook(() => useForm({ initialValues, onSubmit, validationSchema }));

		await act(() => {
			result.current.handleSubmit();
		});

		expect(result.current.getError('name')).toBe('name must be at least 6 characters');
	});

	it('should return undefined if no errror', async () => {
		const { result } = renderHook(() =>
			useForm({ initialValues, onSubmit, validationSchema, validateOnChange: true }),
		);

		await act(() => {
			result.current.handleChange('name')('words more than min length');
		});

		expect(result.current.getError('name')).toBeUndefined();
	});
});
