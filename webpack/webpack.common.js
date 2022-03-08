const path = require('path');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		index: [
			path.resolve(__dirname, '..', './src/index.ts'),
			// path.resolve(`${__dirname}/../src/index.scss`),
		]
	},
	resolve: {
		extensions: ['.tsx', '.jsx', '.ts', '.js'],
	},
	output:{
		filename: '[name].js',
		path: path.resolve(__dirname, '..', './lib'),
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
			// {
			// 	test: /\.(scss)$/,
			// 	type: 'asset/resource',
			// 	resourceQuery: path.resolve(`${__dirname}/../src/index.scss`),
			// 	generator: {
			// 		filename: '[name].min.css'
			// 	},
			// 	use: [
			// 		'sass-loader'
			// 	]
			// },
			{
				test: /\.(s[ac]ss)$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options:{
							modules: {
								auto: true, // default is undefined
								localIdentName: "[name]__[local]--[hash:base64:5]",
								//mode: "local", // default is local
								// exportGlobals: false,  // default is false
								// namedExport: false,  //default is false
								// exportOnlyLocals: false,
							},
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: [
									path.resolve(__dirname, '..', './src/sass')
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
		new CopyPlugin({
			patterns: [
				{
					from: './src/index.css',
					to: './index.css'
				},
			],
		}),
	],
};