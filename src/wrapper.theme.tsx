import { ColorMode, NativeBaseProvider, StorageManager } from 'native-base';
import { always } from 'ramda';
import React from 'react';
import customTheme from './_shared.theme/theme';

const ThemeWrapper = ({ children }: React.PropsWithChildren) => {
	customTheme.config.initialColorMode = getColorMode();

	function getColorMode() {
		return 'light' as ColorMode;
	}

	const colorModeManager: StorageManager = {
		get: async () => getColorMode(),
		set: always(null),
	};

	return (
		<NativeBaseProvider
			theme={customTheme}
			colorModeManager={colorModeManager}
			children={children}
		/>
	);
};

export default ThemeWrapper;
