import { defineUserConfig } from "vuepress";
// import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules', '!demo/*.md', '!draft/*.md'],

  locales: {
    "/": {
      lang: "en-US",
      title: "因纽特猎人Blog",
      description: "因纽特猎人Blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "因纽特猎人Blog",
      description: "因纽特猎人Blog",
    },
  },

  theme,

  plugins: [
    // searchPlugin({
    //   locales: {
    //     "/": {
    //       placeholder: "Search",
    //     },
    //     "/zh/": {
    //       placeholder: "搜索",
    //     },
    //   },
    // }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
