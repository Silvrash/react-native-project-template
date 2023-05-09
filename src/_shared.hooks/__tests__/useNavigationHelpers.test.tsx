import { CommonActions, StackActions, useNavigation, useRoute } from '@react-navigation/native';
import { renderHook } from '@testing-library/react-native';
import { Screens } from '../../_shared/types.routes';
import useNavigationHelpers from '../useNavigationHelpers';

jest.mock('@react-navigation/native', () => ({
	...jest.requireActual('@react-navigation/native'),
	useNavigation: jest.fn(),
	useRoute: jest.fn(),
}));

describe('useNavigationHelpers', () => {
	const navigate = jest.fn();
	const dispatch = jest.fn();

	beforeEach(() => {
		(useNavigation as jest.Mock).mockReturnValue({
			navigate,
			dispatch,
		});

		(useRoute as jest.Mock).mockReturnValue({ params: 'page params' });
	});

	it('should getParams', () => {
		const { result } = renderHook(() => useNavigationHelpers());
		expect(result.current.getParams()).toBe('page params');
	});

	it('should go to page', () => {
		const { result } = renderHook(() => useNavigationHelpers());
		result.current.goTo(Screens.FirstScreen)();

		expect(navigate).toBeCalledWith(Screens.FirstScreen, undefined);
	});

	it('should replace current page', () => {
		const { result } = renderHook(() => useNavigationHelpers());
		result.current.replace(Screens.FirstScreen)();

		expect(dispatch).toBeCalledWith(StackActions.replace(Screens.FirstScreen, undefined));
	});

	it('should push current page', () => {
		const { result } = renderHook(() => useNavigationHelpers());
		result.current.push(Screens.FirstScreen)();

		expect(dispatch).toBeCalledWith(StackActions.push(Screens.FirstScreen, undefined));
	});

	it('should reset navigation stack to page', () => {
		const { result } = renderHook(() => useNavigationHelpers());
		result.current.resetTo(Screens.FirstScreen)();

		const action = CommonActions.reset({
			index: 1,
			routes: [{ name: Screens.FirstScreen, params: undefined }],
		});

		expect(dispatch).toBeCalledWith(action);
	});
});
