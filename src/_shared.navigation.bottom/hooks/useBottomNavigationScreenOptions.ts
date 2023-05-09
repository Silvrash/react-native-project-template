import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { useColorMode, useColorModeValue, useTheme } from 'native-base';
import { useMemo } from 'react';
import useAppTheme from 'src/_shared.theme/useAppTheme';

const useBottomNavigationScreenOptions = () => {
	const { colorMode } = useColorMode();
	const { colors } = useTheme();
	const appTheme = useAppTheme();

	const backgroundColor = useColorModeValue(colors['white'], '#12112B');

	const SCREEN_OPTIONS: BottomTabNavigationOptions = useMemo(() => {
		return {
			headerShown: false,
			tabBarShowLabel: false,
			tabBarActiveTintColor: colors.primary[500],
			tabBarInactiveTintColor: colors.text[500],
			tabBarItemStyle: { marginTop: 12 },
			tabBarStyle: {
				backgroundColor,
				borderTopWidth: 0,
				paddingVertical: 8,
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 1,
				},
				shadowOpacity: 0.22,
				shadowRadius: 2.22,

				elevation: 3,
			},
		};
	}, [colorMode, appTheme.primary]);

	return SCREEN_OPTIONS;
};

export default useBottomNavigationScreenOptions;
