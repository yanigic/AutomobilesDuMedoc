<script setup>
import imgHeroPro from "../assets/img/imgSinglePro.jpeg";
import imgTwoColumsOne from "../assets/img/imgone.jpg";
import imgTwoColumsTwo from "../assets/img/imagetwo.jpg";
import imgTwoColumsThree from "../assets/img/imagethree.jpg";

import HeroSingleProject from "../components/heroSingleProject.vue";
import ImgTwoColumns from "../components/imgTwoColumns.vue";
import SingleProjectText from "../components/singleProjectText.vue";
import Slider from "../components/slider.vue";
import SingleImg from "../components/singleImg.vue";
import BannerContact from "../components/bannerContact.vue";
const heroSingleProjectInfo = [
  {
    title: "Cherry Countach",
    img: imgHeroPro,
  },
];

const SingleProjectInfoText = [
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
];

const ctaContent = [
  {
    paragraph: "Want to customize yours?",
    cta: "CONTACT US",
  },
];

const singleImg = [{ img: imgTwoColumsOne }, { img: imgTwoColumsOne }];
</script>

<template>
  <div class="">
    <span v-for="(item, index) in heroSingleProjectInfo" :key="index">
      <HeroSingleProject
        :title="item.title"
        :img="item.img"
      ></HeroSingleProject>
    </span>
    <span v-for="(item, index) in SingleProjectInfoText" :key="index">
      <SingleProjectText
        :title="item.title"
        :descriptionOne="item.descriptionOne"
        :descriptionTwo="item.descriptionTwo"
        :descriptionThree="item.descriptionThree"
        :year="item.year"
        :client="item.client"
        :model="item.model"
        :typeOfCustomization="item.typeOfCustomization"
      ></SingleProjectText>
    </span>
    <span class="container-imgTwoColumns">
      <ImgTwoColumns> ></ImgTwoColumns>
    </span>
    <span v-for="(item, index) in SingleProjectInfoText" :key="index">
      <SingleProjectText
        :descriptionThree="item.descriptionTest"
        :descriptionTwo="item.descriptionOne"
      ></SingleProjectText>
    </span>
    <SingleImg
      v-for="(item, index) in singleImg"
      :key="index"
      :img="item.img"
    ></SingleImg>

    <BannerContact
      v-for="(text, index) in ctaContent"
      :key="index"
      :paragraph="text.paragraph"
      :cta="text.cta"
    ></BannerContact>

    <Slider></Slider>
  </div>
</template>
