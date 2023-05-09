import {
	Box,
	Center,
	Column,
	Divider,
	FormControl,
	Heading,
	Icon,
	IconButton,
	Image,
	Row,
	Spacer,
	Spinner,
	Switch,
	Text,
} from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Pressable from './Pressable';

export interface RenderProps {
	renderIf?: boolean;
	children?: React.ReactNode;
}
export type ConditionRenderProps<T = Record<string, any>> = T & RenderProps;

// eslint-disable-next-line @typescript-eslint/ban-types
function ConditionRender<P extends {}>(Component: React.ComponentType<P>) {
	return function _ConditionRender({ renderIf = true, ...props }: ConditionRenderProps<P>) {
		if (!renderIf) return null;
		return <Component {...(props as P)} />;
	};
}

export const ConditionRenderComponent: React.FC<RenderProps> = ({ renderIf = true, children }) => {
	if (!renderIf) return null;
	return <>{children}</>;
};

ConditionRender.Row = ConditionRender(Row);
ConditionRender.Text = ConditionRender(Text);
ConditionRender.Heading = ConditionRender(Heading);
ConditionRender.Column = ConditionRender(Column);
ConditionRender.Box = ConditionRender(Box);
ConditionRender.IconButton = ConditionRender(IconButton);
ConditionRender.FormControl = ConditionRender(FormControl);
ConditionRender.Center = ConditionRender(Center);
ConditionRender.Divider = ConditionRender(Divider);
ConditionRender.Spacer = ConditionRender(Spacer);
ConditionRender.TouchableOpacity = ConditionRender(TouchableOpacity);
ConditionRender.Pressable = ConditionRender(Pressable);
ConditionRender.Switch = ConditionRender(Switch);
ConditionRender.Spinner = ConditionRender(Spinner);
ConditionRender.Icon = ConditionRender(Icon);
ConditionRender.Image = ConditionRender(Image);

export default ConditionRender;
