import { IIconProps } from 'native-base';

export type Maybe<T> = T | undefined | null;

export type IconType = React.ReactElement<IIconProps>;

export enum AppearanceStates {
	Automatic = 'Automatic',
	Light = 'Light Theme',
	Dark = 'Dark Theme',
}
