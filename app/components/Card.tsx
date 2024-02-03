'use client'
import { Container, CardHeader, Avatar, IconButton } from '@mui/material'
import Image from 'next/image'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import { FC } from 'react'
import { Movie } from '../types/movie'

// import { currentMovie } from '../page'		//second way

type CardProps = {
	movie: Movie
	// onClick: (movie: Movie) => void //the way
}

//the way
// const Card: FC<CardProps> = ({ movie, onClick }) => {
//second way or checker
const Card: FC<CardProps> = ({ movie }) => {
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
							// onClick={() => onClick(movie)} //the way

							// onClick={() => {						//second way
							// 	currentMovie.value = movie
							// }}

							//check
							onClick={() => {
								console.log(`the movie "${movie.Title}" has selected \r`, movie)
							}}
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
