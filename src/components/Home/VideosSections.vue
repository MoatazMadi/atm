<template>
      <el-carousel-item  v-if="show">
        <video preload="none"  controls  class="h-full
         object-center   m-0 p-0  w-full
        " >
                    <source :src="source" class="h-full w-full"  type="video/mp4" />
        </video>
    </el-carousel-item>
  </template>


<script setup>

import {ref , onMounted} from 'vue'

const show = ref(false)

defineProps({
   source : String ,
})

onMounted(()=>{
    show.value = true;
})


</script>



  <style scoped>
    .el-carousel__item h3 {
        color: #475669;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {

    }

    .el-carousel__item:nth-child(2n + 1) {
        /* background-color: #d3dce6; */
    }
  </style>
