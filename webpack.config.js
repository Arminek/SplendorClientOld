module.exports = {
    entry: "./src/App.tsx",
    devtool: "source-map",
    output: {
        filename: "./dist/bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }]
    }
};
