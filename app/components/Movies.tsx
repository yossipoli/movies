import { FC } from 'react'
import Card from './Card'
import { Movie, MovieRespond } from '../types/movie'
import Each from './Each'

type SearchProps = {
	movies: MovieRespond[]
	onClick: (movie: Movie) => void
}

const Movies: FC<SearchProps> = ({ movies, onClick }) => {
	return (
		<>
			{
				<Each
					of={movies}
					render={(movie) => (
						<Card
							key={movie._id}
							movie={movie._source}
							// onClick={onClick}
						/>
					)}
				/>
			}
		</>
	)
}

export default Movies
