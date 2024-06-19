export default defineNuxtConfig({
  css: ["@/assets/css/roboto.css"],
  modules: [
    [
      "@storyblok/nuxt",
      {
        /* 
        accessToken: 'W1vLyxT5rQ15jBpANjnv0gtt', */
        accessToken: process.env.STORYBLOK_API_KEY,
        apiOptions: {
          region: "", // Set 'US" if your space is created in US region (EU default)
        },
      },
    ],
    "@nuxtjs/tailwindcss",
  ],
  build: {
    rollupOptions: {
      external: ["/Users/yanilettetejeda/Documents/Code/projects/adm/asset"],
    },
  },
});
