import styled from "@emotion/styled"
import {css} from "@emotion/core"

export const Container = styled.div`
  height: ${props => props.size};
  z-index: ${props => props.zIndex};
  position: relative;
`

export const FixedContainer = styled.div`
  height: ${props => props.size};
  position: fixed;
  top: 0;
  width: 100%;
`