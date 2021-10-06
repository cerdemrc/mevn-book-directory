
module.exports = {
    css: {
      loaderOptions: {
        scss: {
            additionalData: `
                @import "@/assets/style/_variables.scss";
                @import "@/assets/style/_common.scss";
            `,
        },
      },
    },
  };