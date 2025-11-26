import { z } from 'astro/zod'

export const HeaderMenuSchema = () =>
  z
    .array(
      z.object({
        title: z.string(),
        link: z.string()
      })
    )
    .default([
      { title: 'Blog', link: '/archives' },
      { title: 'Proyectos', link: '/proyectos' },
    ])
    .describe('The header menu items for your site.')
