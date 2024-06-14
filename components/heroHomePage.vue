<template>
  <div class="box-video">
    <div class="container-img-animated container-img-animated-mobile">
      <img src="@/assets/img/IntroADM_Mobile_FrameFnale.png" alt="" />
      <!--  <video v-else ref="videoElement" muted>
        <source
          src="/Users/yanilettetejeda/Documents/Code/projects/adm/assets/video/IntroADMMobile.mp4"
          type="video/mp4"
        />
        Il tuo browser non supporta l'elemento video.
      </video> -->
    </div>
    <div class="container-img-animated container-img-animated-desktop">
      <img
        v-if="!showVideo"
        src="/Users/yanilettetejeda/Documents/Code/projects/adm/assets/img/IntroADM_Desktop_FrameFnale.png"
        alt=""
      />
      <video v-else ref="videoElement" muted>
        <source
          src="/Users/yanilettetejeda/Documents/Code/projects/adm/assets/video/IntroADM_Desktop.mp4"
          type="video/mp4"
        />
        Il tuo browser non supporta l'elemento video.
      </video>
    </div>
  </div>
</template>

<script>
import imgvidea from "/Users/yanilettetejeda/Documents/Code/projects/adm/assets/img/IntroADM_Desktop_FrameFnale.png";
export default {
  data() {
    return {
      showVideo: false,
    };
  },
  mounted() {
    this.showVideo = true;
    this.$nextTick(() => {
      this.$refs.videoElement.play();
    });
  },
};
</script>

<style scoped>
.container-img-animated-mobile {
  display: none;
}

@media only screen and (max-width: 768px) {
  .container-img-animated-mobile {
    display: block;
  }
  .container-img-animated-desktop {
    display: none;
  }
}
</style>
