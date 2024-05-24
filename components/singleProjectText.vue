<script setup lang="ts">
import "../assets/css/singleProjectText.css";
const props = defineProps({
  title: String,
  descriptionOne: String,
  descriptionTwo: String,
  descriptionThree: String,
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
          {{ props.descriptionOne }}
        </div>
        <div class="description-singleProjectText">
          {{ props.descriptionTwo }}
        </div>
        <div class="description-singleProjectText">
          {{ props.descriptionThree }}
        </div>
      </div>
      <div></div>
      <div class="sidebar-singleProjectText">
          <div>
          {{ props.model }}
        </div>
        <div>
          {{ props.year }}
        </div>
        <div>
          {{ props.client }}
        </div>
      
        <div class="typeOfcustomization">
          {{ props.typeOfCustomization }}
        </div>
      </div>
    </div>
  </div>
</template>
