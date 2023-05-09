import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Children, useMemo } from 'react';
import useBottomNavigation from './hooks/useBottomNavigation';
import getRoutes from './screens';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
	const { initialScreen, SCREEN_OPTIONS } = useBottomNavigation();
	const screens = useMemo(getRoutes, []);

	function renderTab(item: (typeof screens)[0]) {
		return <Tab.Screen name={item.name} options={item.options} component={item.component} />;
	}

	return (
		<Tab.Navigator initialRouteName={initialScreen} screenOptions={SCREEN_OPTIONS}>
			{Children.toArray(screens.map(renderTab))}
		</Tab.Navigator>
	);
};

export default BottomNavigation;
