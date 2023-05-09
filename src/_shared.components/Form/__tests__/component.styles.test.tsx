import { renderWithProviders } from 'src/__mocks__/wrapProviders';
import { ErrorText, HelperText, Label } from '../component.styles';

describe('Form components', () => {
	it('should render helper text', () => {
		const { toJSON } = renderWithProviders(<HelperText />);
		expect(toJSON()).toMatchSnapshot();
	});

	it('should render helper text', () => {
		const { toJSON } = renderWithProviders(<ErrorText />);
		expect(toJSON()).toMatchSnapshot();
	});

	it('should render helper text', () => {
		const { toJSON } = renderWithProviders(<Label />);
		expect(toJSON()).toMatchSnapshot();
	});
});
