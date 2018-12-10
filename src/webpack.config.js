module.exports = {
    entry: {
        index: './js/index'
    },
    output: {
        filename: '[name].js'
    },
    devtools: 'source-map',
    resolve: {
        extensions: ['.js']
    },
    module: {
        loader: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: 'node_modules',
                query: {
                    preset: ['es2015 ']
                }
            }
        ]
    }
}
