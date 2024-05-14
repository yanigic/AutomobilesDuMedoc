<script setup lang="ts">
import "../assets/css/singleImg.css";
const props = defineProps({
  img: String,
});
</script>

<template>
  <div class="container-singleImg">
    <img :src="props.img" alt="" />
  </div>
</template>
