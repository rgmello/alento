'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../lib/supabase/server'

export async function deletePoem(formData: FormData) {
  const id = formData.get('id') as string
  if (!id) return

  const supabase = createClient()
  const { error } = await supabase.from('poems').delete().eq('id', id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath('/')
  revalidatePath('/authors')
  revalidatePath('/search')
  revalidatePath('/admin')
}

export async function savePoem(formData: FormData) {
  const supabase = createClient()
  
  const id = formData.get('id') as string | null
  
  const data = {
    title: formData.get('title') as string,
    author: formData.get('author') as string,
    content: formData.get('content') as string,
    year: formData.get('year') as string || null,
    type: formData.get('type') as string || 'poem',
  }

  let dbError = null

  if (id) {
    const { error } = await supabase.from('poems').update(data).eq('id', id)
    dbError = error
  } else {
    const { error } = await supabase.from('poems').insert([data])
    dbError = error
  }

  if (dbError) {
    redirect(`/admin?error=${encodeURIComponent(dbError.message)}`)
  }

  revalidatePath('/')
  revalidatePath('/authors')
  revalidatePath('/search')
  revalidatePath('/admin')
  
  redirect('/admin?success=saved')
}
