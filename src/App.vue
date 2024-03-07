<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

// localStorage.theme = 'light'

const load = ref(false);

onMounted(() => {
  setTimeout(() => {
    load.value = true;
  }, 1200);
});
</script>

<template>
  <div>
    <div
      v-show="!load"
      class="flex bg-slate-100 justify-center items-center h-screen"
    >
      <div class="relative size-48">
        <div class="absolute inset-0 flex justify-center items-center">
          <div
            class="size-36 border-t-4 border-l-4 border-atm-blue rounded-full animate-spin"
          ></div>
        </div>
        <div class="absolute inset-0 flex justify-center items-center">
          <p class="flex items-center justify-center text-4xl   w-32 h-16 text-atm-yellow">
            <span class="inline-block drop-shadow-3xATM" >
                A.T.M
            </span>
          </p>
        </div>
      </div>
    </div>
    <RouterView  v-slot="{Component}" >
      <Transition name="main" mode="in-out">
        <component v-show="load"  :is="Component" />
      </Transition>
    </RouterView>
    <!-- -->


  </div>
</template>

<style scoped >

.main-enter-active,
.main-leave-active {
  transition: all 500ms ease-in;
  /* animation : Appear-category-section 3.5s ease */
}

.main-enter-from,
.main-leave-to {
  opacity: 0;
  transform: translateY(-250px);
  /* scale: 80%; */

  /* transform: translateY(-400px) scale(0); */
  /* transform: translate(-50%); */
}

</style>
