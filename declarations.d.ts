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

declare module '@native-base/icons/Entypo' {
	export default Entypo;
}
declare module '@native-base/icons/Feather' {
	export default Feather;
}
declare module '@native-base/icons/AntDesign' {
	export default AntDesign;
}
declare module '@native-base/icons/FontAwesome' {
	export default FontAwesome;
}
declare module '@native-base/icons/Ionicons' {
	export default Ionicons;
}
declare module '@native-base/icons/MaterialCommunityIcons' {
	export default MaterialCommunityIcons;
}
declare module '@native-base/icons/EvilIcons' {
	export default EvilIcons;
}
declare module '@native-base/icons/FontAwesome5' {
	export default FontAwesome5;
}
declare module '@native-base/icons/Fontisto' {
	export default Fontisto;
}
declare module '@native-base/icons/Foundation' {
	export default Foundation;
}
declare module '@native-base/icons/MaterialIcons' {
	export default MaterialIcons;
}
declare module '@native-base/icons/Octicons' {
	export default Octicons;
}
declare module '@native-base/icons/SimpleLineIcons' {
	export default SimpleLineIcons;
}
declare module '@native-base/icons/Zocial' {
	export default Zocial;
}
