import { z } from 'astro/zod'

export const shareList = [''] as const

export const ShareSchema = () =>
  z
    .array(z.enum(shareList))
    .describe('Options for sharing content on social media platforms.')
