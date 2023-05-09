import { ColorType } from 'native-base/lib/typescript/components/types';
import React from 'react';
import { ViewStyle } from 'react-native';
import { Maybe } from 'src/_shared/types';
import { ErrorText, HelperText, InputGroup, Label } from './component.styles';

export interface FormBaseProps {
	error?: Maybe<string>;
	helperText?: React.ReactNode;
	label?: React.ReactNode;
	rootStyle?: ViewStyle;
	isRequired?: boolean;
	labelColor?: ColorType;
	input: JSX.Element;
}

const FormBase: React.FC<FormBaseProps> = ({
	label,
	isRequired,
	error,
	helperText,
	rootStyle,
	labelColor,
	input,
}) => {
	return (
		<InputGroup mb="4" style={rootStyle}>
			<Label renderIf={!!label} color={labelColor}>
				{label}
				<Label renderIf={!!isRequired} color={'red.400'}>
					*
				</Label>
			</Label>
			<HelperText renderIf={!!helperText}>{helperText}</HelperText>

			{input}

			<ErrorText renderIf={!!error}>{`${error}`}</ErrorText>
		</InputGroup>
	);
};

export default FormBase;
