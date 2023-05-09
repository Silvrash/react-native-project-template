declare module '*.bmp' {
	const src: any;
	export default src;
}

declare module '*.gif' {
	const src: any;
	export default src;
}

declare module '*.jpg' {
	const src: any;
	export default src;
}

declare module '*.jpeg' {
	const src: any;
	export default src;
}

declare module '*.png' {
	const src: any;
	export default src;
}

declare module '*.svg' {
	import React from 'react';
	import { SvgProps } from 'react-native-svg';
	const content: React.FC<SvgProps>;
	export default content;
}

declare module '@native-base/icons' {
	export const Entypo: any;
	export const Feather: any;
	export const AntDesign: any;
	export const FontAwesome: any;
	export const Ionicons: any;
	export const MaterialCommunityIcons: any;
	export const EvilIcons: any;
	export const FontAwesome5: any;
	export const Fontisto: any;
	export const Foundation: any;
	export const MaterialIcons: any;
	export const Octicons: any;
	export const SimpleLineIcons: any;
	export const Zocial: any;
}
