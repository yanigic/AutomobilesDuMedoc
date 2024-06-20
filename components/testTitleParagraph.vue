<script setup lang="ts">
import "../assets/css/titleDescription.css";
import "../assets/css/titleParagraph.css";
import { ref, onMounted, onUnmounted } from "vue";

const text = [
  {
    title: "Vision",
    description:
      "Our vision is to be the premier destination for exceptional and innovative vehicle customization. 'Unbound Custom Excellence' encapsulates our ethos of transcending traditional limits to provide a distinctive service experience, setting new standards in automotive craftsmanship and client personalization.",
  },
  {
    title: "Mission",
    description:
      "Our mission is to deliver unparalleled customization services that fulfill our clients' desires for unique personal expression. We champion bespoke vehicle personalization with creative freedom and superior craftsmanship, ensuring every detail of the customization process enhances the individuality of each client's vehicle with uncompromised quality.",
  },
];

const container = ref<HTMLElement | null>(null);

const handleScroll = () => {
  if (container.value) {
    const imgSfondoParagraph = document.getElementById("imgSfondo-paragraph");
    if (imgSfondoParagraph) {
      let value = container.value.scrollTop;
      imgSfondoParagraph.style.transform = `translateY(${value * -0.6}px)`;
    }
  }
};

onMounted(() => {
  if (container.value) {
    container.value.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (container.value) {
    container.value.removeEventListener("scroll", handleScroll);
  }
});
</script>

<template>
  <div ref="container" class="bg-paragraph-container">
    <div class="bg-paragraph">
      <div class="container-layout-paragraph">
        <div
          class="text-container-paragraph"
          v-for="(item, index) in text"
          :key="index"
        >
          <p class="titleParagraph">{{ item.title }}</p>
          <p class="descriptionParagraph">{{ item.description }}</p>
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
