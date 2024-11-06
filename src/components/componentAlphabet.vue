<template>
  <div class="container w-full h-full bg-slate-200 grid grid-cols-10 gap-4">
    <componentLetter @click="showModal = true" v-for="letter in arrayLetters" :key="letter" :letter="letter" />

    <div class="p-6">
   

    <!-- Подключение компонента модального окна -->
    <Modal
      v-model="showModal"
      title="Привет, мир!"
      message="Это пример модального окна с использованием Vue 3 и Tailwind CSS."
    />
  </div>
  </div>
</template>

<script setup>
//  import { useArrayLetters } from './useArrayLetters'; 
import { useArrayLetters } from '../stores/counter';
import componentLetter from './componentLetter.vue';

const arrayLettersStore = useArrayLetters();
const arrayLetters = arrayLettersStore.arrayLetters;
import { ref } from "vue";
import Modal from "./componentModal.vue";

const showModal = ref(false);
</script>

<style scoped>
</style>
