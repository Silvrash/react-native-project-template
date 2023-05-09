import { CommonActions, StackActions, useNavigation, useRoute } from '@react-navigation/native';
import { defaultTo, partial } from 'ramda';
import { AppRouteProp, RootStackParamList } from '../_shared/types.routes';

const useNavigationHelpers = () => {
	const navigation = useNavigation();
	const route = useRoute();

	function getParams<S extends keyof RootStackParamList>() {
		return defaultTo({} as typeof route.params, route?.params) as AppRouteProp<S>['params'];
	}

	function goTo<S extends keyof RootStackParamList>(screen: S, params?: RootStackParamList[S]) {
		return partial(navigation.navigate, [screen, params]);
	}

	function replace<S extends keyof RootStackParamList>(
		screen: S,
		params?: RootStackParamList[S],
	) {
		const action = StackActions.replace(screen, params);
		return partial<any>(navigation.dispatch, [action]);
	}

	function resetTo<S extends keyof RootStackParamList>(
		screen: S,
		params?: RootStackParamList[S],
	) {
		const action = CommonActions.reset({
			index: 1,
			routes: [{ name: screen, params }],
		});
		return partial<any>(navigation.dispatch, [action]);
	}

	function push<S extends keyof RootStackParamList>(screen: S, params?: RootStackParamList[S]) {
		const action = StackActions.push(screen, params);
		return partial<any>(navigation.dispatch, [action]);
	}

	return {
		name: route?.name,
		getParams,
		goBack: navigation.goBack,
		canGoBack: navigation.canGoBack,
		replace,
		goTo,
		resetTo,
		push,
		setParam: navigation.setParams,
		addListener: navigation.addListener,
	};
};

export default useNavigationHelpers;
