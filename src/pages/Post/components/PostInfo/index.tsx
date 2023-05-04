import {
  ArrowLineLeft,
  ArrowSquareUpRight,
  CalendarBlank,
  ChatCenteredDots,
  GithubLogo,
} from 'phosphor-react'
import { InfoContainer, Links, PostInfoContainer } from './styles'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <Links>
        <a href="/">
          <ArrowLineLeft size={20} />
          voltar
        </a>
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
