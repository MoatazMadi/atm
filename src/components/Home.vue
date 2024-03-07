<template>
  <div class="bg-slate-50 dark:bg-gray-900 min-h-screen">
    <!-- Header with Hero -->
      <div>
        <!-- Move to top Button -->
        <el-backtop
          title="Go Top"
          :right="50"
          :bottom="50"
          :visibility-height="500"
        />

        <header class="h-screen relative">
          <!-- Nav Bar -->
          <NavBar
            @switch-language="switchLang"
            class="bg-gray-950 sticky top-0 w-full z-20"
          />

          <!-- Hero section -->
          <section
            class="h-full w-full relative bg-fixed bg-gray-950 bg-right bg-contain bg-no-repeat bg-blend-overlay overflow-hidden"
          >
            <!-- The  Main Text [ATM For decoration] -->
            <div class="flex z-30 justify-center w-full h-full">
              <div class="translate-y-[35%]">
                <h1
                  class="text-2xl text-center mainTextAnimate sm:text-3xl md:text-5xl lg:text-8xl capitalize brightness-200 contrast-100 px-5 rounded-md text-atm-blue"
                  style=""
                >
                  <span
                    class="uppercase brightness-50 contrast-100 text-atm-yellow"
                    >a.t.m</span
                  >
                  <br />
                  {{ $t("title.forDecoration") }}
                </h1>
              </div>
            </div>

            <!-- top 3 coloredlines -->
            <div
              class="absolute ShapeRightInAnimate duration-1000 top-[3%] translate-x-[50%] h-2 w-[120%] bg-atm-blue rounded-full brightness-150 contrast-150"
            ></div>
            <div
              class="absolute ShapeRightInAnimate top-[5%] translate-x-[40%] h-2 w-[120%] bg-atm-yellow rounded-full brightness-150 contrast-150"
            ></div>
            <div
              class="absolute ShapeRightInAnimate top-[7%] translate-x-[30%] h-2 w-[120%] bg-atm-blue rounded-full brightness-150 contrast-150"
            ></div>
            <!--  the mid coloredlines -->

            <div
              class="absolute ShapeLeftInAnimate top-[27%] transition-all -translate-x-[40%] h-10 w-[120%] bg-atm-blue rounded-full sm:-translate-x-[50%] brightness-200 contrast-100"
            ></div>
            <div
              class="absolute ShapeRightInAnimate top-[50%] translate-x-[40%] h-10 w-[120%] bg-atm-yellow rounded-full sm:top-[51%] sm:translate-x-[57%] md:top-[55%] lg:top-[68%] contrast-brightness-200 brightness-100"
            ></div>
            <!--  -->
            <!-- bottom coloredlines -->
            <div
              class="absolute ShapeLeftInAnimate top-[82%] -translate-x-[35%] h-2 w-[120%] bg-atm-blue rounded-full brightness-150 contrast-150"
            ></div>
            <div
              class="absolute ShapeLeftInAnimate top-[80%] -translate-x-[45%] h-2 w-[120%] bg-atm-yellow rounded-full brightness-150 contrast-150"
            ></div>
            <!--  -->
            <!--  -->
          </section>
        </header>
        <!-- End Header with Hero -->

        <!-- Main Body -->
        <main>
          <!-- the real main -->
          <div class="">
            <!-- first section -->
            <!-- our broducts [Special Products] -->
            <section
              detect="Products"
              id="Featuredproducts"
              ref="detectProducts"
              class="relative mt-32 md:mt-40 min-h-96 overflow-hidden"
            >
              <!-- content container -->
              <div class="container">
                <!--  [cards] Component -->
                <Transition name="">
                  <div class="relative z-20" v-if="showProducts">
                    <h2
                      class="text-3xl sm:text-4xl md:text-5xl text-center mb-6 capitalize"
                    >
                      {{ $t("nav.FeaturedProducts") }}
                    </h2>
                    <!-- cards container  -->
                    <div
                      class="grid pb-12 bg-transparent grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                    >
                      <div v-for="(card, index) in cards" :key="card.id">
                        <!-- cards component  -->
                        <Transition name="bounce">
                          <ProductsCardsSection
                            :style="{ 'transition-delay': index * 400 + 'ms' }"
                            :card="card"
                            :Title="card.title"
                          />
                        </Transition>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </section>

            <!-- Test Section [Main Text (Description)] -->

            <section
              detect=""
              ref=""
              class="relative bg-slate-300 dark:bg-slate-800 py-12 mt-5 md:mt-10 overflow-hidden"
              style="min-height: 80vh"
            >
              <div class="container h-full">
                <div class="flex flex-col gap-12 lg:gap-24 lg:flex-row h-full">
                  <!-- Left Side -->
                  <div class="flex-1 p-1 py-2 z-20">
                    <h2
                      class="capitalize mb-3 font-bold italic text-gray-950 dark:text-gray-50"
                    >
                      <span class="text-2xl">
                        <span> ATM </span>
                        <span>
                          {{ $t("paragraphs.title") }}
                        </span>
                      </span>
                      <br />
                      <span class="text-sm indent-4 block">
                        {{ $t("paragraphs.subTitle") }}
                      </span>
                    </h2>
                    <div
                      class="ml-4 italic text-gray-800 dark:text-white flex flex-col gap-6 sm:gap-8 lg:gap-10 mt-8 capitalize w-full text-md leading-8 dark:drop-shadow-3xlB md:rtl:text-lg"
                    >
                      <p>
                        {{ $t("paragraphs.LSfirstP") }}
                      </p>
                      <p>
                        {{ $t("paragraphs.LSsecoundP") }}
                      </p>

                      <p>
                        {{ $t("paragraphs.LSthirdP") }}
                      </p>
                      <p>
                        {{ $t("paragraphs.LSFourthP") }}
                      </p>
                    </div>
                  </div>
                  <!-- Right Side -->
                  <div class="p-4 z-20 capitalize italic">
                    <h2
                      class="text-2xl text-gray-950 dark:text-gray-50 font-bold mb-8 text-center"
                    >
                      {{ $t("paragraphs.RStitle") }}
                    </h2>
                    <div class="flex flex-col justify-evenly h-full">
                      <div class="self-center w-full">
                        <div class="flex flex-col mb-8">
                          <h2
                            class="text-base text-center dark:text-white dark:drop-shadow-3xlB md:rtl:text-lg"
                          >
                            {{ $t("paragraphs.RSgelleryTitle") }}
                          </h2>
                          <router-link
                            :to="{ name: 'home', hash: '#previouswork' }"
                            class="size-16 self-center hover:scale-105 hover:animate-spin transition-all flex border-2 border-atm-blue bg-slate-200 rounded-md my-4 justify-center items-center hover:bg-atm-blue group"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-12 stroke-atm-blue group-hover:stroke-atm-yellow hover:animate-ping"
                            >
                              >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </router-link>
                        </div>
                      </div>

                      <div class="self-center w-full">
                        <div class="flex flex-col">
                          <h2
                            class="text-base text-center dark:text-white dark:drop-shadow-3xlB md:rtl:text-lg"
                          >
                            {{ $t("paragraphs.RSvideos1") }} <br />{{
                              $t("paragraphs.RSvideos2")
                            }}
                          </h2>
                          <router-link
                            :to="{ name: 'videos' }"
                            class="size-16 self-center hover:scale-105 hover:animate-spin transition-all flex border-2 border-atm-blue bg-slate-200 rounded-md my-4 justify-center items-center hover:bg-atm-blue group"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-12 stroke-atm-blue group-hover:stroke-atm-yellow hover:animate-ping rotate-45"
                            >
                              >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m4.5 15.75 7.5-7.5 7.5 7.5"
                              />
                            </svg>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <!-- our previes work -->
            <!-- carosusel [cards] Component -->
            <!-- Updated -->
            <section
              detect="PreWork"
              ref="detectPreWork"
              id="previouswork"
              class="mt-9 md:mt-20 min-h-96"
            >
              <Transition name="fade">
                <div v-if="showPreWork">
                  <h2
                    class="text-3xl sm:text-4xl md:text-5xl text-center mb-6 capitalize"
                  >
                    {{ $t("title.someOfOuerWork") }}
                  </h2>
                  <el-carousel
                    :type="carouselType"
                    :interval="105500"
                    :arrow="carouselArrows"
                    :height="getScreenHegitForSliderCarousel"
                    :indicator-position="'none'"
                    :pause-on-hover="false"
                    class="max-w-full w-full overflow-hidden"
                  >
                    <div v-for="(slide, index) in slides" :key="index">
                      <Transition
                        name="bounce"
                        :style="{ 'transition-delay': index * 25 + 'ms' }"
                      >
                        <PreviesWork
                          class="sm:rounded-lg"
                          :imgUrl="`${myProdHost}/assets/imgs/prework/${slide}.jpeg`"
                        />
                      </Transition>
                    </div>
                  </el-carousel>
                </div>
              </Transition>
            </section>
          </div>
        </main>

        <!-- Contact Us -->
        <section id="contactus" class="mt-20">
          <ContactUs />
        </section>

        <!--  & footer -->
        <Footer />
      </div>
  </div>
