import { useNavigation } from '@react-navigation/native';

export function setupNavigationMock() {
	const navigate = jest.fn();
	const goBack = jest.fn();
	const dispatch = jest.fn();
	const removeListener = jest.fn();
	const addListener = jest.fn();

	(useNavigation as jest.Mock).mockReturnValue({
		navigate,
		goBack,
		dispatch,
		addListener,
		removeListener,
	});
	addListener.mockImplementation((_key: string, fn: (e: any) => void) => {
		fn({ preventDefault: () => null });
	});
}
