import { PropsWithChildren, createContext, useEffect, useState } from 'react'
import { IAuthContext } from './type'
import { onAuthStateChanged, User } from 'firebase/auth'
import Loader from '../../components/Loader/Loader'
import { auth } from '../../service/firebase'

export const AuthContext = createContext<IAuthContext | null>(null)

type Props = PropsWithChildren
export default function AuthProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const authorised = (status: boolean) => {
    setIsAuthenticated(status)
  }

  const loading = (status: boolean) => {
    setIsLoading(status)
  }

  const logout = () => {
    authorised(false)
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, authorised, loading, logout, user }}
    >
      {children}
      <Loader isLoading={isLoading} />
    </AuthContext.Provider>
  )
}
