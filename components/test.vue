<script setup lang="ts">
import { ref, onMounted } from "vue";
import "../assets/css/heroSingleProject.css";
import ArrowHeroDown from "../assets/img/svg/arrowDown.svg";

const projects = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch(
      `https://api.storyblok.com/v2/cdn/stories${
        location.pathname
      }?version=draft&cv=1717427707&token=${
        import.meta.env.VITE_STORYBLOK_TOKEN
      }`
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
