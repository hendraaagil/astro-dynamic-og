---
title: 'Mastering Content Collections in Astro 2.0'
description: "Learn how to organize and query your content efficiently using Astro's powerful content collections feature."
pubDate: 2023-11-05
heroImage: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1200'
tags: ['astro', 'content collections', 'typescript', 'markdown']
---

# Mastering Content Collections in Astro 2.0

One of the most powerful features introduced in Astro 2.0 is Content Collections. This feature provides a type-safe way to organize and query your content, making it easier to build content-driven websites like blogs, documentation sites, and portfolios.

## What Are Content Collections?

Content Collections allow you to organize your Markdown, MDX, or other content files into directories with consistent schemas. This means you can:

- Group related content together
- Define and enforce a schema for each collection
- Query content with full TypeScript support
- Access content through a simple API

## Setting Up Content Collections

To start using Content Collections, create a `content` directory in your `src` folder. Inside this directory, you can create subdirectories for each collection:

```
src/
└── content/
    ├── blog/
    │   ├── post-1.md
    │   └── post-2.md
    └── authors/
        ├── author-1.md
        └── author-2.md
```

Next, create a `config.ts` file in the `content` directory to define your collection schemas:

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		updatedDate: z.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).default([]),
	}),
})

const authorsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		bio: z.string(),
		avatar: z.string().optional(),
	}),
})

export const collections = {
	blog: blogCollection,
	authors: authorsCollection,
}
```

## Querying Content Collections

Once your collections are set up, you can query them in your Astro components:

```astro
---
// src/pages/blog/index.astro
import { getCollection } from 'astro:content'

const blogPosts = await getCollection('blog')
const sortedPosts = blogPosts.sort(
	(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
)
---

<ul>
	{
		sortedPosts.map((post) => (
			<li>
				<a href={`/blog/${post.slug}`}>
					<h2>{post.data.title}</h2>
					<p>{post.data.description}</p>
				</a>
			</li>
		))
	}
</ul>
```

## Rendering Collection Entries

To render a collection entry, you need to:

1. Get the entry from the collection
2. Render the entry content

```astro
---
// src/pages/blog/[slug].astro
import { getCollection } from 'astro:content'
import BlogLayout from '../../layouts/BlogLayout.astro'

export async function getStaticPaths() {
	const blogEntries = await getCollection('blog')
	return blogEntries.map((entry) => ({
		params: { slug: entry.slug },
		props: { entry },
	}))
}

const { entry } = Astro.props
const { Content } = await entry.render()
---

<BlogLayout frontmatter={entry.data}>
	<Content />
</BlogLayout>
```

## Conclusion

Content Collections in Astro 2.0 provide a powerful, type-safe way to manage your content. By organizing your content into collections with defined schemas, you can build robust content-driven websites with confidence, knowing that your content structure is consistent and type-safe.
