import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Link = styled(NavLink)`
  text-decoration: none;
`

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
  text-decoration: none;

  h3,
  p,
  span {
    line-height: 160%;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`
