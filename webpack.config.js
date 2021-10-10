const path = require("path");

module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, "./public"),
        filename: "bundle.js",
    },
    devServer: {
        static: path.resolve(__dirname, "public"),
        hot: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    }
};