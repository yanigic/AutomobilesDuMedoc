<script setup lang="ts">
import "../assets/css/heroSingleProject.css";
import ArrowHeroDown from "../assets/img/svg/arrowDown.svg";
//import imgHeroPro from"../assets/img/imgSinglePro.jpeg";

/* const item = defineProps({
  title: String,
  description: String,
  img: String,
}); */

import { onMounted, ref } from "vue";

/* const heroSingleProjectInfo = [
  {
    title: "Cherry Countach",
    img: imgHeroPro,
  },
]; */

const projects = ref([]);

/* const fetchData = async () => {
  try {
    const response = await fetch("https://api.storyblok.com/v2/cdn/stories/singleproject?version=draft&token=CgdxbCXc3SKuMrQjSOH0NAtt");
    const { story } = await response.json();
    const content = story.content;
    console.log("Dati recuperati da Storyblok:", content);
    projects.value = content.body.map((project) => ({
      title: project.title ,
      img: project.img , // Sostituire 'default-image.png' con l'immagine di fallback
    }));
  } catch (error) {
    console.error("Errore nel recupero dei dati da Storyblok:", error);
  }
}; */
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.storyblok.com/v2/cdn/stories/singleproject?version=draft&token=CgdxbCXc3SKuMrQjSOH0NAtt"
    );
    const { story } = await response.json();
    const content = story.content;
    console.log("Dati recuperati da Storyblok:", content);

    projects.value = content.body
      .filter((project) => project.title && project.img)
      .map((project) => {
        console.log("Mapping project:", project);
        return {
          title: project.title,
          img: project.img,
        };
      });
  } catch (error) {
    console.error("Errore nel recupero dei dati da Storyblok:", error);
  }
};

/* onMounted(() => {
  fetchData();
  
}); */

onMounted(async () => {
  console.log("onMounted - Fetching data");
  await fetchData();
  console.log("Data fetched", projects.value);
});
</script>

<template>
  <div>
    <div class="heroSingleProject-container">
      <img
        v-for="(project, index) in projects"
        :key="index"
        class="img-singleProject"
        :src="project.img"
      />
      <h3
        v-for="(project, index) in projects"
        :key="index"
        class="title-singleProject"
      >
        {{ project.title }}
      </h3>
      <img
        class="svg-heroSingleProject"
        src="../assets/img/svg/arrowDown.svg"
        alt="Navigate Down"
      />
    </div>
  </div>
</template>
