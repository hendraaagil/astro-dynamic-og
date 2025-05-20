import type { APIRoute } from 'astro'
import { getCollection, type CollectionEntry } from 'astro:content'
import { generatePostOgImage } from '../../../libs/og-image'

export interface Props {
	post: CollectionEntry<'blog'>
}

export async function getStaticPaths() {
	const posts = await getCollection('blog')
	return posts.map((post) => ({
		params: { slug: post.slug },
		props: { post },
	}))
}

export const GET: APIRoute<Props> = async ({ props }) => {
	return new Response(await generatePostOgImage(props.post), {
		headers: { 'Content-Type': 'image/png' },
	})
}
