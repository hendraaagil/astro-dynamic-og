import { generateSiteOgImage } from '../libs/og-image'

export async function GET() {
	// const response = await fetch('https://hendraaagil.dev/og/main')
	const buffer = await generateSiteOgImage()

	return new Response(buffer, {
		headers: { 'Content-Type': 'image/png' },
	})
}
