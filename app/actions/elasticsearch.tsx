import { Client } from '@elastic/elasticsearch'
import { Genre } from '../types/movie'

const esClient = new Client({
	node: 'http://localhost:9200',
	auth: {
		username: 'elastic',
		password: 'changeme',
	},
})

export const getAllMovies = async (
	index: string = 'movies',
	query?: string
): Promise<any[]> => {
	try {
		const results: any = await esClient.search({
			index,
			body: {
				query: {
					match_all: {},
				},
			},
		})

		return results.hits.hits
	} catch (error) {
		console.error('Error searching documents:', error)
		throw error
	}
}

export const getMoviesByTitle = async (
	title: string,
	index: string = 'movies',
	query?: string
): Promise<any[]> => {
	try {
		const results: any = await esClient.search({
			index,
			body: {
				query: {
					bool: {
						must: [
							{
								query_string: {
									default_field: 'Title',
									query: `${title}`,
								},
							},
						],
					},
				},
			},
		})

		return results.hits.hits
	} catch (error) {
		console.error('Error searching documents:', error)
		throw error
	}
}

export const getMoviesByGenre = async (
	genre: Genre | string,
	index: string = 'movies',
	query?: string
): Promise<any[]> => {
	try {
		const results: any = await esClient.search({
			index,
			body: {
				query: {
					bool: {
						must: [
							{
								query_string: {
									default_field: 'Genre',
									query: `${genre}`,
								},
							},
						],
					},
				},
			},
		})

		return results.hits.hits
	} catch (error) {
		console.error('Error searching documents:', error)
		throw error
	}
}

export const getMoviesBetweenYears = async (
	startYear: number,
	endYear: number,
	index: string = 'movies',
	query?: string
): Promise<any[]> => {
	try {
		const results: any = await esClient.search({
			index,
			body: {
				query: {
					bool: {
						must: [
							{
								range: {
									Release_Date: {
										gte: `${startYear}-01-01`,
										lte: `${endYear}-12-31`,
									},
								},
							},
						],
					},
				},
			},
		})

		return results.hits.hits
	} catch (error) {
		console.error('Error searching documents:', error)
		throw error
	}
}
