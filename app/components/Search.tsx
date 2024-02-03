'use client'

import {
	Container,
	FormControl,
	FormLabel,
	FormHelperText,
	TextField,
	Select,
	MenuItem,
	Box,
	InputLabel,
	SelectChangeEvent,
} from '@mui/material'
import { useEffect, useState } from 'react'

const genres = [
	'Action',
	'Comedy',
	'Drama',
	'Fantasy',
	'Horror',
	'Mystery',
	'Romance',
	'Thriller',
]

type SearchFormProps = {
	filterMovies: (
		title: string,
		genre: string[],
		startYear: string,
		endYear: string
	) => void
}
const SearchForm = ({ filterMovies }: SearchFormProps) => {
	const [title, setTitle] = useState<string>('')
	const [selectedGenre, setSelectedGenre] = useState<string[]>([])
	const [startYear, setStartYear] = useState<string>('')
	const [endYear, setEndYear] = useState<string>('')

	const handleGenreChange = (
		event: SelectChangeEvent<typeof selectedGenre>
	) => {
		const {
			target: { value },
		} = event
		setSelectedGenre(typeof value === 'string' ? value.split(',') : value)
	}

	useEffect(() => {
		if ((startYear && startYear.length < 4) || (endYear && endYear.length < 4))
			return
		filterMovies(title, selectedGenre, startYear, endYear)
	}, [title, selectedGenre, startYear, endYear])

	return (
		<Container
			sx={{
				display: 'flex',
				margin: 'auto',
				justifyContent: 'center',
			}}>
			<FormControl sx={{ width: '100%' }}>
				<FormLabel>Search</FormLabel>
				<Box sx={{ margin: '10px 0' }}>
					<TextField
						sx={{ width: '100%' }}
						label='Movie name'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</Box>
				<Box sx={{ width: '100%' }}>
					<Select
						label='genre'
						sx={{ width: '40%' }}
						multiple
						value={selectedGenre}
						onChange={handleGenreChange}>
						{genres.map((genre) => (
							<MenuItem
								key={genre}
								value={genre}>
								{genre}
							</MenuItem>
						))}
					</Select>
					<TextField
						sx={{ width: '30%' }}
						type='number'
						label='start year'
						value={startYear}
						onChange={(e) => setStartYear(e.target.value)}
					/>
					<TextField
						sx={{ width: '30%' }}
						type='number'
						label='end year'
						value={endYear}
						onChange={(e) => setEndYear(e.target.value)}
					/>
				</Box>
				<FormHelperText>Find movies by name, genre or year</FormHelperText>
			</FormControl>
		</Container>
	)
}

export default SearchForm
