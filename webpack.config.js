const path = require('path');

module.exports =  {
    mode: 'development',
    entry: './src/main.js',
    output: {
        library: 'meetsy',
        path: path.resolve(__dirname, 'dist/meetsy')
    },
};