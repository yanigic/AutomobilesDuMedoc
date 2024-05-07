<script setup>
import HeroAbout from "../components/heroAbout.vue";
import Paragraph from "../components/paragraph.vue";
import "../assets/css/about.css";
import TitleParagraph from "../components/titleParagraph.vue";
import TitleDescription from "../components/titleDescription.vue";
import Test from "../components/test.vue";

const titlesDescriptions = [
  {
    title: "Uniqueness",
    description:
      "The heartbeat of the brand, driven by the commitment to create one-off modifications and art cars that are as individual as the clients and brands they serve. Each project is a testament to originality, ensuring that two creations are never the same and each one carries its own story and character.",
  },
  {
    title: "freedomness",
    description:
      "Transcending traditional boundaries and expectations of automotive restoration, Automobiles du Médoc boldly enhances and transforms features of the vehicles, offering a liberated approach to design and customization that celebrates change.",
  },
  {
    title: "excellence",
    description:
      "The brand's cornerstone, reflected in the high caliber of workmanship and the exceptional experience offered to clients. This value is about being part of an exclusive club where every detail is meticulously crafted to deliver beyond the standard.",
  },
];
</script>

<template>
  <div class="container-layouts">
    <HeroAbout></HeroAbout>
    <Paragraph></Paragraph>
    <TitleParagraph></TitleParagraph>
    <!-- <TitleDescription></TitleDescription> -->
    <span v-for="(item, index) in titlesDescriptions" :key="index">
      <Test :title="item.title" :description="item.description"></Test>
    </span>
  </div>
</template>
