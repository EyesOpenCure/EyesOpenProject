/*
const PurifyCSSPlugin = require('purifycss-webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const glob = require("glob")
const path = require("path")
*/
//const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

const webpack = require("webpack")



module.exports = {
	head: {
		title: 'OpenEYS Project',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Ocular EYS Replacement for RP25 and Other Acquired Retinal Injuries' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon_placeholder.png' }
		]
	},
	css: [
		//'bulma',
		'~assets/css/main.scss'
	],
	build: {
		vendor: [
			
		],
		router: {
			mode: 'history'
		},
		analyze: {
			analyzerMode: 'static'
		},
		/*
		babel: {
			plugins: ["syntax-dynamic-import","transform-object-rest-spread"],
			presets: [
				["env", {
					"targets": {
						"browsers": [
							"last 2 Chrome versions",
							"last 2 ChromeAndroid versions",
							"last 2 Firefox versions",
							"last 2 FirefoxAndroid versions",
							"last 2 Safari versions",
							"last 2 iOS versions",
							"last 2 Edge versions",
							"Chrome 41" // Googlebot renderer
						]
					},
					"debug": true,
					"modules": false
				}]
			]
		},
		*/
		extend (config, {isDev, isClient, isServer}) {
			config.module.rules.push({
				test: /\.md$/,
				use: [
					{
						loader: "html-loader"
					},
					{
						loader: "markdown-loader"
					}
				],
				exclude: /(node_modules)/
			})
			if (isServer) { // need to have this for testing for now
				// Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
				// for more information about purgecss.
				config.plugins.push(
					new PurgecssPlugin({
						paths: glob.sync([
							path.join(__dirname, './pages/**/*.vue'),
							path.join(__dirname, './layouts/**/*.vue'),
							path.join(__dirname, './components/**/*.vue')
						]),
						whitelist: ['html', 'body'],
						whitelistPatterns: [/^transition-page.+/]
					})
				)
			}
			if(isClient){
				config.plugins.push(
					new webpack.IgnorePlugin(/^(axios|marked)$/)
				)
			}
		},
		plugins: [
			//new OptimizeCssAssetsPlugin(),
			new webpack.optimize.LimitChunkCountPlugin({
				maxChunks: 4 //HACK: don't change this if you don't know what you are doing. In Nuxt 1.4 with 1 layout this will put all pages in 1 chunk
			})
		],
		postcss: {
			plugins: {
				'postcss-custom-properties': false
			}
		},
		extractCSS: true
	},
	transition: {
		name: 'transition-page'
	},
	loading: false
}