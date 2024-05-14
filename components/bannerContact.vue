<script setup lang="ts">
import "../assets/css/bannerContact.css";
/* const text = [
  {
    paragraph: "Discover all the possibilities for your car",
    cta: "CONTACT US",
  },
]; */

const props = defineProps({
  paragraph: String,
  cta: String,
});
</script>

<template>
  <div class="container-banner">
    <div class="text-container-banner">
      <p class="title-banner-contact">{{ props.paragraph }}</p>

      <button class="cta-banner-contact">
        {{ props.cta }}
      </button>
    </div>
  </div>
</template>
