module.exports = {
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.output.filename('js/[name].[contenthash:6].js').end();
            config.output.chunkFilename('js/[name].[contenthash:6].js').end();
            // css
            config.plugin('extract-css').tap(args => [{
                filename: `css/[name].[contenthash:12].css`,
                chunkFilename: `css/[name].[contenthash:12].css`
            }]);
            // image-compress
            config.module
                .rule('images')
                .use('image-webpack-loader')
                .loader('image-webpack-loader')
                .options({ bypassOnDebug: true })
                .end()
        };

    }
}