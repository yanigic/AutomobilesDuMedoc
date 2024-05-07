<script setup lang="ts">
import "../assets/css/titleDescription.css";
const props = defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div class="container-layout">
    <div class="text-container">
      <p class="title">{{ props.title }}</p>
      <!-- <p class="title">{{ title.title }}</p> -->

      <p class="description">
        {{ props.description }}
      </p>
      <!-- <p class="description">
        {{ title.description }}
      </p> -->
    </div>
  </div>
</template>
