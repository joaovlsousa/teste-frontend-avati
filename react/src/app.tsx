import { Form } from './components/form'
import { Logo } from './components/logo'

export function App() {
  return (
    <main className="min-h-screen flex">
      <div className="hidden md:block w-[45%] min-h-screen bg-zinc-800 p-4">
        <Logo />
      </div>

      <div className="min-h-screen w-full relative md:w-[55%] flex items-center justify-center">
        <Logo className="absolute top-4 left-4 md:hidden" />
        <Form />
      </div>
    </main>
  )
}


