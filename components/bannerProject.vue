<!-- <script lang="ts" setup>
import {onMounted,ref} from "vue"
import "../assets/css/bannerProject.css";
import img1 from "../assets/img/img1.png";

const projects = [
  {
    title: "alfa romeo superclassica",
    img: img1,
       },
       {
    title: "abarth 695 corsa",
    img: img1,
       },
       {
    title: "cherry countach",
    img: img1,
       },
];
const data = ref(null)

onMounted(async()=>{
  data.value = await fetch(
    "https://api.storyblok.com/v2/cdn/stories/home?version=draft&token=rtQ2x4beDja31itQRyGRTAtt" )
    .then((response) => response.json())
    .then(({story}) => story.content)
})
console.log(data)
/* console.log(data.rawValue.body[0].title) */
/* console.log(data.story.content.body[0].title) */
</script> -->

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import "../assets/css/bannerProject.css";

// Definire un array vuoto per i progetti che sarà popolato con i dati da Storyblok
const projects = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.storyblok.com/v2/cdn/stories/home?version=draft&token=rtQ2x4beDja31itQRyGRTAtt"
    );
    const { story } = await response.json();
    const content = story.content;

    // Mappare i dati ottenuti da Storyblok nel formato richiesto
    projects.value = content.body.map((project) => ({
      title: project.title,
      image: project.image || "default-image.png", // Sostituire 'default-image.png' con l'immagine di fallback
    }));
  } catch (error) {
    console.error("Errore nel recupero dei dati da Storyblok:", error);
  }
};

onMounted(() => {
  fetchData();
  const titleBanners = document.querySelectorAll(".title-banner");
});
</script>

<template>
  <div v-if="projects.length > 0">
    <div class="bg-banner" v-for="(project, index) in projects" :key="index">
      <div class="title-banner">
        <h2 class="title-bannerProject">
          {{ project.title }}
          <svg
            class="svg-banner"
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="35"
            viewBox="0 0 36 35"
            fill="none"
          >
            <path
              id="Union"
              d="M26.5984 5.73224H3.13398V0.732239H35.134V33.2322H30.134V9.26777L4.40174 35L0.866211 31.4645L26.5984 5.73224Z"
              fill="#02020B"
            />
          </svg>
        </h2>
        <div class="btn-bannerProject-cta">SEE THE PROJECT</div>
      </div>
      <div class="img-container">
        <img :src="project.image" alt="Project Image" />
      </div>
    </div>
  </div>
</template>
