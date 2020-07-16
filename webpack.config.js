const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = (env, argv) => {
    const baseConfig = {
        mode: env && env.production ? "production" : "development",
        optimization: {
            minimize: env && env.production ? true : false,
            minimizer: [new TerserPlugin()]
        },
        output: {
            path: path.resolve(__dirname, "dist")
        }
    };

    const copyConfig = {
        entry: {
            "empty": "./src/empty.js"
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    { from: "copied.js", context: "src/" }
                ]
            })
        ]
    };

    const loaderConfig = {
        entry: {
            "loaded": "./src/loaded.js"
        }
    };

    return [merge(baseConfig, copyConfig), merge(baseConfig, loaderConfig)]
}

