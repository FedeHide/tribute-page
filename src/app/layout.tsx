import type { Metadata } from 'next'
import '../scss/main.scss'

export const metadata: Metadata = {
	title: 'Bon Jovi - Tribute Page',
	description: 'This is a fake tibute website, a freecodecamp assignment',
	openGraph: {
		url: 'https://tribute-page.vercel.app/',
		type: 'website',
		title: 'Bon Jovi - Tribute Page',
		description: 'This is a fake tibute website, a freecodecamp assignment',
		images: ['https://i.postimg.cc/wjjW8xms/tribute-page-og.jpg'],
	},
	twitter: {
		card: 'summary_large_image',
		site: 'https://tribute-page.vercel.app/',
	},
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
