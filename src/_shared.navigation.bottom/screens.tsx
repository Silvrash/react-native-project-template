import { Screens } from 'src/_shared/types.routes';

import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import ActiveDiscoverIcon from 'src/_shared.assets/bottom-navigation/active/discover-icon.svg';
import ActiveHomeIcon from 'src/_shared.assets/bottom-navigation/active/home-icon.svg';
import ActiveSettingsIcon from 'src/_shared.assets/bottom-navigation/active/settings-icon.svg';
import ActiveTicketsIcon from 'src/_shared.assets/bottom-navigation/active/tickets-icon.svg';
import InactiveDiscoverIcon from 'src/_shared.assets/bottom-navigation/inactive/discover-icon.svg';
import InactiveHomeIcon from 'src/_shared.assets/bottom-navigation/inactive/home-icon.svg';
import InactiveSettingsIcon from 'src/_shared.assets/bottom-navigation/inactive/settings-icon.svg';
import InactiveTicketsIcon from 'src/_shared.assets/bottom-navigation/inactive/tickets-icon.svg';
import Example from 'src/screen.example/Example';

interface BottomNavRoutes {
	name: Screens;
	component: React.FC;
	options: BottomTabNavigationOptions;
}

const getRoutes = () => {
	const routes: BottomNavRoutes[] = [
		{
			name: Screens.FirstScreen,
			component: Example,
			options: {
				tabBarIcon: ({ focused, ...props }) => {
					if (focused) return <ActiveHomeIcon {...props} />;
					return <InactiveHomeIcon {...props} />;
				},
			},
		},
		{
			name: Screens.SecondScreen,
			component: Example,
			options: {
				tabBarIcon: ({ focused, ...props }) => {
					if (focused) return <ActiveDiscoverIcon {...props} />;
					return <InactiveDiscoverIcon {...props} />;
				},
			},
		},
		{
			name: Screens.ThirdScreen,
			component: Example,
			options: {
				tabBarIcon: ({ focused, ...props }) => {
					if (focused) return <ActiveTicketsIcon {...props} />;
					return <InactiveTicketsIcon {...props} />;
				},
			},
		},
		{
			name: Screens.FourthScreen,
			component: Example,
			options: {
				tabBarIcon: ({ focused, ...props }) => {
					if (focused) return <ActiveSettingsIcon {...props} />;
					return <InactiveSettingsIcon {...props} />;
				},
			},
		},
	];

	return routes;
};

export default getRoutes;
