<template>
  <main>
    <header>
      <componentHeader />
    </header>
    <section>
      <componentAlphabet />
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import componentHeader from "./components/componentHeader.vue";
import componentAlphabet from "./components/componentAlphabet.vue";
import { useArrayLetters } from "./stores/counter";

</script>

<style scoped>
</style>