<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
    @click.self="close"
  >
    <div
      class="bg-white rounded-lg shadow-lg max-w-md w-full p-6 transition-transform duration-200 transform scale-95"
      :class="{ 'scale-100': isOpen }"
    >
      <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
      <p>{{ message }}</p>
      <div class="mt-6 text-right">
        <button
          @click="close"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Закрыть
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, watch, ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Модальное окно",
  },
  message: {
    type: String,
    default: "Это сообщение модального окна.",
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
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

<style scoped>
/* Добавьте любые нужные стили */
</style>
