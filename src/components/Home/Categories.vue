<template>
    <div v-if="show">


<div class="w-full  bg-white
  rounded-sm shadow dark:bg-gray-800

  max-w-xs sm:max-w-md mx-auto
  hover:scale-105 cursor-pointer transition-all
  capitalize
  ">
    <a :href="product.imageUrl">
        <img loading="lazy" class="rounded-t-sm w-full max-h-56 object-cover " :src="product.imageUrl" alt="product image" />
    </a>
    <div class="p-5 py-6">
        <!-- <a href="#"> -->
        <a>
            <h5 class="text-xl font-semibold flex justify-between items-center tracking-tight text-gray-900 dark:text-white">
                    <span>
                        {{ product.title }}
                    </span>

                    <!-- <span class="p-1 px-3 bg-atm-blue rounded-full text-atm-yellow">
                        ${{ product.price }}
                    </span> -->
            </h5>
        </a>
    </div>
</div>


</div>

</template>


<script setup>

import { onMounted, ref } from "vue";


const props = defineProps({
  product: Object // Assuming card is an object
});

const show = ref(false)

onMounted(()=>{
    show.value = true
})

// product = {
//     title:"p1" ,
//     description : "des 1 " ,
//     price : 55 ,
//     imageUrl : "src/assets/imgs/atm.jpg"
// }


</script>
