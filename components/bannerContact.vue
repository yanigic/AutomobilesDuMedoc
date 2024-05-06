<script setup lang="ts">
import "../assets/css/bannerContact.css";
const text = [
  {
    paragraph: "Discover all the possibilities for your car",
    cta: "CONTACT US",
  },
];
</script>

<template>
  <div class="container-banner">
    <div
      class="text-container-banner"
      v-for="(title, index) in text"
      :key="index"
    >
      <p class="title-banner-contact">{{ title.paragraph }}</p>

      <button class="cta-banner-contact">
        {{ title.cta }}
      </button>
    </div>
  </div>
</template>
