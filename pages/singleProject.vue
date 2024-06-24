<script setup>
import imgTwoColumsOne from "../assets/img/imgone.jpg";
import imgTwoColumsTwo from "../assets/img/imagetwo.jpg";
import imgTwoColumsThree from "../assets/img/imagethree.jpg";
import Footer from "../components/footer.vue";

import HeroSingleProject from "../components/heroSingleProject.vue";
import ImgTwoColumns from "../components/imgTwoColumns.vue";
import SingleProjectText from "../components/singleProjectText.vue";
import Slider from "../components/slider.vue";
import SingleImg from "../components/singleImg.vue";
import BannerContact from "../components/bannerContact.vue";
import Grid from "../components/grid.vue";
import SliderGrid from "../components/sliderGrid.vue";
import Test from "../components/test.vue";
import Lightgallery from "../components/lightgallery.vue";

import SingleProjectParagraph from "../components/singleProjectParagraph.vue";
import NavMobile from "../components/navMobile.vue";

/* const SingleProjectInfoText = [
  {
    title: "a bespoke approach to restore and enhance this countach",
    descriptionOne:
      "Automobiles du Médoc's latest project and the complete restoration of a 1989 Lamborghini Countach 25th Anniversary LP 400 S Turbo, a project that elevates an automotive icon to new levels of performance and style.",
    descriptionTwo:
      "The heart of this vehicle has been significantly enhanced with the introduction of an advanced turbo system, dramatically improving its engine capabilities. This upgrade ensures exceptional acceleration and an increased top speed, setting new benchmarks for the model.",
    descriptionThree:
      "Aesthetically, the car stands out in its vibrant cherry red hue, a choice that not only enhances its appearance but also emphasizes its distinctive character. This color is not just a stylistic decision but symbolizes the vehicle's uniqueness.",
    descriptionFour:
      "The wheels, custom-designed for this model, have been engineered to perfectly integrate with the aerodynamic and performance needs. Every component has been meticulously selected to optimize both functionality and aesthetics, contributing significantly to the improvement of the driving dynamics.",
    descriptionFive:
      "The wheels, custom-designed for this model, have been engineered to perfectly integrate with the aerodynamic and performance needs. Every component has been meticulously selected to optimize both functionality and aesthetics, contributing significantly to the improvement of the driving dynamics.",

    year: "August 2024",
    client: "John Smith",
    model: "Lamborghini Countach 25th Anniversary LP 400 S Turbo (1989) ",
    typeOfCustomization:
      "Full restoration, custom wheels, custom enhanced powertrain",
    descriptionTest:
      "The wheels, custom-designed for this model, have been engineered to perfectly integrate with the aerodynamic and performance needs. Every component has been meticulously selected to optimize both functionality and aesthetics, contributing significantly to the improvement of the driving dynamics.",
    descriptionTestone:
      "The wheels, custom-designed for this model, have been engineered to perfectly integrate with the aerodynamic and performance needs. Every component has been meticulously selected to optimize both functionality and aesthetics, contributing significantly to the improvement of the driving dynamics.",
  },
]; */

const ctaContent = [
  {
    paragraph: "Want to customize yours?",
    cta: "CONTACT US",
  },
];

/* const singleImg = [{ img: imgTwoColumsOne }, { img: imgTwoColumsOne }];
 */
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
const scrollToNextSectionProject = () => {
  const nextSection = document.getElementById("nextSectionProject");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <div class="backgroundLight singleProject">
    <NavMobile class="navMobile-white"></NavMobile>
    <Nav
      class="nav-position"
      :class="[
        'backgroundLight',
        isScrolled
          ? 'navbar-scrolled-beam-yellow'
          : 'navbar-scrolled-burnout-black',
      ]"
    ></Nav>
    <!-- <Test></Test> -->
    <HeroSingleProject></HeroSingleProject>
    <div @click="scrollToNextSectionProject" class="svg-heroSingleProject">
      <svg
        class="arrowHomepageP"
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        data-v-inspector="components/finaltest.vue:96:7"
      >
        <path
          d="M51.0361 21.2134L30.1765 42.073L8.96328 20.8598"
          stroke="#7C809B"
          stroke-width="5"
          data-v-inspector="components/finaltest.vue:103:9"
        ></path>
      </svg>
    </div>
    <!--  <img
      @click="scrollToNextSectionProject"
      class="svg-heroSingleProject"
      src="../assets/img/svg/arrowDown.svg"
      alt="Navigate Down"
    /> -->
    <span id="nextSectionProject">
      <SingleProjectText></SingleProjectText>
    </span>
    <span>
      <ImgTwoColumns> ></ImgTwoColumns>
    </span>
    <!--  <span v-for="(item, index) in SingleProjectInfoText" :key="index">
      <SingleProjectText
        :descriptionThree="item.descriptionTest"
        :descriptionTwo="item.descriptionOne"
      ></SingleProjectText>
    </span> -->
    <!--  <SingleImg
      v-for="(item, index) in singleImg"
      :key="index"
      :img="item.img"
    ></SingleImg> -->
    <SingleProjectParagraph></SingleProjectParagraph>
    <SingleImg></SingleImg>
    <Lightgallery></Lightgallery>

    <!--  <SliderGrid></SliderGrid> -->

    <BannerContact
      class="container-banner-single-project"
      v-for="(text, index) in ctaContent"
      :key="index"
      :paragraph="text.paragraph"
      :cta="text.cta"
    ></BannerContact>
    <!--  <BannerContact class="container-banner-single-project"></BannerContact>
    -->
    <!--  <Grid></Grid> -->

    <Slider class="singleProject-slider"></Slider>
    <Footer></Footer>
  </div>
</template>
