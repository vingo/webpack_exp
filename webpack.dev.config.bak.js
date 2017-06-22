var htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
  entry:{
    "main":'./src/script/main.js',
    "a":'./src/script/a.js',
    "b":'./src/script/b.js'
  },
  output:{
      path:__dirname+'/dist',
      filename:'js/[name]-[chunkhash].js',
      publicPath:'http://cdn.com/' 
  },
  module:{
    loaders:[
      {
        test:/\.js$/,loader:'babel-loader',
        exclude:'/node_modules/',
        query:{
          presets:['latest']
        }
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
       filename:'a.html',
      template:'index.html',
      inject:false, 
      title:'a.html of webpack',
      chunks:['main','a']
    }),
    new htmlWebpackPlugin({
      filename:'b.html',
      template:'index.html',
      inject:false, 
      title:'b.html of webpack',
      chunks:['main','b']
    })
  ]
};