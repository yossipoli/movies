import { Box, Card, Modal, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import { FC } from 'react'
import { Movie } from '../types/movie'

type ModalComponentProps = {
	currentMovie: Movie | null
	onClose: () => void
}

const ModalComponent: FC<ModalComponentProps> = ({ currentMovie, onClose }) => {
	return (
		<>
			{currentMovie ? (
				<Modal
					open={Boolean(currentMovie)}
					onClose={onClose}
					aria-labelledby={currentMovie.Title}
					aria-describedby={currentMovie.Genre}>
					<Box>
						<Card>
							<CardMedia
								title={currentMovie.Title}
								image={currentMovie.Poster_Url}
							/>
						</Card>
						<Typography
							id='modal-modal-title'
							variant='h6'
							component='h2'>
							{currentMovie.Genre}
						</Typography>
						<Typography
							id='modal-modal-description'
							sx={{ mt: 2 }}>
							{currentMovie.Overview}
						</Typography>
					</Box>
				</Modal>
			) : null}
		</>
	)
}

export default ModalComponent
