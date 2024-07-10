<template>
  <div class="box">
    <div class="box1"><img :src="logoGroup" alt="" /></div>

    <div class="box2"><img :src="logoGroupRight" alt="" /></div>
    <div class="box1"><img :src="logoGroup" alt="" /></div>

    <!-- contenutore dell'animazione -->
  </div>
</template>
<script setup lang="ts">
import "../assets/css/heroAnimation.css";
import logoGroup from "../assets/img/svg/LogoGroup.svg";
import logoGroupRight from "../assets/img/svg/LogoGroupRig.svg";
/*  */
import { onMounted } from "vue";

onMounted(() => {
  window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelectorAll(".box");
    const boxOne = document.querySelectorAll(".box1");
    const boxTwo = document.querySelectorAll(".box2");
    box.style.animation = "fadeIn 2s ease-in-out forwards";
    boxOne.style.animation = "fadeIn 2s ease-in-out forwards";
    boxTwo.style.animation = "fadeIn 2s ease-in-out forwards";
  });
});
</script>
