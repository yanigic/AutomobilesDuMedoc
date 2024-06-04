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

/* const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.storyblok.com/v2/cdn/stories/singleproject?version=draft&token=CgdxbCXc3SKuMrQjSOH0NAtt"
    );
    const { story } = await response.json();
    const content = story.content;
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
}; */

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.storyblok.com/v2/cdn/stories/singleproject?version=draft&token=CgdxbCXc3SKuMrQjSOH0NAtt"
    );
    const { story } = await response.json();
    const content = story.content;

    projects.value = content.body
      .filter(
        (project) =>
          project.subtitle &&
          project.model &&
          project.year &&
          project.client &&
          project.typeOfCustomization &&
          project.description &&
          project.descriptionTwo &&
          project.descriptionThree
      )
      .map((project) => {
        /*  console.log("banner Mapping project:", project);
        console.log("banner Mapping project:", project.cta);
       */ return {
          subtitle: project.subtitle,
          model: project.model,
          year: project.year,
          client: project.client,
          typeOfCustomization: project.typeOfCustomization,
          description: project.description,
          descriptionTwo: project.descriptionTwo,
          descriptionThree: project.descriptionThree,
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
        <div class="title-singleProjectText">
          {{ project.subtitle }}
        </div>
        <div class="description-singleProjectText">
          {{ project.description }}
        </div>
        <div class="description-singleProjectText">
          {{ project.descriptionTwo }}
        </div>
        <div class="description-singleProjectText">
          {{ project.descriptionThree }}
        </div>
      </div>
    </div>
    <div class="sidebar-singleProjectText">
      <div v-for="(project, index) in projects" :key="index">
        <div>
          {{ project.model }}
        </div>
        <div>
          {{ project.year }}
        </div>
        <div>
          {{ project.client }}
        </div>
        <div class="typeOfcustomization">
          {{ project.typeOfCustomization }}
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <template>
  <div class="">
    <div class="container-singleProjectText">
      <div class="main-singleProjectText">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="title-singleProjectText"
        >
          {{ project.subtitle }}
        </div>
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="description-singleProjectText"
        >
          {{ project.description }}
        </div>
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="description-singleProjectText"
        >
          {{ project.descriptionTwo }}
        </div>
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="description-singleProjectText"
        >
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

        <div
          v-for="(project, index) in projects"
          :key="index"
          class="typeOfcustomization"
        >
          {{ project.typeOfCustomization }}
        </div>
      </div>
    </div>
  </div>
</template>
 -->
