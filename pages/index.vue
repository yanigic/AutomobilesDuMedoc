<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import BannerProject from "../components/bannerProject.vue";
import titleDescription from "../components/titleDescription.vue";
import Nav from "../components/nav.vue";
import BannerContact from "../components/bannerContact.vue";
import Footer from "../components/footer.vue";
import HeroHomePage from "../components/heroHomePage.vue";
import NavMobile from "../components/navMobile.vue";

/* const story = await useAsyncStoryblok(
  "home",
  { version: "draft" },
  { customParent: "https://app.storyblok.com" }
); */

const titlesDescriptions = [
  {
    title: "Projects",
    description:
      "The customization projects enhances vehicles with unique designs and advanced materials, tailored to client specifications for a distinctive, improved driving experience and enhancing aesthetics.",
  },
  {
    title: "Showroom",
    description:
      "Automobiles du Médoc showroom features a curated selection of luxury and collector cars, each with detailed information on its history and specifications. Every customer can find and acquire a vehicle that exceeds their expectations.",
  },
  {
    title: "Conciergerie",
    description:
      "Our concierge service offers secure storage solutions, where every vehicle is maintained under the highest standards of care and surveillance. We ensure that each car remains in pristine condition, safeguarded by advanced security measures.",
  },
];

const ctaContent = [
  {
    paragraph: `Discover<br>all the possibilities for your car`,
    cta: "CONTACT US",
  },
];

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
  console.log("isScrolled:", isScrolled.value); // Aggiungi questo per verificare lo scroll
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const scrollToNextSection = () => {
  const nextSection = document.getElementById("nextSection");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <div class="container-layouts">
    <NavMobile class="navMobile-yellow"></NavMobile>
    <Nav
      class="nav-position"
      :class="[
        'backgroundYellow',
        isScrolled ? 'navbar-scrolled-yellow' : 'backgroundYellow',
      ]"
    ></Nav>
    <HeroHomePage></HeroHomePage>
    <div class="arrowHomepage" @click="scrollToNextSection">
      <svg
        class="arrowHomepageR"
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        data-v-inspector="components/finaltest.vue:96:7"
      >
        <path
          d="M51.0361 21.2134L30.1765 42.073L8.96328 20.8598"
          stroke="#7C809B"
          stroke-width="5"
          data-v-inspector="components/finaltest.vue:103:9"
        ></path>
      </svg>
    </div>
    <span class="BannerProject-container" id="nextSection">
      <BannerProject></BannerProject>
    </span>
    <div class="container-titleDescription">
      <span
        class="homepage"
        v-for="(item, index) in titlesDescriptions"
        :key="index"
      >
        <titleDescription
          :title="item.title"
          :description="item.description"
        ></titleDescription>
      </span>
    </div>
    <BannerContact
      class="container-banner-home"
      v-for="(text, index) in ctaContent"
      :key="index"
      :paragraph="text.paragraph"
      :cta="text.cta"
    ></BannerContact>
    <Footer></Footer>
  </div>
</template>
<style>
.arrowHomepage {
  display: flex;
  justify-content: center;
  background-color: var(--beam-yellow);
  padding-top: 5rem;
  padding-bottom: 5rem;
  cursor: pointer;
}

.arrowHomepageR:hover path {
  stroke: var(--millennium-silver);
}
.arrowHomepage svg path {
  stroke: var(--burnout-black);
}

@media only screen and (max-width: 768px) {
  .arrowHomepage {
    display: none;
  }
}
</style>
