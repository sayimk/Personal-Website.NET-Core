const path = require("path");

module.exports = {
    entry: {
        //Add ReactJS Script exports here
        index: "./Scripts/src/index.js",
        Header: "./Scripts/src/Header.js"
    },

    //This is where all the files will be exported
    output: {
        path: path.resolve(__dirname, "../../wwwroot/js/reactJS/"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                use: {
                    loader: "babel-loader"
                },
                test: /\.js$/,
                exclude: /node_modules/ //excludes node_modules folder from being transpiled by babel. We do this because it's a waste of resources to do so.
            }
        ]
    }
}
