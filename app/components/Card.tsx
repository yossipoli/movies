import { Container, CardHeader, Avatar, IconButton } from '@mui/material'
import Image from 'next/image'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import { FC } from 'react'
import { Movie } from '../types/movie'

type CardProps = {
	movie: Movie
	onClick: (movie: Movie) => void
}

const Card: FC<CardProps> = ({ movie, onClick }) => {
	return (
		<Container sx={{ border: '1px solid grey', margin: '10px 0' }}>
			<CardHeader
				avatar={
					<Avatar>
						<Image
							width={50}
							height={50}
							src={movie.Poster_Url}
							alt={movie.Title}
							loading='lazy'
						/>
					</Avatar>
				}
				action={
					<IconButton aria-label='play'>
						<PlayCircleFilledIcon
						// onClick={() => onClick(movie)}
						/>
					</IconButton>
				}
				title={movie.Title}
				subheader={movie.Genre}
			/>
		</Container>
	)
}

export default Card
