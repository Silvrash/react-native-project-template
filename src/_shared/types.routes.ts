import { NavigationContainerRef } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';

export enum Screens {
	BottomNavigation = 'BottomNavigation',
	FirstScreen = 'FirstScreen',
	SecondScreen = 'SecondScreen',
	ThirdScreen = 'ThirdScreen',
	FourthScreen = 'FourthScreen',
}

export type RootStackParamList = {
	[Screens.BottomNavigation]: { initialScreen: Screens };
	[Screens.FirstScreen]: undefined;
	[Screens.SecondScreen]: undefined;
	[Screens.ThirdScreen]: undefined;
	[Screens.FourthScreen]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
	RootStackParamList,
	T
>;

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace ReactNavigation {
		// eslint-disable-next-line @typescript-eslint/no-empty-interface
		interface RootParamList extends RootStackParamList {}
	}
}
export type AppRouteProp<S extends keyof RootStackParamList> = RootStackScreenProps<S>['route'];

export const NavigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();

export const AppLinks = {
	// prefixes: [Linking.createURL("/")],
	config: {
		screens: {},
	},
};
