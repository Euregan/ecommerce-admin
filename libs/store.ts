import create from 'zustand'
import { persist } from 'zustand/middleware'
import jwt from 'jsonwebtoken'
import { User } from '../types/User'

interface UserStore {
  user: User | null
  jwt: string | null
  setJwt: (token: string) => void
  disconnect: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      jwt: null,
      setJwt: (token: string) =>
        set({ jwt: token, user: jwt.decode(token) as User }),
      disconnect: () => set({ jwt: null, user: null }),
    }),
    {
      name: 'admin',
    }
  )
)
