import { useColorModeValue } from 'native-base';
import { Screens } from 'src/_shared/types.routes';

function useRootNavigation() {
	const statusBarColor = useColorModeValue('dark', 'light');

	function getInitialScreen() {
		return Screens.BottomNavigation;
	}

	function configureInitialParams(screen: Screens) {
		if (screen === Screens.BottomNavigation) return Screens.FirstScreen;
	}

	return {
		statusBarColor,
		initialScreen: getInitialScreen(),
		configureInitialParams,
	};
}

export default useRootNavigation;
