const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = envVars => {
	return {
		mode: 'development',
		devtool: 'cheap-module-source-map',
		plugins: [
			new Dotenv({
				path: path.resolve(__dirname, '..', '.env.development')
			}),
		]
	}
};