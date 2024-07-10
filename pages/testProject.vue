<script setup>
import imgTwoColumsOne from "../assets/img/imgone.jpg";
import imgTwoColumsTwo from "../assets/img/imagetwo.jpg";
import imgTwoColumsThree from "../assets/img/imagethree.jpg";

import HeroSingleProject from "../components/heroSingleProject.vue";
import ImgTwoColumns from "../components/imgTwoColumns.vue";
import SingleProjectText from "../components/singleProjectText.vue";
import Slider from "../components/slider.vue";
import SingleImg from "../components/singleImg.vue";
import BannerContact from "../components/bannerContact.vue";
import Grid from "../components/grid.vue";
import SliderGrid from "../components/sliderGrid.vue";
import Test from "../components/test.vue";
import SingleProjectParagraph from "../components/singleProjectParagraph.vue";
import HeroAnimation from "../components/heroAnimation.vue";
import Endless from "../storyblok/endless.vue";
</script>

<template>
  <div class="">
    <Nav class="nav-position"></Nav>
    <Endless></Endless>
    <!--   <HeroAnimation></HeroAnimation> -->
    <!-- <Test></Test> -->
    <!-- <HeroSingleProject></HeroSingleProject> -->

    <!-- <span>
      <SingleProjectText></SingleProjectText>
    </span>
    <span>
      <ImgTwoColumns> ></ImgTwoColumns>
    </span>

    <SingleProjectParagraph></SingleProjectParagraph>
    <SingleImg></SingleImg>
    <SliderGrid></SliderGrid>

    <BannerContact class="container-banner-single-project"></BannerContact>

    <Slider class="singleProject-slider"></Slider> -->
  </div>
</template>
