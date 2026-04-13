import { savePoem } from '../actions'

export default function NewPoemPage() {
  return (
    <div className="min-h-screen px-6 py-24 md:px-12 max-w-3xl mx-auto">
      <h1 className="text-3xl text-foreground/90 tracking-tight mb-8" style={{ fontFamily: 'var(--font-serif)' }}>Novo Texto</h1>
      
      <form action={savePoem} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-foreground/70 mb-2">Título</label>
            <input required name="title" className="w-full px-4 py-2 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-foreground/70 mb-2">Autor</label>
            <input required name="author" className="w-full px-4 py-2 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-foreground/70 mb-2">Ano (opcional)</label>
            <input name="year" className="w-full px-4 py-2 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-foreground/70 mb-2">Tipo</label>
            <select name="type" className="w-full px-4 py-2 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none text-foreground [&>option]:bg-background">
              <option value="poem">Poema</option>
              <option value="chronicle">Crônica</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-foreground/70 mb-2">Conteúdo</label>
          <textarea 
            required 
            name="content" 
            rows={15} 
            className="w-full px-4 py-3 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none resize-y"
            placeholder="Cole o texto aqui..."
          ></textarea>
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <a href="/admin" className="px-6 py-2 border border-foreground/20 rounded hover:bg-foreground/5 transition-colors">Cancelar</a>
          <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity">Salvar</button>
        </div>
      </form>
    </div>
  )
}
