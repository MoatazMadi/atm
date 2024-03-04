<template>
    <el-carousel  :interval="interval" :type="type" :height="height">
      <el-carousel-item v-for="item in slides" :key="item"  >
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" :src="item.imgUrl" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {{ item.title }}
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {{ item.desc }}
                    </p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
      </el-carousel-item>
    </el-carousel>
  </template>


<script setup>
defineProps({
   height: String,
  interval: Number,
  type : String
})

const slides = [
{
        imgUrl :'https://www-cms.pipedriveassets.com/cdn-cgi/image/quality=70,format=auto/https://www-cms.pipedriveassets.com/Embedding-Images-in-Emails.png'
        ,
        title:"emped emailn"
        ,
        desc : "asd asdlnkjk s.pipedriveassets.com/cdn-cgi/image s.pipedriveassets.com/cdn-cgi/images.pipedriveassets.com/cdn-cgi/image"

    }
    ,
    {
        imgUrl : 'https://flowbite.com/docs/images/blog/image-1.jpg'
        ,
        title:"laptop"
        ,
        desc : "asd asdlnkjk s.pipedriveassets.com/cdn-cgi/image s.pipedriveassets.com/cdn-cgi/images.pipedriveassets.com/cdn-cgi/image"


    }
    ,
    {
        imgUrl : 'https://media.sproutsocial.com/uploads/2015/02/Facebook_Embed.png'
        ,
        title:"code snip"
        ,
        desc : "asd asdlnkjk s.pipedriveassets.com/cdn-cgi/image s.pipedriveassets.com/cdn-cgi/images.pipedriveassets.com/cdn-cgi/image"


    }
    ,
    {
        imgUrl : 'https://www.gettyimages.com/gi-resources/images/Embed/new/embed1.jpg'
        ,
         title:"arsinal"
        ,
        desc : "asd asdlnkjk s.pipedriveassets.com/cdn-cgi/image s.pipedriveassets.com/cdn-cgi/images.pipedriveassets.com/cdn-cgi/image"


    }
    ,
    {
        imgUrl :  'https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg'
        ,
         title:"cato"
        ,
        desc : "asd asdlnkjk s.pipedriveassets.com/cdn-cgi/image s.pipedriveassets.com/cdn-cgi/images.pipedriveassets.com/cdn-cgi/image"

    }
]

</script>


  <style  >

    .el-carousel {
        /* style="display:flex; justify-content:center; background-color:transparent" */

        /* @apply bg-red-600 */
    }

    .el-carousel__item {
        /* background-color:red */
        @apply flex justify-center bg-transparent
    }

    /* .el-carousel__item div {
        @apply  bg-atm-blue
        } */

  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }
/*
  .el-carousel__item:nth-child(2n) {
    background-color: #fff;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  } */

  </style>

