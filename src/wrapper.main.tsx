import React from 'react';
import RootNavigation from 'src/_shared.navigation/RootNavigation';
import NavigationWrapper from 'src/wrapper.navigation';
import AppConfigWrapper from './wrapper.config';
import ReduxWrapper from './wrapper.redux';
import ThemeWrapper from './wrapper.theme';

export default function MainApp() {
	return (
		<ReduxWrapper>
			<ThemeWrapper>
				<AppConfigWrapper>
					<NavigationWrapper>
						<RootNavigation />
					</NavigationWrapper>
				</AppConfigWrapper>
			</ThemeWrapper>
		</ReduxWrapper>
	);
}
