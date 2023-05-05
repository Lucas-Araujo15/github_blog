import {
  ArrowLineLeft,
  ArrowSquareUpRight,
  CalendarBlank,
  ChatCenteredDots,
  GithubLogo,
} from 'phosphor-react'
import { InfoContainer, Links, PostInfoContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <Links>
        <NavLink to={'/'}>
          <ArrowLineLeft size={20} />
          voltar
        </NavLink>
        <a href="">
          ver no github
          <ArrowSquareUpRight size={20} />
        </a>
      </Links>
      <div>
        <h1>JavaScript data types and data structures</h1>
        <div>
          <InfoContainer>
            <GithubLogo weight="fill" />
            <span>senninha1991</span>
          </InfoContainer>
          <InfoContainer>
            <CalendarBlank weight="fill" />
            <span>Há 1 dia</span>
          </InfoContainer>
          <InfoContainer>
            <ChatCenteredDots weight="fill" />
            <span>5 comentários</span>
          </InfoContainer>
        </div>
      </div>
    </PostInfoContainer>
  )
}
