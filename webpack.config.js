const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env, argv) => {

    let config = {
        entry: './src/index.js',
        output: {
            filename: 'app.bundle.js',
            path: path.resolve('dist/static'),
            publicPath: '/static/'
        },

        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-react', { "runtime": "automatic", "importSource": "@emotion/react" }]
                            ],
                            plugins: ['@emotion/babel-plugin']
                        }
                    }
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    type: 'asset/resource'
                }
            ]
        },

        devServer: {
            port: 3000,
            static: {
                directory: path.join(__dirname, 'public'),
            },
            hot: true,
        },

        plugins: []

    };

    if (argv.mode === 'development') {
        config.plugins.push(new ReactRefreshWebpackPlugin());
        config.module.rules[0].use.options.plugins.push(require.resolve('react-refresh/babel'));
    }

    return config;
}