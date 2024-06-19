<script setup lang="ts">
import "../assets/css/bannerContact.css";
/* const text = [
  {
    paragraph: "Discover all the possibilities for your car",
    cta: "CONTACT US",
  },
]; */
/* import { onMounted, ref } from "vue";
const projects = ref([]);

onMounted(async () => {
  await fetchData();
});

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.storyblok.com/v2/cdn/stories/singleproject?version=draft&token=CgdxbCXc3SKuMrQjSOH0NAtt"
    );
    const { story } = await response.json();
    const content = story.content;

    projects.value = content.body
      .filter((project) => project.paragraph && project.cta)
      .map((project) => {
         return {
          paragraph: project.paragraph,
          cta: project.cta,
        };
      });
  } catch (error) {
    console.error("Errore nel recupero dei dati da Storyblok:", error);
  }
}; */
const props = defineProps({
  paragraph: String,
  cta: String,
});
</script>

<template>
  <div class="">
    <div class="text-container-banner">
      <!-- <h3 v-html="paragraph" class="title-banner-contact">{{ props.paragraph }} </h3> -->
      <h3 v-html="props.paragraph" class="title-banner-contact"></h3>
      <a href="/contacts">
        <button class="cta-banner-contact">
          {{ props.cta }}
        </button>
      </a>
    </div>
  </div>
</template>
