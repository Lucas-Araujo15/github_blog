import {
  ArrowLineLeft,
  ArrowSquareUpRight,
  CalendarBlank,
  ChatCenteredDots,
  GithubLogo,
} from 'phosphor-react'
import { Links, PostInfoContainer } from './styles'
import { Info } from '../../../../components/Info'

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
          <Info text="senninha1991" icon={<GithubLogo weight="fill" />} />
          <Info text="Há 1 dia" icon={<CalendarBlank weight="fill" />} />
          <Info
            text="5 comentários"
            icon={<ChatCenteredDots weight="fill" />}
          />
        </div>
      </div>
    </PostInfoContainer>
  )
}
