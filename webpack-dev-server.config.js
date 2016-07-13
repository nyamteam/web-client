const path = require("path")
const I18nPlugin = require("i18n-webpack-plugin")
const languages = {
    "en": null,
    "fr": require("./locale/fr.json")
}

const language = "fr"

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: `./dist/bundle.js`,
    },
    plugins: [
        new I18nPlugin(
            languages[language]
        )
    ],
    devServer: {
        historyApiFallback: true,
    },
    devtool: "source-map",
    resolve: {
        alias: {
            config$: "../config.dev.js"
        },
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ["react-hot-loader", "ts-loader"] }
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
}