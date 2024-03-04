<template>
    <div  class="block text-center">


        <el-carousel  :pause-on-hover="false"  type="card" :interval="5500"  :height="getScreenHegitForSliderCarousel"
                class="hidden sm:block"
        >

        <el-carousel-item v-for="item in slides.length-2" :key="item">
            <!-- <img class="h-auto w-full max-w-full object-contain " :src="slides[item-1].imgUrl" > -->
            <img class="object-cover w-full object-center " :src="slides[item].imgUrl" >
                    <!-- <img class="object-cover w-full object-center " :src="slides[item+1].imgUrl" > -->
                    <!-- <img class="object-cover object-center " :src="slides[item].imgUrl" > -->
            </el-carousel-item>

        </el-carousel>


        <el-carousel  :pause-on-hover="false" :interval="5500" :height="getScreenHegitForSliderCarousel"
                class=" sm:hidden max-w-full "
        >

            <el-carousel-item v-for="item in slides.length-2" :key="item">
                    <!-- <img class="h-auto w-full max-w-full object-contain " :src="slides[item-1].imgUrl" > -->
                    <img class="object-cover w-full object-center" :src="slides[item].imgUrl" >
                    <!-- <img class="object-cover w-full object-center " :src="slides[item+1].imgUrl" > -->
                    <!-- <img class="object-cover object-center " :src="slides[item].imgUrl" > -->
            </el-carousel-item>

        </el-carousel>


    </div>

  </template>

<script setup>

defineProps({
   height: String,
  interval: Number,
})

const getScreenHegitForSliderCarousel = (window.innerHeight*0.8) + "px"


const myHost = "http://localhost:3000/"

const slides = [
{
        imgUrl :`${myHost}src/assets/imgs/prework/1.jpg`
        ,
        title:"emped emailn"
        ,
        desc : "asd asdlnkjk s.pipedriveassets.com/cdn-cgi/image s.pipedriveassets.com/cdn-cgi/images.pipedriveassets.com/cdn-cgi/image"

    }
    ,
    {
        imgUrl :`${myHost}src/assets/imgs/prework/2.jpg`
        ,
        title:"laptop"
        ,
        desc : "asd asdlnkjk s.pipedriveassets.com/cdn-cgi/image s.pipedriveassets.com/cdn-cgi/images.pipedriveassets.com/cdn-cgi/image"
    }
    ,
    {
        imgUrl :`${myHost}src/assets/imgs/prework/3.jpg`
        ,
        title:"code snip"
        ,
        desc : "asd asdlnkjk s.pipedriveassets.com/cdn-cgi/image s.pipedriveassets.com/cdn-cgi/images.pipedriveassets.com/cdn-cgi/image"


    }
    ,
    {
        imgUrl :`${myHost}src/assets/imgs/prework/5.jpg`
        ,
         title:"arsinal"
        ,
        desc : "asd asdlnkjk s.pipedriveassets.com/cdn-cgi/image s.pipedriveassets.com/cdn-cgi/images.pipedriveassets.com/cdn-cgi/image"


    }
    ,
    {
        imgUrl :`${myHost}src/assets/imgs/prework/6.jpg`
        ,
         title:"cato"
        ,
        desc : "asd asdlnkjk s.pipedriveassets.com/cdn-cgi/image s.pipedriveassets.com/cdn-cgi/images.pipedriveassets.com/cdn-cgi/image"

    }
    ,
    {
        imgUrl :`${myHost}src/assets/imgs/prework/7.jpg`
        ,
         title:"cato"
        ,
        desc : "asd asdlnkjk s.pipedriveassets.com/cdn-cgi/image s.pipedriveassets.com/cdn-cgi/images.pipedriveassets.com/cdn-cgi/image"

    }
    ,
    {
        imgUrl :`${myHost}src/assets/imgs/prework/8.jpg`
        ,
         title:"cato"
        ,
        desc : "asd asdlnkjk s.pipedriveassets.com/cdn-cgi/image s.pipedriveassets.com/cdn-cgi/images.pipedriveassets.com/cdn-cgi/image"

    }
]

</script>

<style scoped>

.el-carousel__item {
    @apply flex gap-4 sm:rounded-md
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  /* background-color: #99a9bf; */
  @apply bg-transparent
}

.el-carousel__item:nth-child(2n + 1) {
  /* background-color: #d3dce6; */
  @apply bg-transparent

}

</style>
