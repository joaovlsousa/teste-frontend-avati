import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Por favor, insira um endereço de e-mail válido.'),
  password: z.string().min(6, 'Por favor, insira pelo menos 6 caracteres.')
})

export type LoginSchema = z.infer<typeof loginSchema>