<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="movie_banner"
          :alt="title"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ title }}</p>
          <p class="subtitle is-6">{{ original_title }}</p>
        </div>
      </div>

      <div class="content">

        <time datetime="2016-1-1">
          <strong>Director: </strong> {{ director }}
        </time>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  original_title: string,
  image: string,
  movie_banner: string,
  description: string,
  director: string,
}>()
</script>

<style scoped>
.image img {
  object-fit: cover;
}
</style>
