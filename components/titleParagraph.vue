<script setup lang="ts">
import "../assets/css/titleDescription.css";
import "../assets/css/titleParagraph.css";
import { ref, onMounted, onUnmounted } from "vue";

const text = [
  {
    title: "Vision",
    description:
      "Our vision is to be the premier destination for exceptional and innovative vehicle customization. 'Unbound Custom Excellence'  encapsulates our ethos of transcending traditional limits to provide a  distinctive service experience, setting new standards in automotive  craftsmanship and client personalization.",
  },
  {
    title: "Mission",
    description:
      "Our mission is to deliver unparalleled customization services that  fulfill our clients' desires for unique personal expression. We champion  bespoke vehicle personalization with creative freedom and superior  craftsmanship, ensuring every detail of the customization process  enhances the individuality of each client's vehicle with uncompromised  quality.",
  },
];
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
  const imgSfondoParagraph = document.getElementById("imgSfondo-paragraph");

  if (imgSfondoParagraph) {
    let value = window.scrollY;
    imgSfondoParagraph.style.top = value * -0.8 + "px";
    console.log("valore:", imgSfondoParagraph.style.top);
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="bg-paragraph-container">
    <div class="bg-paragraph">
      <div class="container-layout-paragraph">
        <div
          class="text-container-paragraph"
          v-for="(title, index) in text"
          :key="index"
        >
          <p class="titleParagraph">{{ title.title }}</p>

          <p class="descriptionParagraph">
            {{ title.description }}
          </p>
        </div>
      </div>
    </div>
    <img
      id="imgSfondo-paragraph"
      src="../assets/img/Background2.png"
      alt="Background Image"
    />
  </div>
</template>
