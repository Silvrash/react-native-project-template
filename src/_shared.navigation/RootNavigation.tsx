import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Flex } from 'native-base';
import React, { Children, useMemo } from 'react';
import { RootStackParamList } from '../_shared/types.routes';
import useRootNavigation from './hooks/useRootNavigation';
import getRoutes from './screens';

const Stack = createStackNavigator<RootStackParamList>();

interface NavigatorProps {
	children?: React.ReactNode;
}

const RootNavigation: React.FC<NavigatorProps> = ({ children }) => {
	const { statusBarColor, initialScreen, configureInitialParams } = useRootNavigation();
	const routes = useMemo(getRoutes, []);

	function renderRoute(screen: (typeof routes)[0]) {
		return (
			<Stack.Screen
				key={screen.name}
				name={screen.name as keyof RootStackParamList}
				options={screen.options}
				initialParams={{ initialScreen: configureInitialParams(screen.name) }}
				component={screen.component}
			/>
		);
	}

	return (
		<Flex flex="1">
			<StatusBar style={statusBarColor} />
			{children}

			<Stack.Navigator
				detachInactiveScreens={false}
				screenOptions={{ headerShown: false, gestureEnabled: true }}
				initialRouteName={initialScreen as keyof RootStackParamList}
			>
				{Children.toArray(routes.map(renderRoute))}
			</Stack.Navigator>
		</Flex>
	);
};

export default RootNavigation;
