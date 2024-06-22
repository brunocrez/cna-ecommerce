import { LoggedUserType } from '@/interfaces/User'
import { ReactNode, createContext, useContext, useState } from 'react'

interface IAuthContextProps {
  user: LoggedUserType
}

const AuthContext = createContext({} as IAuthContextProps)

interface IAuthProviderProps {
  children: ReactNode
}

const loggedUser = {
  name: 'Ivan Barreto',
  email: 'ivanbarreto@email.com',
  userId: '0f6dfca3-5385-4449-b476-41d84a17bd3a',
}

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, _] = useState<LoggedUserType>(loggedUser)

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)

  if (!Object.entries(ctx).length) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return ctx
}
