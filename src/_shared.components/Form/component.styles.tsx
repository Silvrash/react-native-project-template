import { Box, Heading, Text } from 'native-base';
import { InterfaceTextProps } from 'native-base/lib/typescript/components/primitives/Text/types';
import ConditionRender from '../ConditionRender';

export const HelperText = ConditionRender((props: InterfaceTextProps) => {
	return <Text {...props} fontSize="11" fontWeight="400" lineHeight="15" />;
});

export const ErrorText = ConditionRender((props: InterfaceTextProps) => {
	return <Text {...props} color="error.400" fontSize="12" />;
});

export const Label = ConditionRender((props: InterfaceTextProps) => {
	return <Heading {...props} fontWeight="500" fontSize="14" color="text.900" />;
});

export const InputGroup = (props: InterfaceTextProps) => {
	return <Box minH="9" {...props} />;
};
