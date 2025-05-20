---
title: 'Creating Dynamic OG Images with Astro and Satori'
description: 'Learn how to generate dynamic Open Graph images for your Astro blog posts using Satori and optimize social media sharing.'
pubDate: 2023-10-20
heroImage: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=1200'
tags: ['astro', 'satori', 'open graph', 'seo']
---

# Creating Dynamic OG Images with Astro and Satori

Social media sharing is a crucial part of content distribution strategy. When someone shares your content on platforms like Twitter, Facebook, or LinkedIn, an appealing preview image can significantly increase click-through rates. This is where Open Graph (OG) images come into play.

## Why Dynamic OG Images Matter

Static OG images are fine for general website pages, but for content-heavy sites like blogs, you'll want dynamic OG images that:

- Display the title of each specific article
- Maintain brand consistency
- Include relevant visual elements
- Stand out in crowded social media feeds

## Setting Up Satori with Astro

[Satori](https://github.com/vercel/satori) is a library from Vercel that converts HTML and CSS into SVG, making it perfect for generating OG images. Here's how to set it up with Astro:

1. First, install the necessary dependencies:

```bash
npm install satori sharp
```

2. Create a template for your OG images:

```typescript
// src/libs/og-image/templates/post.ts
import satori from 'satori'
import config from '../config'

export default async (title: string, image: string) =>
	satori(
		{
			type: 'div',
			props: {
				style: {
					display: 'flex',
					width: '100%',
					height: '100%',
					backgroundImage: `url(${image})`,
					backgroundSize: 'cover',
				},
				children: {
					// Your OG image template structure
				},
			},
		},
		config,
	)
```

3. Create an API endpoint in Astro to generate the images on demand:

```typescript
// src/pages/api/og/[slug].png.ts
import { getCollection } from 'astro:content'
import { generateOgImage } from '../../../libs/og-image'

export async function get({ params }) {
	const { slug } = params
	const posts = await getCollection('blog')
	const post = posts.find((post) => post.slug === slug)

	if (!post) {
		return new Response('Not found', { status: 404 })
	}

	const ogImage = await generateOgImage({
		title: post.data.title,
		image: post.data.heroImage,
	})

	return new Response(ogImage, {
		headers: {
			'Content-Type': 'image/png',
		},
	})
}
```

## Integrating with Your Blog Posts

Finally, add the OG meta tags to your blog post template:

```astro
---
// src/layouts/BlogPost.astro
const { title, slug } = Astro.props
const ogImageUrl = `/api/og/${slug}.png`
---

<head>
	<!-- Other meta tags -->
	<meta property="og:image" content={ogImageUrl} />
	<meta name="twitter:image" content={ogImageUrl} />
	<meta name="twitter:card" content="summary_large_image" />
</head>
```

## Conclusion

Dynamic OG images can significantly improve the visibility and appeal of your content when shared on social media. With Astro and Satori, you can easily generate custom OG images for each blog post, enhancing your content's reach and engagement.
