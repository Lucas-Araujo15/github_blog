import styled from 'styled-components'

export const PostCardContainer = styled.article`
  width: 100%;
  max-width: 26rem;
  height: 16.25rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border: 2px solid transparent;
  transition: border 0.3s;
  cursor: pointer;

  h3,
  p,
  span {
    line-height: 160%;
  }
  p {
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    transition: border 0.3s;
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const PostCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h3 {
    max-width: 17.6875rem;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`
