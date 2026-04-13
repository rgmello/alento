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
    // Traduzindo e retornando a mensagem de erro específica
    let translatedError = error.message
    if (error.message === 'Invalid login credentials') {
      translatedError = 'E-mail ou senha incorretos.'
    } else if (error.message === 'Email not confirmed') {
      translatedError = 'E-mail ainda não confirmado.'
    }
    
    redirect(`/login?error=${encodeURIComponent(translatedError)}`)
  }

  console.log(`[AUTH SUCCESS] Login bem-sucedido para: ${authData.user?.email} (ID: ${authData.user?.id})`)

  revalidatePath('/')
  redirect('/admin')
}
