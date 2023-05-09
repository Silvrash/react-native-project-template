import { useFonts } from 'expo-font';

export default function useDefaultFonts() {
	const [fontsLoaded] = useFonts({
		'Urbanist-Black': require('./Urbanist-Black.ttf'),
		'Inter-Black': require('./Inter-Black.ttf'),
		'Inter-Bold': require('./Inter-Bold.ttf'),
		'Inter-ExtraBold': require('./Inter-ExtraBold.ttf'),
		'Inter-ExtraLight': require('./Inter-ExtraLight.ttf'),
		'Inter-Light': require('./Inter-Light.ttf'),
		'Inter-Medium': require('./Inter-Medium.ttf'),
		'Inter-Regular': require('./Inter-Regular.ttf'),
		'Inter-SemiBold': require('./Inter-SemiBold.ttf'),
		'Inter-Thin': require('./Inter-Thin.ttf'),
		'Urbanist-BlackItalic': require('./Urbanist-BlackItalic.ttf'),
		'Urbanist-Bold': require('./Urbanist-Bold.ttf'),
		'Urbanist-BoldItalic': require('./Urbanist-BoldItalic.ttf'),
		'Urbanist-ExtraBold': require('./Urbanist-ExtraBold.ttf'),
		'Urbanist-ExtraBoldItalic': require('./Urbanist-ExtraBoldItalic.ttf'),
		'Urbanist-ExtraLight': require('./Urbanist-ExtraLight.ttf'),
		'Urbanist-ExtraLightItalic': require('./Urbanist-ExtraLightItalic.ttf'),
		'Urbanist-Italic': require('./Urbanist-Italic.ttf'),
		'Urbanist-Light': require('./Urbanist-Light.ttf'),
		'Urbanist-LightItalic': require('./Urbanist-LightItalic.ttf'),
		'Urbanist-Medium': require('./Urbanist-Medium.ttf'),
		'Urbanist-MediumItalic': require('./Urbanist-MediumItalic.ttf'),
		'Urbanist-Regular': require('./Urbanist-Regular.ttf'),
		'Urbanist-SemiBold': require('./Urbanist-SemiBold.ttf'),
		'Urbanist-SemiBoldItalic': require('./Urbanist-SemiBoldItalic.ttf'),
		'Urbanist-Thin': require('./Urbanist-Thin.ttf'),
		'Urbanist-ThinItalic': require('./Urbanist-ThinItalic.ttf'),
	});

	return { fontsLoaded };
}
