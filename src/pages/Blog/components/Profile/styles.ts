import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  height: 13.25rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -88px;
  position: relative;
  z-index: 1;
  display: flex;
  gap: 2rem;

  img {
    height: 100%;
    width: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }
`
export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
    font-size: 1.5rem;
  }

  p {
    line-height: 160%;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }

  > p {
    max-lines: 2;
    height: 3.25rem;
    overflow: hidden;
  }

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
  }

  & > div:nth-child(1) a {
    display: flex;
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
  }

  & > div:nth-child(3) {
    display: flex;
    gap: 1.5rem;
  }
`
