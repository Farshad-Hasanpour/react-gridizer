const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Dotenv = require('dotenv-webpack');

module.exports = envVars => {
	const { ANALYZE } = envVars;

	const plugins = [
		new Dotenv({
			path: path.resolve(__dirname, '..', '.env.production')
		}),
	];
	ANALYZE && plugins.push(new BundleAnalyzerPlugin());

	return {
		mode: 'production',
		plugins
	}
};