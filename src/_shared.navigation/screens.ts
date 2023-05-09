import { StackNavigationOptions } from '@react-navigation/stack';
import BottomNavigation from 'src/_shared.navigation.bottom/BottomNavigation';
import { Screens } from '../_shared/types.routes';

interface AppScreens {
	name: Screens;
	component: React.FC;
	options?: StackNavigationOptions;
}

const getRoutes = () => {
	const routes: AppScreens[] = [
		{
			name: Screens.BottomNavigation,
			component: BottomNavigation,
		},
	];

	return routes;
};

export default getRoutes;
