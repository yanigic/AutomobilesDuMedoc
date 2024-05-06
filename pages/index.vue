<script setup>
import Default from "../layouts/default.vue";

import BannerProject from "../components/bannerProject.vue";
import Services from "../components/services.vue";
import Nav from "../components/nav.vue";
import BannerContact from "../components/bannerContact.vue";
const story = await useAsyncStoryblok(
  "home",
  { version: "draft" },
  { customParent: "https://app.storyblok.com" }
);
</script>

<template>
  <div class="container-layouts">
    <!--  <Default></Default> -->

    <BannerProject></BannerProject>
    <BannerProject></BannerProject>
    <BannerProject></BannerProject>
    <Services></Services>
    <BannerContact></BannerContact>
  </div>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
