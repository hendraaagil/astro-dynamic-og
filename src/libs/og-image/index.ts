import { Resvg } from '@resvg/resvg-js'
import siteImage from './templates/site'

const svgToPngBuffer = (svg: string) => {
	const resvg = new Resvg(svg)
	const pngData = resvg.render()
	return pngData.asPng()
}

export const generateOgImage = async (title?: string) => {
	const svg = await siteImage(title)
	return svgToPngBuffer(svg)
}
