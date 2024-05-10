<script setup>
import imgHeroPro from "../assets/img/imgSinglePro.jpeg";

import HeroSingleProject from "../components/heroSingleProject.vue";
import SingleProjectText from "../components/singleProjectText.vue";
import Slider from "../components/slider.vue";
const heroSingleProjectInfo = [
  {
    title: "Cherry Countach",
    img: imgHeroPro,
  },
];

const SingleProjectInfoText = [
  {
    title: "a bespoke approach to restore and enhance this countach",
    description:
      "Automobiles du Médoc's latest project and the complete restoration of a 1989 Lamborghini Countach 25th Anniversary LP 400 S Turbo, a project that elevates an automotive icon to new levels of performance and style. The heart of this vehicle has been significantly enhanced with the introduction of an advanced turbo system, dramatically improving its engine capabilities. This upgrade ensures exceptional acceleration and an increased top speed, setting new benchmarks for the model. Aesthetically, the car stands out in its vibrant cherry red hue, a choice that not only enhances its appearance but also emphasizes its distinctive character. This color is not just a stylistic decision but symbolizes the vehicle's uniqueness.",
    year: "August 2024",
    client: "John Smith",
    model: "Lamborghini Countach 25th Anniversary LP 400 S Turbo (1989) ",
    typeOfCustomization:
      "Full restoration, custom wheels, custom enhanced powertrain",
  },
];
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
        :description="item.description"
        :year="item.year"
        :client="item.client"
        :model="item.model"
        :typeOfCustomization="item.typeOfCustomization"
      ></SingleProjectText>
    </span>

    <Slider></Slider>
  </div>
</template>
