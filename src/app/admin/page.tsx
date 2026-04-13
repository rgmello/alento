"use client"

import Link from 'next/link'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { createClient } from '../../lib/supabase/client'
import { deletePoem } from './actions'
import { Poem } from '../data/poems'
import { Search, CheckCircle2, XCircle } from 'lucide-react'

function AdminContent() {
  const [poems, setPoems] = useState<Poem[]>([])
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [toast, setToast] = useState<{ msg: string, type: 'success' | 'error' } | null>(null)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  const searchParams = useSearchParams()
  const router = useRouter()

  const showToast = (msg: string, type: 'success' | 'error') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 4000)
  }

  // Verifica as mensagens de sucesso/erro via Query Params da URL (vindo da ação de salvar)
  useEffect(() => {
    const success = searchParams.get('success')
    const paramError = searchParams.get('error')
    
    if (success === 'saved') {
      showToast('Texto salvo com sucesso!', 'success')
      router.replace('/admin') // Limpa a URL
    } else if (paramError) {
      showToast(`Erro: ${paramError}`, 'error')
      router.replace('/admin')
    }
  }, [searchParams, router])

  // Carrega a lista do banco ao abrir a página
  useEffect(() => {
    async function load() {
      const supabase = createClient()
      const { data, error } = await supabase.from('poems').select('*').order('created_at', { ascending: false })
      if (error) setError(error.message)
      else setPoems(data as Poem[])
    }
    load()
  }, [])

  const handleDelete = async (id: string) => {
    if (!window.confirm('Tem certeza que deseja excluir? Esta ação é irreversível.')) return
    
    setIsDeleting(id)
    try {
      const fd = new FormData()
      fd.append('id', id)
      await deletePoem(fd)
      
      // Atualiza a lista localmente sem precisar dar reload
      setPoems((prev) => prev.filter(p => p.id !== id))
      showToast('Texto excluído com sucesso!', 'success')
    } catch (err: any) {
      showToast('Erro ao excluir: ' + (err.message || 'Falha na conexão'), 'error')
    } finally {
      setIsDeleting(null)
    }
  }

  // Filtra baseando no título, autor ou trechos de conteúdo
  const filteredPoems = poems.filter((p) => {
    const term = search.toLowerCase()
    return (
      p.title.toLowerCase().includes(term) ||
      p.author.toLowerCase().includes(term) ||
      (p.content && p.content.toLowerCase().includes(term))
    )
  })

  if (error) {
    return <p className="p-12 text-red-500">Erro ao carregar dados: {error}</p>
  }

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-8 right-8 z-50 flex items-center gap-3 px-6 py-4 rounded shadow-xl border backdrop-blur-sm animate-in slide-in-from-top-4 fade-in duration-300 ${
          toast.type === 'success' 
            ? 'bg-green-500/10 border-green-500/20 text-green-500' 
            : 'bg-red-500/10 border-red-500/20 text-red-500'
        }`}>
          {toast.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
          <span className="font-medium text-sm">{toast.msg}</span>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 border-b border-foreground/10 pb-6 gap-4">
        <h1 className="text-3xl text-foreground/90 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>Painel de Controle</h1>
        <Link href="/admin/new" className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
          Adicionar Novo
        </Link>
      </div>

      <div className="mb-8 relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-foreground/40" />
        </div>
        <input
          type="text"
          placeholder="Buscar por título, autor ou conteúdo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-transparent border border-foreground/20 rounded focus:border-foreground/40 outline-none text-foreground placeholder:text-foreground/40 transition-all"
        />
      </div>

      <div className="space-y-4">
        {filteredPoems.length === 0 ? (
          <p className="text-muted-foreground text-center py-12 bg-foreground/5 rounded border border-foreground/5 border-dashed">
            Nenhum texto encontrado.
          </p>
        ) : (
          filteredPoems.map((poem) => (
            <div key={poem.id} className={`flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-5 bg-foreground/5 rounded border border-foreground/5 gap-3 transition-opacity ${isDeleting === poem.id ? 'opacity-50 pointer-events-none' : ''}`}>
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
                <button 
                  onClick={() => handleDelete(poem.id)}
                  disabled={isDeleting === poem.id}
                  className="text-sm px-3 py-1.5 md:px-4 md:py-2 border border-red-500/30 text-red-500 rounded hover:bg-red-500/10 transition-colors disabled:opacity-50"
                >
                  {isDeleting === poem.id ? 'Excluindo...' : 'Excluir'}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen px-6 py-24 md:px-12 max-w-5xl mx-auto">
      <Suspense fallback={<div className="min-h-screen" />}>
        <AdminContent />
      </Suspense>
    </div>
  )
}