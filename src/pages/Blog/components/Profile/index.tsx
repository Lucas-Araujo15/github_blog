import { InfoContainer, ProfileContainer, ProfileContent } from './styles'
import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  UsersThree,
} from 'phosphor-react'
import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'

export function Profile() {
  const { user } = useContext(BlogContext)

  return (
    <ProfileContainer>
      <img src={user?.avatar_url} alt="" />
      <ProfileContent>
        <div>
          <h1>{user?.name}</h1>
          <a href={user?.html_url}>
            github
            <ArrowSquareUpRight size={20} />
          </a>
        </div>
        <p>{user?.bio}</p>
        <div>
          <InfoContainer>
            <GithubLogo weight="fill" />
            <span>{user?.login}</span>
          </InfoContainer>
          <InfoContainer>
            <Buildings weight="fill" />
            <span>{user?.company}</span>
          </InfoContainer>
          <InfoContainer>
            <UsersThree weight="fill" />
            <span>{user?.followers} seguidores</span>
          </InfoContainer>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}
