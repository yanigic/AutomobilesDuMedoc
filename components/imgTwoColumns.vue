<script setup >
import "../assets/css/imgTwoColumns.css";
import { onMounted, ref , onUnmounted,nextTick} from "vue";

const carousel = ref(null);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

function handleMouseUp() {
 isDragging.value = false;
}


function handleMouseDown(event) {
  isDragging.value = true;
  startX.value = event.pageX - carousel.value.offsetLeft;
  scrollLeft.value = carousel.value.scrollLeft;
}

function handleMouseMove(event) {
  if (!isDragging.value) return;
  event.preventDefault();
  const x = event.pageX - carousel.value.offsetLeft;
  const walk = (x - startX.value) * 3; // Il fattore 3 aumenta la sensibilità del trascinamento
  carousel.value.scrollLeft = scrollLeft.value - walk;
}


onUnmounted(() => {
  if (carousel.value) {
    carousel.value.removeEventListener('mousedown', handleMouseDown);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }

});




const projects = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch("https://api.storyblok.com/v2/cdn/stories/singleproject?version=draft&token=CgdxbCXc3SKuMrQjSOH0NAtt");
    const { story } = await response.json();
    const content = story.content;

   projects.value = content.body.filter(project => project.imgTwoColumsOne && project.imgTwoColumsTwo && project.imgTwoColumsThree).map((project) => {
      console.log("Mapping project:", project);
      return {
       imgTwoColumsOne: project.imgTwoColumsOne,
    imgTwoColumsTwo: project.imgTwoColumsTwo,
    imgTwoColumsThree: project.imgTwoColumsThree,
      };
    });
    /* projects.value = content.body.map((project) => ({
    imgTwoColumsOne: project.imgTwoColumsOne,
    imgTwoColumsTwo: project.imgTwoColumsTwo,
    imgTwoColumsThree: project.imgTwoColumsThree,
      
    })); */
    
  } catch (error) {
    console.error("Errore nel recupero dei dati da Storyblok:", error);
  }
};
onMounted(async () => {
  await fetchData();

  nextTick(() => {
    carousel.value = document.getElementById("carousel-imgTwoColumns");
    if (carousel.value) {
      carousel.value.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  });
});

/* onMounted(() => {
    fetchData();

  /* carousel.value = document.getElementById("carousel-imgTwoColumns"); // Assumi che `#carousel` sia l'ID del div da scrollare
  carousel.value.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp); *
  nextTick(() => {
    carousel.value = document.getElementById("carousel-imgTwoColumns");
    if (carousel.value) {
      carousel.value.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  });

}); */

/* onMounted(() => {
  fetchData();
});
 */
</script>

<template>
  <div v-if="projects.length > 0">
  <div v-for="(project, index) in projects" :key="index"  >
      <div  id="carousel-imgTwoColumns" class="carousel-imgTwoColumns"    >
        <div   class="square"><img  :src="project.imgTwoColumsOne" alt="Image 1"></div>
        <div  class="square"><img  :src="project.imgTwoColumsTwo" alt="Image 2"></div>
        <div  class="square"><img  :src="project.imgTwoColumsThree" alt="Image 3"></div>
        
      </div>
 
       <div class="container-imgTwoColumns"   >
        <div class="main-imgTwoColumns" >
          <img   v-for="(project, index) in projects" :key="index" class="img-col" :src="project.imgTwoColumsOne" alt=""  />
        </div>

        <div class="sidebar-imgTwoColumns" >
          <div  v-for="(project, index) in projects" :key="index" >
            <img   class="img-col" :src="project.imgTwoColumsTwo" alt=""  />
          </div>
          <div  >
            <img  class="img-col" :src="project.imgTwoColumsThree" alt=""  />
          </div>
        </div>
      </div> 
  </div>
    </div>
</template>
