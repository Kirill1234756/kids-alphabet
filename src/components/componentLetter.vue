<template>
  <div
    class="w-full h-28 bg-slate-300 border-black rounded-md flex justify-center items-center font-bold text-4xl"
  >
    {{ letter }}
  </div>
</template>

<script setup>
defineProps({
  letter: String,
});
</script>

<style scoped>
</style>