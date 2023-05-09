import { IInputProps, IconButton, Input } from 'native-base';
import React, { useEffect, useState } from 'react';
import EyeWithLineIcon from 'src/_shared.assets/eye-with-line.svg';
import EyeIcon from 'src/_shared.assets/eye.svg';
import { IconType } from 'src/_shared/types';
import ConditionRender from '../ConditionRender';
import FormBase, { FormBaseProps } from './FormBase';

export interface FormTextInputProps extends IInputProps, Omit<FormBaseProps, 'input'> {
	leftIcon?: IconType;
	rightIcon?: IconType;
}

const FormTextInput: React.FC<FormTextInputProps> = ({
	label,
	isRequired,
	error,
	helperText,
	rootStyle,
	labelColor,
	leftIcon,
	rightIcon,
	...textInputProps
}) => {
	const [secureTextEntry, setSecureTextEntry] = useState(!!textInputProps.secureTextEntry);

	useEffect(
		() => setSecureTextEntry(!!textInputProps.secureTextEntry),
		[textInputProps.secureTextEntry],
	);

	function toggleSecureTextEntry() {
		setSecureTextEntry(value => !value);
	}

	return (
		<FormBase
			label={label}
			isRequired={isRequired}
			error={error}
			helperText={helperText}
			rootStyle={rootStyle}
			labelColor={labelColor}
			input={
				<Input
					{...textInputProps}
					secureTextEntry={secureTextEntry}
					variant="outline"
					isRequired
					borderColor={error ? 'red.300' : '#E1E5F6'}
					color={'text.900'}
					minH="10"
					mt="1"
					px="4"
					fontFamily="heading"
					fontWeight="400"
					fontSize="14"
					_focus={{ bgColor: 'transparent' }}
					InputLeftElement={
						<ConditionRender.Box renderIf={!!leftIcon} pl="4">
							{leftIcon}
						</ConditionRender.Box>
					}
					InputRightElement={
						<>
							<ConditionRender.Box renderIf={!!rightIcon} pr="4">
								{rightIcon}
							</ConditionRender.Box>

							<ConditionRender.Box renderIf={!!textInputProps.secureTextEntry} pr="2">
								<IconButton
									onPress={toggleSecureTextEntry}
									icon={secureTextEntry ? <EyeIcon /> : <EyeWithLineIcon />}
								/>
							</ConditionRender.Box>
						</>
					}
				/>
			}
		/>
	);
};

export default FormTextInput;
