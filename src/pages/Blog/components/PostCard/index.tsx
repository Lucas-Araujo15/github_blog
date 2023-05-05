import { Link, PostCardContainer, PostCardHeader } from './styles'

interface PostCardProps {
  title: string
  createdAt: string
  body: string
  number: number
}

export function PostCard({ title, body, createdAt, number }: PostCardProps) {
  return (
    <Link to={`/post/${number}`}>
      <PostCardContainer>
        <PostCardHeader>
          <h3>{title}</h3>
          <span>Há 1 dia</span>
        </PostCardHeader>
        <p>{body.replace(/[^a-zA-ZÀ-ú\d\s]/g, '')}</p>
      </PostCardContainer>
    </Link>
  )
}
