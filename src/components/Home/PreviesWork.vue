<template>
      <el-carousel-item  v-if="show">
        <div class=" w-full h-full flex justify-center">
          <!-- <img loading="lazy" class="object-contain sm:rounded-lg h-full object-center  p-0 m-0" :src="slide.imgUrl" > -->
          <img loading="lazy" class="object-contain sm:rounded-lg h-full object-center  p-0 m-0" :src="imgUrl" >
        </div>
      </el-carousel-item>
  </template>


<script setup>

import {ref , onMounted} from 'vue'

const show = ref(false)

defineProps({
  //  slide : Object ,
  imgUrl : String
})

onMounted(()=>{
    show.value = true;
})


</script>



  <style >
  /* .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  } */

  
  .el-carousel__item--card.is-in-stage.is-hover .el-carousel__mask,
   .el-carousel__item--card.is-in-stage:hover .el-carousel__mask
   ,.el-carousel__mask
   {
    opacity : 0!important;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: transparent!important;;
  }

  .el-carousel__item:nth-child(2n + 1) {
    /* background-color: #d3dce6; */
  }
  </style>
