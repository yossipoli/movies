import { Box, Container, Typography } from '@mui/material'
import Search from './search/page'
import * as search from './actions/elasticsearch'
import ModalComponent from './components/Modal'
import { signal } from '@preact/signals-react'
import { Movie } from './types/movie'

const Home = async () => {
	const movies = signal<Movie[]>(await search.getAllMovies())
	// const movies = signal<Movie[]>(await search.getMoviesByTitle('300'))
	// const movies = signal<Movie[]>(await search.getMoviesByGenre('Action AND Crime'))
	// const movies = signal<Movie[]>(await search.getMoviesBetweenYears(2007, 2010))
	const currentMovie = signal<Movie | null>(null)

	const setCurrentMovie = (movie: Movie) => {
		console.log('choosing a movie..')
		currentMovie.value = movie
	}

	const closeModal = () => {
		console.log('closing modal')
		currentMovie.value = null
	}

	return (
		<Container>
			<Box>
				<Typography
					variant='h2'
					color='initial'>
					All
				</Typography>
			</Box>
			<Search
				movies={movies.value}
				onClick={setCurrentMovie}
			/>
			<ModalComponent
				onClose={closeModal}
				currentMovie={currentMovie.value}
			/>
		</Container>
	)
}

export default Home
