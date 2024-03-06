<template>
  <div>
    <!-- wide nav bar -->
    <nav class="hidden sm:block py-4">
      <!-- NAV CONTENT -->
      <div class="container mx-auto px-2 flex gap-3 items-center">
        <!-- logo section -->
        <div class="flex-1 flex gap-4 justify-start items-center">
          <router-link class="min-w-fit" :to="{ name: 'home' }">
            <h3 class="text-2xl font-bold text-atm-yellow">A. T. M</h3>
          </router-link>

          <ul class="mylist flex gap-2 items-center text-white">
            <li>
              <router-link :to="{ name: 'home', hash: '#Featuredproducts' }">{{
                $t("nav.FeaturedProducts")
              }}</router-link>
            </li>

            <li>
              <router-link :to="{ name: 'home', hash: '#previouswork' }">{{
                $t("nav.PreviousWork")
              }}</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'videos' }">{{
                $t("nav.Videos")
              }}</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'home', hash: '#contactus' }">{{
                $t("nav.Contact")
              }}</router-link>
            </li>
          </ul>
        </div>

        <!-- links section -->
        <!-- store lang dark section -->
        <div class="flex gap-2 md:gap-4 items-center">
          <!-- store link -->
          <el-tooltip :content="$t('nav.VisitOurStore')" effect="customized">
            <a
              href="#"
              class="items-center hover:scale-150 justify-end flex-col flex gap-1"
              title=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                class="w-6 h-6 stroke-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                />
              </svg>
              <span class="text-white hidden"> our store </span>
            </a>
          </el-tooltip>

          <!-- lang switcher -->
          <el-tooltip :content="$t('nav.Translatee')" effect="customized">
            <a
              @click="$emit('SwitchLanguage')"
              class="items-center hover:scale-125 justify-end flex-col flex gap-1"
              title=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                />
              </svg>
              <span class="text-white hidden"> trasnslate </span>
            </a>
          </el-tooltip>
          <!-- dark mode Switcher -->
          <div
            class="flex items-center flex-col gap-1"
            title="toggle dark mode"
          >
            <el-switch
              style="
                --el-switch-on-color: #eee;
                --el-switch-off-color: transparent;
              "
              size="large"
              v-model="activeDarkMode"
              @click="activeDarkModeu"
            >
              <template #active-action>
                <span
                  class="custom-active-action rounded-full"
                  style="background-color: black"
                >
                  <!-- moon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                </span>
              </template>
              <template #inactive-action>
                <span
                  class="custom-inactive-action rounded-full"
                  style="/*background-color:gold*/"
                >
                  <!-- sun -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                </span>
              </template>
            </el-switch>
          </div>
        </div>
      </div>
    </nav>

    <!-- mobile nav bar -->
    <nav class="sm:hidden">
      <!-- NAV CONTENT -->
      <div class="container p-2 items-center flex">
        <!-- logo section -->
        <div class="flex-1">
          <router-link :to="{ name: 'home' }">
            <h2 class="text-xl font-bold text-atm-yellow">A. T. M</h2>
          </router-link>
        </div>

        <div class="flex justify-end items-center gap-4 flex-1">
          <!-- Store - Lang - Dark Section -->
          <div class="flex gap-2">
            <!-- store link -->
            <a
              href="#"
              class="items-center justify-end flex-row-reverse flex gap-1"
              title="visit our store"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                class="w-6 h-6 stroke-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                />
              </svg>
            </a>
            <!-- lang switcher -->
            <div
              @click="$emit('SwitchLanguage')"
              class="flex items-center cursor-pointer"
              title="switch language"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                />
              </svg>
            </div>
            <!-- dark mode Switcher -->
            <div class="flex gap-2" title="toggle dark mode">
              <el-switch
                style="--el-switch-on-color: #111; --el-switch-off-color: #eee"
                size="large"
                v-model="activeDarkMode"
                @click="activeDarkModeu"
              >
                <template #active-action>
                  <span
                    class="custom-active-action rounded-full"
                    style="background-color: black"
                  >
                    <!-- moon -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    </svg>
                  </span>
                </template>
                <template #inactive-action>
                  <span
                    class="custom-inactive-action rounded-full"
                    style="/*background-color:gold;*/"
                  >
                    <!-- sun -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="black"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="black"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  </span>
                </template>
              </el-switch>
            </div>
          </div>

          <!-- burger menu and the list -->
          <span class="text-end block">
            <a href="#" class="flex gab-3 items-center justify-end">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="w-8 h-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </span>
                <template #dropdown>
                  <el-dropdown-menu class="mobmenu" style="">
                    <li>
                      <router-link :to="{ name: 'home' }">{{
                        $t("nav.Home")
                      }}</router-link>
                    </li>

                    <li>
                      <router-link
                        :to="{ name: 'home', hash: '#previouswork' }"
                        >{{ $t("nav.PreviousWork") }}</router-link
                      >
                    </li>

                    <li>
                      <router-link :to="{ name: 'videos' }">{{
                        $t("nav.Videos")
                      }}</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'home', hash: '#contactus' }">{{
                        $t("nav.Contact")
                      }}</router-link>
                    </li>

                    <el-dropdown-item divided>
                      <li>
                        <a href="/store" class="flex gap-3">
                          <span>
                            {{ $t("nav.VisitOurStore") }}
                          </span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </a>
          </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

import { ref, computed } from "vue";

import { useRouter, useRoute } from "vue-router";

const router = useRouter();

import { useDarkModeStore } from "@/stores/darkMode.js";

const darkMode = useDarkModeStore();

const activeDarkMode = ref(darkMode.themeToggle);
const activeDarkModeu = darkMode.toggleDarkMode;
</script>

<style>
.mylist > li > a {
  @apply text-sm md:text-base lg:text-lg capitalize  p-1 py-2 md:px-2 sm:py-3  rounded-xl
            transition-all
             hover:bg-atm-blue  hover:text-atm-yellow
             dark:text-gray-300;
}

.el-switch__core {
  height: 1.6rem !important;
  outline: 2px solid #eee;
}

.el-switch__core .el-switch__action {
  background-color: transparent;
}

.mobmenu {
  width: 80vw;
  /* background-color:green; */
  /* @apply bg-green-400 */
  /* width: 90vw ;background-color:#eee; */
  @apply dark:bg-gray-900 pb-2;
}

/* Element+ Style */
.mobmenu > * {
  display: flex;
  align-items: center;
  white-space: nowrap;
  list-style: none;
  line-height: 22px;
  padding: 5px 16px;
  margin: 0;
  /* background-color:red; */
  font-size: var(--el-font-size-base);
  color: var(--el-text-color-regular);
  cursor: pointer;
  outline: 0;
}

.mobmenu > *:hover {
  @apply bg-atm-blue;
}

.mobmenu > *:hover > * {
  @apply text-atm-yellow font-bold;
}

.mobmenu > * > * {
  @apply items-center text-base capitalize text-black
            justify-end flex-row-reverse flex gap-1
            hover:text-atm-yellow w-full dark:text-gray-300;
}

.el-dropdown-menu__item:not(.is-disabled):focus {
  background-color: transparent;
}
.el-dropdown-menu__item:not(.is-disabled):focus {
  @apply hover:bg-atm-blue;
}
.el-dropdown-menu__item--divided {
  padding: 0px;
  margin: 6px;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.el-popper.is-customized {
  padding: 6px 12px;
  @apply bg-slate-100 text-atm-blue;
}

.el-popper.is-customized .el-popper__arrow::before {
  @apply bg-slate-100;
}
</style>
