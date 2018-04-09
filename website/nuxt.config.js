/*
const PurifyCSSPlugin = require('purifycss-webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const glob = require("glob")
const path = require("path")
*/
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

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
			if (!isDev) {
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
						whitelistPatterns: [/^(fade-enter|fade-leave).+/]
					})
				)
			}
		},
		/*
		plugins: [
			new PurifyCSSPlugin({
				styleExtensions: [".css", ".sass", ".scss"],
				paths: glob.sync(path.join('{layouts/*.vue,pages/*.vue,components/*.vue}')),
				//paths: glob.sync(path.join(__dirname, '/build/*.js')),
				verbose: true
			}),
			//new OptimizeCssAssetsPlugin()
		],
		*/
		postcss: {
			plugins: {
				'postcss-custom-properties': false
			}
		},
		extractCSS: true
	},
	transition: {
		name: 'fade',
		mode: 'out-in'
	},
	loading: false,
	//extractCSS: true
}