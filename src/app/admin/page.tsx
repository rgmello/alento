"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { createClient } from '../../lib/supabase/client'
import { deletePoem } from './actions'
import { Poem } from '../data/poems'

export default function AdminDashboard() {
  const [poems, setPoems] = useState<Poem[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      const supabase = createClient()
      const { data, error } = await supabase.from('poems').select('*').order('created_at', { ascending: false })
      if (error) setError(error.message)
      else setPoems(data as Poem[])
    }
    load()
  }, [])

  if (error) {
    return <p className="p-12 text-red-500">Erro ao carregar dados: {error}</p>
  }

  return (
    <div className="min-h-screen px-6 py-24 md:px-12 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-12 border-b border-foreground/10 pb-6">
        <h1 className="text-3xl text-foreground/90 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>Painel de Controle</h1>
        <Link href="/admin/new" className="px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity">
          Adicionar Novo
        </Link>
      </div>

      <div className="space-y-4">
        {poems.map((poem) => (
          <div key={poem.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-5 bg-foreground/5 rounded border border-foreground/5 gap-3">
            <div>
              <h2 className="text-lg md:text-xl text-foreground/80 mb-1" style={{ fontFamily: 'var(--font-serif)' }}>{poem.title}</h2>
              <p className="text-sm text-muted-foreground">{poem.author} {poem.year ? `· ${poem.year}` : ''}</p>
              <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full mt-2 inline-block text-foreground/70">
                {poem.type === 'chronicle' ? 'Crônica' : 'Poema'}
              </span>
            </div>
            
            <div className="flex gap-2 mt-3 md:mt-0">
              <Link href={`/admin/edit/${poem.id}`} className="text-sm px-3 py-1.5 md:px-4 md:py-2 border border-foreground/20 rounded hover:bg-foreground/10 transition-colors">
                Editar
              </Link>
              <form action={deletePoem}>
                <input type="hidden" name="id" value={poem.id} />
                <button type="submit" className="text-sm px-3 py-1.5 md:px-4 md:py-2 border border-red-500/50 text-red-500 rounded hover:bg-red-500/10 transition-colors" onClick={(e) => {
                  if (!window.confirm('Tem certeza que deseja excluir?')) e.preventDefault()
                }}>
                  Excluir
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
