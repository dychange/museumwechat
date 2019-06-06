const BASE_URL = process.env.NODE_ENV === 'production' ? '/dist' : '/'

module.exports={
    publicPath: BASE_URL,
    assetsDir: 'assets',
    outputDir: 'dist',
    productionSourceMap:false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.2.131:4567', 
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}