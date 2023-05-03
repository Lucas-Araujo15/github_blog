import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    width: 236px;
    height: 236px;
    left: -130px;
    top: -96px;

    background: #14589c;
    filter: blur(200px);
  }

  &::after {
    content: '';
    position: absolute;
    width: 155.25px;
    height: 155.25px;
    right: -15.43px;
    top: -52.14px;

    background: #14589c;
    filter: blur(184px);
    transform: rotate(15deg);
  }
`
