const {merge} = require('webpack-merge');

module.exports = async (envVars) => {
	let { MODE } = envVars;
	if(MODE === 'prod') MODE = 'production';
	if(MODE === 'dev') MODE = 'development';

	return merge(
		require('./webpack.common'),
		require(`./webpack.${MODE}.js`)(envVars),
	);
};