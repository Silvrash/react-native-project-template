import { act, renderHook } from '@testing-library/react-native';
import useModalInView from '../useModalInView';

describe('useModalInView', () => {
	it('should render correctly', () => {
		const { result } = renderHook(() => useModalInView());
		expect(result.current.modalInView).toBeNull();
	});

	it('should set modal in View', async () => {
		const { result } = renderHook(() => useModalInView());

		await act(() => result.current.onSetModalInView('paused')());
		expect(result.current.modalInView).toBe('paused');
	});

	it('should close modal in view', async () => {
		const { result } = renderHook(() => useModalInView());

		await act(() => result.current.onSetModalInView('paused')());
		expect(result.current.modalInView).toBe('paused');

		await act(() => result.current.closeModalInView());
		expect(result.current.modalInView).toBeNull();
	});
});