</template>

<script setup>
import {
  computed,
  onMounted,
  onBeforeMount,
  defineAsyncComponent,
  onUnmounted,
  ref,
} from "vue";

import NavBar from "../layoutes/NavBar.vue";
import ContactUs from "../layoutes/ContactUs.vue";
import Footer from "../layoutes/Footer.vue";

const myHost = "http://localhost:3000/src";

const myProdHost = import.meta.env.VITE_MY_BASE_URL;

const components = {
  NavBar,
  ContactUs,
  Footer,
};
const PreviesWork = defineAsyncComponent(() =>
  import("./Home/PreviesWork.vue")
);
const ProductsCardsSection = defineAsyncComponent(() =>
  import("./Home/ProductsCardsSection.vue")
);

// Translattion
import { useI18n } from "vue-i18n";

const { t, locale, messages } = useI18n(); // useI18n provides access to t() and locale

import { watch } from "vue";

//TOGGLE
function switchLang() {
  if (locale.value === "ar") {
    locale.value = "en";
    document.documentElement.style.direction = "ltr";
    ProdTranslate(locale.value);
    document.documentElement.style.fontFamily =
      '"Roboto", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
  } else {
    locale.value = "ar";
    ProdTranslate(locale.value);
    document.documentElement.style.direction = "rtl";
    document.documentElement.style.fontFamily =
      'cairo,"Roboto", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
  }
}
watch(locale.value, (val) => {
  setI18nLanguage(val);
});

