import { useContext } from 'react'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, PostList, PostListContent } from './styles'
import { BlogContext } from '../../contexts/BlogContext'

export function Blog() {
  const { issues } = useContext(BlogContext)

  return (
    <BlogContainer>
      <Profile />
      <PostList>
        <div>
          <div>
            <h2>Publicações</h2>
            <span>{issues.length} publicações</span>
          </div>
          <SearchForm />
        </div>
        <PostListContent>
          {issues.map((issue) => {
            return (
              <PostCard
                body={issue.body}
                createdAt={issue.createdAt}
                title={issue.title}
                key={issue.id}
              />
            )
          })}
        </PostListContent>
      </PostList>
    </BlogContainer>
  )
}
