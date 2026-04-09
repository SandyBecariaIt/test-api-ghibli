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

        <div class="column is-full">
          <div class="columns is-multiline" v-if="loading">
            <div v-for="n in 4" class="column is-3">
              <Loader />
            </div>
          </div>

          <div v-else-if="error">{{ error }}</div>

          <div v-else class="columns is-multiline">
            <div
              v-for="film in films"
              :key="film.id"
              class="column is-3"
            >
              <Card
                :title="film.title"
                :original_title="film.original_title"
                :image="film.image"
                :movie_banner="film.movie_banner"
                :description="film.description"
                :director="film.director"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFilms } from '@/composables/useFilms'

// Components

import Loader from './components/loader.vue'
import Input from './components/input.vue'
import Card from './components/card.vue'

const search = ref('')
const { films, loading, error, getAllFilms } = useFilms()

onMounted(() => {
  getAllFilms()
})

</script>

<style scoped>
</style>
