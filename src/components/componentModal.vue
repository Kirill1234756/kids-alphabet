<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
    v-if="modalStore.isOpen"
  >
    <div
      class="flex flex-col justify-center items-center bg-white w-11/12 md:w-2/3 max-w-lg text-center"
    >
      <div  class="p-5 border-b"></div>
        <h3 class="text-3xl font-bold">hrf</h3>
        <div class="p-5 border-t"></div>
        <p class="px-5 py-2 text-gray-600 text-lg">
          {{ message }}
        </p>
        <div class="p-5 border-t"></div>
        <button
          class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          @click="modalStore.close()"
        >
          Close
        </button>
    </div>
  </div>
 
 
</template>

<script setup>
import { defineProps, defineEmits, watch, ref } from "vue";
import { useModal } from "@/stores/modal";

const modalStore = useModal();

const props = defineProps({
  modelValue: Boolean,
  title: String,
  message: String,
});

</script>

<style scoped>
</style>
