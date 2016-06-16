/**
  * Created by Martin on 2016-06-13
*/

module.exports = {
	entry : "./app/components/Main.js",
	output : {
		filename : "public/bundle.js"
	},
	
	module : {
		loaders : [
			{
				test : /\.jsx?$/,
				exclude : /node_modules/,
				loader : 'babel',
				query : {
					presets : ["react", "es2015"]
				}
			}
		]
	},

	externals: {
		'react': 'React',
		'react-dom': "ReactDOM"
	}
}
