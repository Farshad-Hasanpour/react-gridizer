const {merge} = require('webpack-merge');
const dotenv = require('dotenv');
const path = require('path');

module.exports = async (envVars) => {
	let { MODE } = envVars;
	if(MODE === 'prod') MODE = 'production';
	if(MODE === 'dev') MODE = 'development';

	const parsedEnv = dotenv.config({
		path: path.resolve(__dirname, '..', `.env.${MODE}`)
	}).parsed;
	const parsedCommonEnv = dotenv.config({
		path: path.resolve(__dirname, '..', '.env')
	}).parsed;

	return merge(
		require('./webpack.common')(
			parsedEnv.CSS_PREFIX || parsedCommonEnv.CSS_PREFIX || '',
			parsedEnv.CSS_TOTAL_COLS || parsedCommonEnv.CSS_TOTAL_COLS || 12
		),
		require(`./webpack.${MODE}.js`)(envVars),
	);
};