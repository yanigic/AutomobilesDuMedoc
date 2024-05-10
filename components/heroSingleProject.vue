<script setup lang="ts">
import "../assets/css/heroSingleProject.css";
import ArrowHeroDown from "../assets/img/svg/arrowDown.svg";

const props = defineProps({
  title: String,
  description: String,
  img: String,
});
</script>

<template>
  <div class="">
    <div class="heroSingleProject-container">
      <img class="img-singleProject" :src="props.img" />

      <h3 class="title-singleProject">
        {{ props.title }}
      </h3>
      <img
        class="svg-heroSingleProject"
        :src="ArrowHeroDown"
        alt="Navigate Down"
      />
    </div>
  </div>
</template>
