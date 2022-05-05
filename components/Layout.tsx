import { useEffect, useState, ReactNode } from 'react'
import { useRouter } from 'next/router'
import Nav from './Nav'
import { useUserStore } from '../libs/store'
import { useApi } from '../libs/api'
import { section as sectionStyle, main as mainStyle } from './Layout.css'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const [initialized, setInitialized] = useState(false)

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

    setInitialized(true)
  }, [])

  return (
    <main className={mainStyle}>
      {initialized && user && <Nav />}
      {initialized && <section className={sectionStyle}>{children}</section>}
    </main>
  )
}

export default Layout
