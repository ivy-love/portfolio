module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  publicPath: '/portfolio',
  outputDir: 'docs',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/utility/_function.scss";
          @import "@/styles/utility/_variable.scss";
          @import "@/styles/utility/_mixin.scss";
        `,
      },
    },
  },
};
