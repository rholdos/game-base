
module.exports = {
	devServer: {
		proxy: {
			'/server': {
				target: 'http://127.0.0.1:3333' // Adonis Server
			}
		}
	}
};
