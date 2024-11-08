<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
    @click.self="close"
  >
    <div class="bg-white w-full h-full overflow-y-auto">
      <!-- header -->
       <div class="flex items-center justify-between p-4">
        <h2 class="text-2xl font-semibold">{{ letter }}</h2>
        <button class="text-2xl font-semibold" @click="close">
          X
        </button>
      </div>
      <!-- swiper -->
      <div class="flex items-center justify-center h-screen">
        <Swiper />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, watch, ref } from "vue";
import Swiper from "./Swiper.vue";
import { useArrayLetters } from "@/stores/counter";

const arrayLettersStore = useArrayLetters();

const props = defineProps({
  modelValue: Boolean,
  letter: { type: String, required: true },
  index: { type: Number, required: true },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    isOpen.value = newValue;
  }
);

function close() {
  isOpen.value = false;
  emit("update:modelValue", false);
}
</script>
