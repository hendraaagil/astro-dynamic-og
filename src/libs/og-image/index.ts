import { Resvg } from '@resvg/resvg-js'
import siteImage from './templates/site'
import postImage from './templates/post'

const svgToPngBuffer = (svg: string) => {
	const resvg = new Resvg(svg)
	const pngData = resvg.render()
	return pngData.asPng()
}

export const generateSiteOgImage = async () => {
	const svg = await siteImage()
	return svgToPngBuffer(svg)
}

export const generatePostOgImage = async (title: string, image: string) => {
	const svg = await postImage(title, image)
	return svgToPngBuffer(svg)
}
