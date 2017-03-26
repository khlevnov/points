import path from 'path';

export default {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './index'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        publicPath: '/js/',
        filename: '[name].js',
        chunkFilename: 'chunk.[name].js'
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ]
    },
    watchOptions: {
        aggregateTimeout: 100
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
