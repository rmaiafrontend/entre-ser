'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { ESButton } from '@/components/ui/button'
import { TextInput } from '@/components/ui/text-input'
import { PhaseSelector } from '@/components/ui/phase-selector'
import { CheckboxInput } from '@/components/ui/checkbox-input'
import { SectionHeader } from '@/components/ui/section-header'
import { type Phase } from '@/types'

export default function CadastroPage() {
  const router = useRouter()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [fase, setFase] = useState<Phase | undefined>(undefined)
  const [aceitaTermos, setAceitaTermos] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleSubmit() {
    const newErrors: Record<string, string> = {}

    if (!nome.trim()) {
      newErrors.nome = 'Por favor, informe seu nome'
    }
    if (!email.trim()) {
      newErrors.email = 'Por favor, informe seu e-mail'
    }
    if (!senha.trim()) {
      newErrors.senha = 'Por favor, crie uma senha'
    }
    if (!confirmarSenha.trim()) {
      newErrors.confirmarSenha = 'Por favor, confirme sua senha'
    } else if (senha !== confirmarSenha) {
      newErrors.confirmarSenha = 'As senhas nao coincidem'
    }
    if (!aceitaTermos) {
      newErrors.termos = 'Voce precisa aceitar os termos para continuar'
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
        Criar minha conta
      </h1>

      {/* Formulario */}
      <div className="mt-8 flex flex-col gap-5">
        <TextInput
          label="Nome completo"
          placeholder="Maria da Silva"
          value={nome}
          onChange={setNome}
          isRequired
          errorMessage={errors.nome}
        />

        <TextInput
          label="E-mail"
          type="email"
          placeholder="maria@email.com"
          value={email}
          onChange={setEmail}
          isRequired
          errorMessage={errors.email}
        />

        <TextInput
          label="Senha"
          type="password"
          placeholder="Minimo 8 caracteres"
          value={senha}
          onChange={setSenha}
          isRequired
          errorMessage={errors.senha}
        />

        <TextInput
          label="Confirmar senha"
          type="password"
          placeholder="Repita sua senha"
          value={confirmarSenha}
          onChange={setConfirmarSenha}
          isRequired
          errorMessage={errors.confirmarSenha}
        />

        <div className="mt-2">
          <SectionHeader eyebrow="Sua fase" title="" />
          <PhaseSelector
            value={fase}
            onChange={setFase}
            className="mt-3"
          />
        </div>

        <div className="mt-2 flex flex-col gap-1">
          <CheckboxInput
            label="Aceito os Termos de Uso e Politica de Privacidade"
            isSelected={aceitaTermos}
            onChange={setAceitaTermos}
          />
          {errors.termos && (
            <span className="text-xs text-red-alert">{errors.termos}</span>
          )}
        </div>

        <div className="mt-4">
          <ESButton size="lg" fullWidth onPress={handleSubmit}>
            Criar minha conta
          </ESButton>
        </div>
      </div>

      {/* Link login */}
      <p className="mt-8 text-center text-sm text-plum/60">
        Ja tenho conta &mdash;{' '}
        <Link href="/login" className="font-medium text-mauve hover:underline">
          Entrar
        </Link>
      </p>
    </Container>
  )
}
