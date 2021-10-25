module.exports = {
    css: {
      loaderOptions: {
        scss: {
            additionalData: `
                @import "@/assets/style/_colors.scss";
                @import "@/assets/style/_common.scss";
            `,
        },
      },
    },
    devServer: {
        proxy: "http://localhost:5000",
    },
};