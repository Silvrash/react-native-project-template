const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

config.transformer.minifierPath = 'metro-minify-terser';
config.transformer.minifierConfig = {
	// Terser options...
	compress: true,
	mangle: true,
};

module.exports = config;
