import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { apiSearch, apiUsers } from '../lib/axios'

interface User {
  name: string
  company: string
  login: string
  avatar_url: string
  html_url: string
  bio: string
  followers: number
}

export interface Issue {
  id: number
  html_url: string
  title: string
  createdAt: string
  body: string
  comments: number
}

interface BlogContexType {
  issues: Issue[]
  user: User | null
  searchIssues: (text?: string) => void
}

export const BlogContext = createContext({} as BlogContexType)

interface BlogProviderProps {
  children: ReactNode
}

export function BlogContextProvider({ children }: BlogProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])

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

  const searchIssues = useCallback(async (text?: string) => {
    const { data } = await apiSearch.get('', {
      params: {
        q: `${text}/repo:lucas-araujo15/github_blog`,
      },
    })

    console.log(data)

    const newIssuesList = data.items.map((item: any) => {
      const issue: Issue = {
        id: item.id,
        title: item.title,
        body: item.body,
        comments: item.comments,
        createdAt: item.created_at,
        html_url: item.html_url,
      }

      return issue
    })

    console.log(newIssuesList)
    setIssues(newIssuesList)
  }, [])

  useEffect(() => {
    fetchUser('lucas-araujo15')
  }, [fetchUser])

  useEffect(() => {
    searchIssues('teste')
  }, [searchIssues])

  return (
    <BlogContext.Provider value={{ user, issues, searchIssues }}>
      {children}
    </BlogContext.Provider>
  )
}
