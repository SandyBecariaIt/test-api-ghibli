<template>
  <div>
    <p class="title">Películas del Studio Ghibli</p>

    <div class="columns is-multiline">
      <div class="column is-4">
        <Input
          :items="films"
          placeholder="Buscar película..."
          @select="onSelect"
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
          <div v-for="film in films" :key="film.id" class="column is-3">
            <Card
              :id="film.id"
              :title="film.title"
              :original_title="film.original_title"
              :image="film.image"
              :movie_banner="film.movie_banner"
              :description="film.description"
              :director="film.director"
              @select="(id) => onSelectedMovie(id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useFilms } from "@/composables/useFilms";
import { useRouter } from "vue-router";

// Components

import Loader from "../components/loader.vue";
import Input from "../components/input.vue";
import Card from "../components/card.vue";

const search = ref("");
const router = useRouter();
const { films, loading, error, getAllFilms } = useFilms();

onMounted(() => {
  getAllFilms();
});

function onSelect(item: { id: string; title: string }) {
  router.push({ name: 'details', params: { id: item.id } })
}

const onSelectedMovie = (id: string) => {
  console.log("Película seleccionada n.n", id);
  router.push({ name: "details", params: { id } });
};

</script>

<style scoped></style>
