// import styled, {css} from "styled-components"
import styled from "react-emotion"
import {css} from "emotion"


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
    ${props => props.stretchChild && css`
        & > * {
            width: 100%;
        }
    `}
`