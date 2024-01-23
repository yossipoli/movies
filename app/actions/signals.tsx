import { signal } from '@preact/signals-react'
import { Movie } from '../types/movie'

export const movies = signal<Movie[]>([])
export const currentMovie = signal<Movie | null>(null)

export const setCurrentMovie = (movie: Movie) => {
	currentMovie.value = movie
}

export const closeModal = () => {
	currentMovie.value = null
}
