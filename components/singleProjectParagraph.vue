<script setup lang="ts">
import "../assets/css/singleProjectText.css";

import { onMounted, ref } from "vue";
const projects = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.storyblok.com/v2/cdn/stories/singleproject?version=draft&token=CgdxbCXc3SKuMrQjSOH0NAtt"
    );
    const { story } = await response.json();
    const content = story.content;

    projects.value = content.body
      .filter((project) => project.textParagraph)
      .map((project) => {
        console.log("poco" + project.textParagraph);

        return {
          textParagraph: project.textParagraph,
        };
      });
  } catch (error) {
    console.error("Errore nel recupero dei dati da Storyblok:", error);
  }
};
onMounted(() => {
  fetchData();
});
</script>
<template>
  <div class="container-singleProjectText">
    <div class="main-singleProjectText">
      <div v-for="(project, index) in projects" :key="index">
        <div class="description-singleProjectText">
          {{ project.textParagraph }}
        </div>
      </div>
    </div>
    <div class="sidebar-singleProjectText"></div>
  </div>
</template>
