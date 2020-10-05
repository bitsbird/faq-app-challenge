module.exports = {
  devServer: {
    proxy: 'http://127.0.0.1:3000',
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/style/scss/_variables.scss";
        @import "@/style/scss/_functions.scss";
        @import "@/style/scss/_mixins.scss";`,
      },
    },
  },
};
