<script setup lang="ts">
import "../assets/css/singleImg.css";
/* const props = defineProps({
  img: String,
}); */
import { onMounted, ref} from "vue";
onMounted(async () => {
  await fetchData();
});

const projects = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch("https://api.storyblok.com/v2/cdn/stories/singleproject?version=draft&token=CgdxbCXc3SKuMrQjSOH0NAtt");
    const { story } = await response.json();
    const content = story.content;

   projects.value = content.body.filter(project => project.imgSingle).map((project) => {
      console.log("imgSingle Mapping project:", project);
      return {
       imgSingle: project.imgSingle,
    
      };
    });
    
    
  } catch (error) {
    console.error("Errore nel recupero dei dati da Storyblok:", error);
  }
};
</script>

<template>
  <div class="container-singleImg" v-for="(project, index) in projects" :key="index">
    <img :src="project.imgSingle" alt="" />
  </div>
</template>
