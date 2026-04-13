import { savePoem } from '../actions'
import { PoemForm } from '../components/PoemForm'

export default function NewPoemPage() {
  return (
    <div className="min-h-screen px-6 py-24 md:px-12 max-w-3xl mx-auto">
      <h1 className="text-3xl text-foreground/90 tracking-tight mb-8" style={{ fontFamily: 'var(--font-serif)' }}>Novo Texto</h1>
      <PoemForm action={savePoem} />
    </div>
  )
}
