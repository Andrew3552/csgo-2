<template>
  <HeaderSlider
    :oline-counter="12443"
    :slides="slides"
  />
  <Head />
  <HowItWorks
    :howitworks="howitworks"
  />
  <Bookmakers
    :bookmakers="bookmakers"
  />
  <Additionals
    :additionals="additionals"
  />
  <Footer />
</template>

<script setup lang="ts">
import HeaderSlider from './components/HeaderSlider/HeaderSlider.vue';
import Head from './components/Head.vue';
import HowItWorks from './components/HowItWorks.vue';
import Bookmakers from './components/Bookmakers.vue';
import Additionals from './components/Additionals.vue';
import Footer from './components/Footer.vue';
import { Slider } from './components/HeaderSlider/index';
import { computed } from 'vue';

const slides = computed(() => window.slides);

const howitworks = computed(() => window.howitworks);

const bookmakers = computed(() => window.bookmakers);

const additionals = computed(() => window.additionals);
</script>

<style scoped>

</style>
