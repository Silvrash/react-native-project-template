import { render, RenderOptions } from '@testing-library/react-native';
import { PropsWithChildren } from 'react';
import NavigationWrapper from 'src/wrapper.navigation';
import ThemeWrapper from '../wrapper.theme';

const AllTheProviders = ({ children }: PropsWithChildren) => {
	return (
		<ThemeWrapper>
			<NavigationWrapper>{children}</NavigationWrapper>
		</ThemeWrapper>
	);
};

export function renderWithProviders<T>(ui: React.ReactElement<T>, options?: RenderOptions) {
	return render(ui, {
		wrapper: ({ children }) => <AllTheProviders>{children}</AllTheProviders>,
		...options,
	});
}
