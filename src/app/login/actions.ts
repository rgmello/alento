'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../lib/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()
  
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  
  console.log(`[AUTH LOG] Tentativa de login iniciada para o e-mail: ${email}`)

  const data = {
    email,
    password,
  }

  const { data: authData, error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.error(`[AUTH ERROR] Falha no login para ${email}:`, error.message, error.status, error.name)
    // Retornamos a mensagem de erro específica do Supabase para ajudar no debug
    redirect(`/login?error=${encodeURIComponent(error.message || 'Falha no login')}`)
  }

  console.log(`[AUTH SUCCESS] Login bem-sucedido para: ${authData.user?.email} (ID: ${authData.user?.id})`)

  revalidatePath('/')
  redirect('/admin')
}
