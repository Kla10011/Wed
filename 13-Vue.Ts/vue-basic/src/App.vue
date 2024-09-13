<script setup lang="ts">
import MyBar from './components/MyBar.vue';
import MyCard from './components/MyCard.vue';
import items from './attractions.json'
import MyCharts from './components/MyCharts.vue';
components: {
  MyCharts
}

</script>

<template>
  <header>
    <MyBar />
    <MyCharts />
  </header>

  <main>
    <h1 style="padding-left: 10px;">Attractions</h1>
    <div className="grid-container">
      <MyCard v-for="item in items" v-bind="item" />
    </div>
  </main>
</template>


<style scoped>
.grid-container {
  padding: 0px 8px;
  display: grid;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
}

@media (min-width: 576px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
