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
  <div class="">
    <div class="text-container-banner">
      <!-- <h3 v-html="paragraph" class="title-banner-contact">{{ props.paragraph }} </h3> -->
       <h3 v-html="paragraph" class="title-banner-contact"></h3>


      <button class="cta-banner-contact">
        {{ props.cta }}
      </button>
    </div>
  </div>
</template>
