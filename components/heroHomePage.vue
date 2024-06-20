<template>
  <div class="box-video">
    <div class="container-img-animated container-img-animated-mobile">
      <img
        v-if="!showVideo"
        src="@/assets/img/IntroADM_Mobile_FrameFnale.png"
        alt=""
      />
      <video v-else ref="videoElement" muted autoplay>
        <source src="@/assets/video/verticale spiaggina.mp4" type="video/mp4" />
        Il tuo browser non supporta l'elemento video.
      </video>
    </div>

    <div class="container-img-animated container-img-animated-desktop">
      <img
        v-if="!showVideo"
        src="@/assets/img/IntroADM_Desktop_FrameFnale.png"
        alt=""
      />
      <video v-else ref="videoElement" muted autoplay>
        <source
          src="@/assets/video/Video_Spiaggina_edit_down.mp4"
          type="video/mp4"
        />
        Il tuo browser non supporta l'elemento video.
      </video>
      <!-- <video v-else ref="videoElement" muted>
        <source src="@/assets/video/IntroADM_Desktop.mp4" type="video/mp4" />
        Il tuo browser non supporta l'elemento video.
      </video> -->
    </div>
  </div>
</template>

<script>
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
.container-img-animated-desktop video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 768px) {
  .container-img-animated-mobile {
    height: 100vh;
    display: block;
  }

  .container-img-animated-mobile img,
  .container-img-animated-mobile video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .container-img-animated-desktop {
    display: none;
  }
}
</style>
