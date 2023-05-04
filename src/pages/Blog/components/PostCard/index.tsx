import { useNavigate } from 'react-router-dom'
import { PostCardContainer, PostCardHeader } from './styles'

interface PostCardProps {
  title: string
  createdAt: string
  body: string
}

export function PostCard({ title, body, createdAt }: PostCardProps) {
  const navigate = useNavigate()

  return (
    <PostCardContainer onClick={() => navigate('/post')}>
      <PostCardHeader>
        <h3>{title}</h3>
        <span>Há 1 dia</span>
      </PostCardHeader>
      <p>{body}</p>
    </PostCardContainer>
  )
}
