import * as SplashScreen from 'expo-splash-screen';
import { Box, Flex } from 'native-base';
import { PropsWithChildren } from 'react';
import useMainAppConfig from './useMainAppConfig';

SplashScreen.preventAutoHideAsync();

const AppConfigWrapper = ({ children }: PropsWithChildren) => {
	const { appIsReady, onLayoutRootView } = useMainAppConfig();

	if (!appIsReady) return <Box />;

	return (
		<Flex flex="1" onLayout={onLayoutRootView}>
			{children}
		</Flex>
	);
};

export default AppConfigWrapper;
