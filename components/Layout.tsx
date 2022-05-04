import { useEffect, ReactNode } from 'react'
import { useRouter } from 'next/router'
import Nav from './Nav'
import { useUserStore } from '../libs/store'
import { useApi } from '../libs/api'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const { user } = useUserStore()
  const router = useRouter()
  const api = useApi()

  useEffect(() => {
    if (!user) {
      api.get('/init').then(({ count }) => {
        if (count === 0) {
          if (router.pathname !== '/get-started') {
            router.push('/get-started')
          }
        } else if (router.pathname !== '/login') {
          router.push('/login')
        }
      })
    }
  }, [])

  return (
    <main>
      {user && <Nav />}
      {children}
    </main>
  )
}

export default Layout
