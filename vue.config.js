const BASE_URL = process.env.NODE_ENV === 'production' ? '/museumwx' : '/'

module.exports={
    publicPath: BASE_URL,
    assetsDir: 'assets',
    outputDir: 'dist',
    productionSourceMap:false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.0.110:8080/museumwx', 
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}