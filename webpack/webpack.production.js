const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (envVars) => {
	const { ANALYZE } = envVars;

	const plugins = [];
	ANALYZE && plugins.push(new BundleAnalyzerPlugin());

	return {
		mode: 'production',
		devtool: 'source-map',
		plugins
	}
};