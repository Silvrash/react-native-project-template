import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';

export default function useMainAppConfig() {
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setAppIsReady(true);
		}, 1000);
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			// This tells the splash screen to hide immediately! If we call this after
			// `setAppIsReady`, then we may see a blank screen while the app is
			// loading its initial state and rendering its first pixels. So instead,
			// we hide the splash screen once we know the root view has already
			// performed layout.
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	return { appIsReady, onLayoutRootView };
}
