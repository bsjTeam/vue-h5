module.exports = {
  runtimeCompiler: true,
  devServer: {
    // open: true, //配置自动启动浏览器
    // proxy: {
    //   "/api": {
    //     target: "http://192.168.130.223:7999/",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": ""
    //     }
    //   }
    // } // 配置多个代理
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true;
          @import "~@/assets/css/variables.less";
          @import "~@/assets/css/mixin.less";
          `
        }
      }
    }
  }
};
