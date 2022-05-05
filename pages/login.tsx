import { useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useApi } from '../libs/api'
import Layout from '../components/Layout'
import Card from '../components/Card'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import Submit from '../components/Submit'
import Form from '../components/Form'

const Login: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const api = useApi()
  const router = useRouter()

  const submit = () =>
    api
      .post('/auth', { email, password })
      .then(() => router.push('/'))
      .catch((error: any) => {
        console.error(error)
      })

  return (
    <Layout>
      <Card>
        <Form onSubmit={submit}>
          <EmailInput label="Email" value={email} onChange={setEmail} />
          <PasswordInput
            label="Mot de passe"
            value={password}
            onChange={setPassword}
          />
          <Submit label="Se connecter" />
        </Form>
      </Card>
    </Layout>
  )
}

export default Login
