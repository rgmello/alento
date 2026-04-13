'use client'

import { useState } from 'react'

export function PoemForm({
  action,
  poem,
}: {
  action: (formData: FormData) => Promise<void>
  poem?: {
    id: string
    title: string
    author: string
    year?: string | null
    type?: string
    content: string
  }
}) {
  const [pending, setPending] = useState(false)

  return (
    <form
      className="space-y-6"
      action={async (formData: FormData) => {
        setPending(true)
        try {
          await action(formData)
        } finally {
          setPending(false)
        }
      }}
    >
      {poem?.id && <input type="hidden" name="id" value={poem.id} />}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-foreground/70 mb-2">Título</label>
          <input defaultValue={poem?.title} required name="title" className="w-full px-4 py-2 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none text-foreground" />
        </div>
        <div>
          <label className="block text-sm text-foreground/70 mb-2">Autor</label>
          <input defaultValue={poem?.author} required name="author" className="w-full px-4 py-2 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none text-foreground" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-foreground/70 mb-2">Ano (opcional)</label>
          <input defaultValue={poem?.year || ''} name="year" className="w-full px-4 py-2 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none text-foreground" />
        </div>
        <div>
          <label className="block text-sm text-foreground/70 mb-2">Tipo</label>
          <select defaultValue={poem?.type || 'poem'} name="type" className="w-full px-4 py-2 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none text-foreground [&>option]:bg-background">
            <option value="poem">Poema</option>
            <option value="chronicle">Crônica</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm text-foreground/70 mb-2">Conteúdo</label>
        <textarea 
          defaultValue={poem?.content}
          required 
          name="content" 
          rows={15} 
          className="w-full px-4 py-3 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none resize-y text-foreground"
          placeholder="Cole o texto aqui..."
        ></textarea>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <a href="/admin" className="px-6 py-2 border border-foreground/20 rounded hover:bg-foreground/5 transition-colors">Cancelar</a>
        <button 
          type="submit" 
          disabled={pending}
          className="px-6 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {pending ? 'Salvando...' : (poem ? 'Salvar Alterações' : 'Salvar')}
        </button>
      </div>
    </form>
  )
}
