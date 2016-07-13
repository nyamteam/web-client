const path = require("path")
const I18nPlugin = require("i18n-webpack-plugin")
const languages = {
    "en": null,
    "fr": require("./locale/fr.json")
}

const defaultLanguage = "en"

module.exports = Object.keys(languages).map(language => {
    return {
        entry: "./src/index.tsx",
        output: {
            filename: (
                language === defaultLanguage
                ? "./dist/bundle.js"
                : `./dist/${language}.bundle.js`
            ),
        },
        plugins: [
            new I18nPlugin(
                languages[language]
            )
        ],
        resolve: {
            alias: {
                config$: "../config.prod.js"
            },
            extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
        },
        module: {
            loaders: [
                { test: /\.tsx?$/, loader: "ts-loader" }
            ]
        }
    }
})