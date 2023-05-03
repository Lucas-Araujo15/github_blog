import { ProfileContainer, ProfileContent } from './styles'
import avatar from '../../../../assets/senna.jpg'
import { Info } from '../../../../components/Info'
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
          <Info text="senninha1991" icon={<GithubLogo weight="fill" />} />
          <Info text="Formula 1" icon={<Buildings weight="fill" />} />
          <Info text="41 seguidores" icon={<UsersThree weight="fill" />} />
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}
