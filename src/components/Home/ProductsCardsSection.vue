<template>
  <!-- <TransitionGroup v-if="sh" name="list" tag="ul">
            <li v-for="card in cards" :key="card">
                {{ card.title }}
            </li>
        </TransitionGroup>
            -->
  <!-- <div  class="relative bg-white border overflow-hidden border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-500 hover:shadow-lg hover:scale-105">
            <a href="#" class="block relative">
            <img class="rounded-lg w-full  object-cover h-96 sm:h-[70vh] md:h-[80vh] transition-opacity duration-500 ease-in-out" :src="card.imageUrl" alt="" />
            <div class="absolute bottom-0 w-full  h-1/4 hover:h-full hover:bg-opacity-45 bg-opacity-65 bg-black flex justify-center items-center transition-all duration-1000">
                <a href="#" class="block">
                <h5 class="mb-2 text-2xl uppercase font-semibold tracking-tight  text-white hover:text-atm-yellow dark:text-white">
                    {{ card.title }}
                </h5>
                </a>
            </div>
            </a>
        </div> -->
  <div v-if="show">
    <div
      class="relative bg-white overflow-hidden rounded-lg shadow-md dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105 max-w-xs sm:max-w-md mx-auto"
    >
      <a :href="card.imageUrl" class="block relative">
        <img
          lazy-load
          loading="lazy"
          class="rounded-lg w-full object-cover h-96 sm:h-[70vh] md:h-[80vh] transition-opacity duration-500 ease-in-out"
          :src="card.imageUrl"
          alt=""
        />
        <div
          class="absolute bottom-0 w-full h-1/4 hover:h-full hover:bg-opacity-45 bg-opacity-65 bg-black flex justify-center items-center transition-all duration-1000"
        >
          <a class="block">
            <h5
              class="mb-2 text-2xl uppercase font-semibold tracking-tight text-white hover:text-atm-yellow dark:text-white"
            >
              {{ Title }}
            </h5>
          </a>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  card: Object,
  Title: String,
});

const show = ref(false);

onMounted(() => {
  show.value = true;
});
</script>

<style scoped>
.theCard {
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 2s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
