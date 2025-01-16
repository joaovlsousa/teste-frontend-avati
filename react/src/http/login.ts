import { LoginSchema } from '@/schemas/login-schema'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function login(data: LoginSchema) {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const message: string = 'Login efetuado com sucesso!'
  const success: boolean = true

  return {
    message,
    success
  }
}