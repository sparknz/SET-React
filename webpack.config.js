
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        library: '@sparknz/set-react',
        libraryTarget: 'commonjs2',
        publicPath: "/dist/bundle"
    },

    // Enable sourcemaps for debugging webpack"s output.
    devtool: "source-map",

    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },

            // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },
    externals: {
        "externals": {
            "react": {
                "commonjs": 'react',
                "commonjs2": 'react',
                "amd": 'react',
            },
            "styled-components": {
                "commonjs": 'styled-components',
                "commonjs2": 'styled-components',
                "amd": 'styled-components',
            },
            "react-dom": {
                "commonjs": 'react-dom',
                "commonjs2": 'react-dom',
                "amd": 'react-dom',
            },
        },
    }

};