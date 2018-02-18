const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}

module.exports = (env) => {
    const isProduction = env === 'production';

    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_apikey': JSON.stringify(process.env.FIREBASE_apikey),
                'process.env.FIREBASE_authDomain': JSON.stringify(process.env.FIREBASE_authDomain),
                'process.env.FIREBASE_databaseURL': JSON.stringify(process.env.FIREBASE_databaseURL),
                'process.env.FIREBASE_projectId': JSON.stringify(process.env.FIREBASE_projectId),
                'process.env.FIREBASE_storageBucket': JSON.stringify(process.env.FIREBASE_storageBucket),
                'process.env.FIREBASE_messagingSenderId': JSON.stringify(process.env.FIREBASE_messagingSenderId)
            })
        ],
        //con el source-map se crea un fichero externo con el .map que solo 
        //se usará cuando se abran los devtools en el navegador
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
};