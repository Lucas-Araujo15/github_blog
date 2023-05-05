import {
  ArrowLineLeft,
  ArrowSquareUpRight,
  CalendarBlank,
  ChatCenteredDots,
  GithubLogo,
} from 'phosphor-react'
import { InfoContainer, Links, PostInfoContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'

interface PostInfoProps {
  title: string | undefined
  comments: number | undefined
  htmlUrl: string | undefined
}

export function PostInfo({ comments, title, htmlUrl }: PostInfoProps) {
  const { user } = useContext(BlogContext)

  return (
    <PostInfoContainer>
      <Links>
        <NavLink to={'/'}>
          <ArrowLineLeft size={20} />
          voltar
        </NavLink>
        <a href={htmlUrl}>
          ver no github
          <ArrowSquareUpRight size={20} />
        </a>
      </Links>
      <div>
        <h1>{title}</h1>
        <div>
          <InfoContainer>
            <GithubLogo weight="fill" />
            <span>{user?.login}</span>
          </InfoContainer>
          <InfoContainer>
            <CalendarBlank weight="fill" />
            <span>Há 1 dia</span>
          </InfoContainer>
          <InfoContainer>
            <ChatCenteredDots weight="fill" />
            <span>{comments} comentários</span>
          </InfoContainer>
        </div>
      </div>
    </PostInfoContainer>
  )
}
