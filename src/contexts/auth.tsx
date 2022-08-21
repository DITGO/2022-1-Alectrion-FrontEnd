import { createContext, ReactNode, useState, useEffect } from 'react'
import api from '../api/config'

// tipagem
type UserProps = {
  name: string
  email: string
  expireIn: string
  token: string
}

type SignInProps = {
  username: string
  password: string
}

type AuthContextData = {
  user?: UserProps
  isAuthenticated: boolean
  Login: (credentials: SignInProps) => Promise<void>
  Logout(): void
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user // boolean

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user')
    const storagedToken = sessionStorage.getItem('@App:token')

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser))
      api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`
    }
  }, [])

  async function Login({ username, password }: SignInProps) {
    const response = await api.post('/login', {
      username,
      password
    })

    setUser(response.data.user)

    sessionStorage.setItem('@App:user', JSON.stringify(response.data.user))
    sessionStorage.setItem('@App:token', response.data.token)

    api.defaults.headers.common.Authorization = 'Bearer ' + response.data.token
  }

  function Logout() {
    setUser(undefined)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  )
}
