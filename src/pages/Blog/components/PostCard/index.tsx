import { useNavigate } from 'react-router-dom'
import { PostCardContainer, PostCardHeader } from './styles'

export function PostCard() {
  const navigate = useNavigate()

  return (
    <PostCardContainer onClick={() => navigate('/post')}>
      <PostCardHeader>
        <h3>JavaScript data types and data structures</h3>
        <span>Há 1 dia</span>
      </PostCardHeader>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </PostCardContainer>
  )
}
