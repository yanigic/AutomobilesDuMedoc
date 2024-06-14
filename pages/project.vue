<script setup lang="ts">
import ImgGrid from "../components/imgGrid.vue";
import SliderText from "../components/sliderText.vue";
import Test from "../components/test.vue";
import StestVis from "../components/stestVis.vue";
import Footer from "../components/footer.vue";

import { ref, onMounted, onUnmounted } from "vue";
import NewTest from "../components/newTest.vue";
import Finaltest from "../components/finaltest.vue";
import NavMobile from "../components/navMobile.vue";
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
  console.log("isScrolled:", isScrolled.value); // Aggiungi questo per verificare lo scroll
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="backgroundBlack">
    <NavMobile class="navMobile-black"></NavMobile>
    <Nav
      class="nav-position"
      :class="[
        'backgroundBlack',
        isScrolled ? 'navbar-scrolled-beam-yellow' : 'backgroundBlack',
      ]"
    ></Nav>
    <Finaltest></Finaltest>
    <!--    <NewTest></NewTest> -->
    <!-- <StestVis></StestVis> -->
    <!--  <Test></Test> -->
    <!--  <SliderText></SliderText> -->
    <ImgGrid></ImgGrid>
  </div>
</template>
