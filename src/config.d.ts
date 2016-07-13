// This module is injected by Webpack
// with ../config.dev.js or ../config.prod.js
declare module 'config' {
    export const basePath: string
}

// Function used by i18n-webpack-plugin
declare function __(key: string): string