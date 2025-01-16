import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { login } from '@/http/login'
import { loginSchema, LoginSchema } from '@/schemas/login-schema'

import { Loader2 } from 'lucide-react'
import { Button } from './button'
import { Input } from './input'

export function Form() {
  const { 
    handleSubmit,
    register,
    reset,
    formState: {
      isSubmitting,
      errors
    }
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  async function handleLogin(data: LoginSchema) {
    const { message, success } = await login(data)

    if (!success) {
      toast.error(message)
      return
    }

    toast.success(message)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleLogin)} 
      className="w-[90%] md:w-[50%] space-y-8 flex flex-col items-center justify-center"
    >
      <h1 className="text-3xl font-bold">Login</h1>

      <Input 
        id="email"
        label="E-mail"
        disabled={isSubmitting}
        error={errors.email?.message}
        {...register('email')}
      />

      <Input
        id="password"
        type="password"
        label="Senha"
        disabled={isSubmitting}
        error={errors.password?.message}
        {...register('password')}
      />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <div className="flex items-center gap-x-2">
            <Loader2 className="size-4 animate-spin" />
            <span>Entrando</span>
          </div>
        ) : 'Entrar'}
      </Button>
    </form>
  )
}