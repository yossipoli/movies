import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'The Movies Hub',
	description: 'The Movies Hub',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Box>
					<AppBar
						position='fixed'
						color='primary'>
						<Toolbar>
							<Typography variant='h6'>The Movies Hub</Typography>
						</Toolbar>
					</AppBar>
				</Box>
				<Container sx={{ marginTop: '100px' }}>{children}</Container>
			</body>
		</html>
	)
}