// Products Translater
const ProdTranslate = (local) => {
  if (local == "ar") {
    cards[0].title = messages.value.ar.product.GYPSUMBOARD;
    cards[1].title = messages.value.ar.product.woodAlternative;
    cards[2].title = messages.value.ar.product.marbleAlternative;
    cards[3].title = messages.value.ar.product.futuristic;
  } else {
    cards[0].title = messages.value.en.product.GYPSUMBOARD;
    cards[1].title = messages.value.en.product.woodAlternative;
    cards[2].title = messages.value.en.product.marbleAlternative;
    cards[3].title = messages.value.en.product.futuristic;
  }
};

// ##
// unComment the else{}
// to make the page reflech on the brouser language of the user
onBeforeMount(() => {
  // Detect Lang
  if (navigator.language == "ar") {
    locale.value = "ar";
    document.documentElement.style.direction = "rtl";
    document.documentElement.lang = "ar";
    document.documentElement.style.fontFamily =
      'cairo,"Roboto", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
  } else {
    // locale.value = 'en'
    // document.documentElement.style.direction = "ltr"
    // document.documentElement.lang = "en"
    // document.documentElement.style.fontFamily = '"Roboto", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
    // cards[0].title = "gypsum board"
    // cards[1].title = "wood alternative"
    // cards[2].title = "marble alternative"
    // cards[3].title = "futuristic"
  }
});

// END Translate

// Intersection Opservor Test
const detectProducts = ref(null);
const detectPreWork = ref(null);
const showProducts = ref(false);
const showPreWork = ref(false);
const showCategories = ref(false);

const sections = [detectProducts, detectPreWork];
// intersectio opserver
const handleIntersection = (entries, section) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target === section.value) {
      // here see the detect att to figure what element i detect
      const switcher = entry.target.getAttribute("detect");
      // here to toggle v-if varibale to make eatch section visable
      switch (switcher) {
        case "Products":
          showProducts.value = true;
          break;
        case "PreWork":
          showPreWork.value = true;
          break;
        default:
          console.log("This is an unknown fruit.");
          break;
      }
    } else {
      // console.log("Section is not visible");
    }
  });
};

