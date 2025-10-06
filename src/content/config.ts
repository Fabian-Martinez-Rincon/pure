import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

/**
 * Normaliza tags a minúsculas y elimina duplicados.
 */
function removeDupsAndLowerCase(array: string[]) {
  if (!array || !array.length) return []
  const lowercaseItems = array.map((str) => str.toLowerCase().trim())
  return Array.from(new Set(lowercaseItems))
}

/**
 * Colección principal del blog.
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60),
      description: z.string().max(160),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z
        .object({
          src: image(),
          alt: z.string().optional(),
          color: z.string().optional(),
        })
        .optional(),
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
      language: z.string().optional(),
      draft: z.boolean().default(false),
      comment: z.boolean().default(true),
    }),
})

/**
 * Colección adicional para las publicaciones cristianas.
 */
const blogs_cristianos = defineCollection({
  loader: glob({ base: './src/content/blogs_cristianos', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60),
      description: z.string().max(160),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z
        .object({
          src: image(),
          alt: z.string().optional(),
          color: z.string().optional(),
        })
        .optional(),
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
      language: z.string().optional(),
      draft: z.boolean().default(false),
      comment: z.boolean().default(true),
    }),
})

/**
 * Exporta todas las colecciones que Astro debe registrar.
 */
export const collections = { blog, blogs_cristianos }
