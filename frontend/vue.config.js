module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/style/scss/_variables.scss";
        @import "@/style/scss/_functions.scss";
        @import "@/style/scss/_mixins.scss";`
      }
    }
  }
};