// special products section
const cards = [
  {
    title: "جبس بورد",
    imageUrl: `${myProdHost}/assets/imgs/cardsSection/gypsum board.jpg`,
  },
  {
    title: "بديل الخشب",
    imageUrl: `${myProdHost}/assets/imgs/cardsSection/BoardAlterntave.jpg`,
  },
  {
    title: "بديل الرخام",
    imageUrl: `${myProdHost}/assets/imgs/cardsSection/rkam.jpg`,
  },
  {
    title: "فيوتريستيك",
    imageUrl: `${myProdHost}/assets/imgs/cardsSection/futic.jpg`,
  },
];

// previes work update
const getScreenHegitForSliderCarousel = window.innerHeight * 0.95 + "px";
//carouselType
// Define a ref to store the current window width
const windowWidth = ref(window.innerWidth);
// Update the windowWidth ref when the window is resized
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};
// Add event listener for window resize
onMounted(() => {
  window.addEventListener("resize", updateWindowWidth);
});

// Remove event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});
// Define a computed property to return different values based on window width
const carouselType = computed(() => {
  return windowWidth.value > 640 ? "card" : "";
});
const carouselArrows = computed(() => {
  return windowWidth.value > 640 ? "hover" : "always";
});
// for looping and images names in cursaul
const slides = 20;

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.75,
  };

  sections.forEach((section) => {
    const observer = new IntersectionObserver((entries) => {
      handleIntersection(entries, section);
    }, options);

    observer.observe(section.value);
  });

});
</script>

<style>
/* Cards animation */
.bounce-enter-active,
.bounce-leave-active {
  transform: scale(100%);
  transition: all 1.5s ease-in-out;
}

.bounce-enter-from,
.bounce-leave-to {
  opacity: 0;
  transform: translate(-250px) scale(20%);
}

/* End Cards Animation */

/* AppearfromLeft Animation */
.AppearfromLeft-enter-active,
.AppearfromLeft-leave-active {
  transition: all 1s ease;
  /* animation : Appear-category-section 3.5s ease */
}

.AppearfromLeft-enter-from,
.AppearfromLeft-leave-to {
  opacity: 0;
  /* transform: translateY(-400px) scale(0); */
  transform: translate(-50%);
}

@keyframes Appear-category-section {
  0% {
    opacity: 0;
    transform: translate(-600px);
  }

  50% {
    /* opacity: 0; */
    /* transform: translate(600px) ; */
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

/* AppearfromLeft Animation */

/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
  animation: fade 2.6s ease-in-out;
}

@keyframes fade-bounce {
  0% {
    opacity: 0;
    transform: scale(30%);
  }

  50% {
    opacity: 0;
    transform: scale(200%);
  }

  100% {
    /* opacity: 1; */
    transform: scale(100%);
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

h2 {
  @apply dark:text-gray-200;
  animation: fade 1s ease;
}

.el-backtop {
  @apply bg-atm-blue text-atm-yellow z-50 opacity-85 transition-all hover:opacity-100 hover:bg-atm-blue hover:text-atm-yellow hover:scale-110 dark:bg-atm-yellow dark:text-atm-blue;
}

/* css Shapes animation */

.ShapeLeftInAnimate {
  animation: moveFromLeft 0.7s linear;
}

@keyframes moveFromLeft {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX();
  }
}

.ShapeRightInAnimate {
  animation: moveFromRight 0.7s linear;
}

@keyframes moveFromRight {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX();
  }
}

/* main text animation */
.mainTextAnimate {
  animation: pulseMainText 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-iteration-count: 2;
}

@keyframes pulseMainText {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}


.main-enter-active,
.main-leave-active {
  transition: all 400ms ease-in;
  /* animation : Appear-category-section 3.5s ease */
}

.main-enter-from,
.main-leave-to {
  opacity: 0;
  transform: translateY(-200px);

  /* transform: translateY(-400px) scale(0); */
  /* transform: translate(-50%); */
}
</style>
