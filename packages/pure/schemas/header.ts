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
      { title: 'Blogs Cristianos ✟ ', link: '/blog' },
      { title: '📒 Blogs Facultad ', link: '/blog' },
      { title: 'Proyectos 💻', link: '/projects' },
      { title: 'Sobre Mi 👤', link: '/about' }
    ])
    .describe('The header menu items for your site.')
