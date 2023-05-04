import { InfoContainer, ProfileContainer, ProfileContent } from './styles'
import avatar from '../../../../assets/senna.jpg'
import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  UsersThree,
} from 'phosphor-react'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={avatar} alt="" />
      <ProfileContent>
        <div>
          <h1>Ayrton Senna</h1>
          <a href="">
            github
            <ArrowSquareUpRight size={20} />
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          officiis ad voluptatibus dicta ut iure, maiores quibusdam odio nostrum
          tempora expedita aliquam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Veritatis officiis ad voluptatibus dicta ut iure,
          maiores quibusdam odio nostrum tempora expedita aliquam
        </p>

        <div>
          <InfoContainer>
            <GithubLogo weight="fill" />
            <span>senninha1991</span>
          </InfoContainer>
          <InfoContainer>
            <Buildings weight="fill" />
            <span>Formula 1</span>
          </InfoContainer>
          <InfoContainer>
            <UsersThree weight="fill" />
            <span>41 seguidores</span>
          </InfoContainer>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}
