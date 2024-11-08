<template>
  <div class="container w-full h-full bg-slate-200 grid grid-cols-10 gap-4">
    <!-- Кнопки для выбора буквы -->
    <div
      v-for="letterItem in arrayLettersStore.arrayLetters"
      :key="letterItem.id"
      class="w-full h-28 bg-slate-300 border-black rounded-md flex justify-center items-center font-bold text-4xl"
      @click="showModal = true"
    >
      {{ letterItem.letter }}
    </div>

    <!-- modal -->
    <div v-if="showModal" class="col-span-10">
      <Modal
        v-model="showModal"
        title="Привет, мир!"
        :message="`Вы выбрали букву ${selectedLetter}`"
      />
    </div>
  </div>
</template>

<script setup>
import { useArrayLetters } from "../stores/counter"; // Подключаем Pinia store
import { ref } from "vue";
import Modal from "./Modal.vue"; // Подключаем модальное окно

const arrayLettersStore = useArrayLetters();

const showModal = ref(false);
const selectedLetter = ref("");
</script>
