import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;

  input {
    width: 100%;
    height: 3.125rem;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-text']};

    &:focus {
      box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    outline: none;
  }
`
