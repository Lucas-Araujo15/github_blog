import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, PostList } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <PostList>
        <div>
          <div>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </div>
          <SearchForm />
        </div>
      </PostList>
    </BlogContainer>
  )
}
