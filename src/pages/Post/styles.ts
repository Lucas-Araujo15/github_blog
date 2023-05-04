import styled from 'styled-components'

export const PostContainer = styled.main`
  width: 100%;
  max-width: 54rem;
  margin: auto auto 14.625rem auto;
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
  color: ${(props) => props.theme['base-text']};
  line-height: 160%;

  a {
    color: ${(props) => props.theme.blue};
  }

  img {
    margin: 1rem auto;
    border-radius: 10px;
    width: 100%;
  }

  h1,
  h2 {
    margin: 2rem auto;
  }

  h3,
  h4,
  h5,
  h6 {
    margin: 1.5rem auto;
  }

  p {
    margin: 0.9rem auto;
    font-weight: 400;
    font-size: 1rem;
  }

  ul,
  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style-position: inside;
  }
`
