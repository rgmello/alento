import { login } from './actions'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <form className="max-w-md w-full space-y-6 bg-foreground/5 p-8 rounded-xl border border-foreground/10">
        <h1 className="text-3xl text-foreground/90 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>Login</h1>
        <p className="text-muted-foreground text-sm">Entre com suas credenciais de administrador.</p>
        
        {searchParams?.error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm px-4 py-3 rounded">
            {searchParams.error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-foreground/70 mb-1" htmlFor="email">E-mail</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="w-full px-4 py-2 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none text-foreground"
            />
          </div>
          <div>
            <label className="block text-sm text-foreground/70 mb-1" htmlFor="password">Senha</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              className="w-full px-4 py-2 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none text-foreground"
            />
          </div>
        </div>

        <button 
          formAction={login} 
          className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
