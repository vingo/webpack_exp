
webpack hello.js hello.bundle.js 
webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --process 

webpack --config  webpack.dev.config.js

hash  
chunkhash {文件内容的md5 随着内容变化而变化}

html-webpack-plugin   自动生成并写入到html文件对应的文件引用

htmlWebpackPlugin  命名不能变   <%=htmlWebpackPlugin.options.title%> 

babel
打包速度问题： loader -->include ,exclude

