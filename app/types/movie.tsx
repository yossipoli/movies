export type Genre =
	| 'Action'
	| 'Comedy'
	| 'Drama'
	| 'Fantasy'
	| 'Horror'
	| 'Mystery'
	| 'Romance'
	| 'Thriller'

export type Movie = {
	Timestamp?: string
	Original_Language?: string
	Release_Date?: string
	Popularity?: number
	Poster_Url: string
	Title: string
	Overview?: string
	Vote_Average?: number
	Genre: string
	Vote_Count?: number
}
