import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { apiUsers } from '../lib/axios'

interface User {
  name: string
  company: string
  login: string
  avatar_url: string
  html_url: string
  bio: string
  followers: number
}

interface BlogContexType {
  user: User | null
}

export const BlogContext = createContext({} as BlogContexType)

interface BlogProviderProps {
  children: ReactNode
}

export function BlogContextProvider({ children }: BlogProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  const fetchUser = useCallback(async (username?: string) => {
    const { data } = await apiUsers.get(`/${username}`)
    setUser({
      avatar_url: data.avatar_url,
      bio: data.bio,
      name: data.name,
      company: data.company,
      login: data.login,
      followers: data.followers,
      html_url: data.html_url,
    })
  }, [])

  useEffect(() => {
    fetchUser('lucas-araujo15')
  }, [fetchUser])

  return (
    <BlogContext.Provider value={{ user }}>{children}</BlogContext.Provider>
  )
}
