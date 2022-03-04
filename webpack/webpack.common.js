const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		index: [
			path.resolve(`${__dirname}/../src/index.ts`),
			path.resolve(`${__dirname}/../src/index.scss`)
		]
	},
	resolve: {
		extensions: ['.tsx', '.jsx', '.ts', '.js'],
	},
	output:{
		filename: '[name].js',
		path: path.resolve(`${__dirname}/../lib`),
		library: {
			type: 'commonjs2',
		},
	},
	module:{
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [{loader: 'babel-loader'}],
			},
			{
				test: /\.(s[ac]ss)$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: [
									path.resolve(`${__dirname}/../src/sass`)
								],
							},
						},
					},
				],
			}
		]
	},
	externals: {
		react: "commonjs react",
	},
	plugins:[
		new Dotenv({
			safe: true
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
};