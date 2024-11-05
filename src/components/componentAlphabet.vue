<template>
  <div class="container w-full h-full bg-slate-200 grid grid-cols-10 gap-4">
    <componentLetter v-for="letter in arrayLetters" :key="letter" :letter="letter" />
  </div>
</template>

<script setup>
//  import { useArrayLetters } from './useArrayLetters'; 
import { useArrayLetters } from '../stores/counter';
import componentLetter from './componentLetter.vue';

const arrayLettersStore = useArrayLetters();
const arrayLetters = arrayLettersStore.arrayLetters;
</script>

<style scoped>
</style>
