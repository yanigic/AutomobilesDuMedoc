<script setup lang="ts">
import "../assets/css/imgTwoColumns.css";
const props = defineProps({
  img: String,
});
</script>

<template>
  <div class="main-imgTwoColumns">
    <div>
      <img :src="props.img" alt="" srcset="" />
    </div>
  </div>
</template>
