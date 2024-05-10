<script setup lang="ts">
import "../assets/css/singleProjectText.css";
const props = defineProps({
  title: String,
  description: String,
  year: String,
  model: String,
  typeOfCustomization: String,
  client: String,
});
</script>

<template>
  <div class="">
    <div class="container-singleProjectText">
      <div class="main-singleProjectText">
        <div class="title-singleProjectText">
          {{ props.title }}
        </div>
        <div class="description-singleProjectText">
          {{ props.description }}
        </div>
      </div>
      <div></div>
      <div class="sidebar-singleProjectText">
        <div>
          {{ props.year }}
        </div>
        <div>
          {{ props.model }}
        </div>
        <div>
          {{ props.typeOfCustomization }}
        </div>
        <div>
          {{ props.client }}
        </div>
      </div>
    </div>
  </div>
</template>
