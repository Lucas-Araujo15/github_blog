import { ReactNode } from 'react'
import { InfoContainer } from './styles'

interface InfoProps {
  icon: ReactNode
  text: string
}

export function Info({ text, icon }: InfoProps) {
  return (
    <InfoContainer>
      {icon}
      <p>{text}</p>
    </InfoContainer>
  )
}
