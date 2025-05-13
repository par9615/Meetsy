const path = require('path');
const { EnvironmentPlugin } = require('webpack');
require('dotenv').config();

module.exports =  {
    mode: 'development',
    entry: './src/main.js',
    plugins: [
        new EnvironmentPlugin(['CLOUD_PROJECT_NUMBER', 'MAIN_STAGE_URL', 'SIDE_PANEL_URL']),
    ],
    output: {
        library: 'meetsy',
        path: path.resolve(__dirname, 'dist/meetsy')
    },
};