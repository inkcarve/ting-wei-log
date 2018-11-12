const path = require('path');
const glob = require('glob');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var env = process.env.NODE_ENV.trim();

const outputPath = '/';
const paths = {
    appSrc: './src'
}
const scssPath = path.resolve('./', './src/scss');
const scssCopyToPath = path.resolve('./', './ts-dist/scss');
console.log(scssPath);

const config = {
    devtool: (env=='production'?'hidden-source-map':'inline-source-map'),
    entry: {
        'main': '/src/pages/index.tsx'
    },
    resolve: {
        extensions: [
            // '.web.ts',
            // '.ts',
            // '.web.tsx',
            // '.tsx',
            '.web.js',
            '.js',
            '.web.jsx',
            '.jxs',
            '.css', '.scss',
        ],
        alias: {
          scss: path.join(__dirname, './scss'),
        }
    },
    module: {
        rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        {
                test: /\.(png|jpg|gif|woff|woff2|svg|ttf|eot)$/,
                loaders: [
                    'file-loader?name=dist/file/[name]-[hash:6].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            mozjpeg: {
                                progressive: true,
                                quality: '80',
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 3,
                            },
                            pngquant: {
                                quality: '75-90',
                                speed: 3,
                            },
                            svgo: {
                                plugins: [{
                                  removeViewBox: false
                                },{
                                  removeEmptyAttrs: false
                                }]
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ]
                // ,include: path.resolve( '/img' )
                // }, {
                //     test: /\.svg$/,
                //     loader: 'svg-inline-loader?name=/[name].[ext]'
            }, {
                test: /favicon.ico$/,
                loader: 'file-loader?name=/[name].[ext]'
            },
      //       {
      //   test: /\.(css|scss)/,
      //   loader: 'emit-file-loader',
      //   options: {
      //     name: 'static/css/[path][name].[ext]',
      //   },
      // },
      
       // {
       //          test: /\.css$/,
        
       //          // use: [

       //          //         'babel-loader',
       //          //         'raw-loader',
       //          //         {
       //          //             loader: 'postcss-loader',
       //          //             options: { sourceMap: env !== 'production' }
       //          //         }
       //          //     ]
       //          use:ExtractTextPlugin.extract({
       //      fallback:'style-loader',
       //      use:[{loader:'css-loader',
       //      options:{
       //          sourceMap:env!=='production'
       //      }
       //      }, 
       //      {loader:'postcss-loader',
       //      options:{sourceMap:env!=='production'}
       //      }
       //      ]})
       //      }, {
       //          test: /\.scss$/,
       //          exclude: /node_modules/,
       //      //     use: [
       //      //             'babel-loader',
       //      //             'raw-loader',
       //      //             {
       //      //                 loader: 'postcss-loader',
       //      //                 options: { sourceMap: env !== 'production' }
       //      //             },
       //      //             {
       //      //                 loader: 'sass-loader',
       //      //                 options: {
       //      //                     sourceMap: env !== 'production',
       //      //   includePaths: ['scss', 'node_modules']
       //      //     .map((d) => path.join(__dirname, d))
       //      //     .map((g) => glob.sync(g))
       //      //     .reduce((a, c) => a.concat(c), [])
       //      // }
       //      //             },
       //      //         ]
       //      use:ExtractTextPlugin.extract({
       //      fallback:'style-loader',
       //      use:[
       //      {loader:'css-loader',
       //      options:{
       //          sourceMap:env!=='production'
       //      }
       //      }, 
       //      {loader:'postcss-loader',
       //      options:{sourceMap:env!=='production'}
       //      }, 
       //      {loader:'sass-loader',
       //      options:{sourceMap:env!=='production',
       //      outputStyle:env!=='production'?'expanded':'compressed'}
       //      }
       //      ]})

       //      },
        ]
    },
    plugins: [
    ]
};

// if (env == 'production' || env == 'prod_1.5') {
//     config.plugins.push(
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {
//                 warnings: false
//             },
//             output: {
//                 comments: false
//             },
//             sourceMap: true
//         }));

//     config.plugins.push(
//         new CleanWebpackPlugin(
//             [
//                 outputPath + '/dist'
//             ], {
//                 root: outputPath,
//                 verbose: true,
//                 dry: false,
//                 watch: true
//             }
//         )
//     );
// }

module.exports = config;