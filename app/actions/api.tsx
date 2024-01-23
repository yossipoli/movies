import { getAllMovies } from './elasticsearch'

export const getMovies = async () => {
	const initialMovies = await getAllMovies()
	return { initialMovies }
}
