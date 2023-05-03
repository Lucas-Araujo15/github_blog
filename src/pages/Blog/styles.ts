import styled from 'styled-components'

export const BlogContainer = styled.main`
  width: 100%;
  max-width: 60rem;
  height: 900px;
  margin: auto;
`

export const PostList = styled.section`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  & > div:nth-child(1) > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: 700;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      font-weight: 400;
    }
  }
`
