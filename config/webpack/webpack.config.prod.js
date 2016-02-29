var webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin');
var source = __dirname + "/../../app/assets/javascripts/";
var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {

    entry: {
        main : source + "main.coffee",
        survey: source + "surveys/survey.coffee",
        survey_admin: source + "surveys/survey-admin.coffee",
    },
    output: {
        path: "./public/assets/javascripts",
        filename: "[name].[hash].js",
    },
    resolve: {
        extension: ['', '.js', '.jsx', '.coffee', '.cjsx'],
        root: [__dirname + "vendor", __dirname + "node_modules"]
    },
    module: {
        loaders: [
            { 
                test: /\.jsx?$/, 
                exclude: [/vendor/, /node_modules/],
                loaders:['babel'] 
            },
            {   
                test: /\.cjsx$/, 
                loaders: ['coffee', 'cjsx']
            },
            {
                test: /\.coffee$/,
                loaders: ["coffee-loader"]
            },
            { test: /\.json$/, loader: "json-loader" }
        ]
    },
     externals: {
        "jquery": "jQuery",
        "jquery": "$"
    },

    plugins: [
        new ManifestPlugin({
            fileName: 'rev-manifest.json'
        })
    ]
};