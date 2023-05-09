import Entypo from '@native-base/icons/Entypo';
import { ISelectProps, Icon, Select } from 'native-base';
import React, { Children } from 'react';
import FormBase, { FormBaseProps } from './FormBase';

export interface FormSelectProps extends ISelectProps, Omit<FormBaseProps, 'input'> {
	options: Array<{ label: string; value: any }>;
}

const FormSelect: React.FC<FormSelectProps> = ({
	label,
	isRequired,
	error,
	helperText,
	rootStyle,
	labelColor,
	options,
	...selectProps
}) => {
	function renderOption(option: FormSelectProps['options'][0]) {
		return (
			<Select.Item
				{...option}
				_text={{ color: 'text.900', fontWeight: '500' }}
				_pressed={{ bgColor: 'gray.100' }}
			/>
		);
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
				<Select
					{...selectProps}
					borderColor={error ? 'red.300' : '#E1E5F6'}
					color={'text.900'}
					minH="10"
					mt="1"
					px="4"
					fontFamily="heading"
					fontWeight="400"
					fontSize="14"
					dropdownIcon={<Icon as={Entypo} name="chevron-down" size="5" mr="4" />}
				>
					{Children.toArray(options.map(renderOption))}
				</Select>
			}
		/>
	);
};

export default FormSelect;
