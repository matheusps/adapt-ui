import styled from 'styled-components'

interface Props extends NativeInputType {
  type?:
    | 'text'
    | 'email'
    | 'url'
    | 'search'
    | 'tel'
    | 'password'
    | 'number'
    | 'date'
    | 'color'
    | 'file'
}

const Input = styled.input<Props>`
  width: 100%;
  margin: 0.5rem 0 0.5rem 0;
  padding: 0.8rem 1rem 0.8rem 1rem;
  border: none;
  :focus {
    outline: none;
  }
`

export default Input
