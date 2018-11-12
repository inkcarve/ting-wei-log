module.exports = {
  plugins: [
    require('autoprefixer')({ /* ...options */ }),
//     require('postcss-pxtorem')({
//     rootValue: 16,
//     unitPrecision: 5,
//     propList: ['font', 'font-size', 'line-height', 'letter-spacing','*padding*','*margin*'],
//     // propList:['*'], 
//     selectorBlackList: [],
//     replace: true,
//     mediaQuery: false,
//     minPixelValue: 0
// })
  ]
}