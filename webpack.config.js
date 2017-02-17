var webpack = require("webpack");
//生成HTML
var html = require("html-webpack-plugin")
//删除文件
var clean = require('clean-webpack-plugin');
<<<<<<< HEAD

=======
>>>>>>> makeboluo-master
module.exports = {
	entry:"./app/app.js",
	output:{
		path:__dirname+"/www",
		filename:"js/bundle.js"
	},
	module:{
		loaders:[
<<<<<<< HEAD
			{
				test:/\.css$/,
				loader:"style-loader!css-loader!less-loader"
			},
			{
				test:/\.(png|jpe?g|gif)$/,
				loader:"url-loader?limit=5000&name=images/[name].[hash:4].[ext]"
			},
			{
				test:/\.vue$/,
				loader:"vue-loader"
			},
			{
				test:/\.(eot|svg|ttf|woff)$/,
				loader:"file-loader",
			}
		]
	},

	devServer: {
	  contentBase:"./www",
      inline: true,
      port: 8010
    },
	plugins:[
		new html({
			title:"生活一家",
			template:__dirname+"/app/index.html",
			filename:"index.html",
		}),
		new clean(["www"]),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress:{
		// 		warnings:false,//取消报错提示
		// 	}
		// })//压缩代码
	],
	resolve:{
=======
          {
          	test:/\.css$/,
          	loader:"style-loader!css_loader"
          },
          {
          	test:/\.(png|jpe?g|gif)$/,
          	loader:"url-loader?limit=5000&name=images/[name].[hash:4].[ext]"
          },
          {
            test:/\.vue$/,
            loader:"vue-loader"
          },
          {
            test:/\.(ttf|woff|eot|svg)$/,
            loader:"file-loader"
          }
		]
	},
	//webpack-dev-server
	devServer: {
        contentBase:"./www",
        inline: true,
        port: 8088
    },
    plugins:[
        new html({
        	title:"生活一家",
        	template:__dirname+"/app/index.html",
            filename:"index.html",
        }),
        new clean(["www"]),
        // new webpack.optimize.UglifyJsPlugin({
        // 	compress:{
        // 		warnings:false,//取消报错提示
        // 	}
        // })//压缩代码
    ],
    resolve:{
>>>>>>> makeboluo-master
		alias:{
			'vue$': 'vue/dist/vue.common.js'
		}
	}
<<<<<<< HEAD
|
=======
}
>>>>>>> makeboluo-master
