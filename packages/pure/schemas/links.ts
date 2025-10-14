import { z } from 'astro/zod'

export const FriendLinksSchema = () =>
  z
    .object({
      logbook: z.array(
        z.object({
          date: z.string(),
          content: z.string()
        })
      ),
      applyTip: z.object({
        name: z.string(),
        desc: z.string(),
        url: z.string(),
        avatar: z.string()
      })
    })
    .default({
      logbook: [],
      applyTip: {
        name: 'Astro Pure',
        desc: 'Portfolio con blogs y proyectos',
        url: 'https://astro-pure.js.org',
        avatar: 'https://astro-pure.js.org/favicon/f.svg'
      }
    })
    .describe('Friend links for your website.')
