import { ref } from 'vue'
import { get } from '@/services/network'
import type { Film } from '@/types/film'

export function useFilms() {
  const films = ref<Film[]>([])
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

  return {
    films,
    loading,
    error,
    getAllFilms
  }
}
