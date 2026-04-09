<template>
  <section class="hero">
    <div class="hero-body">
      <p class="title">Películas del Studio Ghibli</p>
      
      <div class="columns is-multiline">
        <div class="column is-4">
          <Input 
            placeholder="Buscar película..."
            v-model="search"
           />
        </div>
        <div class="column is-12">
          <div class="columns">
            <div class="column is-3">
              <Card />
            </div>
            <div class="column is-3">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue' 
import Input from './components/input.vue'
import Card from './components/card.vue'

const search = ref('')
</script>

<style scoped>
</style>
