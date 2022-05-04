import { useState, SyntheticEvent } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useApi } from '../libs/api'
import Layout from '../components/Layout'
import Card from '../components/Card'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import Submit from '../components/Submit'

const Login: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const api = useApi()
  const router = useRouter()

  const submit = (event: SyntheticEvent) => {
    event.preventDefault()

    api
      .post('/auth', { email, password })
      .then(() => router.push('/'))
      .catch((error: any) => {
        console.error(error)
      })
  }

  return (
    <Layout>
      <Card>
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

export default Login
