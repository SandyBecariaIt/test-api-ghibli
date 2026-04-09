import { ref } from 'vue'
import { get } from '@/services/network'
import type { Film } from '@/types/film'

export function useFilms() {
  const films = ref<Film[]>([])
  const film = ref<Film | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function getAllFilms() {
    loading.value = true
    error.value = null

    try {
      films.value = await get<Film[]>('/films')
    } catch (e) {
      error.value = (e as Error).message
    } finally {
      loading.value = false
    }
  }

  async function getFilmById(id: string) {
    loading.value = true
    error.value = null
    
    try {
      film.value = await get<Film>(`/films/${id}`)
    } catch (e) {
      error.value = (e as Error).message
    } finally {
      loading.value = false
    }
  }

  return {
    films,
    film,
    loading,
    error,
    getFilmById,
    getAllFilms
  }
}
