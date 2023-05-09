import React from 'react';
import { View } from 'react-native';
import useDefaultFonts from 'src/_shared.assets/fonts';
import MainApp from './wrapper.main';

export default function App() {
	const { fontsLoaded } = useDefaultFonts();

	if (!fontsLoaded) return <View />;
	return <MainApp />;
}
