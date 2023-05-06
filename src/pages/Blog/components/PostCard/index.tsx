import dayjs from 'dayjs'
import { Link, PostCardContainer, PostCardHeader } from './styles'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

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
          <span>{dayjs(createdAt).fromNow()}</span>
        </PostCardHeader>
        <p>{body.replace(/[^a-zA-ZÀ-ú\d\s]/g, '')}</p>
      </PostCardContainer>
    </Link>
  )
}
