import { Factory, StyledProps } from 'native-base';
import { PlatformProps } from 'native-base/lib/typescript/components/types';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export type PressableProps = TouchableOpacityProps &
	StyledProps &
	PlatformProps<StyledProps> & {
		children?: string | JSX.Element | JSX.Element[] | undefined;
		_state?: {
			readonly isIndeterminate?: boolean | undefined;
			readonly isChecked?: boolean | undefined;
			readonly isReadOnly?: boolean | undefined;
			readonly isInvalid?: boolean | undefined;
			readonly isFocused?: boolean | undefined;
			readonly isFocusVisible?: boolean | undefined;
			readonly isHovered?: boolean | undefined;
			readonly isPressed?: boolean | undefined;
			readonly isDisabled?: boolean | undefined;
			readonly isLoading?: boolean | undefined;
		};
	};

const Pressable = Factory(TouchableOpacity);

export default Pressable;
