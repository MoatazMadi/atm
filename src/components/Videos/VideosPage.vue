<template>
  <main class="relative">
    <NavBar class="bg-gray-950" />
    <div cla>
      <el-carousel
        :autoplay="false"
        height="88.8vh"
        arrow="always"
        @change="console.log(this)"
        indicator-position="none"
        class="max-w-full w-full"
      >
        <div v-for="(video, index) in videos" :key="index">
          <Transition
            name="bounce"
            :style="{ 'transition-delay': index * 250 + 'ms' }"
          >
            <VideosSections class="w-full" :source="video.source" />
          </Transition>
        </div>
      </el-carousel>
    </div>
  </main>
</template>

<script setup>
import NavBar from "../../layoutes/NavBar.vue";
import VideosSections from "../Home/VideosSections.vue";
const components = {
  NavBar,
  VideosSections,
};

const myProdHost = import.meta.env.VITE_MY_BASE_URL;

// console.log(myProdHost);

const videos = [
  { source: `${myProdHost}/assets/videos/1.mp4` },
  { source: `${myProdHost}/assets/videos/2.mp4` },
  { source: `${myProdHost}/assets/videos/3.mp4` },
  { source: `${myProdHost}/assets/videos/4.mp4` },
  { source: `${myProdHost}/assets/videos/5.mp4` },
  { source: `${myProdHost}/assets/videos/6.mp4` },
];


</script>
