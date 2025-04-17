import { z } from 'astro/zod'

export const shareList = ['youtube', 'github'] as const

export const ShareSchema = () =>
  z
    .array(z.enum(shareList))
    .default(['youtube', 'github'])
    .describe('Options for sharing content on social media platforms.')
