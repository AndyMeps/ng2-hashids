module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'dist/bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', '']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: ['node_modules', 'typings'],
                loader: 'ts-loader'
            }
        ]
    }
}