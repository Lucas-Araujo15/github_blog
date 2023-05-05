import { Link, PostCardContainer, PostCardHeader } from './styles'

interface PostCardProps {
  title: string
  createdAt: string
  body: string
}

export function PostCard({ title, body, createdAt }: PostCardProps) {
  return (
    <Link to="/post">
      <PostCardContainer>
        <PostCardHeader>
          <h3>{title}</h3>
          <span>Há 1 dia</span>
        </PostCardHeader>
        <p>{body}</p>
      </PostCardContainer>
    </Link>
  )
}
