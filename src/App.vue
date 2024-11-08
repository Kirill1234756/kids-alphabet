<template>
  <main>
    <!-- header -->
    <header>
      <Header />
    </header>
    <!-- alphabet -->
    <section>
      <ListLetters />
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import ListLetters from "./components/ListLetters.vue";
import { useArrayLetters } from "./stores/counter";

</script>

<style scoped>
</style>