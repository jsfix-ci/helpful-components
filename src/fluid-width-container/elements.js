import styled from "@emotion/styled"
import {css} from "@emotion/core"

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  padding-left: ${props => props.padding}em;
  padding-right: ${props => props.padding}em;
  ${props => props.align && css`
    display: flex;
    justify-content: center;
  `}
  ${props => props.stretch && css`
    & > * {
        width: 100%;
    }
  `}
`