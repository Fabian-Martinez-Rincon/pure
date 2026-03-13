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
      applyTip: z.array(
        z.object({
          name: z.string(),
          val: z.string()
        })
      ),
      cacheAvatar: z.boolean().optional().default(false)
    })
    .default({
      logbook: [],
      applyTip: [
        { name: 'Name', val: 'Astro Pure' },
        { name: 'Desc', val: 'Null' },
        { name: 'Link', val: 'https://fabianmartinezrincon.com/' },
        { name: 'Avatar', val: 'https://fabianmartinezrincon.com/favicon/favicon.ico' }
      ],
      cacheAvatar: false
    })
    .describe('Friend links for your website.')
