import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationRef } from './_shared/types.routes';

const NavigationWrapper = ({ children }: React.PropsWithChildren) => {
	return (
		<NavigationContainer ref={NavigationRef}>
			<GestureHandlerRootView style={styles.gestureRoot}>{children}</GestureHandlerRootView>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	gestureRoot: { flex: 1 },
});

export default NavigationWrapper;
