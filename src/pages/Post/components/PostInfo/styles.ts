import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: relative;
  z-index: 1;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  margin-top: -88px;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
    font-size: 1.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  > div > div {
    display: flex;
    gap: 2rem;
  }
`

export const Links = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    font-size: 0.75rem;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
  }
`
