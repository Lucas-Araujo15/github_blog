import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-label']};
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
