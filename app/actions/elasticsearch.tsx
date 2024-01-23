import { Client } from '@elastic/elasticsearch'

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
