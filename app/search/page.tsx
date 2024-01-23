import { FC } from 'react'
import Card from '../components/Card'
import { Movie } from '../types/movie'
import Each from '../components/Each'

type SearchProps = {
	movies: any
	onClick: (movie: Movie) => void
}

const Search: FC<SearchProps> = ({ movies, onClick }) => {
	return (
		<>
			{
				<Each
					of={movies}
					render={(movie) => (
						<Card
							key={movie._id}
							movie={movie._source}
							onClick={onClick}
						/>
					)}
				/>
			}
		</>
	)
}

export default Search
