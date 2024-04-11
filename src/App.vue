<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { RouterView } from 'vue-router';

export default {
  components: {
    AppMain,
    AppHeader
  }
}
</script>

<template>
  <AppHeader />
  <RouterView />
</template>

<style scoped>

</style>
