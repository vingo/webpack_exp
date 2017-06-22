var htmlWebpackPlugin=require('html-webpack-plugin');
var path=require('path');
module.exports={
  entry:{
    "main":'./src/script/main.js',
    "a":'./src/script/a.js',
    "b":'./src/script/b.js'
  },
  output:{
      path:path.resolve(__dirname,'dist'),
      filename:'js/[name]-[chunkhash].js'
     
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        include:path.resolve(__dirname,'src'),
        exclude:path.resolve(__dirname,'node_modules'),
        query:{
          presets:['latest']
        }
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader'
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
       filename:'a.html',
      template:'index.html',
      inject:'head', 
      title:'a.html of webpack',
      chunks:['main','a']
    }),
    new htmlWebpackPlugin({
      filename:'b.html',
      template:'index.html',
      inject:'head', 
      title:'b.html of webpack',
      chunks:['main','b']
    })
  ]
};