<script setup>
import arrow from "../assets/img/svg/arrowRight.svg";
import "../assets/css/slider.css";

const carousel = ref(null); // Assicurati di usare ref se `carousel` è un elemento DOM
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const projects = ref([]);

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

function handleMouseUp() {
  isDragging.value = false;
}

/* drag */
function handleTouchStart(event) {
  isDragging.value = true;
  startX.value = event.touches[0].pageX - carousel.value.offsetLeft;
  scrollLeft.value = carousel.value.scrollLeft;
}

function handleTouchMove(event) {
  if (!isDragging.value) return;
  event.preventDefault();
  const x = event.touches[0].pageX - carousel.value.offsetLeft;
  const walk = (x - startX.value) * 3; // Il fattore 3 aumenta la sensibilità del trascinamento
  carousel.value.scrollLeft = scrollLeft.value - walk;
}

function handleTouchEnd() {
  isDragging.value = false;
}

onMounted(async () => {
  await fetchData();

  carousel.value = document.getElementById("carousel"); // Assumi che `#carousel` sia l'ID del div da scrollare
  carousel.value.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);

  carousel.value.addEventListener("touchstart", handleTouchStart);
  document.addEventListener("touchmove", handleTouchMove);
  document.addEventListener("touchend", handleTouchEnd);
});

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.storyblok.com/v2/cdn/stories/singleproject?version=draft&token=CgdxbCXc3SKuMrQjSOH0NAtt"
    );
    const { story } = await response.json();
    const content = story.content;

    projects.value = content.body
      .filter((project) => project.imgSlider)
      .map((project) => {
        console.log(" imgSlider Mapping project:", project.imgSlider);
        console.log(" name Mapping project:", project.imgSlider[0].name);
        return {
          imgSlider: project.imgSlider.map((img) => img.filename),
          name: project.imgSlider.map((img) => img.name),
        };
      });
  } catch (error) {
    console.error("Errore nel recupero dei dati da Storyblok:", error);
  }
};

onUnmounted(() => {
  carousel.value.removeEventListener("mousedown", handleMouseDown);
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);

  carousel.value.removeEventListener("touchstart", handleTouchStart);
  document.removeEventListener("touchmove", handleTouchMove);
  document.removeEventListener("touchend", handleTouchEnd);
});

const willLeftLessThan40pxToScrollEnd = (nextStep) => {
  const scrollLeftAfterTwoClicks = carousel.value.scrollLeft + nextStep * 2;
  return scrollLeftAfterTwoClicks > carousel.value.scrollWidth - 40;
};

const willLeftLessThan40pxToScrollStart = (nextStep) => {
  const scrollLeftAfterOneClick = carousel.value.scrollLeft - nextStep;
  return scrollLeftAfterOneClick < 40;
};

const handleClickGoAhead = () => {
  let nextStep = carousel.value.offsetWidth;
  if (willLeftLessThan40pxToScrollEnd(nextStep)) nextStep *= 2;

  carousel.value.scroll({
    left: carousel.value.scrollLeft + nextStep,
    behavior: "smooth",
  });
};

const handleClickGoBack = () => {
  let nextStep = carousel.value.offsetWidth;
  if (willLeftLessThan40pxToScrollStart(nextStep)) nextStep *= 2;

  carousel.value.scroll({
    left: carousel.value.scrollLeft - nextStep,
    behavior: "smooth",
  });
};

const nameProjects = ref([
  { name: "another vision of lacoste" },
  { name: "ultra pantera" },
  { name: "in the middle of the night, 911" },
  { name: "Cherry Countach" },
  { name: "Abarth 695 corsa" },
]);
</script>
<template>
  <div class="bg-slider">
    <h3 class="text-big-title">Explore More</h3>
    <div id="wrapper">
      <div id="carousel" v-for="(project, index) in projects" :key="index">
        <div class="square" v-for="(img, idx) in project.imgSlider" :key="idx">
          <a href="singleProject">
            <img :src="img" alt="" />
          </a>
          <div class="container-slider-nameProject">
            <div class="slider-nameProject">
              {{ project.name[idx] }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="buttons-slider">
      <button class="btn-slider" @click="handleClickGoBack()">
        <!-- <img src="../assets/img/svg/arrowRight.svg" alt="" /> -->
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 1775">
            <path
              id="Vector 7 (Stroke)"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M31.7695 19.3406L16.4645 4.03553L20 0.5L38.8406 19.3406L19.7106 38.4705L16.1751 34.9349L31.7695 19.3406Z"
              fill="#F3F90A"
            />
          </g>
        </svg>
      </button>
      <button class="btn-slider" @click="handleClickGoAhead()">
        <!-- <img src="../assets/img/svg/arrowRight.svg" alt="" /> -->
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 1775">
            <path
              id="Vector 7 (Stroke)"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M31.7695 19.3406L16.4645 4.03553L20 0.5L38.8406 19.3406L19.7106 38.4705L16.1751 34.9349L31.7695 19.3406Z"
              fill="#F3F90A"
            />
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>
