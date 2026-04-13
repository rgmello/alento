import { savePoem } from '../../actions'
import { createClient } from '../../../../lib/supabase/server'
import { notFound } from 'next/navigation'

export default async function EditPoemPage({ params }: { params: { id: string } }) {
  const supabase = createClient()
  const { data: poem } = await supabase.from('poems').select('*').eq('id', params.id).single()

  if (!poem) {
    notFound()
  }

  return (
    <div className="min-h-screen px-6 py-24 md:px-12 max-w-3xl mx-auto">
      <h1 className="text-3xl text-foreground/90 tracking-tight mb-8" style={{ fontFamily: 'var(--font-serif)' }}>Editar Texto</h1>
      
      <form action={savePoem} className="space-y-6">
        <input type="hidden" name="id" value={poem.id} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-foreground/70 mb-2">Título</label>
            <input defaultValue={poem.title} required name="title" className="w-full px-4 py-2 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-foreground/70 mb-2">Autor</label>
            <input defaultValue={poem.author} required name="author" className="w-full px-4 py-2 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-foreground/70 mb-2">Ano (opcional)</label>
            <input defaultValue={poem.year || ''} name="year" className="w-full px-4 py-2 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-foreground/70 mb-2">Tipo</label>
            <select defaultValue={poem.type || 'poem'} name="type" className="w-full px-4 py-2 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none text-foreground [&>option]:bg-background">
              <option value="poem">Poema</option>
              <option value="chronicle">Crônica</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-foreground/70 mb-2">Conteúdo</label>
          <textarea 
            defaultValue={poem.content}
            required 
            name="content" 
            rows={15} 
            className="w-full px-4 py-3 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none resize-y"
          ></textarea>
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <a href="/admin" className="px-6 py-2 border border-foreground/20 rounded hover:bg-foreground/5 transition-colors">Cancelar</a>
          <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity">Salvar Alterações</button>
        </div>
      </form>
    </div>
  )
}
