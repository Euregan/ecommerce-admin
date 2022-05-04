import { useState, SyntheticEvent } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useApi } from '../libs/api'
import Layout from '../components/Layout'
import Card from '../components/Card'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import Submit from '../components/Submit'

const GetStarted: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const api = useApi()
  const router = useRouter()

  const submit = (event: SyntheticEvent) => {
    event.preventDefault()

    api
      .post('/init', { email, password })
      .then(() => router.push('/'))
      .catch((error: any) => {
        console.error(error)
      })
  }

  return (
    <Layout>
      <Card>
        <h2>Bonjour!</h2>
        <p>Il semblerait que ce soit la première fois que vous venez ici</p>
        <p>
          Nous allons donc commencer par vous créer un compte administrateur
        </p>
        <p>Veuillez renseigner vos informations:</p>

        <form onSubmit={submit}>
          <EmailInput label="Email" value={email} onChange={setEmail} />
          <PasswordInput
            label="Mot de passe"
            value={password}
            onChange={setPassword}
          />
          <Submit label="Se connecter" />
        </form>
      </Card>
    </Layout>
  )
}

export default GetStarted
