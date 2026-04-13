import { savePoem } from '../../actions'
import { createClient } from '../../../../lib/supabase/server'
import { notFound } from 'next/navigation'
import { PoemForm } from '../../components/PoemForm'

export default async function EditPoemPage({ params }: { params: { id: string } }) {
  const supabase = createClient()
  const { data: poem } = await supabase.from('poems').select('*').eq('id', params.id).single()

  if (!poem) {
    notFound()
  }

  return (
    <div className="min-h-screen px-6 py-24 md:px-12 max-w-3xl mx-auto">
      <h1 className="text-3xl text-foreground/90 tracking-tight mb-8" style={{ fontFamily: 'var(--font-serif)' }}>Editar Texto</h1>
      <PoemForm action={savePoem} poem={poem} />
    </div>
  )
}
