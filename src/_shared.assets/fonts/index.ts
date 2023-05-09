import { useFonts } from 'expo-font';

export default function useDefaultFonts() {
	const [fontsLoaded] = useFonts({
		'Inter-Regular': require('./Inter-Regular.ttf'),
		'Urbanist-Bold': require('./Urbanist-Bold.ttf'),
		'Urbanist-Medium': require('./Urbanist-Medium.ttf'),
		'Urbanist-SemiBold': require('./Urbanist-SemiBold.ttf'),
	});

	return { fontsLoaded };
}
