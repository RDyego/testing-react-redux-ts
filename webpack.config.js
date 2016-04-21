const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const commonConfig = {
    // debug: true,
    // devtool: 'source-map',
	entry: {
        filename: PATHS.src + '/index.tsx'
    },
	output: {
        path: PATHS.build,
		filename: 'bundle.js'
	},
	resolve:{
		extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx']
	},
    plugins: [
        new LiveReloadPlugin()
        //new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                include: /src/,
                loader: 'ts-loader'
            }
        ]
    }
};

const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'start' || !TARGET) {
	const devConfig = {
        devTool: 'eval-source-map',
        devServer: {
            contentBase: PATHS.build,
        }
	};

	module.exports = _.merge(commonConfig, devConfig);
}
