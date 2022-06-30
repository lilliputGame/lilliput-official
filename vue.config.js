module.exports = {
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    assetsDir: process.env.VUE_APP_ENV == "dev" ? "assets" : process.env.VUE_APP_PUBLIC_PATH,
}