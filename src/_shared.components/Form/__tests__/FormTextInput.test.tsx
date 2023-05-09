import { renderWithProviders } from 'src/__mocks__/wrapProviders';
import FormTextInput from '../FormTextInput';

describe('FormTextInput', () => {
	it('should render correctly', () => {
		const { toJSON, getByText } = renderWithProviders(<FormTextInput label="this label" />);

		expect(getByText(/this label/gi)).toBeTruthy();
		expect(toJSON()).toMatchSnapshot();
	});

	it('should render with error ', () => {
		const { toJSON, getByText } = renderWithProviders(
			<FormTextInput label="this label" error="error text" />,
		);

		expect(getByText(/error text/gi)).toBeTruthy();
		expect(toJSON()).toMatchSnapshot();
	});

	it('should render with helper text ', () => {
		const { toJSON, getByText } = renderWithProviders(
			<FormTextInput label="this label" helperText="helper text" />,
		);

		expect(getByText(/helper text/gi)).toBeTruthy();
		expect(toJSON()).toMatchSnapshot();
	});
});
