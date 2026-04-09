<template>
  <div class="card">
    <div class="card-content">
      <div @click="router.back()" class="content title-content">
        <i class="fa-solid fa-arrow-left"></i>
        <p class="title-text">{{ film.title }}</p>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-content">
      <div class="content">
        <div class="columns is-multiline" v-if="!loading">
          <div class="column is-4">
            <figure class="image">
              <img :src="film.image" />
            </figure>
          </div>

          <div class="column is-8">
            <p class="subtitle"><strong>Titulo original: </strong>{{ film.original_title }}</p>
            <p class="subtitle"><strong>Título original romanizado: </strong>{{ film.original_title_romanised }}</p>
            <p><strong>Director: </strong>{{ film.director }}</p>
            <p><strong>Productor: </strong>{{ film.producer }}</p>
            <p>{{ film.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useFilms } from "@/composables/useFilms";
import { useRouter } from "vue-router";

const router = useRouter();
const { film, loading, error, getFilmById } = useFilms();

onMounted(() => {
  const id = router.currentRoute.value.params.id as string;
  getFilmById(id);
});
</script>

<style scoped>
.title-content {
  cursor: pointer;
  display: flex;
}

.title-text {
  margin-left: 20px;
  font-size: 1.5rem;
  font-weight: bold;
}

.fa-solid {
  margin-top: 9px;
  font-size: 1.2rem;
}
</style>
