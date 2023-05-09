import { useRoute } from '@react-navigation/native';
import { AppRouteProp, Screens } from 'src/_shared/types.routes';
import useBottomNavigationScreenOptions from './useBottomNavigationScreenOptions';

const useBottomNavigation = () => {
	const SCREEN_OPTIONS = useBottomNavigationScreenOptions();
	const route = useRoute<AppRouteProp<Screens.BottomNavigation>>();
	const { initialScreen = Screens.FirstScreen } = route.params || {};

	return {
		initialScreen,
		SCREEN_OPTIONS,
	};
};

export default useBottomNavigation;
