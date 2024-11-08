<template>
  <swiper
    class="w-[600px] h-[400px] rounded-lg"
    :slides-per-view="1"
    :space-between="10"
    :loop="true"
    :pagination="{ clickable: true }"
    :navigation="true"
    :autoplay="{ delay: 3000 }"
    :modules="[Pagination, Navigation, Autoplay]"
  >
    <swiper-slide
      v-for="slide in arrayLettersStore.arrayLetters[1].slides"
      :key="slide"
      class="flex flex-col items-center justify-center  -64 rounded-lg"
    >
      <h2 class="text-lg font-bold">{{ slide.title }}</h2>
      <img class="w-full h-full" :src="slide.slideImg" alt="">
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useArrayLetters } from "@/stores/counter";

const arrayLettersStore = useArrayLetters();
</script>
