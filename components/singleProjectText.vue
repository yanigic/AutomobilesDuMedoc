<script setup lang="ts">
import "../assets/css/singleProjectText.css";
/* const props = defineProps({
  title: String,
  descriptionOne: String,
  descriptionTwo: String,
  descriptionThree: String,
  year: String,
  model: String,
  typeOfCustomization: String,
  client: String,
}); */

import { onMounted, ref } from "vue";
const projects = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch("https://api.storyblok.com/v2/cdn/stories/singleproject?version=draft&token=CgdxbCXc3SKuMrQjSOH0NAtt");
    const { story } = await response.json();
    const content = story.content;
      /* console.log("Dati recuperati da Storyblok pagina:", content);
      console.log('testo cont'+story.content)
      console.log(story.content.body) */
      // Mappare i dati ottenuti da Storyblok nel formato richiesto
      projects.value = content.body.map((project) => ({
      subtitle: project.subtitle,
      model: project.model,
      year: project.year,
      client: project.client,
      typeOfCustomization: project.typeOfCustomization,
      description: project.description,
      descriptionTwo: project.descriptionTwo,
      descriptionThree: project.descriptionThree,
      
     }));
  } catch (error) {
    console.error("Errore nel recupero dei dati da Storyblok:", error);
  }
};

onMounted(() => {
  fetchData();
});




</script>

<template>
  <div class="">
    <div class="container-singleProjectText" >
      <div class="main-singleProjectText">
        <div v-for="(project, index) in projects" :key="index" class="title-singleProjectText">
          {{ project.subtitle }}
        </div>
        <div v-for="(project, index) in projects" :key="index" class="description-singleProjectText">
          {{ project.description }}
        </div>
        <div v-for="(project, index) in projects" :key="index" class="description-singleProjectText">
          {{ project.descriptionTwo }}
        </div>
        <div v-for="(project, index) in projects" :key="index" class="description-singleProjectText">
          {{ project.descriptionThree }}
        </div>
      
      </div>
      <div></div>
      <div class="sidebar-singleProjectText">
          <div v-for="(project, index) in projects" :key="index">
          {{ project.model }}
        </div>
        <div v-for="(project, index) in projects" :key="index">
          {{ project.year }}
        </div>
        <div v-for="(project, index) in projects" :key="index">
          {{ project.client }}
        </div>
      
        <div v-for="(project, index) in projects" :key="index" class="typeOfcustomization">
          {{ project.typeOfCustomization }}
        </div>
      </div>
    </div>
  </div>
</template>
