<template>
  <footer class="p-4 bg-gray-950 md:p-10 lg:p-12">
    <div class="mx-auto max-w-screen-xl text-center">
      <a
        href="#"
        class="flex justify-center items-center text-2xl md:text-4xl font-semibold text-atm-yellow"
      >
        A. T. M
      </a>
      <p
        class="my-6 mt-0 md:mt-1 md:text-2xl text-atm-blue brightness-200 contrast-100 capitalize"
      >
        {{ $t("title.forDecoration") }}
      </p>
      <ul
        class="flex flex-wrap justify-center items-center mb-6 text-gray-400 dark:text-gray-500"
      >
        <li>
          <router-link
            class="mr-4 hover:underline md:mr-6"
            :to="{ name: 'home' }"
          >
            {{ $t("Footer.Home") }}
          </router-link>
        </li>
        <li>
          <a href="#Featuredproducts" class="mr-4 hover:underline md:mr-6">
            {{ $t("Footer.FeaturedProducts") }}
          </a>
        </li>
        <li>
          <router-link
            class="mr-4 hover:underline md:mr-6"
            :to="{ name: 'videos' }"
          >
            {{ $t("Footer.videosGallery") }}
          </router-link>
        </li>
        <li>
          <a href="#previouswork" class="mr-4 hover:underline md:mr-6">
            {{ $t("Footer.someOfOurWork") }}
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            {{ $t("Footer.OurStore") }}
          </a>
        </li>

        <li>
          <a href="#contactus" class="mr-4 hover:underline md:mr-6">
            {{ $t("Footer.Contact") }}
          </a>
        </li>
      </ul>
      <span
        class="text-sm text-gray-300 sm:text-center dark:text-gray-700 hover:cursor-none"
        >&copy; 2024 EM
      </span>
    </div>
  </footer>
</template>
