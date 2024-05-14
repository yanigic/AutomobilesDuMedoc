<script setup lang="ts">
import "../assets/css/imgTwoColumns.css";
const props = defineProps({
  img: String,
});

import imgTwoColumsOne from "../assets/img/imgone.jpg";
import imgTwoColumsTwo from "../assets/img/imagetwo.jpg";
import imgTwoColumsThree from "../assets/img/imagethree.jpg";
</script>

<template>
  <div class="container-imgTwoColumns">
    <div class="main-imgTwoColumns">
      <img class="img-col" :src="imgTwoColumsOne" alt="" srcset="" />
    </div>

    <div class="sidebar-imgTwoColumns">
      <div>
        <img class="img-col" :src="imgTwoColumsTwo" alt="" srcset="" />
      </div>
      <div>
        <img class="img-col" :src="imgTwoColumsThree" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>
