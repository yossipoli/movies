import { Box, Container, Typography } from '@mui/material'
import Movies from './components/Movies'
import * as search from './actions/elasticsearch'
import ModalComponent from './components/Modal'
import { signal } from '@preact/signals-react'
import { Movie, MovieRespond } from './types/movie'
import SearchForm from './components/Search'

const Home = async () => {
	const movies = signal<MovieRespond[]>(await search.getAllMovies())

	const getFilteredMovies = async (
		title: string,
		genre: string[],
		startYear: string,
		endYear: string
	) => {
		'use server'
		movies.value = await search.searchFilteredMovies(
			title,
			genre,
			startYear,
			endYear
		)
	}

	const currentMovie = signal<Movie | null>(null)

	const setCurrentMovie = (movie: Movie) => {
		// 'use server'
		currentMovie.value = movie
	}

	const closeModal = () => {
		currentMovie.value = null
	}

	return (
		<Container>
			<Box>
				<SearchForm filterMovies={getFilteredMovies} />
			</Box>
			<Box>
				<Typography
					variant='h3'
					color='Highlight'>
					Movies
				</Typography>
			</Box>
			<Movies
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
