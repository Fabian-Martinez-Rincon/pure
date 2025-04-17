import { z } from 'astro/zod'

export const shareList = ['linkedIn'] as const

export const ShareSchema = () =>
  z
    .array(z.enum(shareList))
    .default(['linkedIn'])
    .describe('Opciones para compartir contenido en plataformas de redes sociales.')
