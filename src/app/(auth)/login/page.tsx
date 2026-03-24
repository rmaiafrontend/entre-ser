'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { ESButton } from '@/components/ui/button'
import { TextInput } from '@/components/ui/text-input'
import { ESDivider } from '@/components/ui/divider'

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleLogin() {
    const newErrors: Record<string, string> = {}

    if (!email.trim()) {
      newErrors.email = 'Por favor, informe seu e-mail'
    }
    if (!senha.trim()) {
      newErrors.senha = 'Por favor, informe sua senha'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      router.push('/home')
    }
  }

  return (
    <Container size="sm" className="min-h-screen py-8">
      {/* Voltar */}
      <Link
        href="/landing"
        className="inline-flex items-center gap-1 text-sm text-plum/60 hover:text-mauve transition-colors"
      >
        &larr; Voltar
      </Link>

      {/* Logo */}
      <div className="mt-8 flex justify-center">
        <span className="font-display text-2xl text-plum">entre ser</span>
      </div>

      {/* Titulo */}
      <h1 className="mt-6 text-center font-display text-xl font-medium text-plum">
        Entrar
      </h1>

      {/* Formulario */}
      <div className="mt-8 flex flex-col gap-5">
        <TextInput
          label="E-mail"
          type="email"
          placeholder="maria@email.com"
          value={email}
          onChange={setEmail}
          isRequired
          errorMessage={errors.email}
        />

        <div className="flex flex-col gap-1.5">
          <TextInput
            label="Senha"
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={setSenha}
            isRequired
            errorMessage={errors.senha}
          />
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-mauve hover:underline transition-colors"
            >
              Esqueci minha senha
            </button>
          </div>
        </div>

        <div className="mt-2">
          <ESButton size="lg" fullWidth onPress={handleLogin}>
            Entrar
          </ESButton>
        </div>
      </div>

      {/* Divider com "ou" */}
      <div className="my-6 flex items-center gap-3">
        <ESDivider className="flex-1" />
        <span className="text-xs text-plum/40">ou</span>
        <ESDivider className="flex-1" />
      </div>

      {/* WhatsApp */}
      <ESButton
        variant="secondary"
        size="lg"
        fullWidth
        startContent={<WhatsAppIcon />}
      >
        Entrar com WhatsApp
      </ESButton>

      {/* Link cadastro */}
      <p className="mt-8 text-center text-sm text-plum/60">
        Ainda nao tenho conta &mdash;{' '}
        <Link href="/cadastro" className="font-medium text-mauve hover:underline">
          Criar conta
        </Link>
      </p>
    </Container>
  )
}
