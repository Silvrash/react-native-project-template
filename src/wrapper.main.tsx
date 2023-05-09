import React from 'react';
import RootNavigation from 'src/_shared.navigation/RootNavigation';
import NavigationWrapper from 'src/wrapper.navigation';
import AppConfigWrapper from './wrapper.config';
import ThemeWrapper from './wrapper.theme';

export default function MainApp() {
	return (
		<ThemeWrapper>
			<AppConfigWrapper>
				<NavigationWrapper>
					<RootNavigation />
				</NavigationWrapper>
			</AppConfigWrapper>
		</ThemeWrapper>
	);
}
