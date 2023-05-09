import { Entypo } from '@native-base/icons';
import DateTimePicker, { IOSNativeProps } from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import { Button, Icon, Modal } from 'native-base';
import React, { useState } from 'react';
import {
	Platform,
	TouchableWithoutFeedback as RNTouchableWithoutFeedback,
	TouchableWithoutFeedbackProps,
} from 'react-native';
import { TouchableWithoutFeedback as GestureTouchableWithoutFeedback } from 'react-native-gesture-handler';
import useModalInView from 'src/_shared.hooks/useModalInView';
import useAppTheme from 'src/_shared.theme/useAppTheme';
import { FormBaseProps } from './FormBase';
import FormTextInput from './FormTextInput';

export interface FormSelectProps extends Omit<FormBaseProps, 'input'> {
	value?: string;
	onValueChange: (text: string) => void;
	mode?: IOSNativeProps['mode'];
	minuteInterval?: number;
}

const FormDate: React.FC<FormSelectProps> = ({
	label,
	isRequired,
	error,
	helperText,
	rootStyle,
	labelColor,
	value,
	onValueChange,
	mode = 'date',
	...datePickerProps
}) => {
	const { isDark } = useAppTheme();
	const [date, setDate] = useState(new Date());
	const { closeModalInView, modalInView, onSetModalInView } = useModalInView();

	function handleComplete() {
		onValueChange(date.toISOString());
		closeModalInView();
	}

	const TouchWrapper = Platform.select<React.FC<TouchableWithoutFeedbackProps>>({
		ios: GestureTouchableWithoutFeedback as any,
		android: RNTouchableWithoutFeedback as any,
	})!;

	return (
		<TouchWrapper onPress={onSetModalInView('date')}>
			<FormTextInput
				label={label}
				isRequired={isRequired}
				error={error}
				helperText={helperText}
				rootStyle={rootStyle}
				labelColor={labelColor}
				placeholder="MMMM DD YYYY"
				value={value && dayjs(value).format('MMMM DD, YYYY')}
				isReadOnly
				rightIcon={<Icon as={Entypo} name="chevron-down" size="5" />}
			/>

			<Modal
				isOpen={modalInView === 'date'}
				onClose={closeModalInView}
				size="xs"
				useRNModal
				closeOnOverlayClick={false}
			>
				<Modal.Content maxH="212">
					<Modal.CloseButton />
					<Modal.Header>Choose Date</Modal.Header>
					<Modal.Body alignItems={mode === 'date' ? 'center' : undefined}>
						<DateTimePicker
							display="default"
							themeVariant={isDark ? 'dark' : 'light'}
							value={date}
							mode={mode}
							onChange={(_, date) => date && setDate(date)}
							{...datePickerProps}
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button onPress={handleComplete}>Done</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal>
		</TouchWrapper>
	);
};

export default FormDate;
