import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 296px;
  background: ${(props) => props.theme['base-profile']};
  display: flex;
  justify-content: space-between;
  align-items: center;

  img:nth-child(2) {
    margin-bottom: 2.1875rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 891px;
    height: 70px;
    left: calc(50% - 891px / 2 - 2.5px);
    top: 235px;

    background: #14589c;
    filter: blur(106px);
  }
`
