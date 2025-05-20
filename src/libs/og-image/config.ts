import type { SatoriOptions } from 'satori'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const createConfig = async (): Promise<SatoriOptions> => {
	const [gabaritoRegular, gabaritoBold] = await Promise.all([
		readFile(
			join(process.cwd(), 'src/libs/og-image', './fonts/Gabarito-Regular.ttf'),
		),
		readFile(
			join(process.cwd(), 'src/libs/og-image', './fonts/Gabarito-Bold.ttf'),
		),
	])

	return {
		width: 1200,
		height: 630,
		fonts: [
			{
				data: gabaritoRegular,
				name: 'Gabarito',
				weight: 400,
			},
			{
				data: gabaritoBold,
				name: 'Gabarito',
				weight: 700,
			},
		],
	}
}

export default await createConfig()
