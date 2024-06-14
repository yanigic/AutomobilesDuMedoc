<script setup>
import HeroAbout from "../components/heroAbout.vue";
import Paragraph from "../components/paragraph.vue";
import Footer from "../components/footer.vue";
import "../assets/css/about.css";
import TitleParagraph from "../components/titleParagraph.vue";
import TitleDescription from "../components/titleDescription.vue";
import Slider from "../components/slider.vue";
import CardImageText from "../components/cardImageText.vue";
import PartnersCard from "../components/partnersCard.vue";
import imgG from "../assets/img/backgroundgia.png";
import NavMobile from "../components/navMobile.vue";

const titlesDescriptions = [
  {
    title: "Uniqueness",
    description:
      "The heartbeat of the brand, driven by the commitment to create one-off modifications and art cars that are as individual as the clients and brands they serve. Each project is a testament to originality, ensuring that two creations are never the same and each one carries its own story and character.",
  },
  {
    title: "freedomness",
    description:
      "Transcending traditional boundaries and expectations of automotive restoration, Automobiles du Médoc boldly enhances and transforms features of the vehicles, offering a liberated approach to design and customization that celebrates change.",
  },
  {
    title: "excellence",
    description:
      "The brand's cornerstone, reflected in the high caliber of workmanship and the exceptional experience offered to clients. This value is about being part of an exclusive club where every detail is meticulously crafted to deliver beyond the standard.",
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
</script>

<template>
  <div class="container-layouts" id="parallax">
    <NavMobile class="navMobile-yellow"></NavMobile>
    <Nav
      class="nav-position"
      :class="[
        'backgroundBlack',
        isScrolled ? 'navbar-scrolled-yellow' : 'backgroundBlack',
      ]"
    ></Nav>
    <div class="keyart_layer" id="keyart-8"></div>
    <HeroAbout></HeroAbout>
    <Paragraph></Paragraph>
    <TitleParagraph></TitleParagraph>
    <span
      class="title-description-about"
      v-for="(item, index) in titlesDescriptions"
      :key="index"
    >
      <TitleDescription
        class="container-layout"
        :title="item.title"
        :description="item.description"
      ></TitleDescription>
    </span>

    <CardImageText></CardImageText>
    <PartnersCard></PartnersCard>
    <Slider></Slider>
    <Footer></Footer>
  </div>
</template>
