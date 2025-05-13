const path = require('path');
const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');


require('dotenv').config();

module.exports =  {
    mode: 'development',
    entry: './src/main.js',
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][hash][ext]',
                },
            },
        ],
    },
    plugins: [
        new EnvironmentPlugin(['CLOUD_PROJECT_NUMBER', 'MAIN_STAGE_URL', 'SIDE_PANEL_URL']),
        new HtmlWebpackPlugin({
            filename: 'MainStage.html',
            template: './src/MainStage.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'SidePanel.html',
            template: './src/SidePanel.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' },
            ],
        })
    ],
    output: {
        library: 'meetsy',
        path: path.resolve(__dirname, 'dist/meetsy')
    },
};