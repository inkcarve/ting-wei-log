const  webpackConfig = require("./webpack-config.js");
const _path = require("path");
const withSass = require('@zeit/next-sass')
// module.exports = withSass({
//   cssModules: true
// })
// const pagePath = (0, _path.resolve)('./', 'dist/pages');
module.exports = withSass({
  webpack(config, { buildId, dev }){
  	
  	// console.log(config.module.rules);
  	// config.entry=webpackConfig.entry;
  	if(!config.resolve.extensions){
  	config.resolve.extensions=webpackConfig.resolve.extensions;
  	}
    if(!config.module.rules){config.module.rules=[];}
    config.module.rules=config.module.rules.concat(webpackConfig.module.rules);
  	if(!!config.plugins){
  	config.plugins=config.plugins.concat(webpackConfig.plugins); 
  	}
    // console.log(config.module.rules);
    // Perform customizations to webpack config
    
    // Important: return the modified config
    return config
  },
  pagesDirectory:'/pages',
  useFileSystemPublicRoutes: true, // default true
// cssModules: true,

})