<template>
  <v-app>
    <v-app-bar app color="grey lighten-2">
      <div class="d-flex align-center">
        <v-img
          alt="Applus Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/applustech.png')"
          transition="scale-transition"
          width="125"
        />
      </div>

      <v-spacer></v-spacer>
        <span class="mr-2">Browser Based Webcam Demo (VueJS)</span>

    </v-app-bar>

    <v-main>
      <WebCam />
    </v-main>
  </v-app>
</template>

<script>
import WebCam from "./components/WebCam";

export default {
  name: "App",

  components: {
    WebCam
  },

  data: () => ({
    //
  })
};
</script>
